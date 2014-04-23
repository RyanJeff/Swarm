
// Used for the calculation of delta time
var timeNow;
var timeThen;
var timeDelta;

var canvas;
var ctx;

var intervalID;

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

function drawObject (dispObject, xPos, yPos, xMult, yMult)
{
	var transition = dispObject.keyframeRate * timeDelta;
//console.log ("transition: " + transition + " dispObject.keyframeRate: " + dispObject.keyframeRate + " timeDelta: " + timeDelta);
	dispObject.transitionTotalAdjust (transition);
	dispObject.nextKeyframe ();
//console.log ("dispObject.keyframeCurrent: " + dispObject.keyframeCurrent + " dispObject.keyframeLast: " + dispObject.keyframeLast);
	var dispObjectCurrent = dispObject.getFrame (dispObject.keyframeCurrent);
	var dispObjectLast = dispObject.getFrame (dispObject.keyframeLast);
	//var dispObjectCurrent = dispObject.frameList[dispObject.keyframeCurrent];
	//var dispObjectLast = dispObject.frameList[dispObject.keyframeLast];
	var matrixTransform = new Matrix (3, 3, 0.00);
	matrixTransform.makeIndentity ();
	var spacePoint = new Matrix (3, 1, 1.00);
	var newPoint;

	//console.log ("current: (" + dispObjectCurrent[30][0] + ", " + dispObjectCurrent[30][1] + "), (" + dispObjectCurrent[31][0] + ", " + dispObjectCurrent[31][1] + ")");
	//console.log ("last: (" + dispObjectLast[30][0] + ", " + dispObjectLast[30][1] + "), (" + dispObjectLast[31][0] + ", " + dispObjectLast[31][1] + ")");
	
	
	//matrixTransform.set (1, 2, (dispObjectLast[j][1] - dispObjectCurrent[j][1]) * ((frameCount + 1) / 15));
	
	for (var i = 3; i >= 0; --i)
	{
		ctx.lineWidth = (i + 1) * 3 - 2;
		if (i == 0)
		{
		//console.log ("r: " + dispObject.glow.r + " g: " + dispObject.glow.g + " b: " + dispObject.glow.b);
			ctx.strokeStyle = "rgba(" + dispObject.glow.r + ", " + dispObject.glow.g + ", " + dispObject.glow.b + ", 1.0)";
		}
		else
		{
		//console.log ("r: " + dispObject.highlight.r + " g: " + dispObject.highlight.g + " b: " + dispObject.highlight.b);
			ctx.strokeStyle = "rgba(" + dispObject.highlight.r + ", " + dispObject.highlight.g + ", " + dispObject.highlight.b + ", 0.3)";
		}
	
		ctx.beginPath();
		
		//console.log ("frameList.length: " + dispObject.frameList.length);
		for (var j = 0; j < dispObjectCurrent.length; ++j)
		{
			// Only need to do the matrix calculation on the first line iteration
			if (i == 3)
			{
				matrixTransform.makeIndentity ();
				matrixTransform.set (0, 2, (dispObjectLast[j][0] - dispObjectCurrent[j][0]) * dispObject.transitionTotal);
				matrixTransform.set (1, 2, (dispObjectLast[j][1] - dispObjectCurrent[j][1]) * dispObject.transitionTotal);

				/*var radianAngle = Math.PI * 0.25;
				var cosine = Math.cos (radianAngle);
				var sine = Math.sin (radianAngle);
				matrixTransform.set (0, 0, cosine);
				matrixTransform.set (1, 0, -sine);
				matrixTransform.set (0, 0, sine);
				matrixTransform.set (0, 1, cosine);*/
				//matrixTransform.set (0, 2, (dispObjectLast[j][0] - dispObjectCurrent[j][0]) * dispObject.transitionTotal);
				//matrixTransform.set (1, 2, (dispObjectLast[j][1] - dispObjectCurrent[j][1]) * dispObject.transitionTotal);
	//console.log ("dispObject.transitionTotal: " + dispObject.transitionTotal);
	//console.log ("matrixTransform._data.length: " + matrixTransform._data.length);
	//for (var i = 0; i < matrixTransform._data.length; ++i)
	//{
	//	console.log ("[ " + matrixTransform._data[i][0] + " " + matrixTransform._data[i][1] + " " + matrixTransform._data[i][2] + " ]");
	//}
				spacePoint.set (0, 0, dispObjectCurrent[j][0]);
				spacePoint.set (1, 0, dispObjectCurrent[j][1]);
				spacePoint.set (2, 0, 1.00);
				newPoint = matrixTransform.matrixMult (spacePoint);
				dispObjectCurrent[j][0] = newPoint.get (0, 0);
				dispObjectCurrent[j][1] = newPoint.get (1, 0);
			}
			if (dispObjectCurrent[j][0] < 0)
			{
				++j;
				ctx.moveTo ((xPos + dispObjectCurrent[j][0]) * xMult, (yPos + dispObjectCurrent[j][1]) * yMult);
				continue;
			}
			ctx.lineTo ((xPos + dispObjectCurrent[j][0]) * xMult, (yPos + dispObjectCurrent[j][1]) * yMult);
			/*if (i == 0)
			{
				//ctx.save ();
				ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
				ctx.fillRect ((xPos + alienOne[j][0]) * xMult, (yPos + alienOne[j][1]) * yMult, 5, 5);
				//ctx.restore ();
			}*/
		}
		ctx.stroke();
	}
}

