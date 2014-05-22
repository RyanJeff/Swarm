
var goColourQueue = new Array();
var goLengthColourQueue = 0;
var goColourList = new Array();
var goLengthsColourList = new Array();
goLengthsColourList[0] = 0;

var GameOverStateClass =
{
    canvasWidth: 0,
    canvasHeight: 0,
    assets: undefined,

    init: function (canvasWidth, canvasHeight, assets)
    {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.assets = assets;
    },

    update: function (deltaTime, currContext)
    {
        this.render(currContext);
    },

    render: function (currContext)
    {
        //currContext.fillStyle = "rgb(0,0,0)"
        //currContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        //setDelta();

        strokesNum = 0;
        for (var i = 0; i < gameOverList.length; ++i)
        {
        	gameOverList[i].update();
        }

        gameOverQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
        colourIndexLast = Number(gameOverQueue[0].glow.index);
        for (var i = 0; i < gameOverQueue.length; ++i)
        {
        	if (colourIndexLast == Number(gameOverQueue[i].glow.index))
            {
        		goColourList[goLengthsColourList[goLengthColourQueue]] = gameOverQueue[i];
        		goLengthsColourList[goLengthColourQueue]++;
            }
            else
            {
        		goColourQueue[goLengthColourQueue] = goColourList;
        		goLengthColourQueue++;
        		goColourList = new Array();
        		goLengthsColourList[goLengthColourQueue] = 0;
        		goColourList[goLengthsColourList[goLengthColourQueue]] = gameOverQueue[i];
        		goLengthsColourList[goLengthColourQueue]++;
                colourIndexLast = Number(gameOverQueue[i].glow.index);
            }
        }
        goColourQueue[goLengthColourQueue] = goColourList;
        goLengthColourQueue++;

        for (var i = 0; i < goColourQueue.length; ++i)
        {
        	drawObjects(goColourQueue[i]);
        }

        goLengthColourQueue = 0;
        for (var i = 0; i < goLengthsColourList.length; ++i)
        {
        	goLengthsColourList[i] = 0;
        }
        lengthGameOverQueue = 0;
    }
};

timeThen = Date.now();
setDelta();
for (var i = 0; i < gameOverList.length; ++i)
{
	gameOverList[i].start();
}