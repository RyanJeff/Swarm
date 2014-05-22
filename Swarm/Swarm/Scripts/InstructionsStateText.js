//Instructions Initializations
var instructionsList = new Array();
var drawInstructionsQueue = new Array();
var lengthDrawInstructionsQueue = 0;

//Instructions State Title

var instructionsStatePosStart = canvasWidth - (17.5 * 30);
var instructionsStatePosCurr = 0;
var instructionsStateYPos = 100;//(canvasHeight / 2) + (charWidth * 5);

var InstructionsStateObjectClass = Object.create(LetterObjectClass);
InstructionsStateObjectClass.baseTwoInit = InstructionsStateObjectClass.init;
InstructionsStateObjectClass.baseStart = InstructionsStateObjectClass.start;
InstructionsStateObjectClass.start = function ()
{
    this.baseStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
    this.multX = 5;
    this.multY = 5;
};

InstructionsStateObjectClass.update = function ()
{
    var self = this;
    drawInstructionsQueue[lengthDrawInstructionsQueue++] = self;
};

InstructionsLetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var instructionsStateI1 = Object.create(InstructionsStateObjectClass);
instructionsStateI1.init(LetterI02, glowCyan, highCyan, 1);
instructionsStateI1.addFrame(LetterI02);
instructionsStateI1.tag = "Instructions State I1";
instructionsList.push(instructionsStateI1);

var instructionsStateN1 = Object.create(InstructionsStateObjectClass);
instructionsStateN1.init(LetterN02, glowCyan, highCyan, 1);
instructionsStateN1.addFrame(LetterN02);
instructionsStateN1.tag = "Instructions State N1";
instructionsList.push(instructionsStateN1);

var instructionsStateS1 = Object.create(InstructionsStateObjectClass);
instructionsStateS1.init(LetterS02, glowCyan, highCyan, 1);
instructionsStateS1.addFrame(LetterS02);
instructionsStateS1.tag = "Instructions State S1";
instructionsList.push(instructionsStateS1);

var instructionsStateT1 = Object.create(InstructionsStateObjectClass);
instructionsStateT1.init(LetterT02, glowCyan, highCyan, 1);
instructionsStateT1.addFrame(LetterT02);
instructionsStateT1.tag = "Instructions State T1";
instructionsList.push(instructionsStateT1);

var instructionsStateR = Object.create(InstructionsStateObjectClass);
instructionsStateR.init(LetterR02, glowCyan, highCyan, 1);
instructionsStateR.addFrame(LetterR02);
instructionsStateR.tag = "Instructions State R";
instructionsList.push(instructionsStateR);

var instructionsStateU = Object.create(InstructionsStateObjectClass);
instructionsStateU.init(LetterU02, glowCyan, highCyan, 1);
instructionsStateU.addFrame(LetterU02);
instructionsStateU.tag = "Instructions State U";
instructionsList.push(instructionsStateU);

var instructionsStateC = Object.create(InstructionsStateObjectClass);
instructionsStateC.init(LetterC02, glowCyan, highCyan, 1);
instructionsStateC.addFrame(LetterC02);
instructionsStateC.tag = "Instructions State C";
instructionsList.push(instructionsStateC);

var instructionsStateT2 = Object.create(InstructionsStateObjectClass);
instructionsStateT2.init(LetterT02, glowCyan, highCyan, 1);
instructionsStateT2.addFrame(LetterT02);
instructionsStateT2.tag = "Instructions State T2";
instructionsList.push(instructionsStateT2);

var instructionsStateI2 = Object.create(InstructionsStateObjectClass);
instructionsStateI2.init(LetterI02, glowCyan, highCyan, 1);
instructionsStateI2.addFrame(LetterI02);
instructionsStateI2.tag = "Instructions State I2";
instructionsList.push(instructionsStateI2);

var instructionsStateO = Object.create(InstructionsStateObjectClass);
instructionsStateO.init(LetterO02, glowCyan, highCyan, 1);
instructionsStateO.addFrame(LetterO02);
instructionsStateO.tag = "Instructions State O";
instructionsList.push(instructionsStateO);

var instructionsStateN2 = Object.create(InstructionsStateObjectClass);
instructionsStateN2.init(LetterN02, glowCyan, highCyan, 1);
instructionsStateN2.addFrame(LetterN02);
instructionsStateN2.tag = "Instructions State N2";
instructionsList.push(instructionsStateN2);

var instructionsStateS2 = Object.create(InstructionsStateObjectClass);
instructionsStateS2.init(LetterS02, glowCyan, highCyan, 1);
instructionsStateS2.addFrame(LetterS02);
instructionsStateS2.tag = "Instructions State S2";
instructionsList.push(instructionsStateS2);

//Instructions Text

