
var charWidth = 20;
//Main Menu Initializations
var mainMenuList = new Array();
var drawLetterQueue = new Array();
var lengthDrawLetterQueue = 0;
//Instructions InitialiZations
var instructionsList = new Array();
var drawInstructionsQueue = new Array();
var lengthDrawInstructionsQueue = 0;
//Hi-Score Initializations
var hiScoreStateList = new Array();
var drawHiScoreQueue = new Array();
var lengthDrawHiScoreQueue = 0;


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
    this.tag = "VECTOR V";
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
};
objectsList.push(objLetterR);

//SWARM letters for the main menu
var MainMenuLetterClass = Object.create(LetterObjectClass);
MainMenuLetterClass.baseTwoInit = MainMenuLetterClass.init;
MainMenuLetterClass.baseStart = MainMenuLetterClass.start;
MainMenuLetterClass.start = function ()
{
    this.baseStart();
    this.multX = 2;
    this.multY = 2;
};
MainMenuLetterClass.update = function ()
{
    var self = this;
    drawLetterQueue[lengthDrawLetterQueue++] = self;
}

MainMenuLetterClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

//Swarm position initialisation
var swarmPosStart = canvasWidth - (17 * 30);
var swarmPosCurr = 0;
var swarmPosY = 100;
var swarmGlow = glowArray[0];
var swarmHigh = highArray[0];
var lengthGlowArray = 0;

var SwarmLetterClass = Object.create(MainMenuLetterClass);
SwarmLetterClass.baseThreeInit = SwarmLetterClass.init;
SwarmLetterClass.baseTwoStart = SwarmLetterClass.start;
SwarmLetterClass.start = function ()
{
    this.baseTwoStart();
    this.posX = swarmPosStart + swarmPosCurr;
    swarmPosCurr += (charWidth * 5);
    this.posY = swarmPosY;
    this.multX = 10;
    this.multY = 10;
};
SwarmLetterClass.update = function ()
{
    var self = this;
    drawLetterQueue[lengthDrawLetterQueue++] = self;
    this.glow = glowArray[lengthGlowArray];
    this.highlight = highArray[lengthGlowArray];
    lengthGlowArray++;
    if (lengthGlowArray >= glowArray.length)
    {
        lengthGlowArray = 0;
    }
};
SwarmLetterClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseThreeInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var swarmS = Object.create(SwarmLetterClass);
swarmS.init(LetterS02, swarmGlow, swarmHigh, 1);
swarmS.addFrame(LetterS02);
swarmS.tag = "Swarm S";
mainMenuList.push(swarmS);

var swarmW = Object.create(SwarmLetterClass);
swarmW.init(LetterW02, swarmGlow, swarmHigh, 1);
swarmW.addFrame(LetterW02);
swarmW.tag = "Swarm W";
mainMenuList.push(swarmW);

var swarmA = Object.create(SwarmLetterClass);
swarmA.init(LetterA02, swarmGlow, swarmHigh, 1);
swarmA.addFrame(LetterA02);
swarmA.tag = "Swarm A";
mainMenuList.push(swarmA);

var swarmR = Object.create(SwarmLetterClass);
swarmR.baseThreeStart = swarmR.start;
swarmR.init(LetterR02, swarmGlow, swarmHigh, 1);
swarmR.addFrame(LetterR02);
swarmR.tag = "Swarm R";
swarmR.start = function ()
{
    this.baseThreeStart();
    this.posY = swarmPosY - 120;
};
mainMenuList.push(swarmR);

var swarmM = Object.create(SwarmLetterClass);
swarmM.init(LetterM02, swarmGlow, swarmHigh, 1);
swarmM.addFrame(LetterM02);
swarmM.tag = "Swarm M";
mainMenuList.push(swarmM);

//Start of PLAY
//Play position initialisation
var playPosStart = canvasWidth - (12 * 30);
var playPosCurr = 0;
var playYPos = (canvasHeight / 2) - charWidth;