var DisplayObject = function (initialVectors, colourGlow, colourHighlight, keyframeRate)
{
	this.frameList = new Array();
	this.frameListCopy;
	
	/*var vectors = new Array ();
	var vectorsCopy = new Array ();
	for (var i = 0; i < initialVectors.length; ++i)
	{
		vectors[i][0] = initialVectors[i][0];
		vectors[i][1] = initialVectors[i][1];
		vectorsCopy[i][0] = initialVectors[i][0];
		vectorsCopy[i][1] = initialVectors[i][1];
	}*/
	this.frameList.push ($.extend (true, [], initialVectors));
	//this.frameListCopy.push ($.extend (true, [], initialVectors));
	
	this.glow = colourGlow;
	this.highlight = colourHighlight;
	this.keyframeRate = keyframeRate;	// Keyframes per second
//console.log ("keyframeRate: " + keyframeRate + "this.keyframeRate: " + this.keyframeRate);
	this.keyframeCurrent = 0;
	this.keyframeLast = 0;
	this.transitionTotal = 0;			// Total time transitioning so far, used to know when to goto next keyframe
	this.flipped = false;
	
	this.addFrame = function (vectors)
	{
		//this.frameList.push (vectors);
		this.frameList.push ($.extend (true, [], vectors));
		//this.frameListCopy.push ($.extend (true, [], vectors));
		this.keyframeLast = this.frameList.length - 1;
	}
	
	this.getFrame = function (frame)
	{
		this.frameListCopy = $.extend (true, [], this.frameList[frame]);
		return this.frameListCopy;
	}
	
	this.transitionTotalAdjust = function (transition)
	{
	//console.log ("transition: " + transition + " transitionTotal: " + this.transitionTotal);
		this.transitionTotal += transition;
	//console.log ("transition: " + transition + " transitionTotal: " + this.transitionTotal);
	}
	
	this.nextKeyframe = function ()
	{
//console.log ("this.transitionTotal: " + this.transitionTotal);
		//if (this.transitionTotal >= (1 / this.keyframeRate))
		if (this.transitionTotal >= 1.00)
		{
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
		}
//console.log ("this.keyframeCurrent: " + this.keyframeCurrent + " this.keyframeLast: " + this.keyframeLast);
	}
};

	

