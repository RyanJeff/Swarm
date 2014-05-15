$(document).ready(function ()
{
    canvas = document.getElementById("gameScreen");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("click", onClick, false);

    canvas.style.left = ((windowWidth * 0.5) - (canvasWidth * 0.5)) + "px";
    canvas.style.backgroundColor = "rgb(0,0,0)";
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    var currState = States.GAME;

    var timer = 0;
    var previousTime = Date.now();

    function gameLoop()
    {
        drawStars();
        //startGame();
        var deltaTime = (Date.now() - previousTime) / 1000;
        previousTime = Date.now();
        timer += deltaTime;

       /* if (timer > 1)
        {
            timer = -999999; //test hack
            startRender();
        }*/

        //check for end game
       /* if (currState.state != undefined && currState.state == States.GAME_OVER)
        {
            timer = 0;
            currState = Object.create(MainMenuState);
        }*/

        switch(currState)
        {
            case States.MAIN_MENU:
                //Draw the main menu
                //console.log("Main Menu");
                var MainMenu = Object.create(MainMenuStateClass);
                MainMenu.update(deltaTime, ctx);

               // var currState = Object.create(MainMenuStateClass);
                //currState.update(deltaTime);
            break;
			
            case States.GAME:
                //Draw the game objects
                console.log("Start Game Pressed");
                startGame();
            break;
			
            /*case States.END_GAME:
                //End the game, send to Hi-Scores screen
                console.log("Game over");
            break;*/
        }
    }

    function onClick(ev)
    {
        var clickX = ev.clientX;
        var clickY = ev.clientY;
        console.log("Click:", clickX, clickY);
    }
    intervalID = setInterval(function () { gameLoop(); }, FRAME_INTERVAL);
});