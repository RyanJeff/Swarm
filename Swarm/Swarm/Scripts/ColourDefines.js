var glowArray = new Array();
var highArray = new Array();
var lengthGlowArray = 0;
var lengthHighArray = 0;

var glowWhite01 = Object.create(ColourClass);
glowWhite01.init(40, 40, 40, 0);
var highWhite01 = Object.create(ColourClass);
highWhite01.init(57, 57, 57, 0);

var glowWhite02 = Object.create(ColourClass);
glowWhite02.init(80, 80, 80, 1);
var highWhite02 = Object.create(ColourClass);
highWhite02.init(114, 114, 114, 1);

var glowWhite03 = Object.create(ColourClass);
glowWhite03.init(120, 120, 120, 2);
var highWhite03 = Object.create(ColourClass);
highWhite03.init(170, 170, 170, 2);

var glowWhite04 = Object.create(ColourClass);
glowWhite04.init(160, 160, 160, 3);
var highWhite04 = Object.create(ColourClass);
highWhite04.init(227, 227, 227, 3);

var glowRed = Object.create(ColourClass);
glowRed.init(255, 245, 245, 4);
var highRed = Object.create(ColourClass);
highRed.init(255, 127, 127, 4);

var glowOrange = Object.create(ColourClass);
glowOrange.init(255, 240, 224, 5);
var highOrange = Object.create(ColourClass);
highOrange.init(255, 159, 64, 5);

var glowYellow = Object.create(ColourClass);
glowYellow.init(255, 255, 245, 6);
var highYellow = Object.create(ColourClass);
highYellow.init(255, 255, 127, 6);

var glowGreen = Object.create(ColourClass);
glowGreen.init(245, 255, 245, 7);
var highGreen = Object.create(ColourClass);
highGreen.init(127, 255, 127, 7);

var glowBlue = Object.create(ColourClass);
glowBlue.init(245, 245, 255, 8);
var highBlue = Object.create(ColourClass);
highBlue.init(127, 127, 255, 8);

var glowPurple = Object.create(ColourClass);
glowPurple.init(255, 245, 255, 9);
var highPurple = Object.create(ColourClass);
highPurple.init(255, 127, 255, 9);

var glowCyan = Object.create(ColourClass);
glowCyan.init(245, 255, 255, 10);
var highCyan = Object.create(ColourClass);
highCyan.init(127, 255, 255, 10);

/*var glowRand = Object.create(ColourClass);
glowRand.init((Math.floor(Math.random() * 256)), (Math.floor(Math.random() * 256)), (Math.floor(Math.random() * 256)), 11);
var highRand = Object.create(ColourClass);
highRand.init((Math.floor(Math.random() * 256)), (Math.floor(Math.random() * 256)), (Math.floor(Math.random() * 256)), 11);*/

//Pushing glows and highlights into arrays
glowArray.push(glowWhite01); highArray.push(highWhite01);
glowArray.push(glowWhite02); highArray.push(highWhite02);
glowArray.push(glowWhite03); highArray.push(highWhite03);
glowArray.push(glowWhite04); highArray.push(highWhite04);
glowArray.push(glowRed); highArray.push(highRed);
glowArray.push(glowOrange); highArray.push(highOrange);
glowArray.push(glowYellow); highArray.push(highYellow);
glowArray.push(glowGreen); highArray.push(highGreen);
glowArray.push(glowBlue); highArray.push(highBlue);
glowArray.push(glowPurple); highArray.push(highPurple);
glowArray.push(glowCyan); highArray.push(highCyan);