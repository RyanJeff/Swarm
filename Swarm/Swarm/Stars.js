var numStars = 100;


// Star BackGround
var dObjStars = Object.create(DisplayObjectClass);
dObjStars.init(starVector, glowWhite01, highPurple /*glowWhite01, highWhite01*/, 1);

dObjStars.addFrame(starVector);

dObjStars.start = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 0;
	this.velY = 10;
	this.multX = 0.125;
	this.multY = 0.125;
	//console.log("posX: " + this.posX + " posY: " + this.posY);
};


dObjStars.update = function ()
{

	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;
	//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

	if (this.posY > canvasHeight)
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = -5;
	}

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 0.125, 0.125, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};

for (var i = 0; i < numStars; ++i)
{
	//objectsList.push($.extend(true, {}, dObjStars));
	var aStar = Object.create(dObjStars);
	objectsList.push(aStar);
}


var dObjStarsTwo = Object.create(DisplayObjectClass);
dObjStarsTwo.init(starVector, glowWhite02, highBlue/*glowWhite02, highWhite02*/, 1);

dObjStarsTwo.addFrame(starVector);

dObjStarsTwo.start = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 0;
	this.velY = 20;
	this.multX = 0.25;
	this.multY = 0.25;
	//console.log("posX: " + this.posX + " posY: " + this.posY);
};


dObjStarsTwo.update = function ()
{

	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;
	//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

	if (this.posY > canvasHeight)
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = -5;
	}

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 0.25, 0.25, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};

for (var i = 0; i < numStars; ++i)
{
	//objectsList.push($.extend(true, {}, dObjStarsTwo));
	var aStar = Object.create(dObjStarsTwo);
	objectsList.push(aStar);
}

var dObjStarsThree = Object.create(DisplayObjectClass);
dObjStarsThree.init(starVector, glowWhite03, highGreen/*glowWhite03, highWhite03*/, 1);

dObjStarsThree.addFrame(starVector);

dObjStarsThree.start = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 0;
	this.velY = 30;
	this.multX = 0.5;
	this.multY = 0.5;
	//console.log("posX: " + this.posX + " posY: " + this.posY);
};


dObjStarsThree.update = function ()
{

	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;
	//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

	if (this.posY > canvasHeight)
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = -5;
	}

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 0.5, 0.5, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};

for (var i = 0; i < numStars; ++i)
{
	//objectsList.push($.extend(true, {}, dObjStarsThree));
	var aStar = Object.create(dObjStarsThree);
	objectsList.push(aStar);
}

var dObjStarsFour = Object.create(DisplayObjectClass);
dObjStarsFour.init(starVector, glowWhite04, highCyan/*glowWhite04, highWhite04*/, 1);

dObjStarsFour.addFrame(starVector);

dObjStarsFour.start = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 0;
	this.velY = 40;
	this.multX = 1;
	this.multY = 1;
	//console.log("posX: " + this.posX + " posY: " + this.posY);
};


dObjStarsFour.update = function ()
{

	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;
	//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

	if (this.posY > canvasHeight)
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = -5;
	}

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};

for (var i = 0; i < numStars; ++i)
{
	//objectsList.push($.extend(true, {}, dObjStarsFour));
	var aStar = Object.create(dObjStarsFour);
	objectsList.push(aStar);
}

