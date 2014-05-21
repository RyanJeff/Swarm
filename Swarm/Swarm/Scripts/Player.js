var PLAYER_SHOTS_MAX = 9;

var PlayerShotObjectClass = Object.create(DisplayObjectClass);
PlayerShotObjectClass.baseInit = PlayerShotObjectClass.init;

PlayerShotObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};
PlayerShotObjectClass.start = function ()
{
	this.posX = 53;
	this.posY = 375;
	this.velX = 0;
	this.velY = 0;
	this.multX = 3;
	this.multY = 3;

	this.tag = "PlayerShot";
	this.isTrigger = false;
	this.isDrawn = true;

	this.speed = 500;
	this.yMax = -10;
	this.isStuckOnPlayer = true;
	this.shipPosX = 0;
	this.shipPosY = 0;
};
PlayerShotObjectClass.update = function ()
{
	if (this.isStuckOnPlayer)
	{
		this.posX = this.shipPosX + 18;
		this.posY = this.shipPosY;
	}
	else
	{
		var distanceY = -this.speed * timeDelta;
		this.posY += distanceY;

		if (this.posY <= this.yMax)
		{
			this.destroy();
		}
	}
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);
};
PlayerShotObjectClass.destroy = function ()
{
	this.isTrigger = false;
	this.isStuckOnPlayer = true;
}


var PlayerObjectClass = Object.create(DisplayObjectClass);
PlayerObjectClass.baseInit = PlayerObjectClass.init;
PlayerObjectClass.shots;


PlayerObjectClass.init = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.baseInit(initialVectors, colourGlow, colourHighlight, keyframeRate);
};
PlayerObjectClass.start = function ()
{
	this.posX = 20;
	this.posY = 350;
	this.velX = 230;
	this.velY = 250;
	this.multX = 3;
	this.multY = 3;

	this.tag = "Player";
	this.isTrigger = false;

	this.fireRate = 250;
	this.nextFire = Date.now() + this.fireRate;

	this.flashRate = 200;
	this.nextFlash = Date.now() + this.flashRate;
	this.flashState = true;
}
PlayerObjectClass.update = function ()
{
	var moveHorizontal, moveVertical;
	var distanceX, distanceY;

	moveHorizontal = Input.GetAxis("Horizontal");
	moveVertical = Input.GetAxis("Vertical");
	//console.log("moveH: " + moveHorizontal + "moveV: " + moveVertical);
	var vX = this.velX * moveHorizontal;
	var vY = this.velY * moveVertical;
	distanceX = vX * timeDelta;
	distanceY = vY * timeDelta;
	this.posX += distanceX;
	this.posY += distanceY;

	this.posX = clamp(this.posX, 0, canvasWidth - this.currentWidth);
	this.posY = clamp(this.posY, canvasHeight * 0.75, canvasHeight - this.currentHeight);
	for (var i = 1; i < this.shots.length; ++i)
	{
		if (this.shots[i].isStuckOnPlayer)
		{
			this.shots[i].shipPosX = this.posX;
			this.shots[i].shipPosY = this.posY;
		}
	}

	if (!this.isTrigger && (Date.now() >= this.nextFlash))
	{
		this.glow.set(this.flashState ? glowCyan : glowBlue);
		this.highlight.set(this.flashState ? highCyan : highBlue);
		this.nextFlash = Date.now() + this.flashRate;
		this.flashState = !this.flashState;
	}

	//drawObject(this, this.posX, this.posY, 3, 3, vX, vY);
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);

	if (Input.GetButton("Fire1") && (Date.now() >= this.nextFire))
	{
		this.isTrigger = true;
		this.glow.set(glowCyan);
		this.highlight.set(highCyan);
		for (var i = 1; i < this.shots.length; ++i)
		{
			if (this.shots[i].isStuckOnPlayer)
			{
				this.shots[i].isTrigger = true;
				this.shots[i].isStuckOnPlayer = false;
				this.nextFire = Date.now() + this.fireRate;
				break;
			}
		}
	}

};
PlayerObjectClass.onTriggerEnter = function (otherObject)
{
	if (otherObject.tag == "Enemy")
	{
		otherObject.destroy();
		this.destroy();
	}
};
PlayerObjectClass.destroy = function ()
{
	this.isTrigger = false;
	this.posX = 20;
	this.posY = 350;
	--currentLives;
	lifeRemove();
};



var playerShots = new Array();
var aPlayerShot;
for (var i = 0; i < PLAYER_SHOTS_MAX; ++i)
{
	playerShot = Object.create(PlayerShotObjectClass);
	playerShot.init(playerBullet, glowRed, highRed, 1);
	playerShot.addFrame(playerBullet);
	playerShot.tag = "Player Shot " + i;
	playerShots.push(playerShot);
	objectsList.push(playerShot);
}

/*var playerShot = Object.create(PlayerShotObjectClass);
playerShot.init(playerBullet, glowRed, highRed, 1);
playerShot.addFrame(playerBullet);*/

var playerShip = Object.create(PlayerObjectClass);
playerShip.init(shipF01, glowCyan, highCyan, 2);
playerShip.addFrame(shipF01);
playerShip.tag = "Player Ship";
playerShip.shots = playerShots;

objectsList.push(playerShip);
