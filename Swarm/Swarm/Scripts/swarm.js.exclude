
// Used for the calculation of delta time
var timeNow;
var timeThen;
var timeDelta;

var canvas;
var canvasBack;
var ctx;
var ctxBack;
var canvasBackWidth, canvasBackHeight;

var intervalID;

var NUM_LAYERED_GLOW_LINES = 3;
var FRAME_INTERVAL = 33;			// Time in milliseconds between each displayed frame

var strokesNum = 0;


function clamp(x, min, max)
{
	return x < min ? min : (x > max ? max : x);
}

function dotProduct(a1, a2)
{
	var ret = 0.00;

	for (var i = 0; i < a1.length; ++i)
	{
		ret += a1[i] * a2[i];
	}
	return ret;
}

var Matrix = function (rows, columns, defaultValue)
{
	this._data = new Array();

	for (var i = 0; i < rows; ++i)
	{
		this._data.push(new Array());
	}

	for (var i = 0; i < rows; ++i)
	{
		for (var j = 0; j < columns; ++j)
		{
			this._data[i][j] = defaultValue;
		}
	}

	this.getRowArray = function (row)
	{
		return this._data[row];
	};

	this.getColArray = function (col)
	{
		var ret = new Array();

		for (var i = 0; i < this.rowCount() ; ++i)
		{
			ret.push(this._data[i][col]);
		}
		return ret;
	};

	this.rowCount = function ()
	{
		return this._data.length;
	};

	this.colCount = function ()
	{
		if (this.rowCount() == 0)
		{
			return 0;
		}
		return this._data[0].length;
	};

	this.get = function (row, col)
	{
		return this._data[row][col];
	};

	this.set = function (row, col, value)
	{
		this._data[row][col] = value;
	};

	this.makeIndentity = function ()
	{
		for (var i = 0; i < this.rowCount() ; ++i)
		{
			for (var j = 0; j < this.colCount() ; ++j)
			{
				if (j == i)
				{
					this.set(i, j, 1.00);
				}
				else
				{
					this.set(i, j, 0.00);
				}
			}
		}
	};

	this.matrixMult = function (m)
	{
		var ret = new Matrix(this.rowCount(), m.colCount());
		for (var i = 0; i < ret.rowCount() ; ++i)
		{
			for (var j = 0; j < ret.colCount() ; ++j)
			{
				ret.set(i, j, dotProduct(this.getRowArray(i), m.getColArray(j)));
			}
		}
		return ret;
	};
};

function setDelta()
{
	timeNow = Date.now();
	timeDelta = (timeNow - timeThen) / 1000;	// seconds since last frame
	//timeDelta /= 16;
	timeThen = timeNow;
}

var KEYCODE_UP = 38;
var KEYCODE_DOWN = 40;
var KEYCODE_LEFT = 37;
var KEYCODE_RIGHT = 39;
var KEYCODE_SPACE = 32;

var Input = new (function ()
{
	this.isDownKeyLeft = false;
	this.isDownKeyRight = false;
	this.isDownKeyUp = false;
	this.isDownKeyDown = false;
	this.isDownKeySpace = false;

	this.isRegisteredHandlerKeyUp = false;
	this.isRegisteredHandlerKeyDown = false;

	this.GetAxis = function (axis)
	{
		if (axis == "Horizontal")
		{
			//console.log("Horizontal: " + this.isDownKeyLeft + " : " + this.isDownKeyRight);
			if (this.isDownKeyLeft && this.isDownKeyRight)
			{
				return 0;
			}
			else
			{
				if (this.isDownKeyLeft)
				{
					return -1;
				}
				else
				{
					if (this.isDownKeyRight)
					{
						return 1;
					}
				}
			}
		}
		else
		{
			if (axis == "Vertical")
			{
				//console.log("Vertical");
				if (this.isDownKeyUp && this.isDownKeyDown)
				{
					return 0;
				}
				else
				{
					if (this.isDownKeyUp)
					{
						return -1;
					}
					else
					{
						if (this.isDownKeyDown)
						{
							return 1;
						}
					}
				}
			}
		}
		return 0;
	};

	this.GetButton = function (button)
	{
		if (button == "Fire1")
		{
			return this.isDownKeySpace;
		}
	};

	this.OnKeyDownHandler = function (event)
	{
		this.isRegisteredHandlerKeyUp = true;
		var keyDown = event.keyCode;
		if (keyDown == KEYCODE_LEFT)
		{
			//console.log("Left");
			this.isDownKeyLeft = true;
		}
		if (keyDown == KEYCODE_RIGHT)
		{
			//console.log("Right");
			this.isDownKeyRight = true;
		}
		if (keyDown == KEYCODE_UP)
		{
			//console.log("Up");
			this.isDownKeyUp = true;
		}
		if (keyDown == KEYCODE_DOWN)
		{
			//console.log("Down");
			this.isDownKeyDown = true;
		}
		if (keyDown == KEYCODE_SPACE)
		{
			//console.log("Down");
			this.isDownKeySpace = true;
		}
	};

	this.OnKeyUpHandler = function (event)
	{
		this.isRegisteredHandlerKeyDown = true;
		var keyUp = event.keyCode;
		if (keyUp == KEYCODE_LEFT)
		{
			//console.log("Left UP");
			this.isDownKeyLeft = false;
		}
		if (keyUp == KEYCODE_RIGHT)
		{
			//console.log("Right UP");
			this.isDownKeyRight = false;
		}
		if (keyUp == KEYCODE_UP)
		{
			//console.log("Up UP");
			this.isDownKeyUp = false;
		}
		if (keyUp == KEYCODE_DOWN)
		{
			//console.log("Down UP");
			this.isDownKeyDown = false;
		}
		if (keyUp == KEYCODE_SPACE)
		{
			//console.log("Down");
			this.isDownKeySpace = false;
		}
	};

	var self = this;
	$(document).keydown($.proxy(this.OnKeyDownHandler, this));
	$(document).keyup($.proxy(this.OnKeyUpHandler, this));
});

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

function polyToPolyCollision(dO1, dO2)
{
	var distX = dO1.projections.centreX - dO2.projections.centreX;
	var totalHalfWidth = dO1.projections.halfWidth + dO2.projections.halfWidth;
	if (Math.abs(distX) < totalHalfWidth)
	{
		var distY = dO1.projections.centreY - dO2.projections.centreY;
		var totalHalfHeight = dO1.projections.halfHeight + dO2.projections.halfHeight;
		if (Math.abs(distY) < totalHalfHeight)
		{
			// Collision!?
			if (typeof (dO1.onTriggerEnter) === "function")
			{
				dO1.onTriggerEnter(dO2);
			}
			else
			{
				if (typeof (dO2.onTriggerEnter) === "function")
				{
					dO2.onTriggerEnter(dO1);
				}
			}


			/*if (Math.abs(distX) < Math.abs(distY))
			{
				dO1.velX = -dO1.velX
				dO2.velX = -dO2.velX
				if (distX < 0)
				{
					dO1.posX -= totalHalfWidth - Math.abs(distX);
				}
				else
				{
					dO1.posX += totalHalfWidth - Math.abs(distX);
				}
			}
			else
			{
				dO1.velY = -dO1.velY
				dO2.velY = -dO2.velY
				if (distY < 0) {
					dO1.posY -= totalHalfHeight - Math.abs(distY)nba ;
				}
				else {
					dO1.posY += totalHalfHeight - Math.abs(distY);
				}
			}*/
		}

	}
}

