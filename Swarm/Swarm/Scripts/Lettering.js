
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
SwarmLetterClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseThreeInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var swarmS = Object.create(SwarmLetterClass);
swarmS.init(LetterS02, glowCyan, highCyan, 1);
swarmS.addFrame(LetterS02);
mainMenuList.push(swarmS);

var swarmW = Object.create(SwarmLetterClass);
swarmW.init(LetterW02, glowCyan, highCyan, 1);
swarmW.addFrame(LetterW02);
mainMenuList.push(swarmW);

var swarmA = Object.create(SwarmLetterClass);
swarmA.init(LetterA02, glowCyan, highCyan, 1);
swarmA.addFrame(LetterA02);
mainMenuList.push(swarmA);

var swarmR = Object.create(SwarmLetterClass);
swarmR.baseThreeStart = swarmR.start;
swarmR.init(LetterR02, glowCyan, highCyan, 1);
swarmR.addFrame(LetterR02);
swarmR.start = function ()
{
	this.baseThreeStart();
	this.posY = swarmPosY - 120;
};
mainMenuList.push(swarmR);

var swarmM = Object.create(SwarmLetterClass);
swarmM.init(LetterM02, glowCyan, highCyan, 1);
swarmM.addFrame(LetterM02);
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
mainMenuList.push(playP);

var playL = Object.create(PlayLetterObjectClass);
playL.init(LetterL02, glowCyan, highCyan, 1);
playL.addFrame(LetterL02);
mainMenuList.push(playL);

var playA = Object.create(PlayLetterObjectClass);
playA.init(LetterA02, glowCyan, highCyan, 1);
playA.addFrame(LetterA02);
mainMenuList.push(playA);

var playY = Object.create(PlayLetterObjectClass);
playY.init(LetterY02, glowCyan, highCyan, 1);
playY.addFrame(LetterY02);
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
instructionsS2.start = function ()
{
	this.baseThreeStart();
	this.posX = instructionsPosStart + instructionsPosCurr;
	instructionsPosCurr += (charWidth * 2);
	this.posY = instructionsYPos;
};
mainMenuList.push(instructionsS2);
//End of INSTRUCTIONS

//Start of HI-SCORE
//Hi-Score Position initialisation
var hiscorePosStart = canvasWidth - (14 * 30);
var hiscorePosCurr = 0;
var hiScoreYPos = (canvasHeight / 2) + (charWidth * 5);

var HiScoreLetterObjectClass = Object.create(MainMenuLetterClass);
HiScoreLetterObjectClass.baseThreeInit = HiScoreLetterObjectClass.init;
HiScoreLetterObjectClass.baseTwoStart = HiScoreLetterObjectClass.start;
HiScoreLetterObjectClass.start = function ()
{
	this.baseTwoStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos;
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
hiScoreH.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos;
};
mainMenuList.push(hiScoreH);

var hiScoreI = Object.create(PlayLetterObjectClass);
hiScoreI.baseThreeStart = hiScoreI.start;
hiScoreI.init(LetterI02, glowCyan, highCyan, 1);
hiScoreI.addFrame(LetterI02);
hiScoreI.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos;
};
mainMenuList.push(hiScoreI);

var hiScoreDash = Object.create(PlayLetterObjectClass);
hiScoreDash.baseThreeStart = hiScoreDash.start;
hiScoreDash.init(Dash02, glowCyan, highCyan, 1);
hiScoreDash.addFrame(Dash02);
hiScoreDash.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos;
};
mainMenuList.push(hiScoreDash);

var hiScoreS = Object.create(PlayLetterObjectClass);
hiScoreS.baseThreeStart = hiScoreS.start;
hiScoreS.init(LetterS02, glowCyan, highCyan, 1);
hiScoreS.addFrame(LetterS02);
hiScoreS.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos;
};
mainMenuList.push(hiScoreS);

var hiScoreC = Object.create(PlayLetterObjectClass);
hiScoreC.baseThreeStart = hiScoreC.start;
hiScoreC.init(LetterC02, glowCyan, highCyan, 1);
hiScoreC.addFrame(LetterC02);
hiScoreC.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos - 60;
};
mainMenuList.push(hiScoreC);

var hiScoreO = Object.create(PlayLetterObjectClass);
hiScoreO.baseThreeStart = hiScoreO.start;
hiScoreO.init(LetterO02, glowCyan, highCyan, 1);
hiScoreO.addFrame(LetterO02);
hiScoreO.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos - 60;
};
mainMenuList.push(hiScoreO);

var hiScoreR = Object.create(PlayLetterObjectClass);
hiScoreR.baseThreeStart = hiScoreR.start;
hiScoreR.init(LetterR02, glowCyan, highCyan, 1);
hiScoreR.addFrame(LetterR02);
hiScoreR.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos - 60;
};
mainMenuList.push(hiScoreR);

var hiScoreE = Object.create(PlayLetterObjectClass);
hiScoreE.baseThreeStart = hiScoreE.start;
hiScoreE.init(LetterE02, glowCyan, highCyan, 1);
hiScoreE.addFrame(LetterE02);
hiScoreE.start = function ()
{
	this.baseThreeStart();
	this.posX = hiscorePosStart + hiscorePosCurr;
	hiscorePosCurr += (charWidth * 2);
	this.posY = hiScoreYPos - 60;
};
mainMenuList.push(hiScoreE);