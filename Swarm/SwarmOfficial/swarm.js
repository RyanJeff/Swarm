
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


function dotProduct (a1, a2)
{
	var ret = 0.00;
	
	for (var i = 0; i < a1.length; ++i)
	{
		ret += a1[i] * a2[i];
	}
	return ret;
}

var Matrix = function(rows, columns, defaultValue) 
{
	this._data = new Array();

	for (var i = 0; i < rows; ++i)
	{
		this._data.push (new Array ());
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
	}
	
	this.getColArray = function (col)
	{
		var ret = new Array();
		
		for (var i = 0; i < this.rowCount(); ++i)
		{
			ret.push (this._data[i][col]);
		}
		return ret;
	}
	
	this.rowCount = function ()
	{
		return this._data.length;
	}
	
	this.colCount = function ()
	{
		if (this.rowCount () == 0)
		{
			return 0;
		}
		return this._data[0].length;
	}
	
	this.get = function (row, col)
	{
		return this._data[row][col];
	}
	
	this.set = function (row, col, value)
	{
		this._data[row][col] = value;
	}
	
	this.makeIndentity = function ()
	{
		for (var i = 0; i < this.rowCount(); ++i)
		{
			for (var j = 0; j < this.colCount(); ++j)
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
	}

	this.matrixMult = function (m)
	{
		var ret = new Matrix (this.rowCount(), m.colCount());
		for (var i = 0; i < ret.rowCount(); ++i)
		{
			for (var j = 0; j < ret.colCount(); ++j)
			{
				ret.set(i, j, dotProduct(this.getRowArray(i), m.getColArray(j)));
			}
		}
		return ret;
	}
};

function setDelta ()
{
	timeNow = Date.now();
	timeDelta = (timeNow - timeThen) / 1000;	// seconds since last frame
	//timeDelta /= 16;
	timeThen = timeNow;
}

var Colour = function (valueRed, valueGreen, valueBlue)
{
	this.r = valueRed;
	this.g = valueGreen;
	this.b = valueBlue;
};

function drawObject (dispObject, xPos, yPos, xMult, yMult, xVel, yVel)
{
    var transition = dispObject.keyframeRate * timeDelta;
	var dispObjectCurrent;
	var dispObjectLast;
	var matrixTransform = new Matrix (3, 3, 0.00);
	var spacePoint = new Matrix (3, 1, 1.00);
	var newPoint;
	var smallestX, smallestY;
	var largestX, largestY;
	smallestX = smallestY = largestX = largestY = 0;
	var valX, valY;
	matrixTransform.makeIndentity();
	dispObject.transitionTotalAdjust(transition);
	dispObject.nextKeyframe();

	//dispObjectCurrent = dispObject.getFrame(dispObject.keyframeCurrent);
	//dispObjectLast = dispObject.getFrame(dispObject.keyframeLast);

	dispObjectCurrent = dispObject.getFrame();

	/*var transition = dispObject.keyframeRate * timeDelta;
	dispObject.transitionTotalAdjust(transition);
	dispObject.nextKeyframe();
	var dispObjectCurrent = dispObject.getFrame(dispObject.keyframeCurrent);
	var dispObjectLast = dispObject.getFrame(dispObject.keyframeLast);
	var matrixTransform = new Matrix(3, 3, 0.00);
	matrixTransform.makeIndentity();
	var spacePoint = new Matrix(3, 1, 1.00);
	var newPoint;
	var smallestX, smallestY;
	var largestX, largestY;
	smallestX = smallestY = largestX = largestY = 0;
	var valX, valY;*/

	/*for (var j = 0; j < dispObjectCurrent.length; ++j)
	{
	    if (dispObjectCurrent[j][0] >= 0)
	    {
	        matrixTransform.makeIndentity();
	        matrixTransform.set(0, 2, (dispObjectLast[j][0] - dispObjectCurrent[j][0]) * dispObject.transitionTotal);
	        matrixTransform.set(1, 2, (dispObjectLast[j][1] - dispObjectCurrent[j][1]) * dispObject.transitionTotal);
	        spacePoint.set(0, 0, dispObjectCurrent[j][0]);
	        spacePoint.set(1, 0, dispObjectCurrent[j][1]);
	        spacePoint.set(2, 0, 1.00);
	        newPoint = matrixTransform.matrixMult(spacePoint);
	        dispObjectCurrent[j][0] = newPoint.get(0, 0);
	        dispObjectCurrent[j][1] = newPoint.get(1, 0);
        }
	}*/
	/*var lineWidthAdjust =  Math.floor(((NUM_LAYERED_GLOW_LINES + 1) * 3 - 2) * 0.5);
	smallestX -= lineWidthAdjust;
	smallestY -= lineWidthAdjust;
	largestX += lineWidthAdjust;
	largestY += lineWidthAdjust;
	var dispObjectWidth = largestX - smallestX;
	var dispObjectHeight = largestY - smallestY;
	ctxBack.clearRect(0, 0, canvasBackWidth, canvasBackHeight);*/

	var dispObjectPastFrames = dispObject.pastFrames;
	var posX = -(dispObjectPastFrames.length * xVel) * 0.03;
	var posY = -(dispObjectPastFrames.length * yVel) * 0.03;
	var pastFrame;
	for (var k = 0; k < dispObjectPastFrames.length; ++k)
	{
	    pastFrame = dispObjectPastFrames[k];
	  //  ctx.globalAlpha = ((dispObjectPastFrames.length * 0.3) - (k * 0.3)) / 10;
	    ctx.globalAlpha = (k * 0.2) / 10;
	    for (var i = NUM_LAYERED_GLOW_LINES; i >= 0; --i)
	    {
	        ctx.lineWidth = (i + 1) * 3 - 2;
	        if (i == 0) {
	            ctx.strokeStyle = "rgba(" + dispObject.glow.r + ", " + dispObject.glow.g + ", " + dispObject.glow.b + ", 1.0)";
	        }
	        else {
	            ctx.strokeStyle = "rgba(" + dispObject.highlight.r + ", " + dispObject.highlight.g + ", " + dispObject.highlight.b + ", 0.3)";
	        }

	        ctx.beginPath();

	        for (var j = 0; j < pastFrame.length; ++j) {
	            if (pastFrame[j][0] < 0) {
	                ++j;
	                ctx.moveTo((posX + pastFrame[j][0]) * xMult, (posY + pastFrame[j][1]) * yMult);
	                continue;
	            }
	            ctx.lineTo((posX + pastFrame[j][0]) * xMult, (posY + pastFrame[j][1]) * yMult);
	        }
	        ctx.stroke();
	    }
	    posX += xVel * 0.03;
	    posY += yVel * 0.03;
    }
	ctx.globalAlpha = 1.0;

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
		
		for (var j = 0; j < dispObjectCurrent.length; ++j)
		{
			if (dispObjectCurrent[j][0] < 0)
			{
				++j;
				ctx.moveTo((xPos + dispObjectCurrent[j][0]) * xMult, (yPos + dispObjectCurrent[j][1]) * yMult);
				continue;
			}
			ctx.lineTo((xPos + dispObjectCurrent[j][0]) * xMult, (yPos + dispObjectCurrent[j][1]) * yMult);
		}
		ctx.stroke();
		dispObject.pastFrameAdd(dispObjectCurrent);
	}
}