function drawPastFrame(pFrame, posX, posY, multX, multY)
{
	var pX, pY;

	for (var j = 0; j < pFrame.length; ++j)
	{
		if (pFrame[j][0] < 0)
		{
			++j;
			pX = (posX + (pFrame[j][0] * multX) + 0.5) | 0;
			pY = (posY + (pFrame[j][1] * multY) + 0.5) | 0;
			ctx.moveTo(pX, pY);
			//ctx.moveTo(posX + (pFrame[j][0] * multX), posY + (pFrame[j][1] * multY));
			continue;
		}
		pX = (posX + (pFrame[j][0] * multX) + 0.5) | 0;
		pY = (posY + (pFrame[j][1] * multY) + 0.5) | 0;
		ctx.lineTo(pX, pY);
		//ctx.lineTo(posX + (pFrame[j][0] * multX), posY + (pFrame[j][1] * multY));
	}
}

function drawPastFrames (pQueue, colourGlow)
{
	var rgbaColour;
	/*var dispObjectPastFrames = dispObject.pastFrames;
	if (dispObjectPastFrames.length > 0)
	{
		var posX = -(dispObject.pastFramesTotalVelX) * 0.03;
		var posY = -(dispObject.pastFramesTotalVelY) * 0.03;
		//var saves = 0;
		//var restores = 0;
		for (var k = dispObjectPastFrames.length - 1; k >= 0; --k)
		{
			ctx.save();
			ctx.translate(-(dispObjectPastFrames[k].velX) * 0.02, -(dispObjectPastFrames[k].velY) * 0.02);
			//++saves;
		}
		//console.log("saves: " + saves);
		var pastFrame;
		for (var k = 0; k < dispObjectPastFrames.length; ++k)
		{
			pastFrame = dispObjectPastFrames[k].frameObj.frameVector;
			ctx.globalAlpha = (k * 0.1) / 20;*/

	ctx.lineWidth = 1;
	//var timeStart;
	//timeStart = Date.now();
	//console.log("pQueue.length: " + pQueue.length);
			for (var i = 0; i < pQueue.length; ++i)
			{
				rgbaColour = "rgba(" + colourGlow.r + ", " + colourGlow.g + ", " + colourGlow.b + ", " + (((i + 1) / pQueue.length) * 0.75) + ")";
				ctx.strokeStyle = rgbaColour;
				//console.log("rgbaColour: " + rgbaColour);

				ctx.beginPath();

				//console.log("pQueue[" + i + "].length: " + pQueue[i].length);
				for (var j = 0; j < pQueue[i].length; ++j)
				{
					//console.log("j: " + j);
					if ((typeof (pQueue[i][j]) === "undefined"))
					{
						clearInterval(intervalID);
						console.log("j: " + j + " pQueue[i].length: " + pQueue[i].length);
						/*for (var k = 0; k < pQueue[i].length; ++k)
						{
							console.log("k: " + k + " pQueue[i][k]: " + pQueue[i][k]);
						}*/
					}
					drawPastFrame(pQueue[i][j].frameObj.frameVector, pQueue[i][j].velX, pQueue[i][j].velY, pQueue[i][j].multX, pQueue[i][j].multY);
				}

				ctx.stroke();
				++strokesNum;
			}
			//console.log("queue time: " + (Date.now() - timeStart));

			/*ctx.restore();
			//++restores;
		}
	}
	ctx.globalAlpha = 1.0;*/
}

function drawObjectLines(dispObject, posX, posY, multX, multY, setProjectionValues)
{
	var dispFrameObject;
	var dispObjectCurrent;
	var normalAX = [1, 0];
	var normalAY = [0, 1];
	var vectorB = new Array();
	var lastValX;
	var lastValY;
	var valX, valY;
	var xMin, xMax, yMin, yMax;

	dispFrameObject = dispObject.getFrameObject();
	dispObjectCurrent = dispFrameObject.frameVector;

	for (var j = 0; j < dispObjectCurrent.length; ++j)
	{
		if (dispObjectCurrent[j][0] < 0)
		{
			++j;
			if ((typeof (dispObjectCurrent[j]) === "undefined"))
			{
				clearInterval(intervalID);
				console.log("j: " + j + " dispObjectCurrent.length: " + dispObjectCurrent.length);
				for (var j = 0; j < dispObjectCurrent.length; ++j)
				{
					console.log("j: " + j + " [" + dispObjectCurrent[j][0] + ", " + dispObjectCurrent[j][1] + "], ");
				}
			}
			ctx.moveTo(posX + (dispObjectCurrent[j][0] * multX), posY + (dispObjectCurrent[j][1] * multY));
			if (setProjectionValues)
			{
				vectorB[0] = posX + (dispObjectCurrent[j][0] * multX);
				vectorB[1] = posY + (dispObjectCurrent[j][1] * multY);
				valX = dotProduct(normalAX, vectorB);
				valY = dotProduct(normalAY, vectorB);
				if (isNaN(lastValX))
				{
					lastValX = valX;
					lastValY = valY;
					xMin = valX;
					xMax = valX;
					yMin = valY;
					yMax = valY;
				}
				else
				{
					xMin = Math.min(valX, lastValX);
					xMax = Math.max(valX, lastValX);
					yMin = Math.min(valY, lastValY);
					yMax = Math.max(valY, lastValY);
				}
			}
			continue;
		}
		ctx.lineTo(posX + (dispObjectCurrent[j][0] * multX), posY + (dispObjectCurrent[j][1] * multY));
		if (setProjectionValues)
		{
			vectorB[0] = posX + (dispObjectCurrent[j][0] * multX);
			vectorB[1] = posY + (dispObjectCurrent[j][1] * multY);
			valX = dotProduct(normalAX, vectorB);
			valY = dotProduct(normalAY, vectorB);
			if (isNaN(lastValX))
			{
				lastValX = valX;
				lastValY = valY;
				xMin = valX;
				xMax = valX;
				yMin = valY;
				yMax = valY;
			}
			else
			{
				xMin = Math.min(valX, lastValX);
				xMax = Math.max(valX, lastValX);
				yMin = Math.min(valY, lastValY);
				yMax = Math.max(valY, lastValY);
			}
		}
	}
	//ctx.beginPath();
	/*ctx.moveTo(xMin, 10);
	ctx.lineTo(xMax, 10);
	ctx.moveTo(10, yMin);
	ctx.lineTo(10, yMax);*/
	//ctx.stroke();
	if (setProjectionValues)
	{
		//console.log("xMin: " + xMax + " xMax: " + xMin + " yMin: " + yMin + " yMax: " + yMax);
		dispObject.projections.projectionsSet(xMin, xMax, yMin, yMax);
	}
}

function drawObjects(dQueue)
{
	var currColourIndex = dQueue[0].glow.index;
	var dispObject = dQueue[0];
	var dispFrameObject;
	var lineStroke = NUM_LAYERED_GLOW_LINES;
	var transition = dispObject.keyframeRate * timeDelta;

	for (var i = NUM_LAYERED_GLOW_LINES; i >= 0; --i)
	{
		ctx.lineWidth = (i + 1) * 3 - 2;
		if (i == 0)
		{
			ctx.strokeStyle = "rgba(" + dispObject.glow.r + ", " + dispObject.glow.g + ", " + dispObject.glow.b + ", 1.0)";
		}
		else
		{
			ctx.strokeStyle = "rgba(" + dispObject.highlight.r + ", " + dispObject.highlight.g + ", " + dispObject.highlight.b + ", 0.3)";
		}

		ctx.beginPath();

		for (var j = 0; j < dQueue.length; ++j)
		{
			dispObject = dQueue[j];
			transition = dispObject.keyframeRate * timeDelta;
			dispObject.transitionTotalAdjust(transition);
			dispObject.nextKeyframe();
			drawObjectLines(dispObject, dispObject.posX, dispObject.posY, dispObject.multX, dispObject.multY, i == NUM_LAYERED_GLOW_LINES);
			if (i == 0)
			{
				dispFrameObject = dispObject.getFrameObject();
				//dispObject.pastFrameAdd(dispFrameObject, dispObject.posX, dispObject.posY);
				dispObject.pastFrameAdd(dispFrameObject, dispObject.posX + (dispObject.lastDeltaX * 0.001), dispObject.posY + (dispObject.lastDeltaY * 0.001), dispObject.multX, dispObject.multY);
			}
		}

		ctx.stroke();
		++strokesNum;
	}
}

