var hsColourQueue = new Array();
var hsLengthColourQueue = 0;
var hsColourList = new Array();
var hsLengthsColourList = new Array();
hsLengthsColourList[0] = 0;

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
                hsColourList[hsLengthsColourList[hsLengthColourQueue]] = drawHiScoreQueue[i];
                hsLengthsColourList[hsLengthColourQueue]++;
            }
            else
            {
                hsColourQueue[hsLengthColourQueue] = hsColourList;
                hsLengthColourQueue++;
                hsColourList = new Array();
                hsLengthsColourList[hsLengthColourQueue] = 0;
                hsColourList[hsLengthsColourList[hsLengthColourQueue]] = drawHiScoreQueue[i];
                hsLengthsColourList[hsLengthColourQueue]++;
                colourIndexLast = Number(drawHiScoreQueue[i].glow.index);
            }
        }
        hsColourQueue[hsLengthColourQueue] = hsColourList;
        hsLengthColourQueue++;

        for (var i = 0; i < hsColourQueue.length; ++i)
        {
            drawObjects(hsColourQueue[i]);
        }

        hsLengthColourQueue = 0;
        for (var i = 0; i < hsLengthsColourList.length; ++i)
        {
            hsLengthsColourList[i] = 0;
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