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

var scorePosStart = canvasWidth - (14 * charWidth);
var scorePosCurr = 0;

var scoreS = Object.create(ScoreLetterObjectClass);
scoreS.baseTwoStart = scoreS.start;
scoreS.init(LetterS02, glowPurple, highWhite04, 1);
scoreS.addFrame(LetterS02);
scoreS.start = function ()
{
	scorePosCurr = 0;
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score S";
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
	this.tag = "Score C";
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
	this.tag = "Score O";
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
	this.tag = "Score R";
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
	this.tag = "Score E";
};
objectsList.push(scoreE);


scoreList = new Array();

var scorePositionSix = Object.create(ScoreLetterObjectClass);
scorePositionSix.baseTwoStart = scorePositionSix.start;
scorePositionSix.init(NumberZero02, glowPurple, highWhite04, 1);
scorePositionSix.addFrame(NumberZero02);
scorePositionSix.start = function ()
{
	this.baseTwoStart();
	scorePosCurr += ((charWidth * 0.5) | 0);
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score Position Six";
};
objectsList.push(scorePositionSix);

var scorePositionFive = Object.create(ScoreLetterObjectClass);
scorePositionFive.baseTwoStart = scorePositionFive.start;
scorePositionFive.init(NumberZero02, glowPurple, highWhite04, 1);
scorePositionFive.addFrame(NumberZero02);
scorePositionFive.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score Position Five";
};
objectsList.push(scorePositionFive);

var scorePositionFour = Object.create(ScoreLetterObjectClass);
scorePositionFour.baseTwoStart = scorePositionFour.start;
scorePositionFour.init(NumberZero02, glowPurple, highWhite04, 1);
scorePositionFour.addFrame(NumberZero02);
scorePositionFour.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score Position Four";
};
objectsList.push(scorePositionFour);

var scorePositionThree = Object.create(ScoreLetterObjectClass);
scorePositionThree.baseTwoStart = scorePositionThree.start;
scorePositionThree.init(NumberZero02, glowPurple, highWhite04, 1);
scorePositionThree.addFrame(NumberZero02);
scorePositionThree.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score Position Three";
};
objectsList.push(scorePositionThree);

var scorePositionTwo = Object.create(ScoreLetterObjectClass);
scorePositionTwo.baseTwoStart = scorePositionTwo.start;
scorePositionTwo.init(NumberZero02, glowPurple, highWhite04, 1);
scorePositionTwo.addFrame(NumberZero02);
scorePositionTwo.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score Position Two";
};
objectsList.push(scorePositionTwo);

var scorePositionOne = Object.create(ScoreLetterObjectClass);
scorePositionOne.baseTwoStart = scorePositionOne.start;
scorePositionOne.init(NumberZero02, glowPurple, highWhite04, 1);
scorePositionOne.addFrame(NumberZero02);
scorePositionOne.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score Position One";
};
objectsList.push(scorePositionOne);

var scorePositionZero = Object.create(ScoreLetterObjectClass);
scorePositionZero.baseTwoStart = scorePositionZero.start;
scorePositionZero.init(NumberZero02, glowPurple, highWhite04, 1);
scorePositionZero.addFrame(NumberZero02);
scorePositionZero.start = function ()
{
	this.baseTwoStart();
	this.posX = scorePosStart + scorePosCurr;
	scorePosCurr += charWidth;
	this.tag = "Score Position Zero";
};
objectsList.push(scorePositionZero);

scoreList.push(scorePositionZero);
scoreList.push(scorePositionOne);
scoreList.push(scorePositionTwo);
scoreList.push(scorePositionThree);
scoreList.push(scorePositionFour);
scoreList.push(scorePositionFive);
scoreList.push(scorePositionSix);

scoreDigits = new Array();

var scoreDigitZero = Object.create(ScoreLetterObjectClass);
scoreDigitZero.init(NumberZero02, glowPurple, highWhite04, 1);
scoreDigitZero.addFrame(NumberZero02);
scoreDigits.push(scoreDigitZero);

var scoreDigitOne = Object.create(ScoreLetterObjectClass);
scoreDigitOne.init(NumberOne02, glowPurple, highWhite04, 1);
scoreDigitOne.addFrame(NumberOne02);
scoreDigits.push(scoreDigitOne);

var scoreDigitTwo = Object.create(ScoreLetterObjectClass);
scoreDigitTwo.init(NumberTwo02, glowPurple, highWhite04, 1);
scoreDigitTwo.addFrame(NumberTwo02);
scoreDigits.push(scoreDigitTwo);

var scoreDigitThree = Object.create(ScoreLetterObjectClass);
scoreDigitThree.init(NumberThree02, glowPurple, highWhite04, 1);
scoreDigitThree.addFrame(NumberThree02);
scoreDigits.push(scoreDigitThree);

var scoreDigitFour = Object.create(ScoreLetterObjectClass);
scoreDigitFour.init(NumberFour02, glowPurple, highWhite04, 1);
scoreDigitFour.addFrame(NumberFour02);
scoreDigits.push(scoreDigitFour);

var scoreDigitFive = Object.create(ScoreLetterObjectClass);
scoreDigitFive.init(NumberFive02, glowPurple, highWhite04, 1);
scoreDigitFive.addFrame(NumberFive02);
scoreDigits.push(scoreDigitFive);

var scoreDigitSix = Object.create(ScoreLetterObjectClass);
scoreDigitSix.init(NumberSix02, glowPurple, highWhite04, 1);
scoreDigitSix.addFrame(NumberSix02);
scoreDigits.push(scoreDigitSix);

var scoreDigitSeven = Object.create(ScoreLetterObjectClass);
scoreDigitSeven.init(NumberSeven02, glowPurple, highWhite04, 1);
scoreDigitSeven.addFrame(NumberSeven02);
scoreDigits.push(scoreDigitSeven);

var scoreDigitEight = Object.create(ScoreLetterObjectClass);
scoreDigitEight.init(NumberEight02, glowPurple, highWhite04, 1);
scoreDigitEight.addFrame(NumberEight02);
scoreDigits.push(scoreDigitEight);

var scoreDigitNine = Object.create(ScoreLetterObjectClass);
scoreDigitNine.init(NumberNine02, glowPurple, highWhite04, 1);
scoreDigitNine.addFrame(NumberNine02);
scoreDigits.push(scoreDigitNine);

function getDigit (char, digitToGet)
{
	var strChar;
			
	strChar = char.toString();
	if (digitToGet > strChar.length)
	{
		return 0;
	}
			
	//return Number(strChar.charAt(strChar.length - (digitToGet + 1)));
	return Number(strChar.charAt(strChar.length - (digitToGet + 1)));
}
	
function setScore (scoreNew)
{
	for (var i = 0; i < scoreList.length; ++i)
	{
		scoreList[i].frameList = scoreDigits[getDigit(scoreNew, i)].frameList;
		scoreList[i].inbetweensList = scoreDigits[getDigit(scoreNew, i)].inbetweensList;
	}
}