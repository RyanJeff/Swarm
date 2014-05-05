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

var intervalID;

var NUM_LAYERED_GLOW_LINES = 3;
var FRAME_INTERVAL = 33;			// Time in milliseconds between each displayed frame

var strokesNum = 0;

