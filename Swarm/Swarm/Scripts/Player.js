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
	this.isTrigger = true;

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
	this.isStuckOnPlayer = true;
}


var PlayerObjectClass = Object.create(DisplayObjectClass);
PlayerObjectClass.baseInit = PlayerObjectClass.init;

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

	this.tag = "PlayerShot";
	this.isTrigger = true;

	this.fireRate = 1500;
	this.nextFire = Date.now() + this.fireRate;
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

	this.posX = clamp(this.posX, 0, canvasWidth - 100);
	this.posY = clamp(this.posY, canvasHeight * 0.75, canvasHeight - 100);
	playerShot.shipPosX = this.posX;
	playerShot.shipPosY = this.posY;

	//drawObject(this, this.posX, this.posY, 3, 3, vX, vY);
	var self = this;
	drawQueue[lengthDrawQueue++] = self;
	//drawQueue.push(self);

	if (Input.GetButton("Fire1") && (Date.now() >= this.nextFire))
	{
		playerShot.isStuckOnPlayer = false;
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
	this.posX = 20;
	this.posY = 350;
};


var playerShot = Object.create(PlayerShotObjectClass);
playerShot.init(playerBullet, glowRed, highRed, 1);
playerShot.addFrame(playerBullet);

var shipCyan = Object.create(PlayerObjectClass);
shipCyan.init(shipF01, glowCyan, highCyan, 2);
shipCyan.addFrame(shipF01);

objectsList.push(shipCyan);
objectsList.push(playerShot);