function calculateSize (vectors)
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

var FrameObject = function (vectors)
{
	this.frameVector = $.extend(true, [], vectors);
	var size = calculateSize(vectors);
	this.width = size.width;
	this.height = size.height;
};

function calculateInbetweens(vectorsFrom, vectorsTo, keyframeRate)
{
	var ret = new Array();
	var inbetweens = new Array();
	var frameInbetween;
	var matrixTransform = new Matrix (3, 3, 0.00);
	var spacePoint = new Matrix (3, 1, 1.00);
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
					frameInbetween[i][0] = newPoint.get(0, 0);
					frameInbetween[i][1] = newPoint.get(1, 0);
				}
			}
			inbetweens.push(frameInbetween);
		}
		flipFrames = true;
		transitionTotal = 0;
		ret.push($.extend(true, [], inbetweens));
		console.log("j: " + j + " inbetweens.length: " + inbetweens.length)
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
	
	this.frameList.push (new FrameObject(initialVectors));
	
	this.glow = colourGlow;
	this.highlight = colourHighlight;
	this.keyframeRate = keyframeRate;	// Keyframes per second
	this.keyframeCurrent = 0;
	this.keyframeLast = 0;
	this.transitionTotal = 0;			// Total time transitioning so far, used to know when to goto next keyframe
	this.flipped = false;
	this.pastFrames = new Array();
	this.pastFramesMax = 8;
	this.frameListBroken = new Array();
	this.broken = false;

	this.posX = 0;
	this.posY = 0;
	this.velX = 0;      // Pixels per second horizontally
	this.velY = 0;      // Pixels per second vertically
	this.currentWidth = 0;
	this.currentHeight = 0;

	this.pastFrameAdd = function (frame)
	{
	    if (this.pastFrames.length == this.pastFramesMax)
	    {
	        this.pastFrames.splice(0, 1);
	    }
	    this.pastFrames.push(frame);
	}

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
	}
	
	//this.getFrame = function (frame)
	this.getFrame = function ()
	{
		//console.log("this.inbetweensList.length: " + this.inbetweensList.length);
		//console.log("this.inbetweensList[0].length: " + this.inbetweensList[0].length);
		//console.log("this.inbetweensList[0][0].length: " + this.inbetweensList[0][0].length);
		//console.log("this.inbetweensList[0][1].length: " + this.inbetweensList[0][1].length);
		var frameInbetween = Math.floor(this.transitionTotal * this.inbetweensList[0][0].length);
		//console.log("frameInbetween: " + frameInbetween);
		return this.forward ? this.inbetweensList[0][0][frameInbetween] : this.inbetweensList[0][1][frameInbetween];
		//this.frameListCopy = $.extend(true, [], this.frameList[frame].frameVector);
		//return this.frameListCopy;
	}
	
	this.transitionTotalAdjust = function (transition)
	{
		this.transitionTotal += transition;
	}
	
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
				clearInterval (intervalID);
			}
			if (this.keyframeCurrent >= this.frameList.length)
			{
				this.keyframeCurrent = 0;
			}
			this.transitionTotal = 0;
			this.forward = !(this.forward);
		}
	}

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
	}

    // this is called after the object is created...
	this.start = function () {

	}
    // this is called each frame...
	this.update = function ()
	{

	}
};

	

