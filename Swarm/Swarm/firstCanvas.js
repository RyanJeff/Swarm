

$(document).ready(function () {

	var FILL_COLOR = "black";
	var canvasWidth, canvasHeight;
	var canvas = document.getElementById ("canvasFirst");
	var ctx = canvas.getContext ("2d");
	var xVel = 1;
	var xP = 10;
	var yP = 20;
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
	
	function drawLine (xPosStart, yPosStart, length, isHorizontal, thickness)
	{
		console.log("drawLine");
		var gradient;
		if (isHorizontal)
		{
			gradient = ctx.createLinearGradient(0, 0, 0, thickness);
		console.log("horizontal gradient");
		}
		else
		{
			gradient = ctx.createLinearGradient(0, 0, thickness, 0);
		console.log("vertical gradient");
		}
		gradient.addColorStop(0, "rgba(0, 0, 0, 0.5)");
		//gradient.addColorStop(0.45, "rgb(0, 255, 0)");
		//gradient.addColorStop(0.55, "rgb(0, 255, 0)");
		gradient.addColorStop(0.50, "rgba(0, 255, 0, 1.0)");
		gradient.addColorStop(1, "rgba(0, 0, 0, 0.5)");
		
		ctx.fillStyle = gradient;
		
		//ctx.strokeStyle = gradient;
		//ctx.lineWidth = thickness;
		//ctx.beginPath();
		//ctx.moveTo(xPosStart, yPosStart);
		if (isHorizontal)
		{
			//ctx.lineTo(xPosStart + length, yPosStart);
			ctx.fillRect(xPosStart, yPosStart, length, thickness);
		console.log("horizontal line");
		}
		else
		{
			//ctx.lineTo(xPosStart, yPosStart + length);
			ctx.fillRect(xPosStart, yPosStart, thickness, length);
		console.log("vertical line");
		}
		//ctx.stroke();
	}
	
	function drawAlienOne (xPos, yPos, lineColour,  hiColour, xMult, yMult)
	{
		var alienOne = [[-1, -1], [0, 4], [2, 4], [2, 2], [8, 2], [8, 0], [16, 0], [16, 2], [22, 2], [22, 4], 
						[24, 4], [24, 10], [18, 10], [18, 12], [20, 12], [20, 14], [24, 14], [24, 16], [20, 16],
						[20, 14], [16, 14], [16, 12], [14, 12], [14, 14], [10, 14], [10, 12], [8, 12], [8, 14],
						[4, 14], [4, 16], [0, 16], [0, 14], [4, 14], [4, 12], [6, 12], [6, 10], [0, 10], [0, 4], 
						[-1, -1], [6, 6], [10, 6], [10, 8], [6, 8], [6, 6], 
						[-1, -1], [14, 6], [18, 6], [18, 8], [14, 8], [14, 6],
						[-1, -1], [10, 12], [10, 10], [14, 10], [14, 12]];
		
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
			
			for (var j = 0; j < alienOne.length; ++j)
			{
				if (alienOne[j][0] < 0)
				{
					++j;
					ctx.moveTo ((xPos + alienOne[j][0]) * xMult, (yPos + alienOne[j][1]) * yMult);
					continue;
				}
				ctx.lineTo ((xPos + alienOne[j][0]) * xMult, (yPos + alienOne[j][1]) * yMult);
				/*if (i == 0)
				{
					//ctx.save ();
					ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
					ctx.fillRect ((xPos + alienOne[j][0]) * xMult, (yPos + alienOne[j][1]) * yMult, 5, 5);
					//ctx.restore ();
				}*/
			}

			/*ctx.moveTo(xPos + 0, yPos + 4);
			ctx.lineTo(xPos + 2, yPos + 4);
			ctx.lineTo(xPos + 2, yPos + 2);
			ctx.lineTo(xPos + 8, yPos + 2);
			ctx.lineTo(xPos + 8, yPos + 0);
			ctx.lineTo(xPos + 16, yPos + 0);
			ctx.lineTo(xPos + 16, yPos + 2);
			ctx.lineTo(xPos + 22, yPos + 2);
			ctx.lineTo(xPos + 24, yPos + 4);
			ctx.lineTo(xPos + 24, yPos + 10);
			ctx.lineTo(xPos + 18, yPos + 10);
			ctx.lineTo(xPos + 18, yPos + 12);
			ctx.lineTo(xPos + 20, yPos + 12);
			ctx.lineTo(xPos + 20, yPos + 14);
			ctx.lineTo(xPos + 24, yPos + 14);
			ctx.lineTo(xPos + 24, yPos + 16);
			ctx.lineTo(xPos + 20, yPos + 16);
			ctx.lineTo(xPos + 20, yPos + 14);
			ctx.lineTo(xPos + 16, yPos + 14);
			ctx.lineTo(xPos + 16, yPos + 12);
			ctx.lineTo(xPos + 14, yPos + 12);
			ctx.lineTo(xPos + 14, yPos + 14);
			ctx.lineTo(xPos + 10, yPos + 14);
			ctx.lineTo(xPos + 10, yPos + 12);
			ctx.lineTo(xPos + 8, yPos + 12);
			ctx.lineTo(xPos + 8, yPos + 14);
			ctx.lineTo(xPos + 4, yPos + 14);
			ctx.lineTo(xPos + 4, yPos + 16);
			ctx.lineTo(xPos + 0, yPos + 16);
			ctx.lineTo(xPos + 0, yPos + 14);
			ctx.lineTo(xPos + 4, yPos + 14);
			ctx.lineTo(xPos + 4, yPos + 12);
			ctx.lineTo(xPos + 6, yPos + 10);
			ctx.lineTo(xPos + 0, yPos + 10);
			ctx.lineTo(xPos + 0, yPos + 4);

			ctx.moveTo(xPos + 6, yPos + 6);
			ctx.lineTo(xPos + 10, yPos + 6);
			ctx.lineTo(xPos + 10, yPos + 8);
			ctx.lineTo(xPos + 6, yPos + 8);
			ctx.lineTo(xPos + 6, yPos + 6);

			ctx.moveTo(xPos + 14, yPos + 6);
			ctx.lineTo(xPos + 18, yPos + 6);
			ctx.lineTo(xPos + 18, yPos + 8);
			ctx.lineTo(xPos + 14, yPos + 8);
			ctx.lineTo(xPos + 14, yPos + 6);

			ctx.moveTo(xPos + 10, yPos + 12);
			ctx.lineTo(xPos + 10, yPos + 10);
			ctx.lineTo(xPos + 14, yPos + 10);
			ctx.lineTo(xPos + 14, yPos + 12);*/
			
			ctx.stroke();
		}
	}
	//ctx.fillStyle = gradient;
	//ctx.shadowBlur = 50;
	//ctx.shadowColor = "rgb(255, 0, 0)";
 
	
	function draw()
	{
		ctx.clearRect (0, 0, canvasWidth, canvasHeight);
		//ctx.strokeStyle = gradient;
		
		glowColour.r = 255;
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
		
		
		xP += xVel;
		
		if ((xP <= 10) || (xP >= (canvasWidth - 100)))
		{
			xVel = -xVel;
		}

	}
	//console.log("to drawLine");
	//drawLine (xP + 0, yP + 4, 800, true, 100);
	//drawLine (xP + 0, yP + 4, 600, false, 50);
	setInterval (function() {draw();}, 32);
});
