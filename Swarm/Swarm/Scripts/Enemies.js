
var EnemyObjectClass = Object.create(DisplayObjectClass);
EnemyObjectClass.baseInit = EnemyObjectClass.init;
EnemyObjectClass.bomb;
EnemyObjectClass.spawnLevelOne = null;
EnemyObjectClass.spawnLevelTwo = null;
EnemyObjectClass.lifeIteration = 0;

EnemyObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};

EnemyObjectClass.start = function ()
{
	//this.posX = 20;
	//this.posY = 20;
	this.posX = (this.lifeIteration == 0) ? Math.floor(Math.random() * canvasWidth) : 0;
	this.posY = (this.lifeIteration == 0) ? Math.floor(Math.random() * canvasHeight) : 0;
	this.velX = (this.lifeIteration == 0) ? 100 : 0;
	this.velY = (this.lifeIteration == 0) ? 100 : 0;
	this.multX = 5;
	this.multY = 5;

	this.isTrigger = (this.lifeIteration == 0) ? true : false;
	this.isDrawn = (this.lifeIteration == 0) ? true : false;
	this.tag = "Enemy";

	this.fireRate = 2500;
	this.nextFire = Date.now() + this.fireRate;

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

	this.bomb.shipPosX = this.posX;
	this.bomb.shipPosY = this.posY;

	//drawObject(this, this.posX, this.posY, 5, 5, this.velX, this.velY);
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);

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
	if (otherObject.tag != "Enemy" && otherObject.tag != "PowerUp")
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
	if ((this.lifeIteration == 0) && (this.spawnLevelOne != null))
	{
		for (var i = 0; i < 4; ++i)
		{
			this.spawnLevelOne[i].posX = !(i % 2) ? this.posX : this.posX + (this.currentWidth * 0.5);
			this.spawnLevelOne[i].posY = (i < 2) ? this.posY : this.posY + (this.currentHeight * 0.5);
			this.spawnLevelOne[i].multX = this.multX * 0.5;
			this.spawnLevelOne[i].multY = this.multY * 0.5;
			this.spawnLevelOne[i].velX = this.velX;
			this.spawnLevelOne[i].velY = this.velY;
			this.spawnLevelOne[i].isDrawn = true;
			this.spawnLevelOne[i].isTrigger = true;
			this.spawnLevelOne[i].bomb.isDrawn = true;
			this.spawnLevelOne[i].bomb.isTrigger = true;
			//console.log("Spawning!");
		}
	}
	else if ((this.lifeIteration == 1) && (this.spawnLevelTwo != null))
	{
		for (var i = 0; i < 2; ++i)
		{
			this.spawnLevelTwo[i].posX = !(i % 2) ? this.posX : this.posX + (this.currentWidth * 0.5);
			this.spawnLevelTwo[i].posY = (i < 2) ? this.posY : this.posY + (this.currentHeight * 0.5);
			this.spawnLevelTwo[i].multX = this.multX * 0.5;
			this.spawnLevelTwo[i].multY = this.multY * 0.5;
			this.spawnLevelTwo[i].velX = this.velX;
			this.spawnLevelTwo[i].velY = this.velY;
			this.spawnLevelTwo[i].isDrawn = true;
			this.spawnLevelTwo[i].isTrigger = true;
			this.spawnLevelTwo[i].bomb.isDrawn = true;
			this.spawnLevelTwo[i].bomb.isTrigger = true;
			//console.log("MORE Spawning!");
		}

	}
	//console.log("Something interation died...");
	this.isDead = true;
	this.isDrawn = false;
	this.isTrigger = false;
	this.bomb.isDead = true;
	this.bomb.isDrawn = false;
	this.bomb.isTrigger = false;
	currentScore += 100;
	
	var powerUpChance = Math.floor(Math.random() * 100);
	
	if(this.lifeIteration == 2 && powerUpChance < 4)
	{
		SpawnPowerBubble();
	}
	
};

