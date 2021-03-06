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
    aStar.tag = "Star One " + i;
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
    aStar.tag = "Star Two " + i;
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
    aStar.tag = "Star Three " + i;
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
    aStar.tag = "Star Four " + i;
    this.starList.push(aStar);
}

var starsColourQueue = new Array();
var starsLengthColourQueue = 0;
var starsColourList = new Array();
var starsLengthsColourList = new Array();
starsLengthsColourList[0] = 0;

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
			starsColourList[starsLengthsColourList[starsLengthColourQueue]] = drawStarQueue[i];
			starsLengthsColourList[starsLengthColourQueue]++;
		}
		else
		{
			starsColourQueue[starsLengthColourQueue] = starsColourList;
			starsLengthColourQueue++;
			starsColourList = new Array();
			starsLengthsColourList[starsLengthColourQueue] = 0;
			starsColourList[starsLengthsColourList[starsLengthColourQueue]] = drawStarQueue[i];
			starsLengthsColourList[starsLengthColourQueue]++;
			colourIndexLast = Number(drawStarQueue[i].glow.index);
		}
	}
	starsColourQueue[starsLengthColourQueue] = starsColourList;
	starsLengthColourQueue++;

	for (var i = 0; i < starsColourQueue.length; ++i)
	{
		drawObjects(starsColourQueue[i]);
	}

	starsLengthColourQueue = 0;
	for (var i = 0; i < starsLengthsColourList.length; ++i)
	{
		starsLengthsColourList[i] = 0;
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