var instructionsTextPosStart = canvasWidth - (17.5 * 30);
var instructionsTextPosCurr = 0;
var instructionsTextLineOne = 300;
var instructionsTextLineTwo = 300 + (charWidth * 3);
var instructionsTextLineThree = 500;
var instructionsTextLineFour = 500 + (charWidth * 3);
var instructionsTextLineFive = instructionsTextLineFour + (charWidth * 3);

var InstructionsTextClass = Object.create(InstructionsStateObjectClass);
InstructionsTextClass.baseThreeInit = InstructionsTextClass.init;
InstructionsTextClass.baseTwoStart = InstructionsTextClass.start;
InstructionsTextClass.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsTextPosStart + instructionsTextPosCurr;
    instructionsTextPosCurr += (charWidth * 2);
    this.posY = instructionsTextLineOne;
    this.multX = 5;
    this.multY = 5;
};
InstructionsTextClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseThreeInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var instructionsTextU = Object.create(InstructionsTextClass);
instructionsTextU.init(LetterU02, glowCyan, highCyan, 1);
instructionsTextU.addFrame(LetterU02);
instructionsList.push(instructionsTextU);

var instructionsTextS = Object.create(InstructionsTextClass);
instructionsTextS.init(LetterS02, glowCyan, highCyan, 1);
instructionsTextS.addFrame(LetterS02);
instructionsList.push(instructionsTextS);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    instructionsTextPosCurr += (charWidth);
    this.posY = instructionsTextLineOne;
};
instructionsList.push(instructionsTextE);

var instructionsTextT = Object.create(InstructionsTextClass);
instructionsTextT.baseThreeStart = instructionsTextT.start;
instructionsTextT.init(LetterT02, glowCyan, highCyan, 1);
instructionsTextT.addFrame(LetterT02);
instructionsTextT.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineOne;
};
instructionsList.push(instructionsTextT);

var instructionsTextH = Object.create(InstructionsTextClass);
instructionsTextH.init(LetterH02, glowCyan, highCyan, 1);
instructionsTextH.addFrame(LetterH02);
instructionsList.push(instructionsTextH);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    instructionsTextPosCurr += (charWidth);
    this.posY = instructionsTextLineOne;
};
instructionsList.push(instructionsTextE);

var instructionsTextA = Object.create(InstructionsTextClass);
instructionsTextA.init(LetterA02, glowCyan, highCyan, 1);
instructionsTextA.addFrame(LetterA02);
instructionsList.push(instructionsTextA);

var instructionsTextR = Object.create(InstructionsTextClass);
instructionsTextR.baseThreeStart = instructionsTextR.start;
instructionsTextR.init(LetterR02, glowCyan, highCyan, 1);
instructionsTextR.addFrame(LetterR02);
instructionsTextR.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineOne;
};
instructionsList.push(instructionsTextR);

var instructionsTextR = Object.create(InstructionsTextClass);
instructionsTextR.baseThreeStart = instructionsTextR.start;
instructionsTextR.init(LetterR02, glowCyan, highCyan, 1);
instructionsTextR.addFrame(LetterR02);
instructionsTextR.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineOne;
};
instructionsList.push(instructionsTextR);

var instructionsTextO = Object.create(InstructionsTextClass);
instructionsTextO.baseThreeStart = instructionsTextO.start;
instructionsTextO.init(LetterO02, glowCyan, highCyan, 1);
instructionsTextO.addFrame(LetterO02);
instructionsTextO.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineOne;
};
instructionsList.push(instructionsTextO);

var instructionsTextW = Object.create(InstructionsTextClass);
instructionsTextW.init(LetterW02, glowCyan, highCyan, 1);
instructionsTextW.addFrame(LetterW02);
instructionsList.push(instructionsTextW);

var instructionsTextK = Object.create(InstructionsTextClass);
instructionsTextK.baseThreeStart = instructionsTextK.start;
instructionsTextK.init(LetterK02, glowCyan, highCyan, 1);
instructionsTextK.addFrame(LetterK02);
instructionsTextK.start = function ()
{
    instructionsTextPosCurr = 0;
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextK);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextE);

var instructionsTextY = Object.create(InstructionsTextClass);
instructionsTextY.baseThreeStart = instructionsTextY.start;
instructionsTextY.init(LetterY02, glowCyan, highCyan, 1);
instructionsTextY.addFrame(LetterY02);
instructionsTextY.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextY);

var instructionsTextS = Object.create(InstructionsTextClass);
instructionsTextS.baseThreeStart = instructionsTextS.start;
instructionsTextS.init(LetterS02, glowCyan, highCyan, 1);
instructionsTextS.addFrame(LetterS02);
instructionsTextS.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
    instructionsTextPosCurr += (charWidth);
};
instructionsList.push(instructionsTextS);

