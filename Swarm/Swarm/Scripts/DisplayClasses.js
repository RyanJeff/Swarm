var ColourClass = 
{
	r : getRandomInt(0, 255),
	g : getRandomInt(0, 255),
	b : getRandomInt(0, 255),
	index : 0,

	init : function (valueRed, valueGreen, valueBlue, valueIndex)
	{
		this.r = valueRed;
		this.g = valueGreen;
		this.b = valueBlue;
		this.index = valueIndex;
	}
};

// if width and/or height are not passed in, they will be calculated
var FrameObjectClass = 
{
	frameVector: null,
	x: 0,
	y: 0,
	width: 0,
	height: 0,

	init : function (vectors, width, height)
	{
		this.frameVector = $.extend(true, [], vectors);
		var size;
		if ((width == null) || (height == null))
		{
			size = calculateSize(vectors);
		}
		this.width = width == null ? size.width : width;
		this.height = height == null ? size.height : height;
	}
};

var PastFrameObjectClass = Object.create(FrameObjectClass);
PastFrameObjectClass.baseInit = PastFrameObjectClass.init;
PastFrameObjectClass.velX = 0;
PastFrameObjectClass.velY = 0;
PastFrameObjectClass.multX = 0;
PastFrameObjectClass.multY = 0;

PastFrameObjectClass.init = function (vX, vY, mX, mY, vectors, width, height)
{
	PastFrameObjectClass.baseInit(vectors, width, height);
	this.velX = vX;
	this.velY = vY;
	this.multX = mX;
	this.multY = mY;
};

var ObjectProjectionsClass =
{
	minX : 0,
	minY : 0,
	maxX : 0,
	maxY : 0,

	halfWidth : 0,
	halfHeight : 0,
	centreX : 0,
	centreY : 0,

	projectionsSet : function (xMin, xMax, yMin, yMax)
	{
		//console.log("xMin: " + xMin + " xMax: " + xMax + " yMin: " + yMin + " yMax: " + yMax);
		this.minX = xMin;
		this.minY = yMin;
		this.maxX = xMax;
		this.maxY = yMax;
		this.halfWidth = (this.maxX - this.minX) * 0.5;
		this.halfHeight = (this.maxY - this.minY) * 0.5;
		this.centreX = this.minX + this.halfWidth;
		this.centreY = this.minY + this.halfHeight;
		//console.log("this.halfWidth: " + this.halfWidth + " this.halfHeight: " + this.halfHeight + " this.centreX: " + this.centreX + " this.centreY: " + this.centreY);
	}
};

