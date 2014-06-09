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

	this.startX = 0;
	this.startY = 0;
	this.currX = 0;
	this.currY = 0;

	this.isRegisteredHandlerKeyUp = false;
	this.isRegisteredHandlerKeyDown = false;

	this.stopKeyHandling = false;

	this.GetAxis = function (axis)
	{
		console.log("GetAxis: L: " + this.isDownKeyLeft + " R: " + this.isDownKeyRight + " U: " + this.isDownKeyUp + " D: " + this.isDownKeyDown + " S: " + this.isDownKeySpace);
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
		if (this.stopKeyHandling)
		{
			return;
		}
		this.isRegisteredHandlerKeyDown = true;
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
		if (this.stopKeyHandling)
		{
			return;
		}
		console.log("Makin' keys go up!");
		this.isRegisteredHandlerKeyUp = true;
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
			console.log("Space Up");
			this.isDownKeySpace = false;
		}
	};

	this.OnTouchStart = function (event)
	{
		this.stopKeyHandling = true;
		$(document).unbind('keydown');
		$(document).unbind('keyup');
		event.preventDefault();
		this.startX = getRelativeMousePosition(event.targetTouches[0].pageX, canvasBoundingRect.left) | 0;
		this.startY = getRelativeMousePosition(event.targetTouches[0].pageY, canvasBoundingRect.top) | 0;
		console.log("Space Down");
		this.isDownKeySpace = true;
	};

	this.OnTouchMove = function (event)
	{
		event.preventDefault();
		this.currX = getRelativeMousePosition(event.targetTouches[0].pageX, canvasBoundingRect.left) | 0;
		this.currY = getRelativeMousePosition(event.targetTouches[0].pageY, canvasBoundingRect.top) | 0;
		console.log("startX: " + this.startX + " startY: " + this.startY + "  currX: " + this.currX + " currY: " + this.currY);
		if (this.currX == this.startX)
		{
			this.isDownKeyLeft = this.isDownKeyRight = false;
		}
		if (this.currX > this.startX)
		{
			console.log("Right");
			this.isDownKeyRight = true;
			this.isDownKeyLeft = false;
		}
		if (this.currX < this.startX)
		{
			console.log("Left");
			this.isDownKeyRight = false;
			this.isDownKeyLeft = true;
		}
		if (this.currY == this.startY)
		{
			this.isDownKeyUp = this.isDownKeyDown = false;
		}
		if (this.currY > this.startY)
		{
			console.log("Down");
			this.isDownKeyDown = true;
			this.isDownKeyUp = false;
		}
		if (this.currY < this.startY)
		{
			console.log("Up");
			this.isDownKeyDown = false;
			this.isDownKeyUp = true;
		}
		this.startX = this.currX;
		this.startY = this.currY;

		console.log("L: " + this.isDownKeyLeft + " R: " + this.isDownKeyRight + " U: " + this.isDownKeyUp + " D: " + this.isDownKeyDown + " S: " + this.isDownKeySpace);
	};

	this.OnTouchEnd = function (event)
	{
		event.preventDefault();
		this.startX = this.currX = 0;
		this.startY = this.currY = 0;
		console.log("BEFORE: L: " + this.isDownKeyLeft + " R: " + this.isDownKeyRight + " U: " + this.isDownKeyUp + " D: " + this.isDownKeyDown + " S: " + this.isDownKeySpace);
		console.log("Reset Keys Up");
		this.isDownKeyLeft = this.isDownKeyRight = false;
		this.isDownKeyUp = this.isDownKeyDown = false;
		this.isDownKeySpace = false;
		this.stopKeyHandling = false;
	};

	this.GetSelf = function ()
	{
		var self = this;
		return self;
	}

	var self = this;
	$(document).keydown($.proxy(this.OnKeyDownHandler, this));
	$(document).keyup($.proxy(this.OnKeyUpHandler, this));
});

function getRelativeMousePosition(mousePosition, relativeTo)
{
	var relativePosition;

	relativePosition = mousePosition - relativeTo;
	if (relativePosition < 0)
	{
		relativePosition = 0;
	}
	return relativePosition;
}

function onClick(ev)
{
    var clickX = ev.clientX;
    var clickY = ev.clientY;
    //console.log("Click:", clickX, clickY);

    if (checkMenuClick(clickX, clickY, playPosStart, (playPosCurr + (charWidth * 4)), playYPos, playYPos + (charWidth * 3)))
    {
        currState = States.GAME;
    }

    if (checkMenuClick(clickX, clickY, instructionsPosStart, instructionsPosCurr + (charWidth * 5), instructionsYPos, instructionsYPos + (charWidth * 3)))
    {
        currState = States.INSTRUCTIONS;
    }

    if (checkMenuClick(clickX, clickY, hiscorePosStart, hiscorePosCurr + (charWidth * 5), hiscoreYPos, hiscoreYPos + (charWidth * 5)))
    {
        currState = States.HI_SCORES;
    }
}

function mouseMoveHandler(event)
{
    event = event || window.event;
    mousePos =
    {
        x: event.clientX,
        y: event.clientY
    };
   // console.log(mousePos);
}

function checkMenuClick(clickX, clickY, startX, endX, startY, endY)
{
    return (clickX >= startX) && (clickY >= startY) && (clickX <= endX) && (clickY <= startY);
}