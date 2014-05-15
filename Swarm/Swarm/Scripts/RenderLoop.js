$(document).ready(function ()
{

	canvas = document.getElementById("canvasFirst");
	ctx = canvas.getContext("2d");
	var FILL_COLOR = "black";
	var yVel = 0.10;
	var xVel = 1;
	var xP = 10;
	var yP = 10;
	var rotP = 0.00;		// current rotation multiplier, to be multiplied by PI to get radians
	var rotSpeed = 0.01;
	var frameCount = 0;
	var frameBeat = true;
	var glowColour = new Object();
	glowColour.r = 0;
	glowColour.g = 0;
	glowColour.b = 0;
	var highlightColour = new Object();
	highlightColour.r = 0;
	highlightColour.g = 0;
	highlightColour.b = 0;
	canvas.style.left = ((windowWidth * 0.5) - (canvasWidth * 0.5)) + "px";
	canvas.style.backgroundColor = "rgb(0,0,0)";

	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	canvasBack = document.createElement("canvas");
	canvasBack.width = canvasWidth;
	canvasBack.height = canvasHeight;
	canvasBack.style.backgroundColor = "rgb(0,0,0)";
	canvasBack.style.visibility = "hidden";
	canvasBackWidth = canvasBack.width;
	canvasBackHeight = canvasBack.height;
	ctxBack = canvasBack.getContext("2d");

	var dispY = 0;

	var colourQueue = new Array();
	var lengthColourQueue = 0;
	var colourList = new Array();
	var lengthsColourList = new Array();
	lengthsColourList[0] = 0;
	var colourIndexLast;
	//var pastFramesQueue = new Array();
	//var pastFramesList = new Array(new Array());
	//var pastFramesList = [[], []];
	var j;
	var frames = 0;
	var timeStart;
	function draw()
	{
		//ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx.fillStyle = "rgba(0,0,0,0.3)";
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);
		setDelta();

		strokesNum = 0;
		for (var i = 0; i < objectsList.length; ++i)
		{
			objectsList[i].update();
		}

		drawQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
		colourIndexLast = Number(drawQueue[0].glow.index);
		/*for (var k = 0; k < objectsList[0].pastFramesMax; ++k)
		{
			pastFramesList.push(new Array());
		}*/
		for (var i = 0; i < drawQueue.length; ++i)
		{
			if (colourIndexLast == Number(drawQueue[i].glow.index))
			{
				colourList[lengthsColourList[lengthColourQueue]] = drawQueue[i];
				lengthsColourList[lengthColourQueue]++;
				//colourList.push(drawQueue[i]);
				/*for (var k = 0; k < drawQueue[i].pastFrames.length; ++k)
				{
					//console.log("drawQueue[i].pastFrames.length: " + drawQueue[i].pastFrames.length + " k: " + k);
					if (!pastFramesList[k])
					{
						pastFramesList[k] = new Array();
					}
					pastFramesList[k][i] = drawQueue[i].pastFrames[k];
				}*/
			}
			else
			{
				colourQueue[lengthColourQueue] = colourList;
				lengthColourQueue++;
				//colourQueue.push(colourList);
				//pastFramesQueue.push(pastFramesList);
				colourList = new Array();
				lengthsColourList[lengthColourQueue] = 0;
				colourList[lengthsColourList[lengthColourQueue]] = drawQueue[i];
				lengthsColourList[lengthColourQueue]++;
				//colourList.push(drawQueue[i]);
				//pastFramesList = new Array();
				/*for (var k = 0; k < drawQueue[i].pastFrames.length; ++k)
				{
					//pastFramesList.push(new Array());
					if (!pastFramesList[k])
					{
						pastFramesList[k] = new Array();
					}
					pastFramesList[k][i] = drawQueue[i].pastFrames[k];
				}*/
				colourIndexLast = Number(drawQueue[i].glow.index);
			}
		}
		colourQueue[lengthColourQueue] = colourList;
		lengthColourQueue++;
		//colourQueue.push(colourList);
		//pastFramesQueue.push(pastFramesList);
		//console.log("colourQueue.length: " + colourQueue.length + " pastFramesQueue.length: " + pastFramesQueue.length);
		//timeStart = Date.now();
		/*for (var i = 0; i < pastFramesQueue.length; ++i)
		{
			drawPastFrames(pastFramesQueue[i], colourQueue[i][0].glow);
		}*/
		//console.log("past frames time: " + (Date.now() - timeStart));
		//timeStart = Date.now();
		for (var i = 0; i < colourQueue.length; ++i)
		{
			drawObjects(colourQueue[i]);
		}
		//console.log("drawObjects time: " + (Date.now() - timeStart));

		/*j = colourQueue.length - 1;
		while (colourQueue.length != 0)
		{
			while (colourQueue[j].length != 0)
			{
				colourQueue[j].pop();
			}
			colourQueue.pop();
			--j;
		}
		while (drawQueue.length != 0)
		{
			drawQueue.pop();
		}*/

		/*console.log("lengthColourQueue: " + lengthColourQueue + " lengthsColourList.length: " + lengthsColourList.length);
		for (var i = 0; i < lengthsColourList.length; ++i)
		{
			console.log("lengthsColourList[" + i + "]: " + lengthsColourList[i]);
		}*/

		lengthColourQueue = 0;
		for (var i = 0; i < lengthsColourList.length; ++i)
		{
			lengthsColourList[i] = 0;
		}
		lengthDrawQueue = 0;

		/*console.log("lengthColourQueue: " + lengthColourQueue + " lengthsColourList.length: " + lengthsColourList.length);
		for (var i = 0; i < lengthsColourList.length; ++i)
		{
			console.log("lengthsColourList[" + i + "]: " + lengthsColourList[i]);
		}*/

		/*j = pastFramesQueue.length - 1;
		while (pastFramesQueue.length != 0)
		{
			while (pastFramesQueue[j].length != 0)
			{
				pastFramesQueue[j].pop();
			}
			//console.log("pastFramesQueue[" + j + "].length: " + pastFramesQueue[j].length);
			pastFramesQueue.pop();
			--j;
		}*/
		//console.log("pastFramesQueue.length: " + pastFramesQueue.length);

		//console.log("strokesNum: " + strokesNum);
		// number of strokes was: 3520
		// current strokes: 44 (without glow trails)

		for (var i = collidingStart; i < objectsList.length - 1; ++i)
		{
			for (var j = (i + 1) ; j < objectsList.length; ++j)
			{
				//console.log("i: " + i + " j: " + j);
				polyToPolyCollision(objectsList[i], objectsList[j]);
			}
		}

		/*++frames;
		if (frames > 3)
		{
			clearInterval(intervalID);
			console.log("objectsList.length: " + objectsList.length);
		}*/
	}

	timeThen = Date.now();
	setDelta();
	for (var i = 0; i < objectsList.length; ++i)
	{
		objectsList[i].start();
	}

	intervalID = setInterval(function () { draw(); }, FRAME_INTERVAL);
	//draw();
});
