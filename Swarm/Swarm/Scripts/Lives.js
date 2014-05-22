
//Lives - this is a temporary way to show them for the prototype
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


var lifeObjects = new Array();

var lifeOne = Object.create(LifeLetterObjectClass);
lifeOne.baseTwoStart = lifeOne.start;
lifeOne.init(shipF01, glowCyan, highCyan, 1);
lifeOne.addFrame(shipF01);
lifeOne.start = function ()
{
	this.baseTwoStart();
	this.posX = 11;
	this.tag = "Life 1";
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
	this.tag = "Life 2";
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
	this.tag = "Life 3";
};
objectsList.push(lifeThree);

lifeObjects.push(lifeThree);
lifeObjects.push(lifeTwo);
lifeObjects.push(lifeOne);


function lifeClear (lifeToClear)
{
	lifeObjects[lifeToClear].isDrawn = false;
	lifeObjects[lifeToClear].glow = glowCyan;
	lifeObjects[lifeToClear].highlight = highCyan;
}

function lifeRemove()
{
	for (var i = 0; i < lifeObjects.length; ++i)
	{
		if (lifeObjects[i].isDrawn)
		{
			lifeObjects[i].glow = highRed;
			lifeObjects[i].highlight = highRed;
			setTimeout(function () { lifeClear(i); }, 1000);
			break;
		}
	}
}

function lifeReset(lifeToReset)
{
	lifeObjects[lifeToReset].glow = glowCyan;
	lifeObjects[lifeToReset].highlight = highCyan;
}

function lifeAdd()
{
	for (var i = lifeObjects.length - 1; i >= 0; --i)
	{
		if (!lifeObjects[i].isDrawn)
		{
			lifeObjects[i].glow = highGreen;
			lifeObjects[i].highlight = highGreen;
			lifeObjects[i].isDrawn = true;
			setTimeout(function () { lifeReset(i); }, 1000);
			break;
		}
	}
}

function resetLives ()
{
	for (var i = 0; i < lifeObjects.length; ++i)
	{
		lifeObjects[i].glow = glowCyan;
		lifeObjects[i].highlight = highCyan;
		lifeObjects[i].isDrawn = true;
	}
}

