var VectorClass =
{
	x:0,
	y:0,
	
	mag : function()
	{
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	
	magSqr : function()
	{
		return this.x * this.x + this.y * this.y;
	},
	
	//angle in radians
	rotate : function(angle)
	{
		var sin = Math.sin(angle);
		var cos = Math.cos(angle);
		var tempX = this.x;
		this.x = this.x * cos + this.y * -sin; 
		this.y = tempX * sin + this.y * cos;
	},
	
	add : function(v)
	{
		this.x += v.x;
		this.y += v.y;
	},
	
	
	subtract : function(v)
	{
		this.x -= v.x;
		this.y -= v.y;
	},
	
	scale : function(s)
	{
		this.x *= s;
		this.y *= s;
	},
	
	
	normalize : function()
	{
		var mag = this.mag();
		if(mag > 0)
		{
			this.x /= mag;
			this.y /= mag;
		}
		else
		{
			console.log("Error: trying to normalize a 0 vector");
		}
	},
	
	dotProduct : function(v)
	{
		return this.x * v.x + this.y * v.y;
	},
	
	//project this onto v
	scalarProjection : function(v)
	{
		var temp = Object.create(v);
		temp.normalize();
		return this.dotProduct(temp);
	}
};