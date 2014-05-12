
numAliens = 3;

var aBomb;
var anEnemy;

var alien01Red = Object.create(DisplayObjectClass);
//objectsList.push(alien01Red);
alien01Red.start = function ()
{
	//this.posX = 20;
	//this.posY = 20;
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 100;
	this.velY = 100;
	this.multX = 5;
	this.multY = 5;

	this.tag = "Enemy";
	this.isTrigger = true;

	this.fireRate = 2500;
	this.nextFire = Date.now() + this.fireRate;

	this.bomb;
	this.lifeIteration = 0;
	this.isDead = false;

	/*this.breakApart();
	for (var i = 0; i < this.frameListBroken.length; ++i)
	{
		console.log("A01Red i: " + i + " -> " + this.frameListBroken[i])
	}*/
};
alien01Red.update = function ()
{
	if (this.isDead)
	{
		return;
	}

	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//drawObject(this, this.posX, this.posY, 5, 5, this.velX, this.velY);
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);

	this.bomb.shipPosX = this.posX;
	this.bomb.shipPosY = this.posY;

	if (this.bomb.isStuckOnEnemy && (Date.now() >= this.nextFire))
	{
		this.bomb.isStuckOnEnemy = false;
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
	/*this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 50;
	this.velY = 50;*/
	if (this.lifeIteration == 0)
	{
		this.lifeIteration++;
		this.multX /= 2;
		this.multY /= 2;
		for (var i = 0; i < 4; ++i)
		{
			aBomb = Object.create(objEnemyBomb01);
			aBomb.init(enemyBomb01, glowGreen, highGreen, 1);
			aBomb.addFrame(enemyBomb02);
			objectsList.push(aBomb);
			anEnemy = Object.create(this);
			anEnemy.init(alienOneF01, glowRed, highRed, 2);
			anEnemy.addFrame(alienOneF02);
			anEnemy.bomb = aBomb;
			anEnemy.posX = !(i % 2) ? this.posX : this.posX + (this.currentWidth * 0.5);
			anEnemy.posY = (i < 2) ? this.posY : this.posY + (this.currentHeight * 0.5);
			objectsList.push(anEnemy);
		}
		this.isDead = true;
		this.isDrawn = false;
		this.isTrigger = false;
	}
	else
	{
		this.isDead = true;
		this.isDrawn = false;
		this.isTrigger = false;
		this.bomb.isDead = true;
		this.bomb.isDrawn = false;
		this.bomb.isTrigger = false;
	}
};

var objEnemyBomb01 = Object.create(DisplayObjectClass);
//objectsList.push(objEnemyBomb01);
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

	this.isDead = false;
};
objEnemyBomb01.update = function ()
{
	if (this.isDead)
	{
		return;
	}

	if (this.isStuckOnEnemy)
	{
		this.posX = this.shipPosX + 58;
		this.posY = this.shipPosY + 58;
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
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};
objEnemyBomb01.destroy = function ()
{
	this.isStuckOnEnemy = true;
};

for (var i = 0; i < numAliens; ++i)
{
	aBomb = Object.create(objEnemyBomb01);
	aBomb.init(enemyBomb01, glowGreen, highGreen, 1);
	aBomb.addFrame(enemyBomb02);
	objectsList.push(aBomb);
	anEnemy = Object.create(alien01Red);
	anEnemy.init(alienOneF01, glowRed, highRed, 2);
	anEnemy.addFrame(alienOneF02);
	anEnemy.bomb = aBomb;
	objectsList.push(anEnemy);
}


//var alien01Green = new DisplayObject(alienOneF01, glowGreen, highGreen, 5);
//alien01Green.addFrame(alienOneF02);
//var alien01Blue = new DisplayObject (alienOneF01, glowBlue, highBlue, 10);
//alien01Blue.addFrame (alienOneF02);
var alien02Blue = Object.create(DisplayObjectClass);
//objectsList.push(alien02Blue);
alien02Blue.start = function ()
{
	//this.posX = 20;
	//this.posY = 120;
	this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 50;
	this.velY = 30;
	this.multX = 4;
	this.multY = 4;

	this.tag = "Enemy";
	this.isTrigger = true;

	this.fireRate = 2500;
	this.nextFire = Date.now() + this.fireRate;

	this.bomb;

	/*this.breakApart();
	for (var i = 0; i < this.frameListBroken.length; ++i)
	{
		console.log("A02Blue i: " + i + " -> " + this.frameListBroken[i])
	}*/
};
alien02Blue.update = function ()
{
	if (this.isDead)
	{
		return;
	}

	var distanceX = this.velX * timeDelta;
	var distanceY = this.velY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	//drawObject(this, this.posX, this.posY, 4, 4, this.velX, this.velY);
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);

	this.bomb.shipPosX = this.posX;
	this.bomb.shipPosY = this.posY;

	if (this.bomb.isStuckOnEnemy && (Date.now() >= this.nextFire))
	{
		this.bomb.isStuckOnEnemy = false;
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
	/*this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 150;
	this.velY = 130;*/
	this.isDead = true;
	this.isDrawn = false;
	this.isTrigger = false;
	this.bomb.isDead = true;
	this.bomb.isDrawn = false;
	this.bomb.isTrigger = false;
};

var objEnemyBomb02 = Object.create(DisplayObjectClass);
//objectsList.push(objEnemyBomb02);
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

	this.isDead = false;
};
objEnemyBomb02.update = function ()
{
	if (this.isDead)
	{
		return;
	}

	if (this.isStuckOnEnemy)
	{
		this.posX = this.shipPosX + 28;
		this.posY = this.shipPosY + 54;
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
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};
objEnemyBomb02.destroy = function ()
{
	this.isStuckOnEnemy = true;
};

for (var i = 0; i < numAliens; ++i)
{
	aBomb = Object.create(objEnemyBomb02);
	aBomb.init(enemyBomb01, glowGreen, highGreen, 1);
	aBomb.addFrame(enemyBomb02);
	objectsList.push(aBomb);
	anEnemy = Object.create(alien02Blue);
	anEnemy.init(alienTwoF01, glowBlue, highBlue, 3);
	anEnemy.addFrame(alienTwoF02);
	anEnemy.bomb = aBomb;
	objectsList.push(anEnemy);
}

/*var testMBlue = new DisplayObject(testMF01, glowBlue, highBlue, 2);
testMBlue.addFrame(testMF02);
var alien01Purple = new DisplayObject(alienOneF01, glowPurple, highPurple, 2);
alien01Purple.addFrame(alienOneF02);
var alien01Yellow = new DisplayObject(alienOneF01, glowYellow, highYellow, 0.5);
alien01Yellow.addFrame(alienOneF02);
var alien01Cyan = new DisplayObject(alienOneF01, glowCyan, highCyan, 2);
alien01Cyan.addFrame(alienOneF02);
var alien03Purple = new DisplayObject(alienThreeF01, glowPurple, highPurple, 2);
alien03Purple.addFrame(alienThreeF02);*/

