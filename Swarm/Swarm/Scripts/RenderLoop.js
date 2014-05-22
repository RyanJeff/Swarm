
/*canvas = document.getElementById("canvasFirst");
ctx = canvas.getContext("2d");*/
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

//ctx.clearRect(0, 0, canvasWidth, canvasHeight);

canvasBack = document.createElement("canvas");
canvasBack.width = canvasWidth;
canvasBack.height = canvasHeight;
canvasBack.style.backgroundColor = "rgb(0,0,0)";
canvasBack.style.visibility = "hidden";
canvasBackWidth = canvasBack.width;
canvasBackHeight = canvasBack.height;
ctxBack = canvasBack.getContext("2d");

var dispY = 0;

var colourQueue = new Array(new Array());
var lengthColourQueue = 0;
var colourList = new Array();
var lengthsColourList = new Array();
lengthsColourList[0] = 0;
var colourIndexLast;
var j;
var frames = 0;
var timeStart;
var lifeGone = false;

function draw()
{
	//ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	//ctx.fillStyle = "rgba(0,0,0,0.3)";
	//ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	//setDelta();

	strokesNum = 0;
	for (var i = 0; i < objectsList.length; ++i)
	{
		objectsList[i].update();
	}

	drawQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
	colourIndexLast = Number(drawQueue[0].glow.index);
	for (var i = 0; i < drawQueue.length; ++i)
	{
		if (colourIndexLast == Number(drawQueue[i].glow.index))
		{
			colourList[lengthsColourList[lengthColourQueue]] = drawQueue[i];
			lengthsColourList[lengthColourQueue]++;
		}
		else
		{
			colourQueue[lengthColourQueue] = colourList;
			lengthColourQueue++;
			colourList = new Array();
			lengthsColourList[lengthColourQueue] = 0;
			colourList[lengthsColourList[lengthColourQueue]] = drawQueue[i];
			lengthsColourList[lengthColourQueue]++;
			colourIndexLast = Number(drawQueue[i].glow.index);
		}
	}
	colourQueue[lengthColourQueue] = colourList;
	lengthColourQueue++;
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

	setScore(currentScore);
	if (currentLives < 0)
	{
		j = colourQueue.length - 1;
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
		}
		return false;
	}

	//++frames;
	//if (frames > 10)
	/*if (!(frames % 30))
	{
		if (lifeGone)
		{
			lifeAdd();
		}
		--currentLives;
		if (!lifeGone)
		{
			lifeRemove();
		}
		if (currentLives == 0)
		{
			lifeGone = true;
		}
		//clearInterval(intervalID);
		//console.log("objectsList.length: " + objectsList.length);
	}*/
	return true;
}


function setupGame ()
{
	timeThen = Date.now();
	setDelta();
	for (var i = 0; i < objectsList.length; ++i)
	{
		objectsList[i].start();
	}
}

function startGame()
{
	return draw();
	//intervalID = setInterval(function () { draw(); }, FRAME_INTERVAL);
}

