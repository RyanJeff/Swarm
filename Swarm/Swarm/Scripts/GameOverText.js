var gameOverList = new Array();
var gameOverQueue = new Array();
var lengthGameOverQueue = 0;
var gameOverCharWidth = 80
var gameOverPosStart = canvasWidth - (4 * gameOverCharWidth);
var gameOverPosCurr = 0;
var gameOverLineOnePosY = 100;
var gameOverLineTwoPosY = 200;

var GameOverLetterClass = Object.create(LetterObjectClass);
GameOverLetterClass.baseTwoInit = GameOverLetterClass.init;
GameOverLetterClass.baseStart = GameOverLetterClass.start;
GameOverLetterClass.start = function ()
{
    this.baseStart();
    this.posX = gameOverPosStart + gameOverPosCurr;
    gameOverPosCurr += gameOverCharWidth;
    this.posY = gameOverLineOnePosY;
    this.multX = 10;
    this.multY = 10;
};
GameOverLetterClass.update = function ()
{
    var self = this;
    gameOverQueue[lengthGameOverQueue++] = self;
}

GameOverLetterClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
    this.baseTwoInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

var gameOverG = Object.create(GameOverLetterClass);
gameOverG.init(LetterG02, glowRed, highRed, 1);
gameOverG.addFrame(LetterG02);
gameOverG.tag = "Game Over G";
gameOverList.push(gameOverG);

var gameOverA = Object.create(GameOverLetterClass);
gameOverA.init(LetterA02, glowRed, highRed, 1);
gameOverA.addFrame(LetterA02);
gameOverA.tag = "Game Over A";
gameOverList.push(gameOverA);

var gameOverM = Object.create(GameOverLetterClass);
gameOverM.init(LetterM02, glowRed, highRed, 1);
gameOverM.addFrame(LetterM02);
gameOverM.tag = "Game Over M";
gameOverList.push(gameOverM);

var gameOverE = Object.create(GameOverLetterClass);
gameOverE.init(LetterE02, glowRed, highRed, 1);
gameOverE.addFrame(LetterE02);
gameOverE.tag = "Game Over E";
gameOverList.push(gameOverE);
gameOverE.baseTwoStart = gameOverE.start;
gameOverE.start = function()
{
    this.baseTwoStart();
    this.posY = gameOverLineOnePosY - 120;
}


var gameOverO = Object.create(GameOverLetterClass);
gameOverO.init(LetterO02, glowRed, highRed, 1);
gameOverO.addFrame(LetterO02);
gameOverO.tag = "Game Over O";
gameOverList.push(gameOverO);
gameOverO.baseTwoStart = gameOverO.start;
gameOverO.start = function ()
{
	gameOverPosCurr = 0;
	this.baseTwoStart();
	this.posY = gameOverLineTwoPosY;
};

var gameOverV = Object.create(GameOverLetterClass);
gameOverV.init(LetterV02, glowRed, highRed, 1);
gameOverV.addFrame(LetterV02);
gameOverV.tag = "Game Over V";
gameOverList.push(gameOverV);
gameOverV.baseTwoStart = gameOverV.start;
gameOverV.start = function ()
{
	this.baseTwoStart();
	this.posY = gameOverLineTwoPosY;
};

var gameOverE = Object.create(GameOverLetterClass);
gameOverE.init(LetterE02, glowRed, highRed, 1);
gameOverE.addFrame(LetterE02);
gameOverE.tag = "Game Over E";
gameOverList.push(gameOverE);
gameOverE.baseTwoStart = gameOverE.start;
gameOverE.start = function ()
{
	this.baseTwoStart();
	this.posY = gameOverLineTwoPosY;
};

var gameOverR = Object.create(GameOverLetterClass);
gameOverR.init(LetterR02, glowRed, highRed, 1);
gameOverR.addFrame(LetterR02);
gameOverR.tag = "Game Over R";
gameOverList.push(gameOverR);
gameOverR.baseTwoStart = gameOverR.start;
gameOverR.start = function ()
{
	this.baseTwoStart();
	this.posY = gameOverLineTwoPosY;
};