var instructionsTextT = Object.create(InstructionsTextClass);
instructionsTextT.baseThreeStart = instructionsTextT.start;
instructionsTextT.init(LetterT02, glowCyan, highCyan, 1);
instructionsTextT.addFrame(LetterT02);
instructionsTextT.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextT);

var instructionsTextO = Object.create(InstructionsTextClass);
instructionsTextO.baseThreeStart = instructionsTextO.start;
instructionsTextO.init(LetterO02, glowCyan, highCyan, 1);
instructionsTextO.addFrame(LetterO02);
instructionsTextO.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
    instructionsTextPosCurr += (charWidth);
};
instructionsList.push(instructionsTextO);

var instructionsTextM = Object.create(InstructionsTextClass);
instructionsTextM.baseThreeStart = instructionsTextM.start;
instructionsTextM.init(LetterM02, glowCyan, highCyan, 1);
instructionsTextM.addFrame(LetterM02);
instructionsTextM.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextM);

var instructionsTextO = Object.create(InstructionsTextClass);
instructionsTextO.baseThreeStart = instructionsTextO.start;
instructionsTextO.init(LetterO02, glowCyan, highCyan, 1);
instructionsTextO.addFrame(LetterO02);
instructionsTextO.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextO);

var instructionsTextV = Object.create(InstructionsTextClass);
instructionsTextV.baseThreeStart = instructionsTextV.start;
instructionsTextV.init(LetterV02, glowCyan, highCyan, 1);
instructionsTextV.addFrame(LetterV02);
instructionsTextV.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextV);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo;
};
instructionsList.push(instructionsTextE);

var instructionsTextP = Object.create(InstructionsTextClass);
instructionsTextP.baseThreeStart = instructionsTextP.start;
instructionsTextP.init(LetterP02, glowCyan, highCyan, 1);
instructionsTextP.addFrame(LetterP02);
instructionsTextP.start = function ()
{
    instructionsTextPosCurr = 0;
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
};
instructionsList.push(instructionsTextP);

var instructionsTextR = Object.create(InstructionsTextClass);
instructionsTextR.baseThreeStart = instructionsTextR.start;
instructionsTextR.init(LetterR02, glowCyan, highCyan, 1);
instructionsTextR.addFrame(LetterR02);
instructionsTextR.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
};
instructionsList.push(instructionsTextR);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
};
instructionsList.push(instructionsTextE);

var instructionsTextS = Object.create(InstructionsTextClass);
instructionsTextS.baseThreeStart = instructionsTextS.start;
instructionsTextS.init(LetterS02, glowCyan, highCyan, 1);
instructionsTextS.addFrame(LetterS02);
instructionsTextS.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
};
instructionsList.push(instructionsTextS);

var instructionsTextS = Object.create(InstructionsTextClass);
instructionsTextS.baseThreeStart = instructionsTextS.start;
instructionsTextS.init(LetterS02, glowCyan, highCyan, 1);
instructionsTextS.addFrame(LetterS02);
instructionsTextS.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
    instructionsTextPosCurr += charWidth;
};
instructionsList.push(instructionsTextS);

var instructionsTextT = Object.create(InstructionsTextClass);
instructionsTextT.baseThreeStart = instructionsTextT.start;
instructionsTextT.init(LetterT02, glowCyan, highCyan, 1);
instructionsTextT.addFrame(LetterT02);
instructionsTextT.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
};
instructionsList.push(instructionsTextT);

var instructionsTextH = Object.create(InstructionsTextClass);
instructionsTextH.baseThreeStart = instructionsTextH.start;
instructionsTextH.init(LetterH02, glowCyan, highCyan, 1);
instructionsTextH.addFrame(LetterH02);
instructionsTextH.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
};
instructionsList.push(instructionsTextH);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree;
    instructionsTextPosCurr += charWidth;
};
instructionsList.push(instructionsTextE);

var instructionsTextS = Object.create(InstructionsTextClass);
instructionsTextS.baseThreeStart = instructionsTextS.start;
instructionsTextS.init(LetterS02, glowCyan, highCyan, 1);
instructionsTextS.addFrame(LetterS02);
instructionsTextS.start = function ()
{
    instructionsTextPosCurr = 0;
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextS);

var instructionsTextP = Object.create(InstructionsTextClass);
instructionsTextP.baseThreeStart = instructionsTextP.start;
instructionsTextP.init(LetterP02, glowCyan, highCyan, 1);
instructionsTextP.addFrame(LetterP02);
instructionsTextP.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextP);

var instructionsTextA = Object.create(InstructionsTextClass);
instructionsTextA.baseThreeStart = instructionsTextA.start;
instructionsTextA.init(LetterA02, glowCyan, highCyan, 1);
instructionsTextA.addFrame(LetterA02);
instructionsTextA.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextA);

