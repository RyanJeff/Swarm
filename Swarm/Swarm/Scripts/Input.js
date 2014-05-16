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
    console.log("Click:", clickX, clickY);

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
    console.log(mousePos);
}

function checkMenuClick(clickX, clickY, startX, endX, startY, endY)
{
    return (clickX >= startX) && (clickY >= startY) && (clickX <= endX) && (clickY <= startY);
}