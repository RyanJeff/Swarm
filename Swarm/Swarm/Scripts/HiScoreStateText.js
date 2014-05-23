//Hi-Score Initializations
var hiScoreStateList = new Array();
var drawHiScoreQueue = new Array();
var lengthDrawHiScoreQueue = 0;

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
    this.posY = hiScoreStateYPos;
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
    this.posY = hiScoreStateYPos;
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
    this.posY = hiScoreStateYPos;
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
    this.posY = hiScoreStateYPos;
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
    backPosCurr += (charWidth * 2.5);
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
    backPosCurr += (charWidth * 2.5);
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
    backPosCurr += (charWidth * 2.5);
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
    backPosCurr += (charWidth * 2.5);
    this.posY = backYPos;
};
hiScoreStateList.push(HSBackK);

//Hi Score Table Letter and Number initializations
var HighScoreClass = Object.create(HiScoreStateObjectClass);
HighScoreClass.baseThreeInit = HighScoreClass.init;
HighScoreClass.baseTwoStart = HighScoreClass.start;
HighScoreClass.start = function ()
{
    this.baseTwoStart();
    this.posY = 300;
    this.multX = 2;
    this.multY = 2;
};

HighScoreClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseThreeInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var highscorePosStart = canvasWidth - (14 * charWidth);
var highscorePosCurr = 0;
var highscoreYPos = 250;
var highscoreNextLine = charWidth * 2;
var highscoreLine;
var highscoreList = new Array();

for (var i = 0; i < 10; ++i)
{
    var highscorePositionSix = Object.create(HighScoreClass);
    highscorePositionSix.baseThreeStart = highscorePositionSix.start;
    highscorePositionSix.init(NumberZero02, glowPurple, highWhite04, 1);
    highscorePositionSix.addFrame(NumberZero02);
    highscorePositionSix.start = function ()
    {
        highscorePosCurr = 0;
        this.baseThreeStart();
        highscorePosCurr += ((charWidth * 0.5) | 0);
        this.posX = highscorePosStart + highscorePosCurr;
        highscorePosCurr += charWidth;
        this.posY = highscoreYPos;
        this.tag = "Score Position Six";
    };
    hiScoreStateList.push(highscorePositionSix);

    var highscorePositionFive = Object.create(HighScoreClass);
    highscorePositionFive.baseThreeStart = highscorePositionFive.start;
    highscorePositionFive.init(NumberZero02, glowPurple, highWhite04, 1);
    highscorePositionFive.addFrame(NumberZero02);
    highscorePositionFive.start = function ()
    {
        this.baseThreeStart();
        this.posX = highscorePosStart + highscorePosCurr;
        highscorePosCurr += charWidth;
        this.posY = highscoreYPos;
        this.tag = "Score Position Five";
    };
    hiScoreStateList.push(highscorePositionFive);

    var highscorePositionFour = Object.create(HighScoreClass);
    highscorePositionFour.baseThreeStart = highscorePositionFour.start;
    highscorePositionFour.init(NumberZero02, glowPurple, highWhite04, 1);
    highscorePositionFour.addFrame(NumberZero02);
    highscorePositionFour.start = function ()
    {
        this.baseThreeStart();
        this.posX = highscorePosStart + highscorePosCurr;
        highscorePosCurr += charWidth;
        this.posY = highscoreYPos;
        this.tag = "Score Position Four";
    };
    hiScoreStateList.push(highscorePositionFour);

    var highscorePositionThree = Object.create(HighScoreClass);
    highscorePositionThree.baseThreeStart = highscorePositionThree.start;
    highscorePositionThree.init(NumberZero02, glowPurple, highWhite04, 1);
    highscorePositionThree.addFrame(NumberZero02);
    highscorePositionThree.start = function ()
    {
        this.baseThreeStart();
        this.posX = highscorePosStart + highscorePosCurr;
        highscorePosCurr += charWidth;
        this.posY = highscoreYPos;
        this.tag = "Score Position Three";
    };
    hiScoreStateList.push(highscorePositionThree);

    var highscorePositionTwo = Object.create(HighScoreClass);
    highscorePositionTwo.baseThreeStart = highscorePositionTwo.start;
    highscorePositionTwo.init(NumberZero02, glowPurple, highWhite04, 1);
    highscorePositionTwo.addFrame(NumberZero02);
    highscorePositionTwo.start = function ()
    {
        this.baseThreeStart();
        this.posX = highscorePosStart + highscorePosCurr;
        highscorePosCurr += charWidth;
        this.posY = highscoreYPos;
        this.tag = "Score Position Two";
    };
    hiScoreStateList.push(highscorePositionTwo);

    var highscorePositionOne = Object.create(HighScoreClass);
    highscorePositionOne.baseThreeStart = highscorePositionOne.start;
    highscorePositionOne.init(NumberZero02, glowPurple, highWhite04, 1);
    highscorePositionOne.addFrame(NumberZero02);
    highscorePositionOne.start = function ()
    {
        this.baseThreeStart();
        this.posX = highscorePosStart + highscorePosCurr;
        highscorePosCurr += charWidth;
        this.posY = highscoreYPos;
        this.tag = "Score Position One";
    };
    hiScoreStateList.push(highscorePositionOne);

    var highscorePositionZero = Object.create(HighScoreClass);
    highscorePositionZero.baseThreeStart = highscorePositionZero.start;
    highscorePositionZero.init(NumberZero02, glowPurple, highWhite04, 1);
    highscorePositionZero.addFrame(NumberZero02);
    highscorePositionZero.start = function ()
    {
        this.baseThreeStart();
        this.posX = highscorePosStart + highscorePosCurr;
        highscorePosCurr += charWidth;
        this.posY = highscoreYPos;
        highscoreYPos += highscoreNextLine;
        this.tag = "Score Position Zero";
    };
    hiScoreStateList.push(highscorePositionZero);

    highscoreLine = new Array();

    highscoreLine.push(highscorePositionZero);
    highscoreLine.push(highscorePositionOne);
    highscoreLine.push(highscorePositionTwo);
    highscoreLine.push(highscorePositionThree);
    highscoreLine.push(highscorePositionFour);
    highscoreLine.push(highscorePositionFive);
    highscoreLine.push(highscorePositionSix);

    highscoreList.push(highscoreLine);
}