var instructionsTextC = Object.create(InstructionsTextClass);
instructionsTextC.baseThreeStart = instructionsTextC.start;
instructionsTextC.init(LetterC02, glowCyan, highCyan, 1);
instructionsTextC.addFrame(LetterC02);
instructionsTextC.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextC);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
    instructionsTextPosCurr += charWidth;
};
instructionsList.push(instructionsTextE);

var instructionsTextB = Object.create(InstructionsTextClass);
instructionsTextB.baseThreeStart = instructionsTextB.start;
instructionsTextB.init(LetterB02, glowCyan, highCyan, 1);
instructionsTextB.addFrame(LetterB02);
instructionsTextB.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextB);

var instructionsTextA = Object.create(InstructionsTextClass);
instructionsTextA.baseThreeStart = instructionsTextA.start;
instructionsTextA.init(LetterA02, glowCyan, highCyan, 1);
instructionsTextA.addFrame(LetterA02);
instructionsTextA.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextA);

var instructionsTextR = Object.create(InstructionsTextClass);
instructionsTextR.baseThreeStart = instructionsTextR.start;
instructionsTextR.init(LetterR02, glowCyan, highCyan, 1);
instructionsTextR.addFrame(LetterR02);
instructionsTextR.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
    instructionsTextPosCurr += charWidth;
};
instructionsList.push(instructionsTextR);

var instructionsTextT = Object.create(InstructionsTextClass);
instructionsTextT.baseThreeStart = instructionsTextT.start;
instructionsTextT.init(LetterT02, glowCyan, highCyan, 1);
instructionsTextT.addFrame(LetterT02);
instructionsTextT.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextT);

var instructionsTextO = Object.create(InstructionsTextClass);
instructionsTextO.baseThreeStart = instructionsTextO.start;
instructionsTextO.init(LetterO02, glowCyan, highCyan, 1);
instructionsTextO.addFrame(LetterO02);
instructionsTextO.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour;
};
instructionsList.push(instructionsTextO);

var instructionsTextF = Object.create(InstructionsTextClass);
instructionsTextF.baseThreeStart = instructionsTextF.start;
instructionsTextF.init(LetterF02, glowCyan, highCyan, 1);
instructionsTextF.addFrame(LetterF02);
instructionsTextF.start = function ()
{
    instructionsTextPosCurr = 0;
    this.baseThreeStart();
    this.posY = instructionsTextLineFive;
};
instructionsList.push(instructionsTextF);

var instructionsTextI = Object.create(InstructionsTextClass);
instructionsTextI.baseThreeStart = instructionsTextI.start;
instructionsTextI.init(LetterI02, glowCyan, highCyan, 1);
instructionsTextI.addFrame(LetterI02);
instructionsTextI.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFive;
};
instructionsList.push(instructionsTextI);

var instructionsTextR = Object.create(InstructionsTextClass);
instructionsTextR.baseThreeStart = instructionsTextR.start;
instructionsTextR.init(LetterR02, glowCyan, highCyan, 1);
instructionsTextR.addFrame(LetterR02);
instructionsTextR.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFive;
};
instructionsList.push(instructionsTextR);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFive;
};
instructionsList.push(instructionsTextE);

//Back button for Instructions State

var backPosStart = canvasWidth - (17.5 * 25);
var backPosCurr = 0;
var backYPos = 800;//(canvasHeight / 2) + (charWidth * 5);

var instructBackB = Object.create(InstructionsStateObjectClass);
instructBackB.baseTwoStart = instructBackB.start;
instructBackB.init(LetterB02, glowCyan, highCyan, 1);
instructBackB.addFrame(LetterB02);
instructBackB.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
instructionsList.push(instructBackB);

var instructBackA = Object.create(InstructionsStateObjectClass);
instructBackA.baseTwoStart = instructBackA.start;
instructBackA.init(LetterA02, glowCyan, highCyan, 1);
instructBackA.addFrame(LetterA02);
instructBackA.tag = "Instructions State Back A";
instructBackA.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
instructionsList.push(instructBackA);

var instructBackC = Object.create(InstructionsStateObjectClass);
instructBackC.baseTwoStart = instructBackC.start;
instructBackC.init(LetterC02, glowCyan, highCyan, 1);
instructBackC.addFrame(LetterC02);
instructBackC.tag = "Instructions State Back C";
instructBackC.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
instructionsList.push(instructBackC);

var instructBackK = Object.create(InstructionsStateObjectClass);
instructBackK.baseTwoStart = instructBackK.start;
instructBackK.init(LetterK02, glowCyan, highCyan, 1);
instructBackK.addFrame(LetterK02);
instructBackK.tag = "Instructions State Back K";
instructBackK.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
instructionsList.push(instructBackK);