
var mmColourQueue = new Array();
var mmLengthColourQueue = 0;
var mmColourList = new Array();
var mmLengthsColourList = new Array();
mmLengthsColourList[0] = 0;

var MainMenuStateClass =
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
        //console.log("Main Menu Update");
        this.render(currContext);
    },

    render: function (currContext)
    {
        //console.log("Main Menu Render");
        currContext.fillStyle = "rgb(0,0,0)"
        currContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        setDelta();

        strokesNum = 0;
        for (var i = 0; i < mainMenuList.length; ++i)
        {
            mainMenuList[i].update();
        }

        drawLetterQueue.sort(function (a, b) { return (Number(a.glow.index) > Number(b.glow.index)) ? 1 : ((Number(b.glow.index) > Number(a.glow.index)) ? -1 : 0); });
        colourIndexLast = Number(drawLetterQueue[0].glow.index);
        for (var i = 0; i < drawLetterQueue.length; ++i)
        {
            if (colourIndexLast == Number(drawLetterQueue[i].glow.index))
            {
            	mmColourList[mmLengthsColourList[mmLengthColourQueue]] = drawLetterQueue[i];
            	mmLengthsColourList[mmLengthColourQueue]++;
            }
            else
            {
            	mmColourQueue[mmLengthColourQueue] = mmColourList;
            	mmLengthColourQueue++;
                mmColourList = new Array();
                mmLengthsColourList[mmLengthColourQueue] = 0;
                mmColourList[mmLengthsColourList[mmLengthColourQueue]] = drawLetterQueue[i];
                mmLengthsColourList[mmLengthColourQueue]++;
                colourIndexLast = Number(drawLetterQueue[i].glow.index);
            }
        }
        mmColourQueue[mmLengthColourQueue] = mmColourList;
        mmLengthColourQueue++;

        for (var i = 0; i < mmColourQueue.length; ++i)
        {
        	drawObjects(mmColourQueue[i]);
        }

        mmLengthColourQueue = 0;
        for (var i = 0; i < mmLengthsColourList.length; ++i)
        {
        	mmLengthsColourList[i] = 0;
        }
        lengthDrawLetterQueue = 0;
    }
};

timeThen = Date.now();
setDelta();
for (var i = 0; i < mainMenuList.length; ++i)
{
    mainMenuList[i].start();
}