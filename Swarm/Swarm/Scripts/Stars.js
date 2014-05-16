var starList = new Array();
var drawStarQueue = new Array();
var lengthDrawStarQueue = 0;

var StarObjectClass = Object.create(DisplayObjectClass);
StarObjectClass.baseInit = StarObjectClass.init;

StarObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

StarObjectClass.start = function ()
{
    this.posX = Math.floor(Math.random() * canvasWidth);
    this.posY = Math.floor(Math.random() * canvasHeight);
    this.velX = 0;
    this.velY = 10;
    this.multX = 1;
    this.multY = 1;
};

StarObjectClass.update = function ()
{
    var distanceX = this.velX * timeDelta;
    var distanceY = this.velY * timeDelta;
    this.posX += distanceX;
    this.posY += distanceY;

    if (this.posY > canvasHeight)
    {
        this.posX = Math.floor(Math.random() * canvasWidth);
        this.posY = -5;
    }

    var self = this;
    drawStarQueue[lengthDrawStarQueue++] = self;
};

// Star BackGround
var numStars = 100;
var dObjStars = Object.create(StarObjectClass);
dObjStars.init(starVector, glowWhite01, highPurple, 1);
dObjStars.addFrame(starVector);
dObjStars.baseStart = dObjStars.start;
dObjStars.start = function ()
{
    this.baseStart();
    this.velY = 15;
    this.multX = 0.09375;
    this.multY = 0.09375;
};

for (var i = 0; i < numStars; ++i)
{
    var aStar = Object.create(dObjStars);
    this.starList.push(aStar);
}

numStars = 60;
var dObjStarsTwo = Object.create(StarObjectClass);
dObjStarsTwo.init(starVector, glowWhite02, highBlue, 1);
dObjStarsTwo.addFrame(starVector);
dObjStarsTwo.baseStart = dObjStarsTwo.start;
dObjStarsTwo.start = function ()
{
    this.baseStart();
    this.velY = 25;
    this.multX = 0.1875;
    this.multY = 0.1875;
};

for (var i = 0; i < numStars; ++i)
{
    var aStar = Object.create(dObjStarsTwo);
    this.starList.push(aStar);
}

numStars = 40;
var dObjStarsThree = Object.create(StarObjectClass);
dObjStarsThree.init(starVector, glowWhite03, highGreen, 1);
dObjStarsThree.addFrame(starVector);
dObjStarsThree.baseStart = dObjStarsThree.start;
dObjStarsThree.start = function ()
{
    this.baseStart();
    this.velY = 35;
    this.multX = 0.375;
    this.multY = 0.375;
};

for (var i = 0; i < numStars; ++i)
{
    var aStar = Object.create(dObjStarsThree);
    this.starList.push(aStar);
}

numStars = 20;
var dObjStarsFour = Object.create(StarObjectClass);
dObjStarsFour.init(starVector, glowWhite04, highCyan, 1);
dObjStarsFour.addFrame(starVector);
dObjStarsFour.baseStart = dObjStarsFour.start;
dObjStarsFour.start = function ()
{
    this.baseStart();
    this.velY = 45;
    this.multX = 0.75;
    this.multY = 0.75;
};

for (var i = 0; i < numStars; ++i)
{
    var aStar = Object.create(dObjStarsFour);
    this.starList.push(aStar);
}

function drawStars()
{
	ctx.fillStyle = "rgba(0,0,0,0.3)";
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	//setDelta();

	strokesNum = 0;
	for (var i = 0; i < this.starList.length; ++i)
	{
		this.starList[i].update();
	}

	drawStarQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
	colourIndexLast = Number(drawStarQueue[0].glow.index);
	for (var i = 0; i < drawStarQueue.length; ++i)
	{
		if (colourIndexLast == Number(drawStarQueue[i].glow.index))
		{
			colourList[lengthsColourList[lengthColourQueue]] = drawStarQueue[i];
			lengthsColourList[lengthColourQueue]++;
		}
		else
		{
			colourQueue[lengthColourQueue] = colourList;
			lengthColourQueue++;
			colourList = new Array();
			lengthsColourList[lengthColourQueue] = 0;
			colourList[lengthsColourList[lengthColourQueue]] = drawStarQueue[i];
			lengthsColourList[lengthColourQueue]++;
			colourIndexLast = Number(drawStarQueue[i].glow.index);
		}
	}
	colourQueue[lengthColourQueue] = colourList;
	lengthColourQueue++;

	for (var i = 0; i < colourQueue.length; ++i)
	{
		drawObjects(colourQueue[i]);
	}

	lengthColourQueue = 0;
	for (var i = 0; i < lengthsColourList.length; ++i)
	{
		lengthsColourList[i] = 0;
	}
	lengthDrawStarQueue = 0;
};

timeThen = Date.now();
setDelta();
for (var i = 0; i < this.starList.length; ++i)
{
	this.starList[i].start();
}

//intervalID = setInterval(function () { drawStars(); }, FRAME_INTERVAL);