

$(document).ready(function () {

	var FILL_COLOR = "black";
	var canvasWidth, canvasHeight;
	var canvas = document.getElementById ("canvasFirst");
	var ctx = canvas.getContext ("2d");
	var xVel = 1;
	var xPos = 10;
	var yPos = 120;
	canvasWidth = canvas.width;
	canvasHeight = canvas.height;
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

	function draw()
	{
		ctx.clearRect (0, 0, canvasWidth, canvasHeight);

		ctx.fillStyle = "black";
		ctx.fillRect (10, 10, 100, 100);
		ctx.fillStyle = "rgb(" + getRandomInt(1, 255) + "," + getRandomInt(1, 255) + "," + getRandomInt(1, 255) + ")"; 
		
		ctx.fillRect (xPos, yPos, 100, 100);
		xPos += (xVel * getRandomInt(1, 10));
		
		if ((xPos <= 10) || (xPos >= (canvasWidth - 100)))
		{
			xVel = -xVel;
		}
		/*if (xPos >= (canvasWidth - 100))
		{
			xVel = -xVel;
		}*/
	}
	
	setInterval (function() {draw();}, 16);
});