function calculateSize(vectors)
{
	var valX, valY;
	var smallestX, smallestY;
	var largestX, largestY;
	smallestX = smallestY = 424242;
	largestX = largestY = 0;

	for (var i = 0; i < vectors.length; ++i)
	{
		if (vectors[i][0] >= 0)
		{
			valX = vectors[i][0];
			valY = vectors[i][1];
			smallestX = valX < smallestX ? valX : smallestX;
			smallestY = valY < smallestY ? valY : smallestY;
			largestX = valX > largestX ? valX : largestX;
			largestY = valY > largestY ? valY : largestY;
		}
	}
	var dispObjectWidth = largestX - smallestX;
	var dispObjectHeight = largestY - smallestY;
	var retSize = new Object();
	retSize.width = dispObjectWidth;
	retSize.height = dispObjectHeight;
	return retSize;
}

function calculateInbetweens(vectorsFrom, vectorsTo, keyframeRate)
{
	var ret = new Array();
	var inbetweens = new Array();
	var frameInbetween;
	var matrixTransform = new Matrix(3, 3, 0.00);
	var spacePoint = new Matrix(3, 1, 1.00);
	var newPoint;
	var transitionTotal = 0;
	var transition;
	var flipFrames = false;
	var vFrom;
	// We are calculation from vectorsFrom to vectorsTo and the reverse, 
	// so (in the voice of The Highlander) there can be only twoooooooooo..
	for (var j = 0; j < 2; ++j)
	{
		while (transitionTotal < 1.00)
		{
			transition = keyframeRate * (FRAME_INTERVAL / 1000);
			transitionTotal += transition;
			if (flipFrames)
			{
				frameInbetween = $.extend(true, [], vectorsFrom);
				vFrom = vectorsTo;
			}
			else
			{
				frameInbetween = $.extend(true, [], vectorsTo);
				vFrom = vectorsFrom;
			}
			//console.log("vFrom.length: " + vFrom.length + " vectorsFrom.length: " + vectorsFrom.length);
			for (var i = 0; i < frameInbetween.length; ++i)
			{
				if (frameInbetween[i][0] >= 0)
				{
					matrixTransform.makeIndentity();
					matrixTransform.set(0, 2, (vFrom[i][0] - frameInbetween[i][0]) * transitionTotal);
					matrixTransform.set(1, 2, (vFrom[i][1] - frameInbetween[i][1]) * transitionTotal);
					spacePoint.set(0, 0, frameInbetween[i][0]);
					spacePoint.set(1, 0, frameInbetween[i][1]);
					spacePoint.set(2, 0, 1.00);
					newPoint = matrixTransform.matrixMult(spacePoint);
					// Fix rounding errors - we don't want any result < 0
					frameInbetween[i][0] = newPoint.get(0, 0) < 0 ? 0 : newPoint.get(0, 0);
					frameInbetween[i][1] = newPoint.get(1, 0) < 0 ? 0 : newPoint.get(1, 0);
				}
			}
			inbetweens.push(new FrameObject(frameInbetween));
		}
		flipFrames = true;
		transitionTotal = 0;
		ret.push($.extend(true, [], inbetweens));
		while (inbetweens.length > 0)
		{
			inbetweens.pop();
		}
	}
	return ret;
}

var DisplayObject = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.frameList = new Array();
	this.frameListCopy;
	this.inbetweensList = new Array();
	this.forward = true;

	this.frameList.push(new FrameObject(initialVectors));

	this.glow = colourGlow;
	this.highlight = colourHighlight;
	this.keyframeRate = keyframeRate;	// Keyframes per second
	this.keyframeCurrent = 0;
	this.keyframeLast = 0;
	this.transitionTotal = 0;			// Total time transitioning so far, used to know when to goto next keyframe
	this.flipped = false;
	this.pastFrames = new Array();
	this.pastFramesMax = 10;
	this.pastFramesTotalVelX = 0;
	this.pastFramesTotalVelY = 0;
	this.frameListBroken = new Array();
	this.broken = false;

	this.posX = 0;
	this.posY = 0;
	this.velX = 0;      // Pixels per second horizontally
	this.velY = 0;      // Pixels per second vertically
	this.multX = 1;		// Horixontal scaling factor
	this.multY = 1;		// Vertical scaling factor
	this.lastDeltaX = 0;
	this.lastDeltaY = 0;
	this.currentWidth = 0;
	this.currentHeight = 0;
	this.projections = new ObjectProjections(0, 0, 0, 0);
	this.isTrigger = false;		// true = this object can trigger a collision
	this.tag = "";

	this.pastFrameAdd = function (fObj, vX, vY, mX, mY)
	{
		if (this.pastFrames.length == this.pastFramesMax)
		{
			var pastFrameOld = this.pastFrames.splice(0, 1);
			this.pastFramesTotalVelX -= pastFrameOld[0].velX;
			this.pastFramesTotalVelY -= pastFrameOld[0].velY;
		}
		this.pastFrames.push(new PastFrameObject(fObj, vX, vY, mX, mY));
		this.pastFramesTotalVelX += vX;
		this.pastFramesTotalVelY += vY;
	};

	this.addFrame = function (vectors)
	{
		if (vectors.length != this.frameList[this.keyframeCurrent].length)
		{
			console.assert("Added vectors length does not match!");
		}
		this.frameList.push(new FrameObject(vectors));
		this.keyframeLast = this.frameList.length - 1;
		var prevFrame = this.frameList[this.frameList.length - 2];
		var vFrom = prevFrame.frameVector;
		//console.log("vFrom: " + vFrom.length + " vectors: " + vectors.length + " keyframeRate: " + keyframeRate);
		this.inbetweensList.push(calculateInbetweens(vFrom, vectors, keyframeRate));
	};

	this.getFrameObject = function ()
	{
		//console.log("this.inbetweensList.length: " + this.inbetweensList.length);
		//console.log("this.inbetweensList[0].length: " + this.inbetweensList[0].length);
		//console.log("this.inbetweensList[0][0].length: " + this.inbetweensList[0][0].length);
		//console.log("this.inbetweensList[0][1].length: " + this.inbetweensList[0][1].length);
		var frameInbetween = Math.floor(this.transitionTotal * this.inbetweensList[0][0].length);
		//console.log("frameInbetween: " + frameInbetween);
		// First index is what keyframes then inbetweeners are between.  0 is between keyframe 0 and 1.  Right now only *one* inbetweener is supported
		// Second index is which direction of inebtweener:
		//		0 - Forward (ie. from keyframe 0 -> keyframe 1)
		//		1 - Backward (ie. from keyfram 1 -> keyframe 0)
		// Third index is a specific inbetween FrameObject
		return this.forward ? this.inbetweensList[0][0][frameInbetween] : this.inbetweensList[0][1][frameInbetween];
	};

	this.transitionTotalAdjust = function (transition)
	{
		this.transitionTotal += transition;
	};

	this.nextKeyframe = function ()
	{
		if (this.transitionTotal >= 1.00)
		{
// Please do not remove this, it is used for testing...!
/*if (this.flipped)
{
	console.log ("clearing interval!");
	clearInterval (intervalID);
}
else
{
	console.log ("Flipping keyframe!");
	this.flipped = true;
}*/
			this.keyframeLast = this.keyframeCurrent;
			++(this.keyframeCurrent);
			if (typeof this.frameList === "undefined")
			{
				clearInterval(intervalID);
			}
			if (this.keyframeCurrent >= this.frameList.length)
			{
				this.keyframeCurrent = 0;
			}
			this.transitionTotal = 0;
			this.forward = !(this.forward);
		}
	};

	this.breakApart = function ()
	{
		var numPieces = Math.floor((Math.random() * 10) + 5);
		var smallPieceSize = Math.floor(this.frameList[0].length / numPieces * 0.5);
		var largePieceSize = Math.floor(this.frameList[0].length / numPieces);
		var aPiece, sumPieces;

		sumPieces = 0;
		for (var i = 0; i < numPieces; ++i)
		{
			aPiece = Math.floor((Math.random() * largePieceSize) + smallPieceSize);
			if (i < numPieces - 1)
			{
				sumPieces += aPiece;
			}
			else
			{
				aPiece = this.frameList[0].length - sumPieces;
				sumPieces += aPiece;
			}
			this.frameListBroken.push(aPiece);
		}
		this.broken = true;
	};

	// this is called after the object is created...
	this.start = function ()
	{

	};
	// this is called each frame...
	this.update = function ()
	{

	};
	// This would be added to a DisplayObject if it handles collision
	// THIS SHOULD *NOT* BE UNCOMMENTED!!!!!!!!!!!!!!
	/*this.onTriggerEnter = function (dispObject)
	{

	}*/
	// Called when this object must cease to be.
	// you don't have to go home, but we don't want to see you 
	// around here no more no more.
	this.destroy = function ()
	{

	};
};

