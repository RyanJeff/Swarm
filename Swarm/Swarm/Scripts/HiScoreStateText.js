//Start of HI-SCORES for Hi-Score state
var hiScoreStatePosStart = canvasWidth - (17.5 * 30);
var hiScoreStatePosCurr = 0;
var hiScoreStateYPos = 100;//(canvasHeight / 2) + (charWidth * 5);

var HiScoreStateObjectClass = Object.create(LetterObjectClass);
HiScoreStateObjectClass.baseTwoInit = HiScoreStateObjectClass.init;
HiScoreStateObjectClass.baseStart = HiScoreStateObjectClass.start;
HiScoreStateObjectClass.start = function ()
{
    this.baseStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiscoreYPos;
    this.multX = 6;
    this.multY = 6;
};

HiScoreStateObjectClass.update = function ()
{
    var self = this;
    drawHiScoreQueue[lengthDrawHiScoreQueue++] = self;
};

HiScoreStateObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var hiScoreStateH = Object.create(HiScoreStateObjectClass);
hiScoreStateH.baseTwoStart = hiScoreStateH.start;
hiScoreStateH.init(LetterH02, glowCyan, highCyan, 1);
hiScoreStateH.addFrame(LetterH02);
hiScoreStateH.tag = "High Score State H";
hiScoreStateH.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos;
};
hiScoreStateList.push(hiScoreStateH);

var hiScoreStateI = Object.create(HiScoreStateObjectClass);
hiScoreStateI.baseTwoStart = hiScoreStateI.start;
hiScoreStateI.init(LetterI02, glowCyan, highCyan, 1);
hiScoreStateI.addFrame(LetterI02);
hiScoreStateI.tag = "High Score State I";
hiScoreStateI.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos;
};
hiScoreStateList.push(hiScoreStateI);

var hiScoreStateDash = Object.create(HiScoreStateObjectClass);
hiScoreStateDash.baseTwoStart = hiScoreStateDash.start;
hiScoreStateDash.init(Dash02, glowCyan, highCyan, 1);
hiScoreStateDash.addFrame(Dash02);
hiScoreStateDash.tag = "High Score State Dash";
hiScoreStateDash.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos;
};
hiScoreStateList.push(hiScoreStateDash);

var hiScoreStateS = Object.create(HiScoreStateObjectClass);
hiScoreStateS.baseTwoStart = hiScoreStateS.start;
hiScoreStateS.init(LetterS02, glowCyan, highCyan, 1);
hiScoreStateS.addFrame(LetterS02);
hiScoreStateS.tag = "High Score State S";
hiScoreStateS.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos;
};
hiScoreStateList.push(hiScoreStateS);

var hiScoreStateC = Object.create(HiScoreStateObjectClass);
hiScoreStateC.baseTwoStart = hiScoreStateC.start;
hiScoreStateC.init(LetterC02, glowCyan, highCyan, 1);
hiScoreStateC.addFrame(LetterC02);
hiScoreStateC.tag = "High Score State C";
hiScoreStateC.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos - 72;
};
hiScoreStateList.push(hiScoreStateC);

var hiScoreStateO = Object.create(HiScoreStateObjectClass);
hiScoreStateO.baseTwoStart = hiScoreStateO.start;
hiScoreStateO.init(LetterO02, glowCyan, highCyan, 1);
hiScoreStateO.addFrame(LetterO02);
hiScoreStateO.tag = "High Score State O";
hiScoreStateO.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos - 72;
};
hiScoreStateList.push(hiScoreStateO);

var hiScoreStateR = Object.create(HiScoreStateObjectClass);
hiScoreStateR.baseTwoStart = hiScoreStateR.start;
hiScoreStateR.init(LetterR02, glowCyan, highCyan, 1);
hiScoreStateR.addFrame(LetterR02);
hiScoreStateR.tag = "High Score State R";
hiScoreStateR.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos - 72;
};
hiScoreStateList.push(hiScoreStateR);

var hiScoreStateE = Object.create(HiScoreStateObjectClass);
hiScoreStateE.baseTwoStart = hiScoreStateE.start;
hiScoreStateE.init(LetterE02, glowCyan, highCyan, 1);
hiScoreStateE.addFrame(LetterE02);
hiScoreStateE.tag = "High Score State E";
hiScoreStateE.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos - 72;
};
hiScoreStateList.push(hiScoreStateE);

var hiScoreStateS2 = Object.create(HiScoreStateObjectClass);
hiScoreStateS2.baseTwoStart = hiScoreStateS2.start;
hiScoreStateS2.init(LetterS02, glowCyan, highCyan, 1);
hiScoreStateS2.addFrame(LetterS02);
hiScoreStateS2.tag = "High Score State S2";
hiScoreStateS2.start = function ()
{
    this.baseTwoStart();
    this.posX = hiScoreStatePosStart + hiScoreStatePosCurr;
    hiScoreStatePosCurr += (charWidth + 5);
    this.posY = hiScoreStateYPos;
};
hiScoreStateList.push(hiScoreStateS2);

//Back Button for Hi-Score State

var HSBackB = Object.create(HiScoreStateObjectClass);
HSBackB.baseTwoStart = HSBackB.start;
HSBackB.init(LetterB02, glowCyan, highCyan, 1);
HSBackB.addFrame(LetterB02);
HSBackB.tag = "High Score State Back B";
HSBackB.start = function ()
{
    backPosCurr = 0;
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
hiScoreStateList.push(HSBackB);

var HSBackA = Object.create(HiScoreStateObjectClass);
HSBackA.baseTwoStart = HSBackA.start;
HSBackA.init(LetterA02, glowCyan, highCyan, 1);
HSBackA.addFrame(LetterA02);
HSBackA.tag = "High Score State Back A";
HSBackA.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
hiScoreStateList.push(HSBackA);

var HSBackC = Object.create(HiScoreStateObjectClass);
HSBackC.baseTwoStart = HSBackC.start;
HSBackC.init(LetterC02, glowCyan, highCyan, 1);
HSBackC.addFrame(LetterC02);
HSBackC.tag = "High Score State Back C";
HSBackC.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
hiScoreStateList.push(HSBackC);

var HSBackK = Object.create(HiScoreStateObjectClass);
HSBackK.baseTwoStart = HSBackK.start;
HSBackK.init(LetterK02, glowCyan, highCyan, 1);
HSBackK.addFrame(LetterK02);
HSBackK.tag = "High Score State Back K";
HSBackK.start = function ()
{
    this.baseTwoStart();
    this.posX = backPosStart + backPosCurr;
    backPosCurr += (charWidth * 2);
    this.posY = backYPos;
};
hiScoreStateList.push(HSBackK);