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
			var fList = Object.create(FrameObjectClass)
			fList.init(frameInbetween);
			inbetweens.push(fList);
			//inbetweens.push(new FrameObject(frameInbetween));
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

