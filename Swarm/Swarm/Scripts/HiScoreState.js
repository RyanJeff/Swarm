var HiScoreStateClass =
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
        //console.log("Hi-Score Update");
        this.render(currContext);
    },

    render: function (currContext)
    {
        //console.log("Hi-Score Render");
        currContext.fillStyle = "rgb(0,0,0)"
        currContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        setDelta();

        strokesNum = 0;
        for (var i = 0; i < hiScoreStateList.length; ++i)
        {
            hiScoreStateList[i].update();
        }

        drawHiScoreQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
        colourIndexLast = Number(drawHiScoreQueue[0].glow.index);
        for (var i = 0; i < drawHiScoreQueue.length; ++i)
        {
            if (colourIndexLast == Number(drawHiScoreQueue[i].glow.index))
            {
                colourList[lengthsColourList[lengthColourQueue]] = drawHiScoreQueue[i];
                lengthsColourList[lengthColourQueue]++;
            }
            else
            {
                colourQueue[lengthColourQueue] = colourList;
                lengthColourQueue++;
                colourList = new Array();
                lengthsColourList[lengthColourQueue] = 0;
                colourList[lengthsColourList[lengthColourQueue]] = drawHiScoreQueue[i];
                lengthsColourList[lengthColourQueue]++;
                colourIndexLast = Number(drawHiScoreQueue[i].glow.index);
            }
        }
        colourQueue[lengthColourQueue] = colourList;
        lengthColourQueue++;

        for (var i = 0; i < colourQueue.length; ++i)
        {
            drawObjects(colourQueue[i]);
        }

        lengthColourQueue = 0;
        for (var i = 0; i < lengthsColourList.length; ++i)
        {
            lengthsColourList[i] = 0;
        }
        lengthDrawHiScoreQueue = 0;
    }
};

timeThen = Date.now();
setDelta();
for (var i = 0; i < hiScoreStateList.length; ++i)
{
    hiScoreStateList[i].start();
}