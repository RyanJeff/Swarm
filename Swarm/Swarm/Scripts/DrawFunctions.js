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

function drawPastFrames(pQueue, colourGlow)
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

function drawObjectLines(cT, dispObject, posX, posY, multX, multY, setProjectionValues)
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
	var projectX = new Array();
	var projectY = new Array();

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
			cT.moveTo(posX + (dispObjectCurrent[j][0] * multX), posY + (dispObjectCurrent[j][1] * multY));
			if (setProjectionValues)
			{
				vectorB[0] = posX + (dispObjectCurrent[j][0] * multX);
				vectorB[1] = posY + (dispObjectCurrent[j][1] * multY);
				projectX.push(dotProduct(normalAX, vectorB));
				projectY.push(dotProduct(normalAY, vectorB));
				/*valX = dotProduct(normalAX, vectorB);
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
				}*/
			}
			continue;
		}
		cT.lineTo(posX + (dispObjectCurrent[j][0] * multX), posY + (dispObjectCurrent[j][1] * multY));
		if (setProjectionValues)
		{
			//console.log("multX: " + multX + " multY: " + multY);
			vectorB[0] = posX + (dispObjectCurrent[j][0] * multX);
			vectorB[1] = posY + (dispObjectCurrent[j][1] * multY);
			projectX.push(dotProduct(normalAX, vectorB));
			projectY.push(dotProduct(normalAY, vectorB));
			/*valX = dotProduct(normalAX, vectorB);
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
			}*/
			//console.log("xMin: " + xMin + " xMax: " + xMax + " yMin: " + yMin + " yMax: " + yMax);
		}
	}

	if (setProjectionValues)
	{
		xMin = Math.min.apply(Math, projectX);
		xMax = Math.max.apply(Math, projectX);
		yMin = Math.min.apply(Math, projectY);
		yMax = Math.max.apply(Math, projectY);
	}

	//ctx.beginPath();
	/*ctx.moveTo(xMin, 10);
	ctx.lineTo(xMax, 10);
	ctx.moveTo(10, yMin);
	ctx.lineTo(10, yMax);*/

	/*ctx.moveTo(posX, posY-10);
	ctx.lineTo(xMax, posY-10);
	ctx.moveTo(posX-10, posY);
	ctx.lineTo(posX-10, yMax);*/
	//ctx.stroke();
	if (setProjectionValues)
	{
		//console.log("xMin: " + xMax + " xMax: " + xMin + " yMin: " + yMin + " yMax: " + yMax);
		/*if (dispObject.projections == null)
		{
			dispObject.projections = Object.create(ObjectProjectionsClass);
		}*/
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
	var imgData;

	for (var i = NUM_LAYERED_GLOW_LINES; i >= 0; --i)
	{
		if (i == 0)
		{
			ctx.lineWidth = (i + 1) * 3 - 2;
			ctx.strokeStyle = "rgba(" + dispObject.glow.r + ", " + dispObject.glow.g + ", " + dispObject.glow.b + ", 1.0)";
			//ctxBack.lineWidth = (i + 1) * 3 - 2;
			//ctxBack.strokeStyle = "rgba(" + dispObject.glow.r + ", " + dispObject.glow.g + ", " + dispObject.glow.b + ", 1.0)";
		}
		else
		{
			ctx.lineWidth = (i + 1) * 3 - 2;
			ctx.strokeStyle = "rgba(" + dispObject.highlight.r + ", " + dispObject.highlight.g + ", " + dispObject.highlight.b + ", 0.3)";
		}

		ctx.beginPath();

		for (var j = 0; j < dQueue.length; ++j)
		{
			dispObject = dQueue[j];
			if (!dispObject.isDrawn)
			{
				continue;
			}
			transition = dispObject.keyframeRate * timeDelta;
			dispObject.transitionTotalAdjust(transition);
			dispObject.nextKeyframe();
			if (i == 0)
			{
				drawObjectLines(ctx, dispObject, dispObject.posX, dispObject.posY, dispObject.multX, dispObject.multY, i == NUM_LAYERED_GLOW_LINES);
				//drawObjectLines(ctxBack, dispObject, dispObject.posX, dispObject.posY, dispObject.multX, dispObject.multY, i == NUM_LAYERED_GLOW_LINES);
				//dispFrameObject = dispObject.getFrameObject();
				//imgData = ctxBack.getImageData(dispObject.posX, dispObject.posY, dispFrameObject.width, dispFrameObject.height);
				//ctx.putImageData(imgData, dispObject.posX, dispObject.posY, dispObject.posX, dispObject.posY, dispFrameObject.width, dispFrameObject.height);
				//dispObject.pastFrameAdd(dispFrameObject, dispObject.posX, dispObject.posY);

				//dispObject.pastFrameAdd(dispFrameObject, dispObject.posX + (dispObject.lastDeltaX * 0.001), dispObject.posY + (dispObject.lastDeltaY * 0.001), dispObject.multX, dispObject.multY);

				//ctxBack.clearRect(dispObject.posX, dispObject.posY, dispFrameObject.width, dispFrameObject.height);
			}
			else
			{
				drawObjectLines(ctx, dispObject, dispObject.posX, dispObject.posY, dispObject.multX, dispObject.multY, i == NUM_LAYERED_GLOW_LINES);
			}
		}

		ctx.stroke();
		++strokesNum;
	}
}

