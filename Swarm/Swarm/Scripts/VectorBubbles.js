//Vector Bubbles

var VectorBubbleObjectClass = Object.create(DisplayObjectClass);
VectorBubbleObjectClass.baseInit = VectorBubbleObjectClass.init;

VectorBubbleObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

VectorBubbleObjectClass.start = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = -10;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;

	this.isTrigger = false ;
	this.isDrawn = false;

	this.speed = 0;
	this.yMax = canvasHeight + 10;
};

VectorBubbleObjectClass.update = function ()
{
	
	var distanceY = this.speed * timeDelta;
	this.posY += distanceY;

	if (this.posY >= this.yMax)
	{
		this.destroy();
	}
	
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};

VectorBubbleObjectClass.destroy = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = -10;
	this.speed = 0;
	this.isTrigger = false ;
	this.isDrawn = false;
};


var objVectorBubbleV = Object.create(VectorBubbleObjectClass);
	objVectorBubbleV.init(VBubble01, glowRed, highRed, 0.5);
	objVectorBubbleV.addFrame(VBubble02);
	objVectorBubbleV.tag = "Vector Bubble V";
	objectsList.push(objVectorBubbleV);
		
function spawnVectorBubbleV()
{
	objVectorBubbleV.isTrigger = true;
	objVectorBubbleV.isDrawn = true;
	objVectorBubbleV.speed = 300;
};

var objVectorBubbleE = Object.create(VectorBubbleObjectClass);
	objVectorBubbleE.init(EBubble01, glowOrange, highOrange, 0.5);
	objVectorBubbleE.addFrame(EBubble02);
	objVectorBubbleE.tag = "Vector Bubble E";
	objectsList.push(objVectorBubbleE);
		
function spawnVectorBubbleE()
{
	objVectorBubbleE.isTrigger = true;
	objVectorBubbleE.isDrawn = true;
	objVectorBubbleE.speed = 300;
};

var objVectorBubbleC = Object.create(VectorBubbleObjectClass);
	objVectorBubbleC.init(CBubble01, glowYellow, highYellow, 0.5);
	objVectorBubbleC.addFrame(CBubble02);
	objVectorBubbleC.tag = "Vector Bubble C";
	objectsList.push(objVectorBubbleC);
		
function spawnVectorBubbleC()
{
	objVectorBubbleC.isTrigger = true;
	objVectorBubbleC.isDrawn = true;
	objVectorBubbleC.speed = 300;
};

var objVectorBubbleT = Object.create(VectorBubbleObjectClass);
	objVectorBubbleT.init(TBubble01, glowGreen, highGreen, 0.5);
	objVectorBubbleT.addFrame(TBubble02);
	objVectorBubbleT.tag = "Vector Bubble T";
	objectsList.push(objVectorBubbleT);
		
function spawnVectorBubbleT()
{
	objVectorBubbleT.isTrigger = true;
	objVectorBubbleT.isDrawn = true;
	objVectorBubbleT.speed = 300;
};

var objVectorBubbleO = Object.create(VectorBubbleObjectClass);
	objVectorBubbleO.init(OBubble01, glowBlue, highBlue, 0.5);
	objVectorBubbleO.addFrame(OBubble02);
	objVectorBubbleO.tag = "Vector Bubble O";
	objectsList.push(objVectorBubbleO);
		
function spawnVectorBubbleO()
{
	objVectorBubbleO.isTrigger = true;
	objVectorBubbleO.isDrawn = true;
	objVectorBubbleO.speed = 300;
};

var objVectorBubbleR = Object.create(VectorBubbleObjectClass);
	objVectorBubbleR.init(RBubble01, glowBlue, highBlue, 0.5);
	objVectorBubbleR.addFrame(RBubble02);
	objVectorBubbleR.tag = "Vector Bubble R";
	objectsList.push(objVectorBubbleR);
		
function spawnVectorBubbleR()
{
	objVectorBubbleR.isTrigger = true;
	objVectorBubbleR.isDrawn = true;
	objVectorBubbleR.speed = 300;
};

/*bubbleList = new Array();

bubbleList.push(SpawnVectorBubbleV());
bubbleList.push(SpawnVectorBubbleE());
bubbleList.push(SpawnVectorBubbleC());
bubbleList.push(SpawnVectorBubbleT());
bubbleList.push(SpawnVectorBubbleO());
bubbleList.push(SpawnVectorBubbleR());
*/