var PlayLetterObjectClass = Object.create(MainMenuLetterClass);
PlayLetterObjectClass.baseThreeInit = PlayLetterObjectClass.init;
PlayLetterObjectClass.baseTwoStart = PlayLetterObjectClass.start;
PlayLetterObjectClass.start = function ()
{
    this.baseTwoStart();
    this.posX = playPosStart + playPosCurr;
    playPosCurr += (charWidth * 2);
    this.posY = playYPos;
    this.multX = 5;
    this.multY = 5;
};

PlayLetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseThreeInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var playP = Object.create(PlayLetterObjectClass);
playP.init(LetterP02, glowCyan, highCyan, 1);
playP.addFrame(LetterP02);
playP.tag = "Play P";
mainMenuList.push(playP);

var playL = Object.create(PlayLetterObjectClass);
playL.init(LetterL02, glowCyan, highCyan, 1);
playL.addFrame(LetterL02);
playL.tag = "Play L";
mainMenuList.push(playL);

var playA = Object.create(PlayLetterObjectClass);
playA.init(LetterA02, glowCyan, highCyan, 1);
playA.addFrame(LetterA02);
playA.tag = "Play A";
mainMenuList.push(playA);

var playY = Object.create(PlayLetterObjectClass);
playY.init(LetterY02, glowCyan, highCyan, 1);
playY.addFrame(LetterY02);
playY.tag = "Play Y";
mainMenuList.push(playY);
//End of PLAY

//Start of INSTRUCTIONS
//Instructions position initialisation
var instructionsPosStart = canvasWidth - (17 * 30);
var instructionsPosCurr = 0;
var instructionsYPos = (canvasHeight / 2) + (charWidth * 2);

var InstructionsLetterObjectClass = Object.create(MainMenuLetterClass);
InstructionsLetterObjectClass.baseThreeInit = InstructionsLetterObjectClass.init;
InstructionsLetterObjectClass.baseTwoStart = InstructionsLetterObjectClass.start;
InstructionsLetterObjectClass.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    this.posY = instructionsYPos;
    this.multX = 5;
    this.multY = 5;
};

InstructionsLetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseThreeInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var instructionsI1 = Object.create(PlayLetterObjectClass);
instructionsI1.baseThreeStart = instructionsI1.start;
instructionsI1.init(LetterI02, glowCyan, highCyan, 1);
instructionsI1.addFrame(LetterI02);
instructionsI1.tag = "Instructions I1";
instructionsI1.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos;
};
mainMenuList.push(instructionsI1);

var instructionsN1 = Object.create(PlayLetterObjectClass);
instructionsN1.baseThreeStart = instructionsN1.start;
instructionsN1.init(LetterN02, glowCyan, highCyan, 1);
instructionsN1.addFrame(LetterN02);
instructionsN1.tag = "Instructions N1";
instructionsN1.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos;
};
mainMenuList.push(instructionsN1);

var instructionsS1 = Object.create(PlayLetterObjectClass);
instructionsS1.baseThreeStart = instructionsS1.start;
instructionsS1.init(LetterS02, glowCyan, highCyan, 1);
instructionsS1.addFrame(LetterS02);
instructionsS1.tag = "Instructions S1";
instructionsS1.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos;
};
mainMenuList.push(instructionsS1);

var instructionsT1 = Object.create(PlayLetterObjectClass);
instructionsT1.baseThreeStart = instructionsT1.start;
instructionsT1.init(LetterT02, glowCyan, highCyan, 1);
instructionsT1.addFrame(LetterT02);
instructionsT1.tag = "Instructions T1";
instructionsT1.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos - 60;
};
mainMenuList.push(instructionsT1);

var instructionsR = Object.create(PlayLetterObjectClass);
instructionsR.baseThreeStart = instructionsR.start;
instructionsR.init(LetterR02, glowCyan, highCyan, 1);
instructionsR.addFrame(LetterR02);
instructionsR.tag = "Instructions R";
instructionsR.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos - 60;
};
mainMenuList.push(instructionsR);

