// Used for the calculation of delta time
var timeNow;
var timeThen;
var timeDelta;

var canvas;
var canvasBack;
var ctx;
var ctxBack;
var canvasWidth, canvasHeight;
var canvasBackWidth, canvasBackHeight;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

canvasWidth = windowHeight * 0.5625;
canvasHeight = windowHeight;

var intervalID;

var NUM_LAYERED_GLOW_LINES = 3;
var FRAME_INTERVAL = 33;			// Time in milliseconds between each displayed frame
var STARTING_LIVES = 3;

var strokesNum = 0;

var currentScore = 0;
var currentLives = STARTING_LIVES;
var finalScore = 0;