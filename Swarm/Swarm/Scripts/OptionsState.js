var opColourQueue = new Array();
var opLengthColourQueue = 0;
var opColourList = new Array();
var opLengthColourList = new Array();
opLengthColourList[0] = 0;

var OptionsStateClass =
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
        for (var i = 0; i < optionsStateList.length; ++i)
        {
            optionsStateList[i].update();
        }

        drawOptionsQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
        colourIndexLast = Number(drawOptionsQueue[0].glow.index);
        for (var i = 0; i < drawOptionsQueue.length; ++i)
        {
            if (colourIndexLast == Number(drawOptionsQueue[i].glow.index))
            {
                opColourList[opLengthColourList[opLengthColourQueue]] = drawOptionsQueue[i];
                opLengthColourList[opLengthColourQueue]++;
            }
            else
            {
                opColourQueue[opLengthColourQueue] = opColourList;
                opLengthColourQueue++;
                opColourList = new Array();
                opLengthColourList[opLengthColourQueue] = 0;
                opColourList[opLengthColourList[opLengthColourQueue]] = drawOptionsQueue[i];
                opLengthColourList[opLengthColourQueue]++;
                colourIndexLast = Number(drawOptionsQueue[i].glow.index);
            }
        }
        opColourQueue[opLengthColourQueue] = opColourList;
        opLengthColourQueue++;

        for (var i = 0; i < opColourQueue.length; ++i)
        {
            drawObjects(opColourQueue[i]);
        }

        opLengthColourQueue = 0;
        for (var i = 0; i < opLengthColourList.length; ++i)
        {
            opLengthColourList[i] = 0;
        }
        lengthDrawOptionsQueue = 0;
    }
};

timeThen = Date.now();
setDelta();
for (var i = 0; i < optionsStateList.length; ++i)
{
    optionsStateList[i].start();
}