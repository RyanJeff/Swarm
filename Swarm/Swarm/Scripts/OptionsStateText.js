//Hi-Score Initializations
var optionsStateList = new Array();
var drawOptionsQueue = new Array();
var lengthDrawOptionsQueue = 0;

//Start of HI-SCORES for Hi-Score state
var optionsStatePosStart = canvasWidth - (14 * 30);
var optionsStatePosCurr = 0;
var optionsStateYPos = 100;//(canvasHeight / 2) + (charWidth * 5);

var OptionsStateObjectClass = Object.create(LetterObjectClass);
OptionsStateObjectClass.baseTwoInit = OptionsStateObjectClass.init;
OptionsStateObjectClass.baseStart = OptionsStateObjectClass.start;
OptionsStateObjectClass.start = function ()
{
    this.baseStart();
    this.posX = optionsStatePosStart + optionsStatePosCurr;
    optionsStatePosCurr += (charWidth * 2.5);
    this.posY = optionsStateYPos;
    this.multX = 6;
    this.multY = 6;
};

OptionsStateObjectClass.update = function ()
{
    var self = this;
    drawOptionsQueue[lengthDrawOptionsQueue++] = self;
};

OptionsStateObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var optionsStateO1 = Object.create(OptionsStateObjectClass);
optionsStateO1.init(LetterO02, glowCyan, highCyan, 1);
optionsStateO1.addFrame(LetterO02);
optionsStateO1.tag = "Options State Letter O1";
optionsStateList.push(optionsStateO1);

var optionsStateP = Object.create(OptionsStateObjectClass);
optionsStateP.init(LetterP02, glowCyan, highCyan, 1);
optionsStateP.addFrame(LetterP02);
optionsStateP.tag = "Options State Letter P";
optionsStateList.push(optionsStateP);

var optionsStateT = Object.create(OptionsStateObjectClass);
optionsStateT.init(LetterT02, glowCyan, highCyan, 1);
optionsStateT.addFrame(LetterT02);
optionsStateT.tag = "Options State Letter T";
optionsStateList.push(optionsStateT);

var optionsStateI = Object.create(OptionsStateObjectClass);
optionsStateI.init(LetterI02, glowCyan, highCyan, 1);
optionsStateI.addFrame(LetterI02);
optionsStateI.tag = "Options State Letter I";
optionsStateList.push(optionsStateI);

var optionsStateO2 = Object.create(OptionsStateObjectClass);
optionsStateO2.init(LetterO02, glowCyan, highCyan, 1);
optionsStateO2.addFrame(LetterO02);
optionsStateO2.tag = "Options State Letter O2";
optionsStateList.push(optionsStateO2);

var optionsStateN = Object.create(OptionsStateObjectClass);
optionsStateN.init(LetterN02, glowCyan, highCyan, 1);
optionsStateN.addFrame(LetterN02);
optionsStateN.tag = "Options State Letter N";
optionsStateList.push(optionsStateN);

var optionsStateS = Object.create(OptionsStateObjectClass);
optionsStateS.init(LetterS02, glowCyan, highCyan, 1);
optionsStateS.addFrame(LetterS02);
optionsStateS.tag = "Options State Letter S";
optionsStateList.push(optionsStateS);


var optionsMutePosStart = canvasWidth - (14 * 30);
var optionsMutePosCurr = 0;
var optionsMuteYPos = 300;

//MUTE SOUND
var optionsStateM = Object.create(OptionsStateObjectClass);
optionsStateM.baseTwoStart = optionsStateM.start;
optionsStateM.init(LetterM02, glowCyan, highCyan, 1);
optionsStateM.addFrame(LetterM02);
optionsStateM.tag = "Options State Letter M";
optionsStateM.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateM);

var optionsStateU = Object.create(OptionsStateObjectClass);
optionsStateU.baseTwoStart = optionsStateU.start;
optionsStateU.init(LetterU02, glowCyan, highCyan, 1);
optionsStateU.addFrame(LetterU02);
optionsStateU.tag = "Options State Letter U";
optionsStateU.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateU);

var optionsStateT = Object.create(OptionsStateObjectClass);
optionsStateT.baseTwoStart = optionsStateT.start;
optionsStateT.init(LetterT02, glowCyan, highCyan, 1);
optionsStateT.addFrame(LetterT02);
optionsStateT.tag = "Options State Letter T";
optionsStateT.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateT);

