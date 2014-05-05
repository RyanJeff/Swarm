var alien01Red = new DisplayObject(alienOneF01, glowRed, highRed, 2);
objectsList.push(alien01Red);
alien01Red.addFrame(alienOneF02);
alien01Red.start = function ()
{
	this.posX = 20;
	this.posY = 20;
	this.velX = 100;
	this.velY = 100;
	this.multX = 5;
	this.multY = 5;

	this.tag = "Enemy";
	this.isTrigger = true;

	this.fireRate = 2500;
	this.nextFire = Date.now() + this.fireRate;
};
alien01Red.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//drawObject(this, this.posX, this.posY, 5, 5, this.velX, this.velY);
	var self = this;
	drawQueue.push(self);

	objEnemyBomb01.shipPosX = this.posX;
	objEnemyBomb01.shipPosY = this.posY;

	if (objEnemyBomb01.isStuckOnEnemy && (Date.now() >= this.nextFire))
	{
		objEnemyBomb01.isStuckOnEnemy = false;
		this.nextFire = Date.now() + this.fireRate;
	}

	if ((this.posX <= 10) || (this.posX >= (canvasWidth - 100)))
	{
		this.velX = -(this.velX);
	}
	if ((this.posY <= 10) || (this.posY >= (canvasHeight - 100)))
	{
		this.velY = -(this.velY);
	}
};
alien01Red.onTriggerEnter = function (otherObject)
{
	if (otherObject.tag != "Enemy")
	{
		otherObject.destroy();
		this.destroy();
	}
};
alien01Red.destroy = function ()
{
	this.posX = 10;
	this.posY = 10;
	this.velX = 50;
	this.velY = 50;
};

var objEnemyBomb01 = new DisplayObject(enemyBomb01, glowGreen, highGreen, 1);
objectsList.push(objEnemyBomb01);
objEnemyBomb01.addFrame(enemyBomb02);
objEnemyBomb01.start = function ()
{
	this.posX = 50;
	this.posY = 50;
	this.velX = 0;
	this.velY = 0;
	this.multX = 1;
	this.multY = 1;

	this.tag = "Enemy";
	this.isTrigger = true;

	this.speed = 150;
	this.yMax = canvasHeight + 10;
	this.isStuckOnEnemy = true;
	this.shipPosX = 20;
	this.shipPosY = 20;
};
objEnemyBomb01.update = function ()
{
	if (this.isStuckOnEnemy)
	{
		this.posX = this.shipPosX + 56;
		this.posY = this.shipPosY + 52;
	}
	else
	{
		var distanceY = this.speed * timeDelta;
		this.posY += distanceY;

		if (this.posY >= this.yMax)
		{
			this.destroy();
		}
	}
	var self = this;
	drawQueue.push(self);
};
objEnemyBomb01.destroy = function ()
{
	this.isStuckOnEnemy = true;
};

var alien01Green = new DisplayObject(alienOneF01, glowGreen, highGreen, 5);
alien01Green.addFrame(alienOneF02);
//var alien01Blue = new DisplayObject (alienOneF01, glowBlue, highBlue, 10);
//alien01Blue.addFrame (alienOneF02);
var alien02Blue = new DisplayObject(alienTwoF01, glowBlue, highBlue, 3);
objectsList.push(alien02Blue);
alien02Blue.addFrame(alienTwoF02);
alien02Blue.start = function ()
{
	this.posX = 20;
	this.posY = 120;
	this.velX = 50;
	this.velY = 30;
	this.multX = 4;
	this.multY = 4;

	this.tag = "Enemy";
	this.isTrigger = true;

	this.fireRate = 2500;
	this.nextFire = Date.now() + this.fireRate;
};
alien02Blue.update = function ()
{
	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//drawObject(this, this.posX, this.posY, 4, 4, this.velX, this.velY);
	var self = this;
	drawQueue.push(self);

	objEnemyBomb02.shipPosX = this.posX;
	objEnemyBomb02.shipPosY = this.posY;

	if (objEnemyBomb02.isStuckOnEnemy && (Date.now() >= this.nextFire))
	{
		objEnemyBomb02.isStuckOnEnemy = false;
		this.nextFire = Date.now() + this.fireRate;
	}

	if ((this.posX <= 10) || (this.posX >= (canvasWidth - 100)))
	{
		this.velX = -(this.velX);
	}
	if ((this.posY <= 10) || (this.posY >= (canvasHeight - 100)))
	{
		this.velY = -(this.velY);
	}
};
alien02Blue.onTriggerEnter = function (otherObject)
{
	if (otherObject.tag != "Enemy")
	{
		otherObject.destroy();
		this.destroy();
	}
};
alien02Blue.destroy = function ()
{
	this.posX = 20;
	this.posY = 120;
	this.velX = 150;
	this.velY = 130;
};

var objEnemyBomb02 = new DisplayObject(enemyBomb01, glowGreen, highGreen, 1);
objectsList.push(objEnemyBomb02);
objEnemyBomb02.addFrame(enemyBomb02);
objEnemyBomb02.start = function ()
{
	this.posX = 50;
	this.posY = 50;
	this.velX = 0;
	this.velY = 0;
	this.multX = 3;
	this.multY = 3;

	this.tag = "Enemy";
	this.isTrigger = true;

	this.speed = 150;
	this.yMax = canvasHeight + 10;
	this.isStuckOnEnemy = true;
	this.shipPosX = 20;
	this.shipPosY = 120;
};
objEnemyBomb02.update = function ()
{
	if (this.isStuckOnEnemy)
	{
		this.posX = this.shipPosX + 36;
		this.posY = this.shipPosY + 56;
	}
	else
	{
		var distanceY = this.speed * timeDelta;
		this.posY += distanceY;

		if (this.posY >= this.yMax)
		{
			this.destroy();
		}
	}
	var self = this;
	drawQueue.push(self);
};
objEnemyBomb02.destroy = function ()
{
	this.isStuckOnEnemy = true;
};

var testMBlue = new DisplayObject(testMF01, glowBlue, highBlue, 2);
testMBlue.addFrame(testMF02);
var alien01Purple = new DisplayObject(alienOneF01, glowPurple, highPurple, 2);
alien01Purple.addFrame(alienOneF02);
var alien01Yellow = new DisplayObject(alienOneF01, glowYellow, highYellow, 0.5);
alien01Yellow.addFrame(alienOneF02);
var alien01Cyan = new DisplayObject(alienOneF01, glowCyan, highCyan, 2);
alien01Cyan.addFrame(alienOneF02);
var alien03Purple = new DisplayObject(alienThreeF01, glowPurple, highPurple, 2);
alien03Purple.addFrame(alienThreeF02);
