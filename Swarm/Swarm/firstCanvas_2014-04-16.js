

$(document).ready(function () {

	var FILL_COLOR = "black";
	var canvasWidth, canvasHeight;
	var canvas = document.getElementById ("canvasFirst");
	var ctx = canvas.getContext ("2d");
	var xVel = 1;
	var xP = 10;
	var yP = 120;
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
	canvas.style.backgroundColor = "rgb(0,0,0)";
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	function rgbValuesToString (redColour, greenColour, blueColour)
	{
		var rgbValueString = "";

		rgbValuesString = "rgb(" + redColour + "," + greenColour + "," + blueColour + ")";
		console.log("rgbValuesString: " + rgbValuesString );
		return rgbValueString;
	}
	
	function drawLine (xPosStart, yPosStart, length, isHorizontal, thickness)
	{
		if (isHorizontal)
		{
			var gradient = ctx.createLinearGradient(0, 0, length, thickness);
		}
		else
		{
			var gradient = ctx.createLinearGradient(0, 0, thickness, length);
		}
		gradient.addColorStop(0.00, "rgb(0, 0, 0)");
		gradient.addColorStop(0.45, "rgb(0, 255, 0)");
		gradient.addColorStop(0.55, "rgb(0, 255, 0)");
		gradient.addColorStop(1.00, "rgb(0, 0, 0)");
		
		ctx.strokeStyle = gradient;
		ctx.beginPath();
		ctx.moveTo(xPosStart, yPosStart);
		if (isHorizontal)
		{
			ctx.lineTo(xPosStart + length, yPosStart);
		}
		else
		{
			ctx.lineTo(xPosStart, yPosStart + length);
		}
	}
	
	function drawAlienOne (xPos, yPos, xMult, yMult)
	{
		ctx.beginPath();

		ctx.moveTo(xPos + 0, yPos + 4);
		ctx.lineTo(xPos + 2, yPos + 4);
		ctx.lineTo(xPos + 2, yPos + 2);
		ctx.lineTo(xPos + 8, yPos + 2);
		ctx.lineTo(xPos + 8, yPos + 0);
		ctx.lineTo(xPos + 16, yPos + 0);
		ctx.lineTo(xPos + 16, yPos + 2);
		ctx.lineTo(xPos + 22, yPos + 2);
		ctx.lineTo(xPos + 24, yPos + 4);
		ctx.lineTo(xPos + 24, yPos + 10);
		ctx.lineTo(xPos + 18, yPos + 10);
		ctx.lineTo(xPos + 18, yPos + 12);
		ctx.lineTo(xPos + 20, yPos + 12);
		ctx.lineTo(xPos + 20, yPos + 14);
		ctx.lineTo(xPos + 24, yPos + 14);
		ctx.lineTo(xPos + 24, yPos + 16);
		ctx.lineTo(xPos + 20, yPos + 16);
		ctx.lineTo(xPos + 20, yPos + 14);
		ctx.lineTo(xPos + 16, yPos + 14);
		ctx.lineTo(xPos + 16, yPos + 12);
		ctx.lineTo(xPos + 14, yPos + 12);
		ctx.lineTo(xPos + 14, yPos + 14);
		ctx.lineTo(xPos + 10, yPos + 14);
		ctx.lineTo(xPos + 10, yPos + 12);
		ctx.lineTo(xPos + 8, yPos + 12);
		ctx.lineTo(xPos + 8, yPos + 14);
		ctx.lineTo(xPos + 4, yPos + 14);
		ctx.lineTo(xPos + 4, yPos + 16);
		ctx.lineTo(xPos + 0, yPos + 16);
		ctx.lineTo(xPos + 0, yPos + 14);
		ctx.lineTo(xPos + 4, yPos + 14);
		ctx.lineTo(xPos + 4, yPos + 12);
		ctx.lineTo(xPos + 6, yPos + 10);
		ctx.lineTo(xPos + 0, yPos + 10);
		ctx.lineTo(xPos + 0, yPos + 4);

		ctx.moveTo(xPos + 6, yPos + 6);
		ctx.lineTo(xPos + 10, yPos + 6);
		ctx.lineTo(xPos + 10, yPos + 8);
		ctx.lineTo(xPos + 6, yPos + 8);
		ctx.lineTo(xPos + 6, yPos + 6);

		ctx.moveTo(xPos + 14, yPos + 6);
		ctx.lineTo(xPos + 18, yPos + 6);
		ctx.lineTo(xPos + 18, yPos + 8);
		ctx.lineTo(xPos + 14, yPos + 8);
		ctx.lineTo(xPos + 14, yPos + 6);

		ctx.moveTo(xPos + 10, yPos + 12);
		ctx.lineTo(xPos + 10, yPos + 10);
		ctx.lineTo(xPos + 14, yPos + 10);
		ctx.lineTo(xPos + 14, yPos + 12);
		
		ctx.stroke();
	}
	//ctx.fillStyle = gradient;
	//ctx.shadowBlur = 50;
	//ctx.shadowColor = "rgb(255, 0, 0)";
	
	function draw()
	{
		ctx.clearRect (0, 0, canvasWidth, canvasHeight);
		ctx.strokeStyle = gradient;
		
		ctx.save();
		ctx.translate (xP, yP);
		ctx.save();
		ctx.scale(2, 2);
		drawAlienOne (0, 0);
		ctx.restore();
		ctx.restore();
		
		xP += xVel;
		
		if ((xP <= 10) || (xP >= (canvasWidth - 100)))
		{
			xVel = -xVel;
		}

	}
	
	setInterval (function() {draw();}, 16);
});