var optionsStateE = Object.create(OptionsStateObjectClass);
optionsStateE.baseTwoStart = optionsStateE.start;
optionsStateE.init(LetterE02, glowCyan, highCyan, 1);
optionsStateE.addFrame(LetterE02);
optionsStateE.tag = "Options State Letter E";
optionsStateE.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 20;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateE);

var optionsStateS = Object.create(OptionsStateObjectClass);
optionsStateS.baseTwoStart = optionsStateS.start;
optionsStateS.init(LetterS02, glowCyan, highCyan, 1);
optionsStateS.addFrame(LetterS02);
optionsStateS.tag = "Options State Letter S";
optionsStateS.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += (charWidth) + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateS);

var optionsStateO = Object.create(OptionsStateObjectClass);
optionsStateO.baseTwoStart = optionsStateO.start;
optionsStateO.init(LetterO02, glowCyan, highCyan, 1);
optionsStateO.addFrame(LetterO02);
optionsStateO.tag = "Options State Letter O";
optionsStateO.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateO);

var optionsStateU = Object.create(OptionsStateObjectClass);
optionsStateU.baseTwoStart = optionsStateU.start;
optionsStateU.init(LetterU02, glowCyan, highCyan, 1);
optionsStateU.addFrame(LetterU02);
optionsStateU.tag = "Options State Letter U";
optionsStateU.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateU);

var optionsStateN = Object.create(OptionsStateObjectClass);
optionsStateN.baseTwoStart = optionsStateN.start;
optionsStateN.init(LetterN02, glowCyan, highCyan, 1);
optionsStateN.addFrame(LetterN02);
optionsStateN.tag = "Options State Letter N";
optionsStateN.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateN);

var optionsStateD = Object.create(OptionsStateObjectClass);
optionsStateD.baseTwoStart = optionsStateD.start;
optionsStateD.init(LetterD02, glowCyan, highCyan, 1);
optionsStateD.addFrame(LetterD02);
optionsStateD.tag = "Options State Letter D";
optionsStateD.start = function ()
{
    this.baseTwoStart();
    this.posX = optionsMutePosStart + optionsMutePosCurr;
    optionsMutePosCurr += charWidth + 5;
    this.posY = optionsMuteYPos;
    this.multX = 3;
    this.multY = 3;
};
optionsStateList.push(optionsStateD);

//Back button for Instructions State

var backPosStart = canvasWidth - (17.5 * 25);
var backPosCurr = 0;
var backYPos = 800;//(canvasHeight / 2) + (charWidth * 5);

var optionsBackB = Object.create(OptionsStateObjectClass);
optionsBackB.baseTwoStart = optionsBackB.start;
optionsBackB.init(LetterB02, glowCyan, highCyan, 1);
optionsBackB.addFrame(LetterB02);
optionsBackB.tag = "Options State Back B";
optionsBackB.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 3);
    this.posY = backYPos;
};
optionsStateList.push(optionsBackB);

var optionsBackA = Object.create(OptionsStateObjectClass);
optionsBackA.baseTwoStart = optionsBackA.start;
optionsBackA.init(LetterA02, glowCyan, highCyan, 1);
optionsBackA.addFrame(LetterA02);
optionsBackA.tag = "Options State Back A";
optionsBackA.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 3);
    this.posY = backYPos;
};
optionsStateList.push(optionsBackA);

var optionsBackC = Object.create(OptionsStateObjectClass);
optionsBackC.baseTwoStart = optionsBackC.start;
optionsBackC.init(LetterC02, glowCyan, highCyan, 1);
optionsBackC.addFrame(LetterC02);
optionsBackC.tag = "Options State Back C";
optionsBackC.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 3);
    this.posY = backYPos;
};
optionsStateList.push(optionsBackC);

var optionsBackK = Object.create(OptionsStateObjectClass);
optionsBackK.baseTwoStart = optionsBackK.start;
optionsBackK.init(LetterK02, glowCyan, highCyan, 1);
optionsBackK.addFrame(LetterK02);
optionsBackK.tag = "Options State Back K";
optionsBackK.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 3);
    this.posY = backYPos;
};
optionsStateList.push(optionsBackK);