var instructionsU = Object.create(PlayLetterObjectClass);
instructionsU.baseThreeStart = instructionsU.start;
instructionsU.init(LetterU02, glowCyan, highCyan, 1);
instructionsU.addFrame(LetterU02);
instructionsU.tag = "Instructions U";
instructionsU.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos;
};
mainMenuList.push(instructionsU);

var instructionsC = Object.create(PlayLetterObjectClass);
instructionsC.baseThreeStart = instructionsC.start;
instructionsC.init(LetterC02, glowCyan, highCyan, 1);
instructionsC.addFrame(LetterC02);
instructionsC.tag = "Instructions C";
instructionsC.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos - 60;
};
mainMenuList.push(instructionsC);

var instructionsT2 = Object.create(PlayLetterObjectClass);
instructionsT2.baseThreeStart = instructionsT2.start;
instructionsT2.init(LetterT02, glowCyan, highCyan, 1);
instructionsT2.addFrame(LetterT02);
instructionsT2.tag = "Instruction T2";
instructionsT2.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos - 60;
};
mainMenuList.push(instructionsT2);

var instructionsI2 = Object.create(PlayLetterObjectClass);
instructionsI2.baseThreeStart = instructionsI2.start;
instructionsI2.init(LetterI02, glowCyan, highCyan, 1);
instructionsI2.addFrame(LetterI02);
instructionsI2.tag = "Instruction I2";
instructionsI2.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos;
};
mainMenuList.push(instructionsI2);

var instructionsO = Object.create(PlayLetterObjectClass);
instructionsO.baseThreeStart = instructionsO.start;
instructionsO.init(LetterO02, glowCyan, highCyan, 1);
instructionsO.addFrame(LetterO02);
instructionsO.tag = "Instruction O";
instructionsO.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos - 60;
};
mainMenuList.push(instructionsO);

var instructionsN2 = Object.create(PlayLetterObjectClass);
instructionsN2.baseThreeStart = instructionsN2.start;
instructionsN2.init(LetterN02, glowCyan, highCyan, 1);
instructionsN2.addFrame(LetterN02);
instructionsN2.tag = "Instruction N2";
instructionsN2.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos;
};
mainMenuList.push(instructionsN2);

var instructionsS2 = Object.create(PlayLetterObjectClass);
instructionsS2.baseThreeStart = instructionsS2.start;
instructionsS2.init(LetterS02, glowCyan, highCyan, 1);
instructionsS2.addFrame(LetterS02);
instructionsS2.tag = "Instruction S2";
instructionsS2.start = function ()
{
    this.baseThreeStart();
    this.posX = instructionsPosStart + instructionsPosCurr;
    instructionsPosCurr += (charWidth * 2);
    this.posY = instructionsYPos;
};
mainMenuList.push(instructionsS2);
//End of INSTRUCTIONS

//Start of HI-SCORE for Main Menu
//Hi-Score Position initialisation
var hiscorePosStart = canvasWidth - (15 * 30);
var hiscorePosCurr = 0;
var hiscoreYPos = (canvasHeight / 2) + (charWidth * 5);

var HiScoreLetterObjectClass = Object.create(MainMenuLetterClass);
HiScoreLetterObjectClass.baseThreeInit = HiScoreLetterObjectClass.init;
HiScoreLetterObjectClass.baseTwoStart = HiScoreLetterObjectClass.start;
HiScoreLetterObjectClass.start = function ()
{
    this.baseTwoStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos;
    this.multX = 5;
    this.multY = 5;
};

HiScoreLetterObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseThreeInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var hiScoreH = Object.create(PlayLetterObjectClass);
hiScoreH.baseThreeStart = hiScoreH.start;
hiScoreH.init(LetterH02, glowCyan, highCyan, 1);
hiScoreH.addFrame(LetterH02);
hiScoreH.tag = "High Score H";
hiScoreH.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos;
};
mainMenuList.push(hiScoreH);