$(document).ready(function () {

	canvas = document.getElementById ("canvasFirst");
	ctx = canvas.getContext ("2d");
	var FILL_COLOR = "black";
	var canvasWidth, canvasHeight;
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
	
	function drawAlienOne (xPos, yPos, lineColour,  hiColour, xMult, yMult)
	{
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
						
		var alienOneCurrent;
		if (frameBeat)
		{
			alienOneCurrent = alienOneF01;
		}
		else
		{
			alienOneCurrent = alienOneF02;
		}
						
		var matrixTransform = new Matrix (3, 3, 0.00);
		matrixTransform.makeIndentity ();
		var spacePoint = new Matrix (3, 1, 1.00);
		var newPoint;
		
		for (var i = 3; i >= 0; --i)
		{
			ctx.lineWidth = (i + 1) * 3 - 2;
			if (i == 0)
			{
				ctx.strokeStyle = "rgba(" + lineColour.r + ", " + lineColour.g + ", " + lineColour.b + ", 1.0)";
			}
			else
			{
				ctx.strokeStyle = "rgba(" + hiColour.r + ", " + hiColour.g + ", " + hiColour.b + ", 0.3)";
			}
		
			ctx.beginPath();
			
			if (frameBeat)
			{
				for (var j = 0; j < alienOneCurrent.length; ++j)
				{
					if (alienOneCurrent[j][0] < 0)
					{
						++j;
						ctx.moveTo ((xPos + alienOneCurrent[j][0]) * xMult, (yPos + alienOneCurrent[j][1]) * yMult);
						
						spacePoint.set (0, 0, alienOneCurrent[j][0]);
						spacePoint.set (1, 0, alienOneCurrent[j][1]);
						spacePoint.set (2, 0, 1.00);
						matrixTransform.makeIndentity ();
						matrixTransform.set (0, 2, (alienOneF02[j][0] - alienOneF01[j][0]) * ((frameCount + 1) / 15));
						matrixTransform.set (1, 2, (alienOneF02[j][1] - alienOneF01[j][1]) * ((frameCount + 1) / 15));
						newPoint = matrixTransform.matrixMult (spacePoint);
						alienOneCurrent[j][0] = newPoint.get (0, 0);
						alienOneCurrent[j][1] = newPoint.get (1, 0);
						
						continue;
					}
					ctx.lineTo ((xPos + alienOneCurrent[j][0]) * xMult, (yPos + alienOneCurrent[j][1]) * yMult);
					
					spacePoint.set (0, 0, alienOneCurrent[j][0]);
					spacePoint.set (1, 0, alienOneCurrent[j][1]);
					spacePoint.set (2, 0, 1.00);
					matrixTransform.makeIndentity ();
					matrixTransform.set (0, 2, (alienOneF02[j][0] - alienOneF01[j][0]) * ((frameCount + 1) / 15));
					matrixTransform.set (1, 2, (alienOneF02[j][1] - alienOneF01[j][1]) * ((frameCount + 1) / 15));
					newPoint = matrixTransform.matrixMult (spacePoint);
					alienOneCurrent[j][0] = newPoint.get (0, 0);
					alienOneCurrent[j][1] = newPoint.get (1, 0);
					/*if (i == 0)
					{
						//ctx.save ();
						ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
						ctx.fillRect ((xPos + alienOne[j][0]) * xMult, (yPos + alienOne[j][1]) * yMult, 5, 5);
						//ctx.restore ();
					}*/
				}
			}
			else
			{
				for (var j = 0; j < alienOneCurrent.length; ++j)
				{
					if (alienOneCurrent[j][0] < 0)
					{
						++j;
						ctx.moveTo ((xPos + alienOneCurrent[j][0]) * xMult, (yPos + alienOneCurrent[j][1]) * yMult);
						
						spacePoint.set (0, 0, alienOneCurrent[j][0]);
						spacePoint.set (1, 0, alienOneCurrent[j][1]);
						spacePoint.set (2, 0, 1.00);
						matrixTransform.makeIndentity ();
						matrixTransform.set (0, 2, (alienOneF01[j][0] - alienOneF02[j][0]) * ((frameCount + 1) / 15));
						matrixTransform.set (1, 2, (alienOneF01[j][1] - alienOneF02[j][1]) * ((frameCount + 1) / 15));
						newPoint = matrixTransform.matrixMult (spacePoint);
						alienOneCurrent[j][0] = newPoint.get (0, 0);
						alienOneCurrent[j][1] = newPoint.get (1, 0);
						
						continue;
					}
					ctx.lineTo ((xPos + alienOneCurrent[j][0]) * xMult, (yPos + alienOneCurrent[j][1]) * yMult);
						
						spacePoint.set (0, 0, alienOneCurrent[j][0]);
						spacePoint.set (1, 0, alienOneCurrent[j][1]);
						spacePoint.set (2, 0, 1.00);
						matrixTransform.makeIndentity ();
						matrixTransform.set (0, 2, (alienOneF01[j][0] - alienOneF02[j][0]) * ((frameCount + 1) / 15));
						matrixTransform.set (1, 2, (alienOneF01[j][1] - alienOneF02[j][1]) * ((frameCount + 1) / 15));
						newPoint = matrixTransform.matrixMult (spacePoint);
						alienOneCurrent[j][0] = newPoint.get (0, 0);
						alienOneCurrent[j][1] = newPoint.get (1, 0);
						
					/*if (i == 0)
					{
						//ctx.save ();
						ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
						ctx.fillRect ((xPos + alienOne[j][0]) * xMult, (yPos + alienOne[j][1]) * yMult, 5, 5);
						//ctx.restore ();
					}*/
				}
			}
			
			ctx.stroke();
		}
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
					
	var glowRed = new Colour (255, 245, 245);
	var highRed = new Colour (255, 127, 127);
	var glowGreen = new Colour (245, 255, 245);
	var highGreen = new Colour (127, 255, 127);
	var glowBlue = new Colour (245, 245, 255);
	var highBlue = new Colour (127, 127, 255);
	var glowYellow = new Colour (255, 255, 245);
	var highYellow = new Colour (255, 255, 127);
	var glowPurple = new Colour (255, 245, 255);
	var highPurple = new Colour (255, 127, 255);
	var glowCyan = new Colour (245, 255, 255);
	var highCyan = new Colour (127, 255, 255);
	
	var alien01Red = new DisplayObject (alienOneF01, glowRed, highRed, 1);
	alien01Red.addFrame (alienOneF02);
	var alien01Green = new DisplayObject (alienOneF01, glowGreen, highGreen, 1);
	alien01Green.addFrame (alienOneF02);
	var alien01Blue = new DisplayObject (alienOneF01, glowBlue, highBlue, 1);
	alien01Blue.addFrame (alienOneF02);
	var alien01Yellow = new DisplayObject (alienOneF01, glowYellow, highYellow, 1);
	alien01Yellow.addFrame (alienOneF02);
	var alien01Purple = new DisplayObject (alienOneF01, glowPurple, highPurple, 1);
	alien01Purple.addFrame (alienOneF02);
	var alien01Cyan = new DisplayObject (alienOneF01, glowCyan, highCyan, 1);
	alien01Cyan.addFrame (alienOneF02);
	
	function draw()
	{
		ctx.clearRect (0, 0, canvasWidth, canvasHeight);
		setDelta();
		//ctx.strokeStyle = gradient;
		
		/*glowColour.r = 255;
		glowColour.g = 245;
		glowColour.b = 245;
		highlightColour.r = 255;
		highlightColour.g = 127;
		highlightColour.b = 127;
		ctx.save();
		ctx.translate (xP, yP);
		drawAlienOne (0, 0, glowColour, highlightColour, 5, 5);
		ctx.restore();

		glowColour.r = 245;
		glowColour.g = 255;
		glowColour.b = 245;
		highlightColour.r = 127;
		highlightColour.g = 255;
		highlightColour.b = 127;
		ctx.save();
		ctx.translate (xP, yP+100);
		drawAlienOne (0, 0, glowColour, highlightColour, 5, 5);
		ctx.restore();
		
		glowColour.r = 245;
		glowColour.g = 245;
		glowColour.b = 255;
		highlightColour.r = 127;
		highlightColour.g = 127;
		highlightColour.b = 255;
		ctx.save();
		ctx.translate (xP, yP+200);
		drawAlienOne (0, 0, glowColour, highlightColour, 5, 5);
		ctx.restore();
		
		glowColour.r = 255;
		glowColour.g = 255;
		glowColour.b = 245;
		highlightColour.r = 255;
		highlightColour.g = 255;
		highlightColour.b = 127;
		ctx.save();
		ctx.translate (xP, yP+300);
		drawAlienOne (0, 0, glowColour, highlightColour, 5, 5);
		ctx.restore();
		
		glowColour.r = 255;
		glowColour.g = 245;
		glowColour.b = 255;
		highlightColour.r = 255;
		highlightColour.g = 127;
		highlightColour.b = 255;
		ctx.save();
		ctx.translate (xP, yP+400);
		drawAlienOne (0, 0, glowColour, highlightColour, 8, 5);
		ctx.restore();
		
		glowColour.r = 245;
		glowColour.g = 255;
		glowColour.b = 255;
		highlightColour.r = 127;
		highlightColour.g = 255;
		highlightColour.b = 255;
		ctx.save();
		ctx.translate (xP, yP+500);
		drawAlienOne (0, 0, glowColour, highlightColour, 5, 5);
		ctx.restore();*/
		
		ctx.save();
		ctx.translate (xP, yP);
		drawObject (alien01Red, 0, 0, 5, 5);
		ctx.restore();
		
		ctx.save();
		ctx.translate (xP, yP+100);
		drawObject (alien01Green, 0, 0, 5, 5);
		ctx.restore();
		
		ctx.save();
		ctx.translate (xP, yP+200);
		drawObject (alien01Blue, 0, 0, 5, 5);
		ctx.restore();
		
		ctx.save();
		ctx.translate (xP, yP+300);
		drawObject (alien01Yellow, 0, 0, 5, 5);
		ctx.restore();
		
		ctx.save();
		ctx.translate (xP, yP+400);
		drawObject (alien01Purple, 0, 0, 8, 5);
		ctx.restore();
		
		ctx.save();
		ctx.translate (xP, yP+500);
		drawObject (alien01Cyan, 0, 0, 5, 5);
		ctx.restore();
		
		
		xP += xVel;
		if ((xP <= 10) || (xP >= (canvasWidth - 100)))
		{
			//clearInterval (intervalID);
			xVel = -xVel;
		}
		
		rotP += rotSpeed;
		if ((rotP <= -0.50) || (xP >= (rotP >= 0.50)))
		{
			//clearInterval (intervalID);
			rotSpeed = -rotSpeed;
		}
		
		/*++frameCount;
		if (frameCount == 15)
		{
			frameCount = 0;
			frameBeat = !frameBeat;
		}*/

	}
	//console.log("to drawLine");
	//drawLine (xP + 0, yP + 4, 800, true, 100);
	//drawLine (xP + 0, yP + 4, 600, false, 50);
	
	timeThen = Date.now();
	//drawObject (alien01Red, 0, 0, 5, 5);
	//intervalID = setInterval (function() {draw();}, 33);

	setDelta();
	xP = 10;
	yP = 10;

	ctx.save();
	ctx.translate (xP+6, yP+3);
	drawObject (alien01Yellow, 0, 0, 34, 18);
	ctx.restore();
	
	ctx.save();
	ctx.translate (xP, yP);
	drawObject (alien01Purple, 0, 0, 10, 10);
	ctx.restore();
	
	ctx.save();
	ctx.translate (xP+318, yP+170);
	drawObject (alien01Blue, 0, 0, 8, 8);
	ctx.restore();
	
	ctx.save();
	ctx.translate (xP+330, yP+90);
	drawObject (alien01Green, 0, 0, 7, 7);
	ctx.restore();
	
	ctx.save();
	ctx.translate (xP+342, yP+10);
	drawObject (alien01Red, 0, 0, 6, 6);
	ctx.restore();
	
	ctx.save();
	ctx.translate (xP+694, yP+94);
	drawObject (alien01Cyan, 0, 0, 5, 12);
	ctx.restore();



	/*var matrixTransform = new Matrix (3, 3, 0.00);
	matrixTransform.makeIndentity ();
	var spacePoint = new Matrix (3, 1, 1.00);
	var newPoint;
	
	spacePoint.set (0, 0, 10.00);
	spacePoint.set (1, 0, 6.00);
	spacePoint.set (2, 0, 1.00);
	console.log ("spacePoint.rowCount(): " + spacePoint.rowCount());
	console.log ("spacePoint.colCount(): " + spacePoint.colCount());
	console.log ("spacePoint.1: " + spacePoint._data[0][0]);
	console.log ("spacePoint.2: " + spacePoint._data[1][0]);
	console.log ("spacePoint.3: " + spacePoint._data[2][0]);
	var c1 = spacePoint.getColArray (0);
	console.log ("c1.length: " + c1.length);
	for (var i = 0; i < c1.length; ++i)
	{
		console.log ("i: " + i + " [ " + c1[i] + " ]");
	}
	matrixTransform.makeIndentity ();
	matrixTransform.set (0, 2, -15.00);
	matrixTransform.set (1, 2, 10.00);
	newPoint = matrixTransform.matrixMult (spacePoint);
	console.log ("new X: " +  newPoint.get (0, 0));
	console.log ("new Y: " +  newPoint.get (1, 0));*/


	/*var m1 = new Matrix (3, 3, 5.5);
	console.log ("m1._data.length: " + m1._data.length);
	for (var i = 0; i < m1._data.length; ++i)
	{
		console.log ("[ " + m1._data[i][0] + " " + m1._data[i][1] + " " + m1._data[i][2] + " ]");
	}
	m1.makeIndentity();
	console.log ("m1._data.length: " + m1._data.length);
	for (var i = 0; i < m1._data.length; ++i)
	{
		console.log ("[ " + m1._data[i][0] + " " + m1._data[i][1] + " " + m1._data[i][2] + " ]");
	}
	var r1 = m1.getRowArray (1);
	console.log ("r1.length: " + r1.length);
	for (var i = 0; i < r1.length; ++i)
	{
		console.log ("i: " + i + " [ " + r1[i] + " ]");
	}
	var c1 = m1.getRowArray (0);
	console.log ("c1.length: " + c1.length);
	for (var i = 0; i < c1.length; ++i)
	{
		console.log ("i: " + i + " [ " + c1[i] + " ]");
	}*/
	
});