var EnemyShotObjectClass = Object.create(DisplayObjectClass);
EnemyShotObjectClass.baseInit = EnemyShotObjectClass.init;
EnemyShotObjectClass.lifeIteration = 0;

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
	this.isTrigger = (this.lifeIteration == 0) ? true : false;
	this.isDrawn = (this.lifeIteration == 0) ? true : false;

	this.speed = 150;
	this.yMax = canvasHeight + 10;
	this.isStuckOnEnemy = true;
	this.shipPosX = 20;
	this.shipPosY = 20;
	this.offsetX = 58;
	this.offsetY = 58;

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
		this.posX = this.shipPosX + this.offsetX;
		this.posY = this.shipPosY + this.offsetY;
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

function spawnySpawnSpawner(mainBomb, mainEnemy, classBomb, classEnemy)
{
	var aBomb;
	var enemyA, enemyB;
	var enemysOne;
	var enemysTwo;

	enemysOne = new Array();
	
	for (var j = 0; j < 4; ++j)
	{
		aBomb = Object.create(classBomb);
		aBomb.init(mainBomb.frameList[0].frameVector, mainBomb.glow, mainBomb.highlight, mainBomb.keyframeRate);
		aBomb.addFrame(mainBomb.frameList[1].frameVector);
		aBomb.tag = mainBomb.tag + ": Spawn Bomb Lvl 1 " + j;
		aBomb.lifeIteration = 1;
		objectsList.push(aBomb);
		enemyA = Object.create(classEnemy);
		enemyA.init(mainEnemy.frameList[0].frameVector, mainEnemy.glow, mainEnemy.highlight, mainEnemy.keyframeRate);
		enemyA.addFrame(mainEnemy.frameList[1].frameVector);
		enemyA.bomb = aBomb;
		enemyA.lifeIteration = 1;
		enemyA.id = 2;
		enemyA.multX = mainEnemy.multX * 0.5;
		enemyA.multY = mainEnemy.multY * 0.5;
		enemyA.tag = mainEnemy.tag + ": Spawn Enemy Lvl 1 " + j;
		enemysOne[j] = enemyA;
		objectsList.push(enemyA);
		
		enemysTwo = new Array();
		for (var k = 0; k < 2; ++k)
		{
			aBomb = Object.create(classBomb);
			aBomb.init(mainBomb.frameList[0].frameVector, mainBomb.glow, mainBomb.highlight, mainBomb.keyframeRate);
			aBomb.addFrame(mainBomb.frameList[1].frameVector);
			aBomb.tag = mainBomb.tag + ": Spawn Bomb Lvl 2 " + k;
			aBomb.lifeIteration = 2;
			objectsList.push(aBomb);
			enemyB = Object.create(classEnemy);
			enemyB.init(mainEnemy.frameList[0].frameVector, mainEnemy.glow, mainEnemy.highlight, mainEnemy.keyframeRate);
			enemyB.addFrame(mainEnemy.frameList[1].frameVector);
			enemyB.bomb = aBomb;
			enemyB.lifeIteration = 2;
			enemyB.id = 3;
			enemyB.multX = enemyB.multX * 0.5;
			enemyB.multY = enemyB.multY * 0.5;
			enemyB.tag = mainEnemy.tag + ": Spawn Enemy Lvl 2 " + k;
			enemysTwo[k] = enemyB;
			objectsList.push(enemyB);
		}
		enemyA.spawnLevelTwo = enemysTwo;
	}
	mainEnemy.spawnLevelOne = enemysOne;
}

var mainBomb;
var mainEnemy;
//var aBomb;
//var enemyA, enemyB;
//var enemysOne;
//var enemysTwo;

var BeetleObjectClass = Object.create(EnemyObjectClass);
BeetleObjectClass.baseTwoStart = BeetleObjectClass.start;
BeetleObjectClass.start = function ()
{
    this.baseTwoStart();
    this.multX = 10;
    this.multY = 10;
	
};

