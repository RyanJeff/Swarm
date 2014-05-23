var PLAYER_SHOTS_MAX = 9;
var shipStateNormal = true;
var PlayerShotObjectClass = Object.create(DisplayObjectClass);
PlayerShotObjectClass.baseInit = PlayerShotObjectClass.init;
PlayerShotObjectClass.leftSide;

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

	this.twinGuns = true;
	this.singleGunOffset = 18;
	this.twinGunOffsetLeft = 3;
	this.twinGunOffsetRight = 33;
	this.twinGunOffsetY = 10;
};
PlayerShotObjectClass.update = function ()
{
	if (this.isStuckOnPlayer)
	{
		if (this.twinGuns)
		{
			if (this.leftSide)
			{
				this.posX = this.shipPosX + this.twinGunOffsetLeft;
			}
			else
			{
				this.posX = this.shipPosX + this.twinGunOffsetRight;
			}
			this.posY = this.shipPosY + this.twinGunOffsetY;
		}
		else
		{
			this.posX = this.shipPosX + this.singleGunOffset;
			this.posY = this.shipPosY;
		}
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
PlayerObjectClass.twinGuns

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

	this.twinGuns = false;
	for (var i = 0; i < this.shots[0].length; ++i)
	{
		this.shots[0][i].shipPosX = this.posX;
		this.shots[0][i].shipPosY = this.posY;
		this.shots[0][i].twinGuns = this.twinGuns;
		this.shots[1][i].shipPosX = this.posX;
		this.shots[1][i].shipPosY = this.posY;
		this.shots[1][i].twinGuns = this.twinGuns;
		this.shots[1][i].isDrawn = false;
	}
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

	if (this.twinGuns)
	{
		for (var i = 0; i < this.shots[0].length; ++i)
		{
			if (this.shots[0][i].isStuckOnPlayer)
			{
				this.shots[0][i].shipPosX = this.posX;
				this.shots[0][i].shipPosY = this.posY;
				this.shots[0][i].twinGuns = true;
				this.shots[1][i].shipPosX = this.posX;
				this.shots[1][i].shipPosY = this.posY;
				this.shots[1][i].twinGuns = true;
			}
		}
	}
	else
	{
		for (var i = 0; i < this.shots[0].length; ++i)
		{
			if (this.shots[0][i].isStuckOnPlayer)
			{
				this.shots[0][i].shipPosX = this.posX;
				this.shots[0][i].shipPosY = this.posY;
				this.shots[0][i].twinGuns = false;
				this.shots[1][i].shipPosX = this.posX;
				this.shots[1][i].shipPosY = this.posY;
				this.shots[1][i].twinGuns = false;
			}
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

		if (this.twinGuns)
		{
			for (var i = 0; i < this.shots[0].length; ++i)
			{
				if (this.shots[0][i].isStuckOnPlayer)
				{
					this.shots[0][i].isTrigger = true;
					this.shots[0][i].isStuckOnPlayer = false;
					this.shots[1][i].isTrigger = true;
					this.shots[1][i].isStuckOnPlayer = false;
					this.nextFire = Date.now() + this.fireRate;
					break;
				}
			}
		}
		else
		{
			for (var i = 0; i < this.shots[0].length; ++i)
			{
				if (this.shots[0][i].isStuckOnPlayer)
				{
					this.shots[0][i].isTrigger = true;
					this.shots[0][i].isStuckOnPlayer = false;
					this.nextFire = Date.now() + this.fireRate;
					break;
				}
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
	if (otherObject.tag == "PowerUp")
	{
		otherObject.destroy();
		currentScore += 250;
		setPlayerShipPowerUp();
		shipStateNormal = false;
	}
};
PlayerObjectClass.destroy = function ()
{
	if(shipStateNormal == false)
	{
		
		setPlayerShipNormal();
		shipStateNormal = true;
		this.isTrigger = false;
		
	}
	else
	{
		this.isTrigger = false;
		this.posX = 20;
		this.posY = 350;
		--currentLives;
		lifeRemove();
	}
};


var playerShip = Object.create(PlayerObjectClass);
playerShip.init(shipF01, glowCyan, highCyan, 2);
playerShip.addFrame(shipF01);
playerShip.tag = "Player Ship";
playerShip.shots = new Array();

var playerShots;
var aPlayerShot;
var leftSide = true;
for (var i = 0; i < 2; ++i)
{
	playerShots = new Array();
	for (var j = 0; j < PLAYER_SHOTS_MAX; ++j)
	{
		playerShot = Object.create(PlayerShotObjectClass);
		playerShot.init(playerBullet, glowRed, highRed, 1);
		playerShot.addFrame(playerBullet);
		playerShot.tag = "Player Shot " + j;
		playerShot.leftSide = leftSide;
		playerShots.push(playerShot);
		objectsList.push(playerShot);
	}
	playerShip.shots.push(playerShots);
	leftSide = !leftSide;
}

objectsList.push(playerShip);

/*var playerShot = Object.create(PlayerShotObjectClass);
playerShot.init(playerBullet, glowRed, highRed, 1);
playerShot.addFrame(playerBullet);*/


var playerShipPowerUp = Object.create(PlayerObjectClass);
playerShipPowerUp.init(shipF02, glowCyan, highCyan, 2);
playerShipPowerUp.addFrame(shipF02);


var playerShipNormal = Object.create(PlayerObjectClass);
playerShipNormal.init(shipF01, glowCyan, highCyan, 2);
playerShipNormal.addFrame(shipF01);


function setPlayerShipNormal ()
{
	playerShip.frameList = playerShipNormal.frameList;
	playerShip.inbetweensList = playerShipNormal.inbetweensList;
	playerShip.twinGuns = false;
	for (var i = 0; i < PLAYER_SHOTS_MAX; ++i)
	{
		playerShip.shots[1][i].isDrawn = false;
	}
};

function setPlayerShipPowerUp ()
{
	playerShip.frameList = playerShipPowerUp.frameList;
	playerShip.inbetweensList = playerShipPowerUp.inbetweensList;
	playerShip.twinGuns = true;
	for (var i = 0; i < PLAYER_SHOTS_MAX; ++i)
	{
		playerShip.shots[1][i].isDrawn = true;
	}
};
