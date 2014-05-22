//Main Menu Initializations
var mainMenuList = new Array();
var drawLetterQueue = new Array();
var lengthDrawLetterQueue = 0;

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
swarmR.init(LetterR02, swarmGlow, swarmHigh, 1);
swarmR.addFrame(LetterR02);
swarmR.tag = "Swarm R";
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
    this.posY = instructionsYPos;
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
    this.posY = instructionsYPos;
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
    this.posY = instructionsYPos;
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
    this.posY = instructionsYPos;
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
    this.posY = instructionsYPos;
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
    this.posY = hiscoreYPos;
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
    this.posY = hiscoreYPos;
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
    this.posY = hiscoreYPos;
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
    this.posY = hiscoreYPos;
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