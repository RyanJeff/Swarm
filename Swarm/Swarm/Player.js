var playerShot = new DisplayObject(playerBullet, glowRed, highRed, 1);
playerShot.addFrame(playerBullet);
playerShot.start = function ()
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
playerShot.update = function ()
{
	if (this.isStuckOnPlayer)
	{
		this.posX = this.shipPosX + 33;
		this.posY = this.shipPosY + 15;
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
	drawQueue.push(self);
};
playerShot.destroy = function ()
{
	this.isStuckOnPlayer = true;
}

var shipCyan = new DisplayObject(shipF01, glowCyan, highCyan, 2);
objectsList.push(shipCyan);
objectsList.push(playerShot);
shipCyan.addFrame(shipF01);
shipCyan.start = function ()
{
	this.posX = 20;
	this.posY = 350;
	this.velX = 230;
	this.velY = 250;
	this.multX = 3;
	this.multY = 3;

	this.fireRate = 1500;
	this.nextFire = Date.now() + this.fireRate;
}
shipCyan.update = function ()
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
	drawQueue.push(self);

	if (Input.GetButton("Fire1") && (Date.now() >= this.nextFire))
	{
		playerShot.isStuckOnPlayer = false;
	}

};
shipCyan.onTriggerEnter = function (otherObject)
{
	if (otherObject.tag == "Enemy")
	{
		otherObject.destroy();
		this.destroy();
	}
};
shipCyan.destroy = function ()
{
	this.posX = 20;
	this.posY = 350;
};