highscoreDigits = new Array();

var highscoreDigitZero = Object.create(HighScoreClass);
highscoreDigitZero.init(NumberZero02, glowPurple, highWhite04, 1);
highscoreDigitZero.addFrame(NumberZero02);
highscoreDigits.push(highscoreDigitZero);

var highscoreDigitOne = Object.create(HighScoreClass);
highscoreDigitOne.init(NumberOne02, glowPurple, highWhite04, 1);
highscoreDigitOne.addFrame(NumberOne02);
highscoreDigits.push(highscoreDigitOne);

var highscoreDigitTwo = Object.create(HighScoreClass);
highscoreDigitTwo.init(NumberTwo02, glowPurple, highWhite04, 1);
highscoreDigitTwo.addFrame(NumberTwo02);
highscoreDigits.push(highscoreDigitTwo);

var highscoreDigitThree = Object.create(HighScoreClass);
highscoreDigitThree.init(NumberThree02, glowPurple, highWhite04, 1);
highscoreDigitThree.addFrame(NumberThree02);
highscoreDigits.push(highscoreDigitThree);

var highscoreDigitFour = Object.create(HighScoreClass);
highscoreDigitFour.init(NumberFour02, glowPurple, highWhite04, 1);
highscoreDigitFour.addFrame(NumberFour02);
highscoreDigits.push(highscoreDigitFour);

var highscoreDigitFive = Object.create(HighScoreClass);
highscoreDigitFive.init(NumberFive02, glowPurple, highWhite04, 1);
highscoreDigitFive.addFrame(NumberFive02);
highscoreDigits.push(highscoreDigitFive);

var highscoreDigitSix = Object.create(HighScoreClass);
highscoreDigitSix.init(NumberSix02, glowPurple, highWhite04, 1);
highscoreDigitSix.addFrame(NumberSix02);
highscoreDigits.push(highscoreDigitSix);

var highscoreDigitSeven = Object.create(HighScoreClass);
highscoreDigitSeven.init(NumberSeven02, glowPurple, highWhite04, 1);
highscoreDigitSeven.addFrame(NumberSeven02);
highscoreDigits.push(highscoreDigitSeven);

var highscoreDigitEight = Object.create(HighScoreClass);
highscoreDigitEight.init(NumberEight02, glowPurple, highWhite04, 1);
highscoreDigitEight.addFrame(NumberEight02);
highscoreDigits.push(highscoreDigitEight);

var highscoreDigitNine = Object.create(HighScoreClass);
highscoreDigitNine.init(NumberNine02, glowPurple, highWhite04, 1);
highscoreDigitNine.addFrame(NumberNine02);
highscoreDigits.push(highscoreDigitNine);

var highscoreLetters = new Array();

