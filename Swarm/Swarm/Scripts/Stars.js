var numStars = undefined;


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
	drawQueue[lengthDrawQueue++] = self;
};

// Star BackGround
numStars = 100;
var dObjStars = Object.create(StarObjectClass);
dObjStars.init(starVector, glowWhite01, highPurple /*glowWhite01, highWhite01*/, 1);
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
	objectsList.push(aStar);
}

numStars = 60;
var dObjStarsTwo = Object.create(StarObjectClass);
dObjStarsTwo.init(starVector, glowWhite02, highBlue/*glowWhite02, highWhite02*/, 1);
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
	objectsList.push(aStar);
}

numStars = 40;
var dObjStarsThree = Object.create(StarObjectClass);
dObjStarsThree.init(starVector, glowWhite03, highGreen/*glowWhite03, highWhite03*/, 1);
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
	objectsList.push(aStar);
}

numStars = 20;
var dObjStarsFour = Object.create(StarObjectClass);
dObjStarsFour.init(starVector, glowWhite04, highCyan/*glowWhite04, highWhite04*/, 1);
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
	objectsList.push(aStar);
}

