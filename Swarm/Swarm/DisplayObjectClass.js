var DisplayObjectClass =
{
<<<<<<< HEAD
	frameList : null,
	frameListCopy : null,
	inbetweensList : null,
	forward : true,
	glow : null,
	highlight : null,
	keyframeRate : 1,				// Keyframes per second
	keyframeCurrent : 0,
	keyframeLast : 0,
	transitionTotal : 0,			// Total time transitioning so far, used to know when to goto next keyframe
	flipped : false,
	pastFrames : new Array(),
	pastFramesMax : 10,
	pastFramesTotalVelX : 0,
	pastFramesTotalVelY : 0,
	
	frameListBroken : null,
	broken : false,

	posX : 0,
	posY : 0,
	velX : 0,		// Pixels per second horizontally
	velY : 0,		// Pixels per second vertically
	multX : 1,		// Horixontal scaling factor
	multY : 1,		// Vertical scaling factor
	lastDeltaX : 0,
	lastDeltaY : 0,
	currentWidth : 0,
	currentHeight : 0,
	//projections : Object.create(ObjectProjectionsClass),
	projections : null,
	isTrigger: false,		// true = this object can trigger a collision
	tag : "",

	init : function (initialVectors, colourGlow, colourHighlight, keyframeRate)
	{
		this.frameList = new Array();
		var fList = Object.create(FrameObjectClass)
		fList.init(initialVectors);
		this.frameList.push(fList);
		this.glow = colourGlow;
		this.highlight = colourHighlight;
		this.keyframeRate = keyframeRate;

	},

	pastFrameAdd : function (fObj, vX, vY, mX, mY)
=======
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
	this.multX = 1;		// Horizontal scaling factor
	this.multY = 1;		// Vertical scaling factor
	this.lastDeltaX = 0;
	this.lastDeltaY = 0;
	this.currentWidth = 0;
	this.currentHeight = 0;
	this.projections = new ObjectProjections(0, 0, 0, 0);
	this.isTrigger = false;		// true = this object can trigger a collision
	this.tag = "";

	this.pastFrameAdd = function (fObj, vX, vY, mX, mY)
>>>>>>> d6105d0b5f43d8b0e155034fe6310df56a7fc853
	{
		if (this.pastFrames.length == this.pastFramesMax)
		{
			var pastFrameOld = this.pastFrames.splice(0, 1);
			this.pastFramesTotalVelX -= pastFrameOld[0].velX;
			this.pastFramesTotalVelY -= pastFrameOld[0].velY;
		}
		if (this.pastFrames == null)
		{
			this.pastFrames = new Array();
		}
		this.pastFrames.push(Object.create(PastFrameObjectClass));
		this.pastFrames[this.pastFrames.length - 1].init(vX, vY, mX, mY, fObj.vectors, fObj.width, fObj.height);
		this.pastFramesTotalVelX += vX;
		this.pastFramesTotalVelY += vY;
	},

	addFrame : function (vectors)
	{
		if (vectors.length != this.frameList[this.keyframeCurrent].length)
		{
			console.assert("Added vectors length does not match!");
		}
		var fList = Object.create(FrameObjectClass)
		fList.init(vectors);
		this.frameList.push(fList);
		this.keyframeLast = this.frameList.length - 1;
		var prevFrame = this.frameList[this.frameList.length - 2];
		var vFrom = prevFrame.frameVector;
		//console.log("vFrom: " + vFrom.length + " vectors: " + vectors.length + " keyframeRate: " + keyframeRate);
		this.inbetweensList = new Array();
		this.inbetweensList.push(calculateInbetweens(vFrom, vectors, this.keyframeRate));
	},

	getFrameObject : function ()
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
	},

	transitionTotalAdjust : function (transition)
	{
		this.transitionTotal += transition;
	},

	nextKeyframe : function ()
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
	},

	breakApart : function ()
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
	},

	// this is called after the object is created...
	start : function ()
	{

	},
	// this is called each frame...
	update : function ()
	{

	},
	// This would be added to a DisplayObject if it handles collision
	// THIS SHOULD *NOT* BE UNCOMMENTED!!!!!!!!!!!!!!
	/*this.onTriggerEnter = function (dispObject)
	{

	}*/
	// Called when this object must cease to be.
	// you don't have to go home, but we don't want to see you 
	// around here no more no more.
	destroy : function ()
	{

	}
};