var highscoreLetterA = Object.create(HighScoreClass);
highscoreLetterA.init(LetterA02, glowPurple, highWhite04, 1);
highscoreLetterA.addFrame(LetterA02);
highscoreLetterA.tag = "High Score Letters A";
highscoreLetters.push(highscoreLetterA);

var highscoreLetterB = Object.create(HighScoreClass);
highscoreLetterB.init(LetterB02, glowPurple, highWhite04, 1);
highscoreLetterB.addFrame(LetterB02);
highscoreLetterB.tag = "High Score Letters B";
highscoreLetters.push(highscoreLetterB);

var highscoreLetterC = Object.create(HighScoreClass);
highscoreLetterC.init(LetterC02, glowPurple, highWhite04, 1);
highscoreLetterC.addFrame(LetterC02);
highscoreLetterC.tag = "High Score Letters C";
highscoreLetters.push(highscoreLetterC);

var highscoreLetterD = Object.create(HighScoreClass);
highscoreLetterD.init(LetterD02, glowPurple, highWhite04, 1);
highscoreLetterD.addFrame(LetterD02);
highscoreLetterD.tag = "High Score Letters D";
highscoreLetters.push(highscoreLetterD);

var highscoreLetterE = Object.create(HighScoreClass);
highscoreLetterE.init(LetterE02, glowPurple, highWhite04, 1);
highscoreLetterE.addFrame(LetterE02);
highscoreLetterE.tag = "High Score Letters E";
highscoreLetters.push(highscoreLetterE);

var highscoreLetterF = Object.create(HighScoreClass);
highscoreLetterF.init(LetterF02, glowPurple, highWhite04, 1);
highscoreLetterF.addFrame(LetterF02);
highscoreLetterF.tag = "High Score Letters F";
highscoreLetters.push(highscoreLetterF);

var highscoreLetterG = Object.create(HighScoreClass);
highscoreLetterG.init(LetterG02, glowPurple, highWhite04, 1);
highscoreLetterG.addFrame(LetterG02);
highscoreLetterG.tag = "High Score Letters G";
highscoreLetters.push(highscoreLetterG);

var highscoreLetterH = Object.create(HighScoreClass);
highscoreLetterH.init(LetterH02, glowPurple, highWhite04, 1);
highscoreLetterH.addFrame(LetterH02);
highscoreLetterH.tag = "High Score Letters H";
highscoreLetters.push(highscoreLetterH);

var highscoreLetterI = Object.create(HighScoreClass);
highscoreLetterI.init(LetterI02, glowPurple, highWhite04, 1);
highscoreLetterI.addFrame(LetterI02);
highscoreLetterI.tag = "High Score Letters I";
highscoreLetters.push(highscoreLetterI);

var highscoreLetterJ = Object.create(HighScoreClass);
highscoreLetterJ.init(LetterJ02, glowPurple, highWhite04, 1);
highscoreLetterJ.addFrame(LetterJ02);
highscoreLetterJ.tag = "High Score Letters J";
highscoreLetters.push(highscoreLetterJ);

var highscoreLetterK = Object.create(HighScoreClass);
highscoreLetterK.init(LetterK02, glowPurple, highWhite04, 1);
highscoreLetterK.addFrame(LetterK02);
highscoreLetterK.tag = "High Score Letters K";
highscoreLetters.push(highscoreLetterK);

var highscoreLetterL = Object.create(HighScoreClass);
highscoreLetterL.init(LetterL02, glowPurple, highWhite04, 1);
highscoreLetterL.addFrame(LetterL02);
highscoreLetterL.tag = "High Score Letters L";
highscoreLetters.push(highscoreLetterL);

var highscoreLetterM = Object.create(HighScoreClass);
highscoreLetterM.init(LetterM02, glowPurple, highWhite04, 1);
highscoreLetterM.addFrame(LetterM02);
highscoreLetterM.tag = "High Score Letters M";
highscoreLetters.push(highscoreLetterM);

var highscoreLetterN = Object.create(HighScoreClass);
highscoreLetterN.init(LetterN02, glowPurple, highWhite04, 1);
highscoreLetterN.addFrame(LetterN02);
highscoreLetterN.tag = "High Score Letters N";
highscoreLetters.push(highscoreLetterN);

var highscoreLetterO = Object.create(HighScoreClass);
highscoreLetterO.init(LetterO02, glowPurple, highWhite04, 1);
highscoreLetterO.addFrame(LetterO02);
highscoreLetterO.tag = "High Score Letters O";
highscoreLetters.push(highscoreLetterO);

