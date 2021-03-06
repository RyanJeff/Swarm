var charWidth = 20;





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
	this.isDrawn = true;
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
    this.tag = "VECTOR V";
	this.isDrawn = false;
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
    this.tag = "VECTOR E";
	this.isDrawn = false;
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
    this.tag = "VECTOR C";
	this.isDrawn = false;
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
    this.tag = "VECTOR T";
	this.isDrawn = false;
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
    this.tag = "VECTOR O";
	this.isDrawn = false;
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
    this.tag = "VECTOR R";
	this.isDrawn = false;
};
objectsList.push(objLetterR);

function isVectorSpelled()
{
	if   (objLetterV.isDrawn == true
	   && objLetterE.isDrawn ==true
	   && objLetterC.isDrawn == true
	   && objLetterT.isDrawn == true
	   && objLetterO.isDrawn == true
	   && objLetterR.isDrawn == true)
	{
		lifeAdd();
		objLetterV.isDrawn = false;
		objLetterE.isDrawn = false;
	    objLetterC.isDrawn = false;
		objLetterT.isDrawn = false;
		objLetterO.isDrawn = false;
		objLetterR.isDrawn = false;
	}
	   
};