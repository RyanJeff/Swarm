//PowerUP Bubble

var PowerUpObjectClass = Object.create(DisplayObjectClass);
PowerUpObjectClass.baseInit = PowerUpObjectClass.init;

PowerUpObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

PowerUpObjectClass.start = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = -10;
	this.velX = 0;
	this.velY = 0;
	this.multX = 5;
	this.multY = 5;

	this.tag = "PowerUp";
	this.isTrigger = false ;
	this.isDrawn = false;

	this.speed = 0;
	this.yMax = canvasHeight + 10;
};

PowerUpObjectClass.update = function ()
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

PowerUpObjectClass.destroy = function ()
{
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = -10;
	this.speed = 0;
	this.isTrigger = false ;
	this.isDrawn = false;
};


var objPowerUpBubble = Object.create(PowerUpObjectClass);
	objPowerUpBubble.init(PowerUp01, glowPurple, highPurple, 2);
	objPowerUpBubble.addFrame(PowerUp02);
	objectsList.push(objPowerUpBubble);
		
function SpawnPowerBubble()
{
	objPowerUpBubble.isTrigger = true;
	objPowerUpBubble.isDrawn = true;
	objPowerUpBubble.speed = 300;
	
};