var EnemyController = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.dObj = new DisplayObject(initialVectors, colourGlow, colourHighlight, keyframeRate);
	this.dObj.tag = "Enemy";
	this.dObj.isTrigger = true;


	this.onTriggerEnter = function (otherObject)
	{
		if (other.dObj.tag != "Enemy")
		{
			/*myGameController.AddScore (scoreValue);
			Instantiate(explosionEnemy, transform.position, transform.rotation);
			if (other.gameObject.tag == "Player")
			{
				Instantiate(explosionPlayer, other.transform.position, other.transform.rotation);
				myGameController.GameOver();
			}*/
			otherObject.dObj.destroy();
			this.dObj.destroy();
		}
	};
}

var EnemyShotController = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.dObj = new DisplayObject(initialVectors, colourGlow, colourHighlight, keyframeRate);
	this.dObj.tag = "Enemy";
	this.dObj.isTrigger = true;

	this.speed = 20;
	this.yMax = 800;

	this.update = function ()
	{
		var distanceY = this.speed * timeDelta;
		this.dObj.posY += distanceY;

		drawObject(this.dObj, this.dObj.posX, this.dObj.posY, 5, 5, 0, this.speed);

		if (this.dObj.pox >= this.yMax)
		{
			this.dObj.destroy();
		}
	};
};

var PlayerController = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.dObj = new DisplayObject(initialVectors, colourGlow, colourHighlight, keyframeRate);
	this.dObj.tag = "Player";
	this.dObj.isTrigger = true;


	this.onTriggerEnter = function (otherObject)
	{
		if (other.dObj.tag == "Enemy")
		{
			otherObject.dObj.destroy();
			this.dObj.destroy();
		}
	};
};

var PlayerShotController = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.dObj = new DisplayObject(initialVectors, colourGlow, colourHighlight, keyframeRate);
	this.dObj.tag = "PlayerShot";
	this.dObj.isTrigger = true;

	this.speed = 30;
	this.yMax = -10;

	this.update = function ()
	{
		var distanceY = -this.speed * timeDelta;
		this.dObj.posY += distanceY;

		drawObject(this.dObj, this.dObj.posX, this.dObj.posY, 5, 5, 0, -this.speed);

		if (this.dObj.pox <= this.yMax)
		{
			this.dObj.destroy();
		}
	};
};

