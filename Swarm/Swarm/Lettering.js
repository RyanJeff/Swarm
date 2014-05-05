//Letter V
var objLetterV = new DisplayObject(LetterV01, glowRed, highRed, 1);
objectsList.push(objLetterV);
objLetterV.addFrame(LetterV02);

objLetterV.start = function ()
{
	this.posX = 10;
	this.posY = 50;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;
};
objLetterV.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

//Letter E
var objLetterE = new DisplayObject(LetterE01, glowOrange, highOrange, 1);
objectsList.push(objLetterE);
objLetterE.addFrame(LetterE02);

objLetterE.start = function ()
{
	this.posX = 10;
	this.posY = 100;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;
};
objLetterE.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

//Letter C
var objLetterC = new DisplayObject(LetterC01, glowYellow, highYellow, 1);
objectsList.push(objLetterC);
objLetterC.addFrame(LetterC02);

objLetterC.start = function ()
{
	this.posX = 10;
	this.posY = 150;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;
};
objLetterC.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

//Letter T
var objLetterT = new DisplayObject(LetterT01, glowGreen, highGreen, 1);
objectsList.push(objLetterT);
objLetterT.addFrame(LetterT02);

objLetterT.start = function ()
{
	this.posX = 10;
	this.posY = 200;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;
};
objLetterT.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

//Letter O
var objLetterO = new DisplayObject(LetterO01, glowBlue, highBlue, 1);
objectsList.push(objLetterO);
objLetterO.addFrame(LetterO02);

objLetterO.start = function ()
{
	this.posX = 10;
	this.posY = 250;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;
};
objLetterO.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	//var dTask = new DrawTask(self, this.posX, this.posY, 5, 5, this.velX, this.velY);
	drawQueue.push(self);
};

//Letter R
var objLetterR = new DisplayObject(LetterR01, glowPurple, highPurple, 1);
objectsList.push(objLetterR);
objLetterR.addFrame(LetterR02);

objLetterR.start = function ()
{
	this.posX = 10;
	this.posY = 300;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;
};
objLetterR.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

//Score letters	
var scorePosStart = canvasWidth - (12 * 20);
var scorePosCurr = 0;
var charWidth = 20;
var scoreS = new DisplayObject(LetterS02, glowPurple, highWhite04, 1);
objectsList.push(scoreS);
scoreS.addFrame(LetterS02);

scoreS.start = function ()
{
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	//this.posX = 530;
	this.posY = 7;
	this.velX = 0;
	this.velY = 0;
	this.multX = 2;
	this.multY = 2;
};
scoreS.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

var scoreC = new DisplayObject(LetterC02, glowPurple, highWhite04, 1);
objectsList.push(scoreC);
scoreC.addFrame(LetterC02);

scoreC.start = function ()
{
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	//this.posX = 550;
	this.posY = -17;
	this.velX = 0;
	this.velY = 0;
	this.multX = 2;
	this.multY = 2;
};
scoreC.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

var scoreO = new DisplayObject(LetterO02, glowPurple, highWhite04, 1);
objectsList.push(scoreO);
scoreO.addFrame(LetterO02);

scoreO.start = function ()
{
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	//this.posX = 570;
	this.posY = -17;
	this.velX = 0;
	this.velY = 0;
	this.multX = 2;
	this.multY = 2;
};
scoreO.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

var scoreR = new DisplayObject(LetterR02, glowPurple, highWhite04, 1);
objectsList.push(scoreR);
scoreR.addFrame(LetterR02);

scoreR.start = function ()
{
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	//this.posX = 590;
	this.posY = -17;
	this.velX = 0;
	this.velY = 0;
	this.multX = 2;
	this.multY = 2;
};
scoreR.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

var scoreE = new DisplayObject(LetterE02, glowPurple, highWhite04, 1);
objectsList.push(scoreE);
scoreE.addFrame(LetterE02);

scoreE.start = function ()
{
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	//this.posX = 610;
	this.posY = -17;
	this.velX = 0;
	this.velY = 0;
	this.multX = 2;
	this.multY = 2;
};
scoreE.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

/*
	Lives - this is a temporary way to show them for the prototype
*/
var lifeOne = new DisplayObject(shipF01, glowCyan, highCyan, 1);
objectsList.push(lifeOne);
lifeOne.addFrame(shipF01);
lifeOne.start = function ()
{
	this.posX = 11;
	this.posY = 1;
	this.velX = 0;
	this.velY = 0;
	this.multX = 1;
	this.multY = 1;
};
lifeOne.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

var lifeTwo = new DisplayObject(shipF01, glowCyan, highCyan, 1);
objectsList.push(lifeTwo);
lifeTwo.addFrame(shipF01);
lifeTwo.start = function ()
{
	this.posX = 34;
	this.posY = 1;
	this.velX = 0;
	this.velY = 0;
	this.multX = 1;
	this.multY = 1;
};
lifeTwo.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

var lifeThree = new DisplayObject(shipF01, glowCyan, highCyan, 1);
objectsList.push(lifeThree);
lifeThree.addFrame(shipF01);
lifeThree.start = function ()
{
	this.posX = 57;
	this.posY = 1;
	this.velX = 0;
	this.velY = 0;
	this.multX = 1;
	this.multY = 1;
};
lifeThree.update = function ()
{
	//ctx.save();
	//ctx.translate(this.posX, this.posY);
	//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
	//ctx.restore();
	var self = this;
	drawQueue.push(self);
};