var hiScoreI = Object.create(PlayLetterObjectClass);
hiScoreI.baseThreeStart = hiScoreI.start;
hiScoreI.init(LetterI02, glowCyan, highCyan, 1);
hiScoreI.addFrame(LetterI02);
hiScoreI.tag = "High Score I";
hiScoreI.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos;
};
mainMenuList.push(hiScoreI);

var hiScoreDash = Object.create(PlayLetterObjectClass);
hiScoreDash.baseThreeStart = hiScoreDash.start;
hiScoreDash.init(Dash02, glowCyan, highCyan, 1);
hiScoreDash.addFrame(Dash02);
hiScoreDash.tag = "High Score Dash";
hiScoreDash.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos;
};
mainMenuList.push(hiScoreDash);

var hiScoreS = Object.create(PlayLetterObjectClass);
hiScoreS.baseThreeStart = hiScoreS.start;
hiScoreS.init(LetterS02, glowCyan, highCyan, 1);
hiScoreS.addFrame(LetterS02);
hiScoreS.tag = "High Score S";
hiScoreS.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos;
};
mainMenuList.push(hiScoreS);

var hiScoreC = Object.create(PlayLetterObjectClass);
hiScoreC.baseThreeStart = hiScoreC.start;
hiScoreC.init(LetterC02, glowCyan, highCyan, 1);
hiScoreC.addFrame(LetterC02);
hiScoreC.tag = "High Score C";
hiScoreC.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos - 60;
};
mainMenuList.push(hiScoreC);

var hiScoreO = Object.create(PlayLetterObjectClass);
hiScoreO.baseThreeStart = hiScoreO.start;
hiScoreO.init(LetterO02, glowCyan, highCyan, 1);
hiScoreO.addFrame(LetterO02);
hiScoreO.tag = "High Score O";
hiScoreO.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos - 60;
};
mainMenuList.push(hiScoreO);

var hiScoreR = Object.create(PlayLetterObjectClass);
hiScoreR.baseThreeStart = hiScoreR.start;
hiScoreR.init(LetterR02, glowCyan, highCyan, 1);
hiScoreR.addFrame(LetterR02);
hiScoreR.tag = "High Score R";
hiScoreR.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos - 60;
};
mainMenuList.push(hiScoreR);

var hiScoreE = Object.create(PlayLetterObjectClass);
hiScoreE.baseThreeStart = hiScoreE.start;
hiScoreE.init(LetterE02, glowCyan, highCyan, 1);
hiScoreE.addFrame(LetterE02);
hiScoreE.tag = "High Score E";
hiScoreE.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos - 60;
};
mainMenuList.push(hiScoreE);

var hiScoreS2 = Object.create(PlayLetterObjectClass);
hiScoreS2.baseThreeStart = hiScoreS2.start;
hiScoreS2.init(LetterS02, glowCyan, highCyan, 1);
hiScoreS2.addFrame(LetterS02);
hiScoreS2.tag = "High Score S2";
hiScoreS2.start = function ()
{
    this.baseThreeStart();
    this.posX = hiscorePosStart + hiscorePosCurr;
    hiscorePosCurr += (charWidth * 2);
    this.posY = hiscoreYPos;
};
mainMenuList.push(hiScoreS2);

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
instructionsStateI1.baseTwoStart = instructionsStateI1.start;
instructionsStateI1.init(LetterI02, glowCyan, highCyan, 1);
instructionsStateI1.addFrame(LetterI02);
instructionsStateI1.tag = "Instructions State I1";
instructionsStateI1.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
};
instructionsList.push(instructionsStateI1);

var instructionsStateN1 = Object.create(InstructionsStateObjectClass);
instructionsStateN1.baseTwoStart = instructionsStateN1.start;
instructionsStateN1.init(LetterN02, glowCyan, highCyan, 1);
instructionsStateN1.addFrame(LetterN02);
instructionsStateN1.tag = "Instructions State N1";
instructionsStateN1.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
};
instructionsList.push(instructionsStateN1);

