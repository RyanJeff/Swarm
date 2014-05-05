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

