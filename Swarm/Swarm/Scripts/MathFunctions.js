function clamp(x, min, max)
{
	return x < min ? min : (x > max ? max : x);
}

function dotProduct(a1, a2)
{
	var ret = 0.00;

	for (var i = 0; i < a1.length; ++i)
	{
		ret += a1[i] * a2[i];
	}
	return ret;
}

var Matrix = function (rows, columns, defaultValue)
{
	this._data = new Array();

	for (var i = 0; i < rows; ++i)
	{
		this._data.push(new Array());
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
	};

	this.getColArray = function (col)
	{
		var ret = new Array();

		for (var i = 0; i < this.rowCount() ; ++i)
		{
			ret.push(this._data[i][col]);
		}
		return ret;
	};

	this.rowCount = function ()
	{
		return this._data.length;
	};

	this.colCount = function ()
	{
		if (this.rowCount() == 0)
		{
			return 0;
		}
		return this._data[0].length;
	};

	this.get = function (row, col)
	{
		return this._data[row][col];
	};

	this.set = function (row, col, value)
	{
		this._data[row][col] = value;
	};

	this.makeIndentity = function ()
	{
		for (var i = 0; i < this.rowCount() ; ++i)
		{
			for (var j = 0; j < this.colCount() ; ++j)
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
	};

	this.matrixMult = function (m)
	{
		var ret = new Matrix(this.rowCount(), m.colCount());
		for (var i = 0; i < ret.rowCount() ; ++i)
		{
			for (var j = 0; j < ret.colCount() ; ++j)
			{
				ret.set(i, j, dotProduct(this.getRowArray(i), m.getColArray(j)));
			}
		}
		return ret;
	};
};

function setDelta()
{
	timeNow = Date.now();
	timeDelta = (timeNow - timeThen) / 1000;	// seconds since last frame
	//timeDelta /= 16;
	timeThen = timeNow;
}

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function rgbValuesToString(redColour, greenColour, blueColour)
{
	var rgbValueString = "";

	rgbValuesString = "rgb(" + redColour + "," + greenColour + "," + blueColour + ")";
	console.log("rgbValuesString: " + rgbValuesString);
	return rgbValueString;
}