var instructionsStateS1 = Object.create(InstructionsStateObjectClass);
instructionsStateS1.baseTwoStart = instructionsStateS1.start;
instructionsStateS1.init(LetterS02, glowCyan, highCyan, 1);
instructionsStateS1.addFrame(LetterS02);
instructionsStateS1.tag = "Instructions State S1";
instructionsStateS1.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
};
instructionsList.push(instructionsStateS1);

var instructionsStateT1 = Object.create(InstructionsStateObjectClass);
instructionsStateT1.baseTwoStart = instructionsStateT1.start;
instructionsStateT1.init(LetterT02, glowCyan, highCyan, 1);
instructionsStateT1.addFrame(LetterT02);
instructionsStateT1.tag = "Instructions State T1";
instructionsStateT1.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos - 60;
};
instructionsList.push(instructionsStateT1);

var instructionsStateR = Object.create(InstructionsStateObjectClass);
instructionsStateR.baseTwoStart = instructionsStateR.start;
instructionsStateR.init(LetterR02, glowCyan, highCyan, 1);
instructionsStateR.addFrame(LetterR02);
instructionsStateR.tag = "Instructions State R";
instructionsStateR.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos - 60;
};
instructionsList.push(instructionsStateR);

var instructionsStateU = Object.create(InstructionsStateObjectClass);
instructionsStateU.baseTwoStart = instructionsStateU.start;
instructionsStateU.init(LetterU02, glowCyan, highCyan, 1);
instructionsStateU.addFrame(LetterU02);
instructionsStateU.tag = "Instructions State U";
instructionsStateU.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
};
instructionsList.push(instructionsStateU);

var instructionsStateC = Object.create(InstructionsStateObjectClass);
instructionsStateC.baseTwoStart = instructionsStateC.start;
instructionsStateC.init(LetterC02, glowCyan, highCyan, 1);
instructionsStateC.addFrame(LetterC02);
instructionsStateC.tag = "Instructions State C";
instructionsStateC.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos - 60;
};
instructionsList.push(instructionsStateC);

var instructionsStateT2 = Object.create(InstructionsStateObjectClass);
instructionsStateT2.baseTwoStart = instructionsStateT2.start;
instructionsStateT2.init(LetterT02, glowCyan, highCyan, 1);
instructionsStateT2.addFrame(LetterT02);
instructionsStateT2.tag = "Instructions State T2";
instructionsStateT2.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos - 60;
};
instructionsList.push(instructionsStateT2);

var instructionsStateI2 = Object.create(InstructionsStateObjectClass);
instructionsStateI2.baseTwoStart = instructionsStateI2.start;
instructionsStateI2.init(LetterI02, glowCyan, highCyan, 1);
instructionsStateI2.addFrame(LetterI02);
instructionsStateI2.tag = "Instructions State I2";
instructionsStateI2.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
};
instructionsList.push(instructionsStateI2);

var instructionsStateO = Object.create(InstructionsStateObjectClass);
instructionsStateO.baseTwoStart = instructionsStateO.start;
instructionsStateO.init(LetterO02, glowCyan, highCyan, 1);
instructionsStateO.addFrame(LetterO02);
instructionsStateO.tag = "Instructions State O";
instructionsStateO.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos - 60;
};
instructionsList.push(instructionsStateO);

var instructionsStateN2 = Object.create(InstructionsStateObjectClass);
instructionsStateN2.baseTwoStart = instructionsStateN2.start;
instructionsStateN2.init(LetterN02, glowCyan, highCyan, 1);
instructionsStateN2.addFrame(LetterN02);
instructionsStateN2.tag = "Instructions State N2";
instructionsStateN2.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
};
instructionsList.push(instructionsStateN2);

var instructionsStateS2 = Object.create(InstructionsStateObjectClass);
instructionsStateS2.baseTwoStart = instructionsStateS2.start;
instructionsStateS2.init(LetterS02, glowCyan, highCyan, 1);
instructionsStateS2.addFrame(LetterS02);
instructionsStateS2.tag = "Instructions State S2";
instructionsStateS2.start = function ()
{
    this.baseTwoStart();
    this.posX = instructionsStatePosStart + instructionsStatePosCurr;
    instructionsStatePosCurr += (charWidth * 2);
    this.posY = instructionsStateYPos;
};
instructionsList.push(instructionsStateS2);

