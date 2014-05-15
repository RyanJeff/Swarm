
var LetterObjectClass = Object.create(DisplayObjectClass);
LetterObjectClass.baseInit = LetterObjectClass.init;

LetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

LetterObjectClass.start = function ()
{
	this.posX = 0;
	this.posY = 0;
	this.multX = 1;
	this.multY = 1;
};
LetterObjectClass.update = function ()
{
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
};


var VECTORLetterObjectClass = Object.create(LetterObjectClass);
VECTORLetterObjectClass.baseTwoInit = VECTORLetterObjectClass.init;
VECTORLetterObjectClass.baseStart = VECTORLetterObjectClass.start;
VECTORLetterObjectClass.start = function ()
{
	this.baseStart();
	this.posX = 10;
	this.multX = 5;
	this.multY = 5;
};

VECTORLetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

//Letter V
var objLetterV = Object.create(VECTORLetterObjectClass);
objLetterV.baseTwoStart = objLetterV.start;
objLetterV.init(LetterV01, glowRed, highRed, 1);
objLetterV.addFrame(LetterV02);
objLetterV.start = function ()
{
	this.baseTwoStart();
	this.posY = 50;
};
objectsList.push(objLetterV);

//Letter E
var objLetterE = Object.create(VECTORLetterObjectClass);
objLetterE.baseTwoStart = objLetterE.start;
objLetterE.init(LetterE01, glowOrange, highOrange, 1);
objLetterE.addFrame(LetterE02);
objLetterE.start = function ()
{
	this.baseTwoStart();
	this.posY = 100;
};
objectsList.push(objLetterE);

//Letter C
var objLetterC = Object.create(VECTORLetterObjectClass);
objLetterC.baseTwoStart = objLetterC.start;
objLetterC.init(LetterC01, glowYellow, highYellow, 1);
objLetterC.addFrame(LetterC02);
objLetterC.start = function ()
{
	this.baseTwoStart();
	this.posY = 150;
};
objectsList.push(objLetterC);

//Letter T
var objLetterT = Object.create(VECTORLetterObjectClass);
objLetterT.baseTwoStart = objLetterT.start;
objLetterT.init(LetterT01, glowGreen, highGreen, 1);
objLetterT.addFrame(LetterT02);
objLetterT.start = function ()
{
	this.baseTwoStart();
	this.posY = 200;
};
objectsList.push(objLetterT);

//Letter O
var objLetterO = Object.create(VECTORLetterObjectClass);
objLetterO.baseTwoStart = objLetterO.start;
objLetterO.init(LetterO01, glowBlue, highBlue, 1);
objLetterO.addFrame(LetterO02);
objLetterO.start = function ()
{
	this.baseTwoStart();
	this.posY = 250;
};
objectsList.push(objLetterO);

//Letter R
var objLetterR = Object.create(VECTORLetterObjectClass);
objLetterR.baseTwoStart = objLetterR.start;
objLetterR.init(LetterR01, glowPurple, highPurple, 1);
objLetterR.addFrame(LetterR02);
objLetterR.start = function ()
{
	this.baseTwoStart();
	this.posY = 300;
};
objectsList.push(objLetterR);


//Score letters	
var ScoreLetterObjectClass = Object.create(LetterObjectClass);
ScoreLetterObjectClass.baseTwoInit = ScoreLetterObjectClass.init;
ScoreLetterObjectClass.baseStart = ScoreLetterObjectClass.start;
ScoreLetterObjectClass.start = function ()
{
	this.baseStart();
	this.posY = 7;
	this.multX = 2;
	this.multY = 2;
};

ScoreLetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var scorePosStart = canvasWidth - (12 * 20);
var scorePosCurr = 0;
var charWidth = 20;

var scoreS = Object.create(ScoreLetterObjectClass);
scoreS.baseTwoStart = scoreS.start;
scoreS.init(LetterS02, glowPurple, highWhite04, 1);
scoreS.addFrame(LetterS02);
scoreS.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
};
objectsList.push(scoreS);

var scoreC = Object.create(ScoreLetterObjectClass);
scoreC.baseTwoStart = scoreC.start;
scoreC.init(LetterC02, glowPurple, highWhite04, 1);
scoreC.addFrame(LetterC02);
scoreC.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.posY = -17;
};
objectsList.push(scoreC);

var scoreO = Object.create(ScoreLetterObjectClass);
scoreO.baseTwoStart = scoreO.start;
scoreO.init(LetterO02, glowPurple, highWhite04, 1);
scoreO.addFrame(LetterO02);
scoreO.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.posY = -17;
};
objectsList.push(scoreO);

var scoreR = Object.create(ScoreLetterObjectClass);
scoreR.baseTwoStart = scoreR.start;
scoreR.init(LetterR02, glowPurple, highWhite04, 1);
scoreR.addFrame(LetterR02);
scoreR.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.posY = -17;
};
objectsList.push(scoreR);

var scoreE = Object.create(ScoreLetterObjectClass);
scoreE.baseTwoStart = scoreE.start;
scoreE.init(LetterE02, glowPurple, highWhite04, 1);
scoreE.addFrame(LetterE02);
scoreE.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.posY = -17;
};
objectsList.push(scoreE);


/*
	Lives - this is a temporary way to show them for the prototype
*/
var LifeLetterObjectClass = Object.create(LetterObjectClass);
LifeLetterObjectClass.baseTwoInit = LifeLetterObjectClass.init;
LifeLetterObjectClass.baseStart = LifeLetterObjectClass.start;
LifeLetterObjectClass.start = function ()
{
	this.baseStart();
	this.posY = 1;
	this.multX = 1;
	this.multY = 1;
};

LifeLetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var lifeOne = Object.create(LifeLetterObjectClass);
lifeOne.baseTwoStart = lifeOne.start;
lifeOne.init(shipF01, glowCyan, highCyan, 1);
lifeOne.addFrame(shipF01);
lifeOne.start = function ()
{
	this.baseTwoStart();
	this.posX = 11;
};
objectsList.push(lifeOne);

var lifeTwo = Object.create(LifeLetterObjectClass);
lifeTwo.baseTwoStart = lifeTwo.start;
lifeTwo.init(shipF01, glowCyan, highCyan, 1);
lifeTwo.addFrame(shipF01);
lifeTwo.start = function ()
{
	this.baseTwoStart();
	this.posX = 34;
};
objectsList.push(lifeTwo);

var lifeThree = Object.create(LifeLetterObjectClass);
lifeThree.baseTwoStart = lifeThree.start;
lifeThree.init(shipF01, glowCyan, highCyan, 1);
lifeThree.addFrame(shipF01);
lifeThree.start = function ()
{
	this.baseTwoStart();
	this.posX = 57;
};
objectsList.push(lifeThree);