var highscoreLetterP = Object.create(HighScoreClass);
highscoreLetterP.init(LetterP02, glowPurple, highWhite04, 1);
highscoreLetterP.addFrame(LetterP02);
highscoreLetterP.tag = "High Score Letters P";
highscoreLetters.push(highscoreLetterP);

var highscoreLetterQ = Object.create(HighScoreClass);
highscoreLetterQ.init(LetterQ02, glowPurple, highWhite04, 1);
highscoreLetterQ.addFrame(LetterQ02);
highscoreLetterQ.tag = "High Score Letters Q";
highscoreLetters.push(highscoreLetterQ);

var highscoreLetterR = Object.create(HighScoreClass);
highscoreLetterR.init(LetterR02, glowPurple, highWhite04, 1);
highscoreLetterR.addFrame(LetterR02);
highscoreLetterR.tag = "High Score Letters R";
highscoreLetters.push(highscoreLetterR);

var highscoreLetterS = Object.create(HighScoreClass);
highscoreLetterS.init(LetterS02, glowPurple, highWhite04, 1);
highscoreLetterS.addFrame(LetterS02);
highscoreLetterS.tag = "High Score Letters S";
highscoreLetters.push(highscoreLetterS);

var highscoreLetterT = Object.create(HighScoreClass);
highscoreLetterT.init(LetterT02, glowPurple, highWhite04, 1);
highscoreLetterT.addFrame(LetterT02);
highscoreLetterT.tag = "High Score Letters T";
highscoreLetters.push(highscoreLetterT);

var highscoreLetterU = Object.create(HighScoreClass);
highscoreLetterU.init(LetterU02, glowPurple, highWhite04, 1);
highscoreLetterU.addFrame(LetterU02);
highscoreLetterU.tag = "High Score Letters U";
highscoreLetters.push(highscoreLetterU);

var highscoreLetterV = Object.create(HighScoreClass);
highscoreLetterV.init(LetterV02, glowPurple, highWhite04, 1);
highscoreLetterV.addFrame(LetterV02);
highscoreLetterV.tag = "High Score Letters V";
highscoreLetters.push(highscoreLetterV);

var highscoreLetterW = Object.create(HighScoreClass);
highscoreLetterW.init(LetterW02, glowPurple, highWhite04, 1);
highscoreLetterW.addFrame(LetterW02);
highscoreLetterW.tag = "High Score Letters W";
highscoreLetters.push(highscoreLetterW);

var highscoreLetterX = Object.create(HighScoreClass);
highscoreLetterX.init(LetterX02, glowPurple, highWhite04, 1);
highscoreLetterX.addFrame(LetterX02);
highscoreLetterX.tag = "High Score Letters X";
highscoreLetters.push(highscoreLetterX);

var highscoreLetterY = Object.create(HighScoreClass);
highscoreLetterY.init(LetterY02, glowPurple, highWhite04, 1);
highscoreLetterY.addFrame(LetterY02);
highscoreLetterY.tag = "High Score Letters Y";
highscoreLetters.push(highscoreLetterY);

var highscoreLetterZ = Object.create(HighScoreClass);
highscoreLetterZ.init(LetterZ02, glowPurple, highWhite04, 1);
highscoreLetterZ.addFrame(LetterZ02);
highscoreLetterZ.tag = "High Score Letters Z";
highscoreLetters.push(highscoreLetterZ);

function setHighScore(finalScore)
{
    var bestScore = 0;//highScores[0];
    var worstScore = 0;//highScores[9];

    //localStorage.getitem("HighScoresArray");

    if (finalScore > worstScore)
    {
        bestScore = highScores[0];
        if (highScores.length == 10)
        {
            highScores.splice(9, 1);
            highScores.push(finalScore);
            worstScore = highScores[highScores.length - 1];
            
        }
        else
        {
            highScores.push(finalScore);
        }
    }
    highScores.sort(function (a, b) { return b - a });

    for (var h = 0; h < highscoreList.length; ++h)
    {
        for (var i = 0; i < highscoreList[h].length; ++i)
        {
            highscoreList[h][i].frameList = highscoreDigits[getDigit(highScores[h], i)].frameList;
            highscoreList[h][i].inbetweensList = highscoreDigits[getDigit(highScores[h], i)].inbetweensList;
        }
    }

    console.log(highScores);
    //localStorage.setItem("HighScoresArray", "highScores")
}

/*
localStorage.setItem("keyName", "data"); <-- saves item with that name and data
localStorage.getItem("keyName"); <-- retrives item with that name
localStorage.removeItem("keyName"); <-- removes item with that name
localStorage.clear(); <-- clears local storage

JSON.stringify();
JSON.parse();
*/