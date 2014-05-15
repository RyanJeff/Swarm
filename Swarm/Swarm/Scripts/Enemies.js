
var EnemyObjectClass = Object.create(DisplayObjectClass);
EnemyObjectClass.baseInit = EnemyObjectClass.init;

EnemyObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

EnemyObjectClass.start = function ()
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
EnemyObjectClass.update = function ()
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

	if ((this.posX <= 10) || (this.posX >= (canvasWidth - this.currentWidth)))
	{
		this.velX = -(this.velX);
	}
	if ((this.posY <= 10) || (this.posY >= (canvasHeight - this.currentHeight)))
	{
		this.velY = -(this.velY);
	}
};
EnemyObjectClass.onTriggerEnter = function (otherObject)
{
	if (otherObject.tag != "Enemy")
	{
		otherObject.destroy();
		this.destroy();
	}
};
EnemyObjectClass.destroy = function ()
{
	/*this.posX = Math.floor(Math.random() * canvasWidth);
	this.posY = Math.floor(Math.random() * canvasHeight);
	this.velX = 50;
	this.velY = 50;*/
	if (this.lifeIteration == 0)
	{
		this.lifeIteration++;
		//this.multX /= 2;
		//this.multY /= 2;
		for (var i = 0; i < 4; ++i)
		{
			aBomb = Object.create(EnemyShotObjectClass);
			aBomb.init(this.bomb.frameList[0].frameVector, this.bomb.glow, this.bomb.highlight, this.bomb.keyframeRate);
			//aBomb.keyframeCurrent = 0;
			aBomb.addFrame(this.bomb.frameList[1].frameVector);
			objectsList.push(aBomb);
			anEnemy = Object.create(EnemyObjectClass);
			anEnemy.init(this.frameList[0].frameVector, this.glow, this.highlight, this.keyframeRate);
			//anEnemy.keyframeCurrent = 0;
			anEnemy.addFrame(this.frameList[1].frameVector);
			anEnemy.bomb = aBomb;
			anEnemy.posX = !(i % 2) ? this.posX : this.posX + (this.currentWidth * 0.5);
			anEnemy.posY = (i < 2) ? this.posY : this.posY + (this.currentHeight * 0.5);
			console.log("anEnemy.posX: " + anEnemy.posX + " anEnemy.posY: " + anEnemy.posY);
			console.log("!(i % 2): " + !(i % 2) + " (i < 2): " + (i < 2));
			objectsList.push(anEnemy);
			//aBomb.start();
			//anEnemy.start();
		}
		this.isDead = true;
		this.isDrawn = false;
		this.isTrigger = false;
		this.bomb.isDead = true;
		this.bomb.isDrawn = false;
		this.bomb.isTrigger = false;
	}
	else
	{
		console.log("Something interation died...");
		this.isDead = true;
		this.isDrawn = false;
		this.isTrigger = false;
		this.bomb.isDead = true;
		this.bomb.isDrawn = false;
		this.bomb.isTrigger = false;
	}
	console.log("Something died...");
};

var EnemyShotObjectClass = Object.create(DisplayObjectClass);
EnemyShotObjectClass.baseInit = EnemyShotObjectClass.init;

EnemyShotObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};
EnemyShotObjectClass.start = function ()
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
EnemyShotObjectClass.update = function ()
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
EnemyShotObjectClass.destroy = function ()
{
	this.isStuckOnEnemy = true;
};


numAliens = 1;

var aBomb;
var anEnemy;

for (var i = 0; i < numAliens; ++i)
{
	aBomb = Object.create(EnemyShotObjectClass);
	aBomb.init(enemyBomb01, glowGreen, highGreen, 1);
	aBomb.addFrame(enemyBomb02);
	objectsList.push(aBomb);
	anEnemy = Object.create(EnemyObjectClass);
	anEnemy.init(alienOneF01, glowRed, highRed, 2);
	anEnemy.addFrame(alienOneF02);
	anEnemy.bomb = aBomb;
	objectsList.push(anEnemy);
}

for (var i = 0; i < numAliens; ++i)
{
	aBomb = Object.create(EnemyShotObjectClass);
	aBomb.init(enemyBomb01, glowGreen, highGreen, 1);
	aBomb.addFrame(enemyBomb02);
	objectsList.push(aBomb);
	anEnemy = Object.create(EnemyObjectClass);
	anEnemy.init(alienTwoF01, glowBlue, highBlue, 3);
	anEnemy.addFrame(alienTwoF02);
	anEnemy.bomb = aBomb;
	objectsList.push(anEnemy);
}

