var Colour = function (valueRed, valueGreen, valueBlue, valueIndex)
{
	this.r = valueRed;
	this.g = valueGreen;
	this.b = valueBlue;
	this.index = valueIndex;
};

// if width and/or height are not passed in, they will be calculated
var FrameObject = function (vectors, width, height)
{
	this.frameVector = $.extend(true, [], vectors);
	var size;
	if ((width == null) || (height == null))
	{
		size = calculateSize(vectors);
	}
	this.width = width == null ? size.width : width;
	this.height = height == null ? size.height : height;
};

var PastFrameObject = function (fObj, vX, vY, mX, mY)
{
	this.frameObj = fObj;
	this.velX = vX;
	this.velY = vY;
	this.multX = mX;
	this.multY = mY;
};

var ObjectProjections = function (xMin, xMax, yMin, yMax)
{
	this.minX = xMin;
	this.minY = yMin;
	this.maxX = xMax;
	this.maxY = yMax;

	this.halfWidth = (this.maxX - this.minX) * 0.5;
	this.halfHeight = (this.maxY - this.minY) * 0.5;
	this.centreX = this.minX + this.halfWidth;
	this.centreY = this.minY + this.halfHeight;

	this.projectionsSet = function (xMin, xMax, yMin, yMax)
	{
		this.minX = xMin;
		this.minY = yMin;
		this.maxX = xMax;
		this.maxY = yMax;
		this.halfWidth = (this.maxX - this.minX) * 0.5;
		this.halfHeight = (this.maxY - this.minY) * 0.5;
		this.centreX = this.minX + this.halfWidth;
		this.centreY = this.minY + this.halfHeight;
	};
};