var BeetleStingerObjectClass = Object.create(EnemyShotObjectClass);
BeetleStingerObjectClass.baseTwoStart = BeetleStingerObjectClass.start;
BeetleStingerObjectClass.lifeIteration = 0;
BeetleStingerObjectClass.start = function ()
{
	this.baseTwoStart();
	
	switch(this.lifeIteration)
	{
		case 0:
			this.multX = 5;
			this.multY = 5;
			this.offsetX = 10;
			this.offsetY = 10;
			break;
		case 1:
			this.multX = 3;
			this.multY = 3;
			this.offsetX = 5;
			this.offsetY = 5;
			break;
		case 2:
			this.offsetX = 1;
			this.offsetY = 2;
			break;
	}
};

for (var i = 0; i < numAliens; ++i)
{
	mainBomb = Object.create(BeetleStingerObjectClass);
	mainBomb.init(enemyBomb01, glowGreen, highGreen, 1);
	mainBomb.addFrame(enemyBomb02);
	mainBomb.tag = "Main Bomb One " + i;
	objectsList.push(mainBomb);
	mainEnemy = Object.create(BeetleObjectClass);
	mainEnemy.init(Beetle01, glowBlue, highBlue, 1);
	mainEnemy.addFrame(Beetle02);
	mainEnemy.bomb = mainBomb;
	mainEnemy.lifeIteration = 0;
	mainEnemy.id = 1;
	mainEnemy.tag = "Main Enemy One " + i;
	objectsList.push(mainEnemy);
	spawnySpawnSpawner(mainBomb, mainEnemy, BeetleStingerObjectClass, BeetleObjectClass);
	
	/*enemysOne = new Array();
	enemysTwo = new Array();
	for (var j = 0; j < 4; ++j)
	{
		aBomb = Object.create(EnemyShotObjectClass);
		aBomb.init(mainBomb.frameList[0].frameVector, mainBomb.glow, mainBomb.highlight, mainBomb.keyframeRate);
		aBomb.addFrame(mainBomb.frameList[1].frameVector);
		objectsList.push(aBomb);
		enemyA = Object.create(EnemyObjectClass);
		enemyA.init(mainEnemy.frameList[0].frameVector, mainEnemy.glow, mainEnemy.highlight, mainEnemy.keyframeRate);
		enemyA.addFrame(mainEnemy.frameList[1].frameVector);
		enemyA.bomb = aBomb;
		enemyA.lifeIteration = 1;
		enemyA.id = 2;
		enemyA.multX = mainEnemy.multX * 0.5;
		enemyA.multY = mainEnemy.multY * 0.5;
		enemysOne[j] = enemyA;
		objectsList.push(enemyA);
		for (var k = 0; k < 2; ++k)
		{
			aBomb = Object.create(EnemyShotObjectClass);
			aBomb.init(mainBomb.frameList[0].frameVector, mainBomb.glow, mainBomb.highlight, mainBomb.keyframeRate);
			aBomb.addFrame(mainBomb.frameList[1].frameVector);
			objectsList.push(aBomb);
			enemyB = Object.create(EnemyObjectClass);
			enemyB.init(mainEnemy.frameList[0].frameVector, mainEnemy.glow, mainEnemy.highlight, mainEnemy.keyframeRate);
			enemyB.addFrame(mainEnemy.frameList[1].frameVector);
			enemyB.bomb = aBomb;
			enemyB.lifeIteration = 2;
			enemyB.id = 3;
			enemyB.multX = enemyB.multX * 0.5;
			enemyB.multY = enemyB.multY * 0.5;
			enemysTwo[k] = enemyB;
			objectsList.push(enemyB);
		}
		enemyA.spawnLevelTwo = enemysTwo;
	}
	mainEnemy.spawnLevelOne = enemysOne;*/
}