//Text for the Instructions screen
//var instructionsArray = new Array();
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
    this.posY = instructionsTextLineOne - 60;
};
instructionsList.push(instructionsTextE);

var instructionsTextT = Object.create(InstructionsTextClass);
instructionsTextT.baseThreeStart = instructionsTextT.start;
instructionsTextT.init(LetterT02, glowCyan, highCyan, 1);
instructionsTextT.addFrame(LetterT02);
instructionsTextT.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineOne - 60;
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
    this.posY = instructionsTextLineOne - 60;
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
    this.posY = instructionsTextLineOne - 60;
};
instructionsList.push(instructionsTextR);

var instructionsTextR = Object.create(InstructionsTextClass);
instructionsTextR.baseThreeStart = instructionsTextR.start;
instructionsTextR.init(LetterR02, glowCyan, highCyan, 1);
instructionsTextR.addFrame(LetterR02);
instructionsTextR.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineOne - 60;
};
instructionsList.push(instructionsTextR);

var instructionsTextO = Object.create(InstructionsTextClass);
instructionsTextO.baseThreeStart = instructionsTextO.start;
instructionsTextO.init(LetterO02, glowCyan, highCyan, 1);
instructionsTextO.addFrame(LetterO02);
instructionsTextO.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineOne - 60;
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
    this.posY = instructionsTextLineTwo - 60;
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
    this.posY = instructionsTextLineTwo - 60;
};
instructionsList.push(instructionsTextT);

var instructionsTextO = Object.create(InstructionsTextClass);
instructionsTextO.baseThreeStart = instructionsTextO.start;
instructionsTextO.init(LetterO02, glowCyan, highCyan, 1);
instructionsTextO.addFrame(LetterO02);
instructionsTextO.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo - 60;
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
    this.posY = instructionsTextLineTwo - 60;
};
instructionsList.push(instructionsTextO);

var instructionsTextV = Object.create(InstructionsTextClass);
instructionsTextV.baseThreeStart = instructionsTextV.start;
instructionsTextV.init(LetterV02, glowCyan, highCyan, 1);
instructionsTextV.addFrame(LetterV02);
instructionsTextV.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo - 60;
};
instructionsList.push(instructionsTextV);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineTwo - 60;
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
    this.posY = instructionsTextLineThree - 60;
};
instructionsList.push(instructionsTextR);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineThree - 60;
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
    this.posY = instructionsTextLineThree - 60;
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
    this.posY = instructionsTextLineThree - 60;
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
    this.posY = instructionsTextLineFour - 60;
};
instructionsList.push(instructionsTextC);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour - 60;
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
    this.posY = instructionsTextLineFour - 60;
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
    this.posY = instructionsTextLineFour - 60;
};
instructionsList.push(instructionsTextT);

var instructionsTextO = Object.create(InstructionsTextClass);
instructionsTextO.baseThreeStart = instructionsTextO.start;
instructionsTextO.init(LetterO02, glowCyan, highCyan, 1);
instructionsTextO.addFrame(LetterO02);
instructionsTextO.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFour - 60;
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
    this.posY = instructionsTextLineFive - 60;
};
instructionsList.push(instructionsTextR);

var instructionsTextE = Object.create(InstructionsTextClass);
instructionsTextE.baseThreeStart = instructionsTextE.start;
instructionsTextE.init(LetterE02, glowCyan, highCyan, 1);
instructionsTextE.addFrame(LetterE02);
instructionsTextE.start = function ()
{
    this.baseThreeStart();
    this.posY = instructionsTextLineFive - 60;
};
instructionsList.push(instructionsTextE);

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
    this.posY = backYPos - 60;
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
    this.posY = backYPos - 60;
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