$(document).ready(function ()
{

	canvas = document.getElementById("canvasFirst");
	ctx = canvas.getContext("2d");
	var FILL_COLOR = "black";
	var canvasWidth, canvasHeight;
	var yVel = 0.10;
	var xVel = 1;
	var xP = 10;
	var yP = 10;
	var rotP = 0.00;		// current rotation multiplier, to be multiplied by PI to get radians
	var rotSpeed = 0.01;
	var frameCount = 0;
	var frameBeat = true;
	var glowColour = new Object();
	glowColour.r = 0;
	glowColour.g = 0;
	glowColour.b = 0;
	var highlightColour = new Object();
	highlightColour.r = 0;
	highlightColour.g = 0;
	highlightColour.b = 0;
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	canvas.width = windowHeight * 0.5625;
	canvas.height = windowHeight;

	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
	canvas.style.left = ((windowWidth * 0.5) - (canvasWidth * 0.5)) + "px";
	canvas.style.backgroundColor = "rgb(0,0,0)";
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	canvasBack = document.createElement("canvas");
	canvasBack.width = canvasWidth;
	canvasBack.height = canvasHeight;
	canvasBack.style.backgroundColor = "rgb(0,0,0)";
	canvasBack.style.visibility = "hidden";
	canvasBackWidth = canvasBack.width;
	canvasBackHeight = canvasBack.height;
	ctxBack = canvasBack.getContext("2d");

	var dispY = 0;

	function getRandomInt(min, max)
	{
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function rgbValuesToString(redColour, greenColour, blueColour)
	{
		var rgbValueString = "";

		rgbValuesString = "rgb(" + redColour + "," + greenColour + "," + blueColour + ")";
		console.log("rgbValuesString: " + rgbValuesString);
		return rgbValueString;
	}

	var alienOneF01 = [[-1, -1], [0, 4], [2, 4], [2, 2], [8, 2], [8, 0], [16, 0], [16, 2], [22, 2], [22, 4],
					[24, 4], [24, 10], [18, 10], [18, 12], [20, 12], [20, 14], [24, 14], [24, 16], [20, 16],
					[20, 14], [16, 14], [16, 12], [14, 12], [14, 14], [10, 14], [10, 12], [8, 12], [8, 14],
					[4, 14], [4, 16], [0, 16], [0, 14], [4, 14], [4, 12], [6, 12], [6, 10], [0, 10], [0, 4],
					[-1, -1], [6, 6], [10, 6], [10, 8], [6, 8], [6, 6],
					[-1, -1], [14, 6], [18, 6], [18, 8], [14, 8], [14, 6],
					[-1, -1], [10, 12], [10, 10], [14, 10], [14, 12]];

	var alienOneF02 = [[-1, -1], [0, 4], [2, 4], [2, 2], [8, 2], [8, 0], [16, 0], [16, 2], [22, 2], [22, 4],
					[24, 4], [24, 10], [20, 10], [20, 12], [22, 12], [22, 14], [20, 14], [20, 16], [16, 16],
					[16, 14], [18, 14], [18, 12], [14, 12], [14, 14], [10, 14], [10, 12], [6, 12], [6, 14],
					[8, 14], [8, 16], [4, 16], [4, 14], [2, 14], [2, 12], [4, 12], [4, 10], [0, 10], [0, 4],
					[-1, -1], [6, 6], [10, 6], [10, 8], [6, 8], [6, 6],
					[-1, -1], [14, 6], [18, 6], [18, 8], [14, 8], [14, 6],
					[-1, -1], [10, 12], [10, 10], [14, 10], [14, 12]];

	var alienTwoF01 = [[-1, -1], [0, 6], [2, 6], [2, 4], [4, 4], [4, 2], [6, 2], [6, 0], [10, 0], [10, 2], [12, 2],
					[12, 4], [14, 4], [14, 6], [16, 6], [16, 10], [0, 10], [0, 6],
					// Left eye
					[-1, -1], [4, 6], [6, 6], [6, 8], [4, 8], [4, 6],
					// Right eye
					[-1, -1], [10, 6], [12, 6], [12, 8], [10, 8], [10, 6],
					// Left foot
					[-1, -1], [2, 10], [2, 12], [0, 12], [0, 14], [2, 14], [2, 16], [4, 16], [4, 14], [2, 14], [2, 12],
					[4, 12], [4, 10], [2, 10],
					// Mouth
					[-1, -1], [6, 10], [6, 12], [10, 12], [10, 10], [6, 10],
					// Right foot
					[-1, -1], [12, 10], [12, 12], [14, 12], [14, 14], [12, 14], [12, 16], [14, 16], [14, 14], [16, 14],
					[16, 12], [14, 12], [14, 10], [12, 10],
					// Need left and right toe placeholders.. 
					[-1, -1], [4, 14], [4, 14], [4, 14], [4, 14], [4, 14],
					[-1, -1], [12, 14], [12, 14], [12, 14], [12, 14], [12, 14]];

	var alienTwoF02 = [[-1, -1], [0, 6], [2, 6], [2, 4], [4, 4], [4, 2], [6, 2], [6, 0], [10, 0], [10, 2], [12, 2],
					[12, 4], [14, 4], [14, 6], [16, 6], [16, 10], [0, 10], [0, 6],
					// Left eye
					[-1, -1], [4, 6], [6, 6], [6, 8], [4, 8], [4, 6],
					// Right eye
					[-1, -1], [10, 6], [12, 6], [12, 8], [10, 8], [10, 6],
					// Left foot
					[-1, -1], [4, 10], [4, 12], [2, 12], [2, 14], [0, 14], [0, 16], [2, 16], [2, 14], [4, 14], [4, 12],
					[6, 12], [6, 10], [4, 10],
					// Mouth
					[-1, -1], [6, 12], [6, 14], [10, 14], [10, 12], [6, 12],
					// Right foot
					[-1, -1], [10, 10], [10, 12], [12, 12], [12, 14], [14, 14], [14, 16], [16, 16], [16, 14], [14, 14],
					[14, 12], [12, 12], [12, 10], [10, 10],
					// Left and right toes
					[-1, -1], [4, 14], [4, 16], [6, 16], [6, 14], [4, 14],
					[-1, -1], [10, 14], [10, 16], [12, 16], [12, 14], [10, 14]];

	var alienThreeF01 = [[-1, -1], [4, 0], [6, 0], [6, 2], [8, 2], [8, 4], [14, 4], [14, 2], [16, 2], [16, 0], [18, 0],
						[18, 2], [16, 2], [16, 4], [18, 4], [18, 6], [20, 6], [20, 8], [22, 8], [22, 14], [20, 14],
						[20, 10], [18, 10], [18, 14], [16, 14], [16, 16], [12, 16], [12, 14], [16, 14], [16, 12], [6, 12],
						[6, 14], [10, 14], [10, 16], [6, 16], [6, 14], [4, 14], [4, 10], [2, 10], [2, 14], [0, 14],
						[0, 8], [2, 8], [2, 6], [4, 6], [4, 4], [6, 4], [6, 2], [4, 2], [4, 0],
						[-1, -1], [6, 6], [8, 6], [8, 8], [6, 8], [6, 6],
						[-1, -1], [14, 6], [16, 6], [16, 8], [14, 8], [14, 6]];

	var alienThreeF02 = [[-1, -1], [4, 0], [6, 0], [6, 2], [8, 2], [8, 4], [14, 4], [14, 2], [16, 2], [16, 0], [18, 0],
						[18, 2], [16, 2], [16, 4], [18, 4], [18, 6], [20, 6], [20, 2], [22, 2], [22, 10], [20, 10],
						[20, 12], [18, 12], [18, 14], [20, 14], [20, 16], [18, 16], [18, 14], [16, 14], [16, 12], [6, 12],
						[6, 14], [4, 14], [4, 16], [2, 16], [2, 14], [4, 14], [4, 12], [2, 12], [2, 10], [0, 10], [0, 2],
						[2, 2], [2, 6], [4, 6], [4, 4], [6, 4], [6, 2], [4, 2], [4, 0],
						[-1, -1], [7, 6], [6, 7], [7, 8], [8, 7], [7, 6],
						[-1, -1], [15, 6], [14, 7], [15, 8], [16, 7], [15, 6],
	];

	var testMF01 = [
					// Mouth
					[-1, -1], [6, 10], [6, 12], [10, 12], [10, 10], [6, 10]];

	var testMF02 = [
					// Mouth
					[-1, -1], [6, 12], [6, 14], [10, 14], [10, 12], [6, 12]];

	var shipF01 = [
	                // Ship:
                    [-1, -1], [14, 22], [15, 22], [15, 17], [14, 17], [14, 15], [13, 15], [13, 11], [12, 11], [12, 10],
                    [11, 10], [11, 7], [12, 7], [12, 5], [11, 5], [11, 3], [10, 3], [10, 2], [9, 2], [9, 0], [8, 0],
                    [8, 8], [7, 8], [7, 0], [6, 0], [6, 1], [6, 2], [5, 2], [5, 3], [4, 3], [4, 5], [3, 5], [3, 7],
                    [4, 7], [4, 10], [3, 10], [3, 11], [2, 11], [2, 15], [1, 15], [1, 17], [0, 17], [0, 22], [2, 22],
                    [2, 21], [3, 21], [3, 20], [4, 20], [4, 19], [5, 19], [5, 22], [7, 22], [7, 18], [8, 18], [8, 22],
                    [10, 22], [10, 19], [11, 19], [11, 20], [12, 20], [12, 21], [13, 21], [13, 22], [14, 22],
                    [-1, -1], [4, 10], [5, 10], [5, 12], [4, 12], [4, 14], [3, 14], [3, 16], [2, 16], [2, 15],
                    [-1, -1], [11, 10], [10, 10], [10, 12], [11, 12], [11, 14], [12, 14], [12, 16], [13, 16], [13, 15],
                    [-1, -1], [7, 13],
                    [-1, -1], [5, 19], [5, 13], [7, 13], [7, 18],
                    [-1, -1], [8, 18], [8, 13], [10, 13], [10, 19],
                    // Thrusters:
                    //[-1, -1], [5, 22], [5, 24], [6, 24], [6, 25], [7, 25], [7, 22],
                    //[-1, -1], [8, 22], [8, 25], [9, 25], [9, 24], [10, 24], [10, 22]
	];

	var centipede01 = [[-1, -1], [49, 13], [48, 14], [47, 14], [46, 13], [45, 13], [44, 14],
					[43, 14], [42, 13], [41, 13], [40, 14], [39, 14], [38, 13], [37, 13],
					[36, 12], [37, 12], [38, 12], [39, 13], [40, 13], [41, 12], [42, 12],
					[43, 13], [44, 13], [45, 12], [46, 12], [47, 13], [48, 13], [49, 13],

					[-1, -1], [47, 12], [47, 13],
					[-1, -1], [45, 13], [45, 14],
					[-1, -1], [43, 13], [43, 12],
					[-1, -1], [41, 13], [41, 14],
					[-1, -1], [39, 13], [39, 13]];

	var centipede02 = [[-1, -1], [48, 16], [49, 16], [48, 15], [47, 15], [46, 16],
					[45, 16], [44, 15], [43, 15], [42, 16], [41, 16], [40, 15], [39, 15],
					[38, 16], [37, 16], [36, 17], [37, 17], [38, 17], [39, 16], [40, 16],
					[41, 17], [42, 17], [43, 16], [44, 16], [45, 17], [46, 17], [47, 16],
					[48, 16],
					[-1, -1], [47, 16], [47, 17],
					[-1, -1], [45, 16], [45, 15],
					[-1, -1], [43, 16], [43, 17],
					[-1, -1], [41, 16], [41, 15],
					[-1, -1], [39, 16], [39, 17]];

	var fly = [[-1, -1], [17, 15], [-1, -1], [12, 10], [-1, -1], [20, 15], [21, 15], [22, 14],
 [21, 13], [20, 13], [19, 14], [20, 15], [-1, -1], [21, 13], [22, 12], [23, 11],
 [23, 10], [22, 10], [21, 11], [21, 13], [-1, -1], [20, 13], [20, 11], [19, 10],
 [18, 10], [18, 11], [20, 13], [-1, -1], [20, 11], [20, 10], [21, 10], [21, 11],
 [-1, -1], [21, 13], [22, 13], [-1, -1], [20, 13], [19, 13], [-1, -1], [21, 10],
 [22, 9], [-1, -1], [20, 10], [19, 9], [-1, -1], [24, 14], [-1, -1], [24, 10], [-1, -1],
 [26, 10], [26, 13], [25, 14], [26, 15], [27, 15], [28, 14], [27, 13], [27, 10],
 [26, 10], [-1, -1], [26, 13], [27, 13], [-1, -1], [27, 11], [-1, -1], [27, 11],
 [29, 13], [29, 14], [28, 14], [27, 13], [27, 11], [-1, -1], [26, 11], [24, 13],
 [24, 14], [25, 14], [-1, -1], [27, 10], [28, 9], [-1, -1], [26, 10], [25, 9], [-1, -1],
 [27, 10], [-1, -1], [27, 11], [28, 11], [-1, -1], [26, 11], [25, 11]];

	var beetle = [[-1, -1], [25, 7], [21, 7], [21, 8], [20, 8], [20, 9], [19, 9], [19, 11], [20, 11], [20, 12],
 [21, 12], [21, 13], [25, 13], [25, 12], [26, 12], [26, 11], [27, 11], [27, 9], [26, 9], [26, 8],
 [25, 8], [25, 7], [-1, -1], [21, 12], [25, 12], [23, 12], [-1, -1], [23, 12], [23, 5], [-1, -1],
 [25, 7], [-1, -1], [24, 7], [24, 6], [23, 5], [22, 6], [22, 7], [-1, -1], [22, 13], [22, 14], [24, 14],
 [24, 13], [-1, -1], [24, 14], [-1, -1], [24, 11], [25, 11], [25, 10], [24, 10], [24, 11], [-1, -1],
 [22, 10], [22, 9], [21, 9], [21, 10], [22, 10], [-1, -1], [37, 17], [39, 17], [39, 16], [37, 16],
 [37, 17], [-1, -1], [36, 15], [36, 16], [40, 16], [40, 15], [36, 15], [-1, -1], [35, 15], [41, 15],
 [42, 14], [42, 13], [43, 12], [43, 10], [42, 9], [41, 9], [40, 8], [42, 6], [42, 7], [41, 8], [41, 9],
 [-1, -1], [38, 15], [39, 14], [39, 13], [40, 12], [40, 11], [40, 8], [-1, -1], [37, 14], [37, 13],
 [36, 12], [36, 8], [35, 9], [34, 9], [33, 10], [33, 12], [34, 13], [34, 14], [35, 15], [-1, -1],
 [37, 14], [38, 15], [-1, -1], [36, 8], [34, 6], [34, 7], [35, 8], [35, 9], [-1, -1], [36, 11], [37, 10],
 [38, 9], [39, 10], [40, 11], [-1, -1], [37, 12], [38, 11], [39, 12], [37, 12], [-1, -1], [40, 14],
 [41, 13], [40, 13], [40, 14], [-1, -1], [35, 13], [35, 12], [34, 12], [35, 13]];

	var playerBullet = [[-1, -1], [1, 0], [1, 2], [0, 2], [0, 4], [1, 4], [1, 8], [2, 8], [2, 4], [3, 4],
						[3, 2], [2, 2], [2, 0], [1, 0],
						[-1, -1], [1, 3], [1, 4], [2, 4], [2, 3], [1, 3]];

	var enemyBomb01 = [[-1, -1], [0, 0], [0, 1], [1, 1], [1, 2], [0, 2], [0, 4], [1, 4], [1, 5], [2, 5], [2, 4], [3, 4], [3, 2], [2, 2], [2, 1], [3, 1], [3, 0], [0, 0]];

	var enemyBomb02 = [[-1, -1], [1, 0], [1, 1], [1, 1], [1, 2], [0, 2], [0, 4], [1, 4], [1, 5], [2, 5], [2, 4], [3, 4], [3, 2], [2, 2], [2, 1], [2, 1], [2, 0], [1, 0]];
//	var enemyBomb02 = [[-1, -1], [1, 0], [1, 1], [1, 1], [1, 2], [0, 2], [0, 5], [1, 5], [1, 6], [2, 6], [2, 5], [3, 5], [3, 2], [2, 2], [2, 1], [2, 1], [2, 0], [1, 0]];

	var starVector = [
						[-1, -1], [0, 0], [1, 1], [0, 0], [-1, -1], [1, 0], [0, 1], [1, 0]];

	var LetterV01 = [
						[-1, -1], [0, 12], [0, 12], [0, 18], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12]];

	var LetterV02 = [
						[-1, -1], [0, 12], [2, 12], [4, 18], [6, 12], [8, 12], [5, 20], [3, 20], [0, 12]];
	var LetterE01 = [
						[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 15], [0, 15], [0, 17],
						[0, 17], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12]];
	var LetterE02 = [
						[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 15], [6, 15], [6, 17],
						[2, 17], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12]];
	var LetterC01 = [
						[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12]];
	var LetterC02 = [
						[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12]];
	var LetterT01 = [
						[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 20], [0, 20], [0, 14], [0, 14], [0, 12]];
	var LetterT02 = [
						[-1, -1], [0, 12], [8, 12], [8, 14], [5, 14], [5, 20], [3, 20], [3, 14], [0, 14], [0, 12]];
	var LetterO01 = [
						[-1, -1], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12],
						[-1, -1], [0, 14], [0, 14], [0, 18], [0, 18], [0, 14]];
	var LetterO02 = [
						[-1, -1], [0, 12], [8, 12], [8, 20], [0, 20], [0, 12],
						[-1, -1], [2, 14], [6, 14], [6, 18], [2, 18], [2, 14]];
	var LetterR01 = [
						[-1, -1], [0, 12], [0, 12], [0, 17], [0, 17], [0, 20], [0, 20], [0, 17], [0, 17], [0, 20], [0, 20], [0, 12],
						[-1, -1], [0, 14], [0, 14], [0, 15], [0, 15], [0, 14]];
	var LetterR02 = [
						[-1, -1], [0, 12], [8, 12], [8, 17], [6, 17], [8, 20], [6, 20], [4, 17], [2, 17], [2, 20], [0, 20], [0, 12],
						[-1, -1], [2, 14], [6, 14], [6, 15], [2, 15], [2, 14]];

	/*var LetterS02 = [
						[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 15], [8, 15], [8, 19], [0, 19], [0, 17], [6, 17], [6, 16], [0, 16], [0, 12] ] ;*/
	var LetterS02 = [
						[-1, -1], [0, 0], [8, 0], [8, 2], [2, 2], [2, 4], [8, 4], [8, 8], [0, 8], [0, 6], [6, 6], [6, 5], [0, 5], [0, 0]];


	var glowWhite01 = new Colour(40, 40, 40, 0);
	var highWhite01 = new Colour(57, 57, 57, 0);
	var glowWhite02 = new Colour(80, 80, 80, 1);
	var highWhite02 = new Colour(114, 114, 114, 1);
	var glowWhite03 = new Colour(120, 120, 120, 2);
	var highWhite03 = new Colour(170, 170, 170, 2);
	var glowWhite04 = new Colour(160, 160, 160, 3);
	var highWhite04 = new Colour(227, 227, 227, 3);
	var glowRed = new Colour(255, 245, 245, 4);
	var highRed = new Colour(255, 127, 127, 4);
	var glowOrange = new Colour(255, 240, 224, 5);
	var highOrange = new Colour(255, 159, 64, 5);
	var glowYellow = new Colour(255, 255, 245, 6);
	var highYellow = new Colour(255, 255, 127, 6);
	var glowGreen = new Colour(245, 255, 245, 7);
	var highGreen = new Colour(127, 255, 127, 7);
	var glowBlue = new Colour(245, 245, 255, 8);
	var highBlue = new Colour(127, 127, 255, 8);
	var glowPurple = new Colour(255, 245, 255, 9);
	var highPurple = new Colour(255, 127, 255, 9);
	var glowCyan = new Colour(245, 255, 255, 10);
	var highCyan = new Colour(127, 255, 255, 10);

	var objectsList = new Array();
	var drawQueue = new Array();

	var numStars = 15;


	// Star BackGround
	var dObjStars = new DisplayObject(starVector, glowWhite01, highPurple /*glowWhite01, highWhite01*/, 1);

	dObjStars.addFrame(starVector);

	dObjStars.start = function ()
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = Math.floor(Math.random() * canvasHeight);
		this.velX = 0;
		this.velY = 10;
		this.multX = 0.125;
		this.multY = 0.125;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	};


	dObjStars.update = function ()
	{

		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

		if (this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random() * canvasWidth);
			this.posY = -5;
		}

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 0.125, 0.125, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	for (var i = 0; i < numStars; ++i)
	{
		objectsList.push($.extend(true, {}, dObjStars));
	}


	var dObjStarsTwo = new DisplayObject(starVector, glowWhite02, highBlue/*glowWhite02, highWhite02*/, 1);

	dObjStarsTwo.addFrame(starVector);

	dObjStarsTwo.start = function ()
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = Math.floor(Math.random() * canvasHeight);
		this.velX = 0;
		this.velY = 20;
		this.multX = 0.25;
		this.multY = 0.25;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	};


	dObjStarsTwo.update = function ()
	{

		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

		if (this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random() * canvasWidth);
			this.posY = -5;
		}

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 0.25, 0.25, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	for (var i = 0; i < numStars; ++i)
	{
		objectsList.push($.extend(true, {}, dObjStarsTwo));
	}

	var dObjStarsThree = new DisplayObject(starVector, glowWhite03, highGreen/*glowWhite03, highWhite03*/, 1);

	dObjStarsThree.addFrame(starVector);

	dObjStarsThree.start = function ()
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = Math.floor(Math.random() * canvasHeight);
		this.velX = 0;
		this.velY = 30;
		this.multX = 0.5;
		this.multY = 0.5;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	};


	dObjStarsThree.update = function ()
	{

		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

		if (this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random() * canvasWidth);
			this.posY = -5;
		}

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 0.5, 0.5, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	for (var i = 0; i < numStars; ++i)
	{
		objectsList.push($.extend(true, {}, dObjStarsThree));
	}

	var dObjStarsFour = new DisplayObject(starVector, glowWhite04, highCyan/*glowWhite04, highWhite04*/, 1);

	dObjStarsFour.addFrame(starVector);

	dObjStarsFour.start = function ()
	{
		this.posX = Math.floor(Math.random() * canvasWidth);
		this.posY = Math.floor(Math.random() * canvasHeight);
		this.velX = 0;
		this.velY = 40;
		this.multX = 1;
		this.multY = 1;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	};


	dObjStarsFour.update = function ()
	{

		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );

		if (this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random() * canvasWidth);
			this.posY = -5;
		}

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	for (var i = 0; i < numStars; ++i)
	{
		objectsList.push($.extend(true, {}, dObjStarsFour));
	}

	//Letter V
	var objLetterV = new DisplayObject(LetterV01, glowRed, highRed, 1);
	objectsList.push(objLetterV);
	objLetterV.addFrame(LetterV02);

	objLetterV.start = function ()
	{
		this.posX = 10;
		this.posY = 50;
		this.velX = 0;
		this.velY = 0;
		this.multX = 5;
		this.multY = 5;
	};
	objLetterV.update = function ()
	{
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	//Letter E
	var objLetterE = new DisplayObject(LetterE01, glowOrange, highOrange, 1);
	objectsList.push(objLetterE);
	objLetterE.addFrame(LetterE02);

	objLetterE.start = function ()
	{
		this.posX = 10;
		this.posY = 100;
		this.velX = 0;
		this.velY = 0;
		this.multX = 5;
		this.multY = 5;
	};
	objLetterE.update = function ()
	{
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	//Letter C
	var objLetterC = new DisplayObject(LetterC01, glowYellow, highYellow, 1);
	objectsList.push(objLetterC);
	objLetterC.addFrame(LetterC02);

	objLetterC.start = function ()
	{
		this.posX = 10;
		this.posY = 150;
		this.velX = 0;
		this.velY = 0;
		this.multX = 5;
		this.multY = 5;
	};
	objLetterC.update = function ()
	{
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	//Letter T
	var objLetterT = new DisplayObject(LetterT01, glowGreen, highGreen, 1);
	objectsList.push(objLetterT);
	objLetterT.addFrame(LetterT02);

	objLetterT.start = function ()
	{
		this.posX = 10;
		this.posY = 200;
		this.velX = 0;
		this.velY = 0;
		this.multX = 5;
		this.multY = 5;
	};
	objLetterT.update = function ()
	{
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	//Letter O
	var objLetterO = new DisplayObject(LetterO01, glowBlue, highBlue, 1);
	objectsList.push(objLetterO);
	objLetterO.addFrame(LetterO02);

	objLetterO.start = function ()
	{
		this.posX = 10;
		this.posY = 250;
		this.velX = 0;
		this.velY = 0;
		this.multX = 5;
		this.multY = 5;
	};
	objLetterO.update = function ()
	{
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		//var dTask = new DrawTask(self, this.posX, this.posY, 5, 5, this.velX, this.velY);
		drawQueue.push(self);
	};

	//Letter R
	var objLetterR = new DisplayObject(LetterR01, glowPurple, highPurple, 1);
	objectsList.push(objLetterR);
	objLetterR.addFrame(LetterR02);

	objLetterR.start = function ()
	{
		this.posX = 10;
		this.posY = 300;
		this.velX = 0;
		this.velY = 0;
		this.multX = 5;
		this.multY = 5;
	};
	objLetterR.update = function ()
	{
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;

		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	//Score letters	
	var scorePosStart = canvasWidth - (12 * 20);
	var scorePosCurr = 0;
	var charWidth = 20;
	var scoreS = new DisplayObject(LetterS02, glowPurple, highWhite04, 1);
	objectsList.push(scoreS);
	scoreS.addFrame(LetterS02);

	scoreS.start = function ()
	{
		this.posX = scorePosStart + scorePosCurr;
		scorePosCurr += charWidth;
		//this.posX = 530;
		this.posY = 7;
		this.velX = 0;
		this.velY = 0;
		this.multX = 2;
		this.multY = 2;
	};
	scoreS.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	var scoreC = new DisplayObject(LetterC02, glowPurple, highWhite04, 1);
	objectsList.push(scoreC);
	scoreC.addFrame(LetterC02);

	scoreC.start = function ()
	{
		this.posX = scorePosStart + scorePosCurr;
		scorePosCurr += charWidth;
		//this.posX = 550;
		this.posY = -17;
		this.velX = 0;
		this.velY = 0;
		this.multX = 2;
		this.multY = 2;
	};
	scoreC.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	var scoreO = new DisplayObject(LetterO02, glowPurple, highWhite04, 1);
	objectsList.push(scoreO);
	scoreO.addFrame(LetterO02);

	scoreO.start = function ()
	{
		this.posX = scorePosStart + scorePosCurr;
		scorePosCurr += charWidth;
		//this.posX = 570;
		this.posY = -17;
		this.velX = 0;
		this.velY = 0;
		this.multX = 2;
		this.multY = 2;
	};
	scoreO.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	var scoreR = new DisplayObject(LetterR02, glowPurple, highWhite04, 1);
	objectsList.push(scoreR);
	scoreR.addFrame(LetterR02);

	scoreR.start = function ()
	{
		this.posX = scorePosStart + scorePosCurr;
		scorePosCurr += charWidth;
		//this.posX = 590;
		this.posY = -17;
		this.velX = 0;
		this.velY = 0;
		this.multX = 2;
		this.multY = 2;
	};
	scoreR.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	var scoreE = new DisplayObject(LetterE02, glowPurple, highWhite04, 1);
	objectsList.push(scoreE);
	scoreE.addFrame(LetterE02);

	scoreE.start = function ()
	{
		this.posX = scorePosStart + scorePosCurr;
		scorePosCurr += charWidth;
		//this.posX = 610;
		this.posY = -17;
		this.velX = 0;
		this.velY = 0;
		this.multX = 2;
		this.multY = 2;
	};
	scoreE.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 2, 2, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	/*
		Lives - this is a temporary way to show them for the prototype
	*/
	var lifeOne = new DisplayObject(shipF01, glowCyan, highCyan, 1);
	objectsList.push(lifeOne);
	lifeOne.addFrame(shipF01);
	lifeOne.start = function ()
	{
		this.posX = 11;
		this.posY = 1;
		this.velX = 0;
		this.velY = 0;
		this.multX = 1;
		this.multY = 1;
	};
	lifeOne.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	var lifeTwo = new DisplayObject(shipF01, glowCyan, highCyan, 1);
	objectsList.push(lifeTwo);
	lifeTwo.addFrame(shipF01);
	lifeTwo.start = function ()
	{
		this.posX = 34;
		this.posY = 1;
		this.velX = 0;
		this.velY = 0;
		this.multX = 1;
		this.multY = 1;
	};
	lifeTwo.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	var lifeThree = new DisplayObject(shipF01, glowCyan, highCyan, 1);
	objectsList.push(lifeThree);
	lifeThree.addFrame(shipF01);
	lifeThree.start = function ()
	{
		this.posX = 57;
		this.posY = 1;
		this.velX = 0;
		this.velY = 0;
		this.multX = 1;
		this.multY = 1;
	};
	lifeThree.update = function ()
	{
		//ctx.save();
		//ctx.translate(this.posX, this.posY);
		//drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
		//ctx.restore();
		var self = this;
		drawQueue.push(self);
	};

	var collidingStart = objectsList.length;

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

	var colourQueue = new Array();
	var colourList = new Array();
	var colourIndexLast;
	var pastFramesQueue = new Array();
	var pastFramesList = new Array(new Array());
	//var pastFramesList = [[], []];
	var j;
	var frames = 0;
	var timeStart;
	function draw()
	{
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		setDelta();

		strokesNum = 0;
		for (var i = 0; i < objectsList.length; ++i)
		{
			objectsList[i].update();
		}

		drawQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
		colourIndexLast = Number(drawQueue[0].glow.index);
		/*for (var k = 0; k < objectsList[0].pastFramesMax; ++k)
		{
			pastFramesList.push(new Array());
		}*/
		for (var i = 0; i < drawQueue.length; ++i)
		{
			if (colourIndexLast == Number(drawQueue[i].glow.index))
			{
				colourList.push(drawQueue[i]);
				for (var k = 0; k < drawQueue[i].pastFrames.length; ++k)
				{
					//console.log("drawQueue[i].pastFrames.length: " + drawQueue[i].pastFrames.length + " k: " + k);
					if (!pastFramesList[k])
					{
						pastFramesList[k] = new Array();
					}
					pastFramesList[k][i] = drawQueue[i].pastFrames[k];
				}
			}
			else
			{
				colourQueue.push(colourList);
				pastFramesQueue.push(pastFramesList);
				colourList = new Array();
				colourList.push(drawQueue[i]);
				//pastFramesList = new Array();
				for (var k = 0; k < drawQueue[i].pastFrames.length; ++k)
				{
					//pastFramesList.push(new Array());
					if (!pastFramesList[k])
					{
						pastFramesList[k] = new Array();
					}
					pastFramesList[k][i] = drawQueue[i].pastFrames[k];
				}
				colourIndexLast = Number(drawQueue[i].glow.index);
			}
		}
		colourQueue.push(colourList);
		pastFramesQueue.push(pastFramesList);
		//console.log("colourQueue.length: " + colourQueue.length + " pastFramesQueue.length: " + pastFramesQueue.length);
		//timeStart = Date.now();
		/*for (var i = 0; i < pastFramesQueue.length; ++i)
		{
			drawPastFrames(pastFramesQueue[i], colourQueue[i][0].glow);
		}*/
		//console.log("past frames time: " + (Date.now() - timeStart));
		//timeStart = Date.now();
		for (var i = 0; i < colourQueue.length; ++i)
		{
			drawObjects(colourQueue[i]);
		}
		//console.log("drawObjects time: " + (Date.now() - timeStart));

		j = colourQueue.length - 1;
		while (colourQueue.length != 0)
		{
			while (colourQueue[j].length != 0)
			{
				colourQueue[j].pop();
			}
			colourQueue.pop();
			--j;
		}
		while (drawQueue.length != 0)
		{
			drawQueue.pop();
		}

		j = pastFramesQueue.length - 1;
		while (pastFramesQueue.length != 0)
		{
			while (pastFramesQueue[j].length != 0)
			{
				pastFramesQueue[j].pop();
			}
			//console.log("pastFramesQueue[" + j + "].length: " + pastFramesQueue[j].length);
			pastFramesQueue.pop();
			--j;
		}
		//console.log("pastFramesQueue.length: " + pastFramesQueue.length);

		//console.log("strokesNum: " + strokesNum);
		// number of strokes was: 3520
		// current strokes: 44 (without glow trails)

		for (var i = collidingStart; i < objectsList.length - 1; ++i)
		{
			for (var j = (i + 1) ; j < objectsList.length; ++j)
			{
				polyToPolyCollision(objectsList[i], objectsList[j]);
			}
		}
		/*++frames;
		if (frames > 50)
		{
			clearInterval(intervalID);
			console.log("objectsList.length: " + objectsList.length);
		}*/
	}

	timeThen = Date.now();
	setDelta();
	for (var i = 0; i < objectsList.length; ++i)
	{
		objectsList[i].start();
	}

	intervalID = setInterval(function () { draw(); }, FRAME_INTERVAL);
	//draw();
});
