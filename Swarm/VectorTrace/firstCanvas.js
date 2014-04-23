

function clamp (x, min, max)
{
	return x < min ? min : (x > max ? max : x);
}

$(document).ready(function () {
	var gridSpacing = 10;
	var scaleCurrent = 1;
	var resizeWithGrid = false;
	var offsetHorizontal = 0;
	var offsetVertical = 0;
	var nudgeHorizontal = 0;
	var nudgeVertical = 0;
	var canvasWidth, canvasHeight, canvasBoundingBox;
	var canvas = document.getElementById ("canvasFirst");
	var ctx = canvas.getContext ("2d");
	var gridXPos, gridYPos;
	var vectorList = new Array ();
	var colourLineDraw = new Array ();
	var colourLineCurrent = 0;
	var doSetOrigin = false;
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
	canvasBoundingBox = canvas.getBoundingClientRect ();
	ctx.imageSmoothingEnabled = false;
	ctx.webkitImageSmoothingEnabled = false;
	ctx.mozImageSmoothingEnabled = false;
	
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	
	colourLineDraw.push("green");
	colourLineDraw.push("YellowGreen");
	colourLineDraw.push("SpringGreen");
	colourLineDraw.push("PaleGreen");
	colourLineDraw.push("SeaGreen");
	colourLineDraw.push("DarkGreen");

	var image = new Image();
	
	function getRelativeMousePosition(mousePosition, relativeTo) {
		var relativePosition;

		relativePosition = mousePosition - relativeTo;
		if (relativePosition < 0) {
			relativePosition = 0;
		}
		return relativePosition;
	}

	$(document).mousemove(function(ev)
	{
		gridXPos = (((getRelativeMousePosition (ev.pageX, canvasBoundingBox.left) + (gridSpacing / 2)) / gridSpacing) | 0) * gridSpacing;
		gridYPos = (((getRelativeMousePosition (ev.pageY, canvasBoundingBox.top) + (gridSpacing / 2)) / gridSpacing) | 0) * gridSpacing;
		
		gridXPos = clamp(gridXPos, 0, ((canvasBoundingBox.width / gridSpacing) | 0) * gridSpacing);
		gridYPos = clamp(gridYPos, 0, ((canvasBoundingBox.height / gridSpacing) | 0) * gridSpacing);
	});

	$("#canvasFirst").click(function(ev)
	{
		var vector = [gridXPos / gridSpacing, gridYPos / gridSpacing];
		vectorList.push (vector);

		$("#vectorDisplayList").val("");
		var text;
		for (var i = 0; i < vectorList.length; ++i)
		{
			textNew = "[" + vectorList[i][0] + ", " + vectorList[i][1] + "], ";
			$("#vectorDisplayList").val(function(i, text)
			{
				return text + textNew;
			});
		}
	});

	function drawVector ()
	{
		if (vectorList.length > 1)
		{
			ctx.save ()
			ctx.strokeStyle = colourLineDraw[colourLineCurrent];
			ctx.lineWidth = 3;
			ctx.beginPath ();
			ctx.moveTo (vectorList[0][0] * gridSpacing, vectorList[0][1] * gridSpacing);
			for (var i = 1; i < vectorList.length; ++i)
			{
				ctx.lineTo (vectorList[i][0] * gridSpacing, vectorList[i][1] * gridSpacing);
			}
			ctx.stroke ();
			ctx.restore ();
			
			++colourLineCurrent;
			if (colourLineCurrent == colourLineDraw.length)
			{
				colourLineCurrent = 0;
			}
		}
	}
	
	function drawGridLines ()
	{
		var linesVertical = Math.floor (canvasWidth / gridSpacing);
		var lineHorizontal = Math.floor (canvasHeight / gridSpacing);
		
		ctx.strokeStyle = "yellow";
		for (var i = 0; i <= linesVertical; ++i)
		{
			ctx.beginPath ();
			ctx.moveTo (i * gridSpacing, 0);
			ctx.lineTo (i * gridSpacing, canvasHeight);
			ctx.stroke ();
		}
		for (var i = 0; i <= lineHorizontal; ++i)
		{
			ctx.beginPath ();
			ctx.moveTo (0, i * gridSpacing);
			ctx.lineTo (canvasWidth, i * gridSpacing);
			ctx.stroke ();
		}
	}
	
	function drawGridDot ()
	{
		ctx.save ();
		ctx.strokeStyle = doSetOrigin ? "red" : "white";
		ctx.lineWidth = 2;
		ctx.beginPath ();
		ctx.arc (gridXPos, gridYPos, 5, 0, Math.PI * 2);
		ctx.stroke ();
		ctx.restore ();
		
		$("#labelVector").html("[" + gridXPos / gridSpacing + ", " + gridYPos / gridSpacing + "]");
	}
	
	function redrawImage ()
	{
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		ctx.save();
		ctx.translate (nudgeHorizontal, -nudgeVertical);
		if (resizeWithGrid)
		{
			ctx.scale(gridSpacing, gridSpacing);
		}
		else
		{
			ctx.scale(scaleCurrent, scaleCurrent);
		}
		ctx.translate (offsetHorizontal, -offsetVertical);
		ctx.drawImage(image, 0, 0);
		ctx.restore();
	}
	
	function onResizeBitmapChange()
	{
		/*var bla = $("#resizeBitmap").val();
		if (bla == 0.00)
		{
			return;
		}*/
		scaleCurrent = $("#resizeBitmap").val();
		
		//redrawImage();
		//drawGridLines();
	}
	
	function onResizeGrid()
	{
		var bla = $("#resizeGrid").val();
		gridSpacing = bla;
		
		//console.log("gridSpacing: " + gridSpacing);
		
		//redrawImage();
		//drawGridLines();
	}
		
	function onResizeWithGrid()
	{
		resizeWithGrid = $("#resizeWithGrid").val();
	}
		
	function onMoveBitmapHorizontalChange()
	{
		offsetHorizontal = $("#moveBitmapHorizontal").val();
	}
	
	function onMoveBitmapVerticalChange()
	{
		offsetVertical = $("#moveBitmapVertical").val();
	}
	
	function onNudgeBitmapHorizontalChange()
	{
		nudgeHorizontal = $("#nudgeBitmapHorizontal").val();
	}
	
	function onNudgeBitmapVerticalChange()
	{
		nudgeVertical = $("#nudgeBitmapVertical").val();
	}
	
	function onSetOriginClick()
	{
		doSetOrigin = true;
	}
	
	//image.src = "evilMario.jpg";
	image.src = "SpaceInvadersSpriteSheet.png";
	$(image).load(function() {
		ctx.drawImage(image, 0, 0);
		drawGridLines ();
		
		$("#resizeBitmap").change(onResizeBitmapChange);
		$("#resizeGrid").change(onResizeGrid);
		$("#resizeWithGrid").change(onResizeWithGrid);
		$("#moveBitmapHorizontal").change(onMoveBitmapHorizontalChange);
		$("#moveBitmapVertical").change(onMoveBitmapVerticalChange);
		//$("#nudgeBitmapHorizontal").change(onNudgeBitmapHorizontalChange);
		//$("#nudgeBitmapVertical").change(onNudgeBitmapVerticalChange);
		$("#setOrigin").click(onSetOriginClick);
		
		setInterval (function() {update();}, 100);
	});
	
	function update ()
	{
		redrawImage ();
		drawGridLines ();
		drawGridDot ();
		drawVector ();
	}


});