$(document).ready(function () {

	canvas = document.getElementById ("canvasFirst");
	ctx = canvas.getContext ("2d");
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
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
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

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	function rgbValuesToString (redColour, greenColour, blueColour)
	{
		var rgbValueString = "";

		rgbValuesString = "rgb(" + redColour + "," + greenColour + "," + blueColour + ")";
		console.log("rgbValuesString: " + rgbValuesString );
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
					
	var starVector = [
						[-1, -1], [0, 0], [1, 1], [0, 0], [-1, -1], [1, 0], [0, 1], [1, 0]];
	
	var LetterV01 = [ 
						[-1, -1], [0, 12], [0, 12], [0, 18], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12] ];
	
	var LetterV02 = [
						[-1, -1], [0, 12], [2, 12], [4, 18], [6, 12], [8, 12], [5, 20], [3, 20], [0, 12] ];
	var LetterE01 = [
						[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 15], [0, 15], [0, 17],
						[0, 17], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12] ];
	var LetterE02 = [
						[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 15], [6, 15], [6, 17],
						[2, 17], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12] ];
	var LetterC01 = [
						[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12] ];
	var LetterC02 = [
						[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12] ];
	var LetterT01 = [
						[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 20], [0, 20], [0, 14], [0, 14], [0, 12] ];
	var LetterT02 = [
						[-1, -1], [0, 12], [8, 12], [8, 14], [5, 14], [5, 20], [3, 20], [3, 14], [0, 14], [0, 12] ];
	var LetterO01 = [
						[-1, -1], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12],
						[-1, -1], [0, 14], [0, 14], [0, 18], [0, 18], [0, 14] ];
	var LetterO02 = [
						[-1, -1], [0, 12], [8, 12], [8, 20], [0, 20], [0, 12], 
						[-1, -1], [2, 14], [6, 14], [6, 18], [2, 18], [2, 14] ];
	var LetterR01 = [
						[-1, -1], [0, 12], [0, 12], [0, 17], [0, 17], [0, 20], [0, 20], [0, 17], [0, 17], [0, 20], [0, 20], [0, 12],
						[-1, -1], [0, 14], [0, 14], [0, 15], [0, 15], [0, 14] ];
	var LetterR02 = [
						[-1, -1], [0, 12], [8, 12], [8, 17], [6, 17], [8, 20], [6, 20], [4, 17], [2, 17], [2, 20], [0, 20], [0, 12], 
						[-1, -1], [2, 14], [6, 14], [6, 15], [2, 15], [2, 14] ];
	
					
	var glowRed = new Colour (255, 245, 245);
	var highRed = new Colour (255, 127, 127);
	var glowOrange = new Colour (255, 240, 224);
	var highOrange = new Colour (255, 159, 64);
	var glowYellow = new Colour (255, 255, 245);
	var highYellow = new Colour (255, 255, 127);
	var glowGreen = new Colour (245, 255, 245);
	var highGreen = new Colour (127, 255, 127);
	var glowBlue = new Colour (245, 245, 255);
	var highBlue = new Colour (127, 127, 255);
	var glowPurple = new Colour (255, 245, 255);
	var highPurple = new Colour (255, 127, 255);
	var glowCyan = new Colour (245, 255, 255);
	var highCyan = new Colour(127, 255, 255);
	var glowWhite01 = new Colour (40, 40, 40);
	var glowWhite02 = new Colour (80, 80, 80);
	var glowWhite03 = new Colour (120, 120, 120);
	var glowWhite04 = new Colour (160, 160, 160);
	var highWhite01 = new Colour (57, 57, 57);
	var highWhite02 = new Colour (114, 114, 114);
	var highWhite03 = new Colour (170, 170, 170);
	var highWhite04 = new Colour (227, 227, 227);

	var objectsList = new Array();
	var numStars = 15;
	
	
	// Star BackGround
	var dObjStars = new DisplayObject(starVector, glowWhite01, highPurple /*glowWhite01, highWhite01*/, 1);
	
	
	
		
	dObjStars.addFrame(starVector);
	
	dObjStars.start = function ()
	{
		this.posX = Math.floor(Math.random()*canvasWidth);
		this.posY = Math.floor(Math.random()*canvasHeight);
		this.velX = 0;
		this.velY = 10;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	}
	
	
	dObjStars.update = function ()
	{	
	
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );
		
		if(this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random()*canvasWidth);
			this.posY = -5;
		}
		
		ctx.save();
		ctx.translate(this.posX, this.posY);
		drawObject(this, 0, 0, 0.125, 0.125, this.velX, this.velY);
		ctx.restore();
		
	}
	
	for(var i = 0; i < numStars; ++i)
	{
		objectsList.push($.extend(true, {}, dObjStars));
	}
	
	
	var dObjStarsTwo = new DisplayObject(starVector, glowWhite02, highBlue/*glowWhite02, highWhite02*/, 1);
	
	dObjStarsTwo.addFrame(starVector);
	
	dObjStarsTwo.start = function ()
	{
		this.posX = Math.floor(Math.random()*canvasWidth);
		this.posY = Math.floor(Math.random()*canvasHeight);
		this.velX = 0;
		this.velY = 20;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	}
	
	
	dObjStarsTwo.update = function ()
	{	
	
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );
		
		if(this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random()*canvasWidth);
			this.posY = -5;
		}
		
		ctx.save();
		ctx.translate(this.posX, this.posY);
		drawObject(this, 0, 0, 0.25, 0.25, this.velX, this.velY);
		ctx.restore();
		
	}
	
	for(var i = 0; i < numStars; ++i)
	{
		objectsList.push($.extend(true, {}, dObjStarsTwo));
	}
	
	var dObjStarsThree = new DisplayObject(starVector, glowWhite03, highGreen/*glowWhite03, highWhite03*/, 1);
	
	dObjStarsThree.addFrame(starVector);
	
	dObjStarsThree.start = function ()
	{
		this.posX = Math.floor(Math.random()*canvasWidth);
		this.posY = Math.floor(Math.random()*canvasHeight);
		this.velX = 0;
		this.velY = 30;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	}
	
	
	dObjStarsThree.update = function ()
	{	
	
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );
		
		if(this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random()*canvasWidth);
			this.posY = -5;
		}
		
		ctx.save();
		ctx.translate(this.posX, this.posY);
		drawObject(this, 0, 0, 0.5, 0.5, this.velX, this.velY);
		ctx.restore();
		
	}
	
	for(var i = 0; i < numStars; ++i)
	{
		objectsList.push($.extend(true, {}, dObjStarsThree));
	}
	
	var dObjStarsFour = new DisplayObject(starVector, glowWhite04, highCyan/*glowWhite04, highWhite04*/, 1);
	
	dObjStarsFour.addFrame(starVector);
	
	dObjStarsFour.start = function ()
	{
		this.posX = Math.floor(Math.random()*canvasWidth);
		this.posY = Math.floor(Math.random()*canvasHeight);
		this.velX = 0;
		this.velY = 40;
		//console.log("posX: " + this.posX + " posY: " + this.posY);
	}
	
	
	dObjStarsFour.update = function ()
	{	
	
		var distanceX = this.velX * timeDelta;
		var distanceY = this.velY * timeDelta;
		this.posX += distanceX;
		this.posY += distanceY;
		//console.log("posX: " + this.posX + " posY: " + this.posY + " distanceX: " + distanceX + " distanceY: " + distanceY );
		
		if(this.posY > canvasHeight)
		{
			this.posX = Math.floor(Math.random()*canvasWidth);
			this.posY = -5;
		}
		
		ctx.save();
		ctx.translate(this.posX, this.posY);
		drawObject(this, 0, 0, 1, 1, this.velX, this.velY);
		ctx.restore();
		
	}
	
	for(var i = 0; i < numStars; ++i)
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
	}
	objLetterV.update = function ()
	{
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();
	}
	
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
	}
	objLetterE.update = function ()
	{
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();
	}
	
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
	}
	objLetterC.update = function ()
	{
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();
	}
	
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
	}
	objLetterT.update = function ()
	{
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();
	}
	
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
	}
	objLetterO.update = function ()
	{
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();
	}
	
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
	}
	objLetterR.update = function ()
	{
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();
	}
	
	var alien01Red = new DisplayObject(alienOneF01, glowRed, highRed, 2);
	objectsList.push(alien01Red);
	alien01Red.addFrame(alienOneF02);
	alien01Red.start = function ()
	{
	    this.posX = 20;
	    this.posY = 20;
	    this.velX = 30;
	    this.velY = 30;
	}
	alien01Red.update = function ()
	{
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();

	    if ((this.posX <= 10) || (this.posX >= (canvasWidth - 100))) {
	        this.velX = -(this.velX);
	    }
	    if ((this.posY <= 10) || (this.posY >= (canvasHeight - 100))) {
	        this.velY = -(this.velY);
	    }
	}
	var alien01Green = new DisplayObject(alienOneF01, glowGreen, highGreen, 5);
	alien01Green.addFrame(alienOneF02);
	//var alien01Blue = new DisplayObject (alienOneF01, glowBlue, highBlue, 10);
	//alien01Blue.addFrame (alienOneF02);
	var alien02Blue = new DisplayObject (alienTwoF01, glowBlue, highBlue, 5);
	objectsList.push(alien02Blue);
	alien02Blue.addFrame(alienTwoF02);
	alien02Blue.start = function ()
	{
	    this.posX = 20;
	    this.posY = 120;
	    this.velX = 50;
	    this.velY = 30;
	}
	alien02Blue.update = function () {
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();

	    if ((this.posX <= 10) || (this.posX >= (canvasWidth - 100))) {
	        this.velX = -(this.velX);
	    }
	    if ((this.posY <= 10) || (this.posY >= (canvasHeight - 100))) {
	        this.velY = -(this.velY);
	    }
	}
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

	var shipCyan = new DisplayObject(shipF01, glowCyan, highCyan, 2);
	objectsList.push(shipCyan);
	shipCyan.addFrame(shipF01);
	shipCyan.start = function () {
	    this.posX = 20;
	    this.posY = 350;
	    this.velX = 30;
	    this.velY = 50;
	}
	shipCyan.update = function () {
	    var distanceX = this.velX * timeDelta;
	    var distanceY = this.velY * timeDelta;
	    this.posX += distanceX;
	    this.posY += distanceY;

	    ctx.save();
	    ctx.translate(this.posX, this.posY);
	    drawObject(this, 0, 0, 5, 5, this.velX, this.velY);
	    ctx.restore();

	    if ((this.posX <= 10) || (this.posX >= (canvasWidth - 100))) {
	        this.velX = -(this.velX);
	    }
	    if ((this.posY <= 10) || (this.posY >= (canvasHeight - 100))) {
	        this.velY = -(this.velY);
	    }
	}
	//console.log("objectsList.length: " + objectsList.length);
	function draw()
	{
		ctx.clearRect (0, 0, canvasWidth, canvasHeight);
		setDelta();

		for (var i = 0; i < objectsList.length; ++i)
		{
		    objectsList[i].update();
		}
	}
	
	timeThen = Date.now();
    setDelta();
	
    for (var i = 0; i < objectsList.length; ++i)
    {
    	//console.log("i: " + i);
    	objectsList[i].start();
    }

    intervalID = setInterval (function() {draw();}, FRAME_INTERVAL);
});
