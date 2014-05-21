
var MainMenu = Object.create(MainMenuStateClass);
var Instructions = Object.create(InstructionsStateClass);
var HiScores = Object.create(HiScoreStateClass);
var gameOver = Object.create(GameOverStateClass);

$(document).ready(function ()
{
    canvas = document.getElementById("gameScreen");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("click", onClick, false);

    canvas.style.left = ((windowWidth * 0.5) - (canvasWidth * 0.5)) + "px";
    canvas.style.backgroundColor = "rgb(0,0,0)";
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    canvas.onmousemove = mouseMoveHandler;
    canvas.onmouseover = mouseMoveHandler;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    var canvasBoundingRect = canvas.getBoundingClientRect();
    var currState = States.MAIN_MENU;

    var timer = 0;
    var previousTime = Date.now();
    timeThen = Date.now();

    function gameLoop()
    {
    	setDelta();
        drawStars();
        //startGame();
        //var deltaTime = (Date.now() - previousTime) / 1000;
        //previousTime = Date.now();
        //timer += deltaTime;

        switch(currState)
        {
            case States.MAIN_MENU:
                //Launch the main menu
                MainMenu.update(timeDelta, ctx);
            break;
			
            case States.GAME:
                //Draw the game objects
            	//console.log("Start Game Pressed");
            	if (!startGame())
            	{
					// will eventually be = States.GAME_OVER
            		setTimeout(function () { switchToMainMenu(); }, 3500);
            		currState = States.GAME_OVER;
            	}
                break;

            case States.INSTRUCTIONS:
                //Change to Instructions screen
                Instructions.update(timeDelta, ctx);
            break;

            case States.HI_SCORES:
                //Change to Hi-Score screen
                HiScores.update(timeDelta, ctx);
            break;

        	case States.GAME_OVER:
        		//Change to Game Over screen
        		gameOver.update(timeDelta, ctx);
        		break;
        }
    }

    function switchToMainMenu()
    {
    	currState = States.MAIN_MENU;
    }

    function onClick(ev)
    {
    	if (currState == States.GAME)
    	{
    		return;
    	}
    	var clickX = getRelativeMousePosition(ev.clientX, canvasBoundingRect.left);
        var clickY = getRelativeMousePosition(ev.clientY, canvasBoundingRect.top);
        //console.log("Click:", clickX, clickY);
        if (currState == States.MAIN_MENU)
        {
            if (checkMenuClick(clickX, clickY, playPosStart, (playPosCurr + (charWidth * 4)), playYPos, playYPos + (charWidth * 3)))
            {
                //console.log("Start Game Pressed");
                currentScore = 0;
                currentLives = STARTING_LIVES;
                resetLives();
                setupGame();
                currState = States.GAME;
            }

            if (checkMenuClick(clickX, clickY, instructionsPosStart, instructionsPosCurr + (charWidth * 5),
                instructionsYPos, instructionsYPos + (charWidth * 3)))
            {
                //console.log("Instructions Pressed");
                currState = States.INSTRUCTIONS;
            }

            if (checkMenuClick(clickX, clickY, hiscorePosStart, hiscorePosCurr + (charWidth * 5),
                hiscoreYPos, hiscoreYPos + (charWidth * 5)))
            {
                currState = States.HI_SCORES;
                //console.log("Hi-Scores Pressed");
            }
        }

        if (currState == States.INSTRUCTIONS || currState == States.HI_SCORES)
        {
            if (checkMenuClick(clickX, clickY, backPosStart, backPosCurr + (charWidth * 5),
                backYPos, backYPos + (charWidth * 3)))
            {
                currState = States.MAIN_MENU;
            }
        }
    }

    function mouseMoveHandler(event)
    {
    	if (currState == States.GAME)
    	{
    		return;
    	}
    	event = event || window.event;
        mousePos =
        {
            x: event.clientX,
            y: event.clientY
        };

        var mousePosX = getRelativeMousePosition(mousePos.x, canvasBoundingRect.left);
        var mousePosY = getRelativeMousePosition(mousePos.y, canvasBoundingRect.top);

        if (checkMouseHover(mousePosX, mousePosY, playPosStart, (playPosCurr + (charWidth * 4)), playYPos, playYPos + (charWidth * 3)))
        {
            //console.log("Play Hovered");
            playP.glow = glowRed; playP.highlight = highRed;
            playL.glow = glowRed; playL.highlight = highRed;
            playA.glow = glowRed; playA.highlight = highRed;
            playY.glow = glowRed; playY.highlight = highRed;

        }
        else
        {
            playP.glow = glowCyan; playP.highlight = highCyan;
            playL.glow = glowCyan; playL.highlight = highCyan;
            playA.glow = glowCyan; playA.highlight = highCyan;
            playY.glow = glowCyan; playY.highlight = highCyan;
        }

        if (checkMouseHover(mousePosX, mousePosY, instructionsPosStart, instructionsPosCurr + (charWidth * 5), instructionsYPos, instructionsYPos + (charWidth * 3)))
        {
            //console.log("Play Hovered");
            instructionsI1.glow = glowRed; instructionsI1.highlight = highRed;
            instructionsN1.glow = glowRed; instructionsN1.highlight = highRed;
            instructionsS1.glow = glowRed; instructionsS1.highlight = highRed;
            instructionsT1.glow = glowRed; instructionsT1.highlight = highRed;
            instructionsR.glow = glowRed; instructionsR.highlight = highRed;
            instructionsU.glow = glowRed; instructionsU.highlight = highRed;
            instructionsC.glow = glowRed; instructionsC.highlight = highRed;
            instructionsT2.glow = glowRed; instructionsT2.highlight = highRed;
            instructionsI2.glow = glowRed; instructionsI2.highlight = highRed;
            instructionsO.glow = glowRed; instructionsO.highlight = highRed;
            instructionsN2.glow = glowRed; instructionsN2.highlight = highRed;
            instructionsS2.glow = glowRed; instructionsS2.highlight = highRed;

        }
        else
        {
            instructionsI1.glow = glowCyan; instructionsI1.highlight = highCyan;
            instructionsN1.glow = glowCyan; instructionsN1.highlight = highCyan;
            instructionsS1.glow = glowCyan; instructionsS1.highlight = highCyan;
            instructionsT1.glow = glowCyan; instructionsT1.highlight = highCyan;
            instructionsR.glow = glowCyan; instructionsR.highlight = highCyan;
            instructionsU.glow = glowCyan; instructionsU.highlight = highCyan;
            instructionsC.glow = glowCyan; instructionsC.highlight = highCyan;
            instructionsT2.glow = glowCyan; instructionsT2.highlight = highCyan;
            instructionsI2.glow = glowCyan; instructionsI2.highlight = highCyan;
            instructionsO.glow = glowCyan; instructionsO.highlight = highCyan;
            instructionsN2.glow = glowCyan; instructionsN2.highlight = highCyan;
            instructionsS2.glow = glowCyan; instructionsS2.highlight = highCyan;
        }

        if (checkMouseHover(mousePosX, mousePosY, hiscorePosStart, hiscorePosCurr + (charWidth * 5), hiscoreYPos, hiscoreYPos + (charWidth * 5)))
        {
            //console.log("Hi-Scores Hovered");
            hiScoreH.glow = glowRed; hiScoreH.highlight = highRed;
            hiScoreI.glow = glowRed; hiScoreI.highlight = highRed;
            hiScoreDash.glow = glowRed; hiScoreDash.highlight = highRed;
            hiScoreS.glow = glowRed; hiScoreS.highlight = highRed;
            hiScoreC.glow = glowRed; hiScoreC.highlight = highRed;
            hiScoreO.glow = glowRed; hiScoreO.highlight = highRed;
            hiScoreR.glow = glowRed; hiScoreR.highlight = highRed;
            hiScoreE.glow = glowRed; hiScoreE.highlight = highRed;
            hiScoreS2.glow = glowRed; hiScoreS2.highlight = highRed;
        }
        else
        {
            hiScoreH.glow = glowCyan; hiScoreH.highlight = highCyan;
            hiScoreI.glow = glowCyan; hiScoreI.highlight = highCyan;
            hiScoreDash.glow = glowCyan; hiScoreDash.highlight = highCyan;
            hiScoreS.glow = glowCyan; hiScoreS.highlight = highCyan;
            hiScoreC.glow = glowCyan; hiScoreC.highlight = highCyan;
            hiScoreO.glow = glowCyan; hiScoreO.highlight = highCyan;
            hiScoreR.glow = glowCyan; hiScoreR.highlight = highCyan;
            hiScoreE.glow = glowCyan; hiScoreE.highlight = highCyan;
            hiScoreS2.glow = glowCyan; hiScoreS2.highlight = highCyan;
        }
    }

    function checkMouseHover(mouseX, mouseY, startX, endX, startY, endY)
    {
        return (mouseX >= startX) && (mouseY >= startY) && (mouseX <= endX) && (mouseY <= endY);
    }

    function checkMenuClick(clickX, clickY, startX, endX, startY, endY)
    {
        return (clickX >= startX) && (clickY >= startY) && (clickX <= endX) && (clickY <= endY);
    }

    intervalID = setInterval(function () { gameLoop(); }, FRAME_INTERVAL);
});