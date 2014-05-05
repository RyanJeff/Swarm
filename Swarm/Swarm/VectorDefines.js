var alienOneF01 = [[-1, -1], [0, 4], [2, 4], [2, 2], [8, 2], [8, 0], [16, 0], [16, 2], [22, 2], [22, 4],
				[24, 4], [24, 10], [18, 10], [18, 12], [20, 12], [20, 14], [24, 14], [24, 16], [20, 16],
				[20, 14], [16, 14], [16, 12], [14, 12], [14, 14], [10, 14], [10, 12], [8, 12], [8, 14],
				[4, 14], [4, 16], [0, 16], [0, 14], [4, 14], [4, 12], [6, 12], [6, 10], [0, 10], [0, 4],
				[-1, -1], [6, 6], [10, 6], [10, 8], [6, 8], [6, 6],
				[-1, -1], [14, 6], [18, 6], [18, 8], [14, 8], [14, 6],
				[-1, -1], [10, 12], [10, 10], [14, 10], [14, 12]];

var alienOneF02 = [[-1, -1], [0, 4], [2, 4], [2, 2], [8, 2], [8, 0], [16, 0], [16, 2], [22, 2], [22, 4],
				[24, 4], [24, 10], [20, 10], [20, 12], [22, 12], [22, 14], [20, 14], [20, 16], [16, 16],
				[16, 14], [18, 14], [18, 12], [14, 12], [14, 14], [10, 14], [10, 12], [6, 12], [6, 14],
				[8, 14], [8, 16], [4, 16], [4, 14], [2, 14], [2, 12], [4, 12], [4, 10], [0, 10], [0, 4],
				[-1, -1], [6, 6], [10, 6], [10, 8], [6, 8], [6, 6],
				[-1, -1], [14, 6], [18, 6], [18, 8], [14, 8], [14, 6],
				[-1, -1], [10, 12], [10, 10], [14, 10], [14, 12]];

var alienTwoF01 = [[-1, -1], [0, 6], [2, 6], [2, 4], [4, 4], [4, 2], [6, 2], [6, 0], [10, 0], [10, 2], [12, 2],
				[12, 4], [14, 4], [14, 6], [16, 6], [16, 10], [0, 10], [0, 6],
				// Left eye
				[-1, -1], [4, 6], [6, 6], [6, 8], [4, 8], [4, 6],
				// Right eye
				[-1, -1], [10, 6], [12, 6], [12, 8], [10, 8], [10, 6],
				// Left foot
				[-1, -1], [2, 10], [2, 12], [0, 12], [0, 14], [2, 14], [2, 16], [4, 16], [4, 14], [2, 14], [2, 12],
				[4, 12], [4, 10], [2, 10],
				// Mouth
				[-1, -1], [6, 10], [6, 12], [10, 12], [10, 10], [6, 10],
				// Right foot
				[-1, -1], [12, 10], [12, 12], [14, 12], [14, 14], [12, 14], [12, 16], [14, 16], [14, 14], [16, 14],
				[16, 12], [14, 12], [14, 10], [12, 10],
				// Need left and right toe placeholders.. 
				[-1, -1], [4, 14], [4, 14], [4, 14], [4, 14], [4, 14],
				[-1, -1], [12, 14], [12, 14], [12, 14], [12, 14], [12, 14]];

var alienTwoF02 = [[-1, -1], [0, 6], [2, 6], [2, 4], [4, 4], [4, 2], [6, 2], [6, 0], [10, 0], [10, 2], [12, 2],
				[12, 4], [14, 4], [14, 6], [16, 6], [16, 10], [0, 10], [0, 6],
				// Left eye
				[-1, -1], [4, 6], [6, 6], [6, 8], [4, 8], [4, 6],
				// Right eye
				[-1, -1], [10, 6], [12, 6], [12, 8], [10, 8], [10, 6],
				// Left foot
				[-1, -1], [4, 10], [4, 12], [2, 12], [2, 14], [0, 14], [0, 16], [2, 16], [2, 14], [4, 14], [4, 12],
				[6, 12], [6, 10], [4, 10],
				// Mouth
				[-1, -1], [6, 12], [6, 14], [10, 14], [10, 12], [6, 12],
				// Right foot
				[-1, -1], [10, 10], [10, 12], [12, 12], [12, 14], [14, 14], [14, 16], [16, 16], [16, 14], [14, 14],
				[14, 12], [12, 12], [12, 10], [10, 10],
				// Left and right toes
				[-1, -1], [4, 14], [4, 16], [6, 16], [6, 14], [4, 14],
				[-1, -1], [10, 14], [10, 16], [12, 16], [12, 14], [10, 14]];

var alienThreeF01 = [[-1, -1], [4, 0], [6, 0], [6, 2], [8, 2], [8, 4], [14, 4], [14, 2], [16, 2], [16, 0], [18, 0],
					[18, 2], [16, 2], [16, 4], [18, 4], [18, 6], [20, 6], [20, 8], [22, 8], [22, 14], [20, 14],
					[20, 10], [18, 10], [18, 14], [16, 14], [16, 16], [12, 16], [12, 14], [16, 14], [16, 12], [6, 12],
					[6, 14], [10, 14], [10, 16], [6, 16], [6, 14], [4, 14], [4, 10], [2, 10], [2, 14], [0, 14],
					[0, 8], [2, 8], [2, 6], [4, 6], [4, 4], [6, 4], [6, 2], [4, 2], [4, 0],
					[-1, -1], [6, 6], [8, 6], [8, 8], [6, 8], [6, 6],
					[-1, -1], [14, 6], [16, 6], [16, 8], [14, 8], [14, 6]];

var alienThreeF02 = [[-1, -1], [4, 0], [6, 0], [6, 2], [8, 2], [8, 4], [14, 4], [14, 2], [16, 2], [16, 0], [18, 0],
					[18, 2], [16, 2], [16, 4], [18, 4], [18, 6], [20, 6], [20, 2], [22, 2], [22, 10], [20, 10],
					[20, 12], [18, 12], [18, 14], [20, 14], [20, 16], [18, 16], [18, 14], [16, 14], [16, 12], [6, 12],
					[6, 14], [4, 14], [4, 16], [2, 16], [2, 14], [4, 14], [4, 12], [2, 12], [2, 10], [0, 10], [0, 2],
					[2, 2], [2, 6], [4, 6], [4, 4], [6, 4], [6, 2], [4, 2], [4, 0],
					[-1, -1], [7, 6], [6, 7], [7, 8], [8, 7], [7, 6],
					[-1, -1], [15, 6], [14, 7], [15, 8], [16, 7], [15, 6],
];

var testMF01 = [
				// Mouth
				[-1, -1], [6, 10], [6, 12], [10, 12], [10, 10], [6, 10]];

var testMF02 = [
				// Mouth
				[-1, -1], [6, 12], [6, 14], [10, 14], [10, 12], [6, 12]];

var shipF01 = [
				// Ship:
				[-1, -1], [14, 22], [15, 22], [15, 17], [14, 17], [14, 15], [13, 15], [13, 11], [12, 11], [12, 10],
				[11, 10], [11, 7], [12, 7], [12, 5], [11, 5], [11, 3], [10, 3], [10, 2], [9, 2], [9, 0], [8, 0],
				[8, 8], [7, 8], [7, 0], [6, 0], [6, 1], [6, 2], [5, 2], [5, 3], [4, 3], [4, 5], [3, 5], [3, 7],
				[4, 7], [4, 10], [3, 10], [3, 11], [2, 11], [2, 15], [1, 15], [1, 17], [0, 17], [0, 22], [2, 22],
				[2, 21], [3, 21], [3, 20], [4, 20], [4, 19], [5, 19], [5, 22], [7, 22], [7, 18], [8, 18], [8, 22],
				[10, 22], [10, 19], [11, 19], [11, 20], [12, 20], [12, 21], [13, 21], [13, 22], [14, 22],
				[-1, -1], [4, 10], [5, 10], [5, 12], [4, 12], [4, 14], [3, 14], [3, 16], [2, 16], [2, 15],
				[-1, -1], [11, 10], [10, 10], [10, 12], [11, 12], [11, 14], [12, 14], [12, 16], [13, 16], [13, 15],
				[-1, -1], [7, 13],
				[-1, -1], [5, 19], [5, 13], [7, 13], [7, 18],
				[-1, -1], [8, 18], [8, 13], [10, 13], [10, 19],
				// Thrusters:
				//[-1, -1], [5, 22], [5, 24], [6, 24], [6, 25], [7, 25], [7, 22],
				//[-1, -1], [8, 22], [8, 25], [9, 25], [9, 24], [10, 24], [10, 22]
];

var centipede01 = [[-1, -1], [49, 13], [48, 14], [47, 14], [46, 13], [45, 13], [44, 14],
				[43, 14], [42, 13], [41, 13], [40, 14], [39, 14], [38, 13], [37, 13],
				[36, 12], [37, 12], [38, 12], [39, 13], [40, 13], [41, 12], [42, 12],
				[43, 13], [44, 13], [45, 12], [46, 12], [47, 13], [48, 13], [49, 13],

				[-1, -1], [47, 12], [47, 13],
				[-1, -1], [45, 13], [45, 14],
				[-1, -1], [43, 13], [43, 12],
				[-1, -1], [41, 13], [41, 14],
				[-1, -1], [39, 13], [39, 13]];

var centipede02 = [[-1, -1], [48, 16], [49, 16], [48, 15], [47, 15], [46, 16],
				[45, 16], [44, 15], [43, 15], [42, 16], [41, 16], [40, 15], [39, 15],
				[38, 16], [37, 16], [36, 17], [37, 17], [38, 17], [39, 16], [40, 16],
				[41, 17], [42, 17], [43, 16], [44, 16], [45, 17], [46, 17], [47, 16],
				[48, 16],
				[-1, -1], [47, 16], [47, 17],
				[-1, -1], [45, 16], [45, 15],
				[-1, -1], [43, 16], [43, 17],
				[-1, -1], [41, 16], [41, 15],
				[-1, -1], [39, 16], [39, 17]];

var fly = [[-1, -1], [17, 15], [-1, -1], [12, 10], [-1, -1], [20, 15], [21, 15], [22, 14],
[21, 13], [20, 13], [19, 14], [20, 15], [-1, -1], [21, 13], [22, 12], [23, 11],
[23, 10], [22, 10], [21, 11], [21, 13], [-1, -1], [20, 13], [20, 11], [19, 10],
[18, 10], [18, 11], [20, 13], [-1, -1], [20, 11], [20, 10], [21, 10], [21, 11],
[-1, -1], [21, 13], [22, 13], [-1, -1], [20, 13], [19, 13], [-1, -1], [21, 10],
[22, 9], [-1, -1], [20, 10], [19, 9], [-1, -1], [24, 14], [-1, -1], [24, 10], [-1, -1],
[26, 10], [26, 13], [25, 14], [26, 15], [27, 15], [28, 14], [27, 13], [27, 10],
[26, 10], [-1, -1], [26, 13], [27, 13], [-1, -1], [27, 11], [-1, -1], [27, 11],
[29, 13], [29, 14], [28, 14], [27, 13], [27, 11], [-1, -1], [26, 11], [24, 13],
[24, 14], [25, 14], [-1, -1], [27, 10], [28, 9], [-1, -1], [26, 10], [25, 9], [-1, -1],
[27, 10], [-1, -1], [27, 11], [28, 11], [-1, -1], [26, 11], [25, 11]];

var beetle = [[-1, -1], [25, 7], [21, 7], [21, 8], [20, 8], [20, 9], [19, 9], [19, 11], [20, 11], [20, 12],
[21, 12], [21, 13], [25, 13], [25, 12], [26, 12], [26, 11], [27, 11], [27, 9], [26, 9], [26, 8],
[25, 8], [25, 7], [-1, -1], [21, 12], [25, 12], [23, 12], [-1, -1], [23, 12], [23, 5], [-1, -1],
[25, 7], [-1, -1], [24, 7], [24, 6], [23, 5], [22, 6], [22, 7], [-1, -1], [22, 13], [22, 14], [24, 14],
[24, 13], [-1, -1], [24, 14], [-1, -1], [24, 11], [25, 11], [25, 10], [24, 10], [24, 11], [-1, -1],
[22, 10], [22, 9], [21, 9], [21, 10], [22, 10], [-1, -1], [37, 17], [39, 17], [39, 16], [37, 16],
[37, 17], [-1, -1], [36, 15], [36, 16], [40, 16], [40, 15], [36, 15], [-1, -1], [35, 15], [41, 15],
[42, 14], [42, 13], [43, 12], [43, 10], [42, 9], [41, 9], [40, 8], [42, 6], [42, 7], [41, 8], [41, 9],
[-1, -1], [38, 15], [39, 14], [39, 13], [40, 12], [40, 11], [40, 8], [-1, -1], [37, 14], [37, 13],
[36, 12], [36, 8], [35, 9], [34, 9], [33, 10], [33, 12], [34, 13], [34, 14], [35, 15], [-1, -1],
[37, 14], [38, 15], [-1, -1], [36, 8], [34, 6], [34, 7], [35, 8], [35, 9], [-1, -1], [36, 11], [37, 10],
[38, 9], [39, 10], [40, 11], [-1, -1], [37, 12], [38, 11], [39, 12], [37, 12], [-1, -1], [40, 14],
[41, 13], [40, 13], [40, 14], [-1, -1], [35, 13], [35, 12], [34, 12], [35, 13]];

var playerBullet = [[-1, -1], [1, 0], [1, 2], [0, 2], [0, 4], [1, 4], [1, 8], [2, 8], [2, 4], [3, 4],
					[3, 2], [2, 2], [2, 0], [1, 0],
					[-1, -1], [1, 3], [1, 4], [2, 4], [2, 3], [1, 3]];

var enemyBomb01 = [[-1, -1], [0, 0], [0, 1], [1, 1], [1, 2], [0, 2], [0, 4], [1, 4], [1, 5], [2, 5], [2, 4], [3, 4], [3, 2], [2, 2], [2, 1], [3, 1], [3, 0], [0, 0]];

var enemyBomb02 = [[-1, -1], [1, 0], [1, 1], [1, 1], [1, 2], [0, 2], [0, 4], [1, 4], [1, 5], [2, 5], [2, 4], [3, 4], [3, 2], [2, 2], [2, 1], [2, 1], [2, 0], [1, 0]];
//	var enemyBomb02 = [[-1, -1], [1, 0], [1, 1], [1, 1], [1, 2], [0, 2], [0, 5], [1, 5], [1, 6], [2, 6], [2, 5], [3, 5], [3, 2], [2, 2], [2, 1], [2, 1], [2, 0], [1, 0]];

var starVector = [
					[-1, -1], [0, 0], [1, 1], [0, 0], [-1, -1], [1, 0], [0, 1], [1, 0]];

var LetterV01 = [
					[-1, -1], [0, 12], [0, 12], [0, 18], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12]];

var LetterV02 = [
					[-1, -1], [0, 12], [2, 12], [4, 18], [6, 12], [8, 12], [5, 20], [3, 20], [0, 12]];
var LetterE01 = [
					[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 15], [0, 15], [0, 17],
					[0, 17], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12]];
var LetterE02 = [
					[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 15], [6, 15], [6, 17],
					[2, 17], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12]];
var LetterC01 = [
					[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12]];
var LetterC02 = [
					[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12]];
var LetterT01 = [
					[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 20], [0, 20], [0, 14], [0, 14], [0, 12]];
var LetterT02 = [
					[-1, -1], [0, 12], [8, 12], [8, 14], [5, 14], [5, 20], [3, 20], [3, 14], [0, 14], [0, 12]];
var LetterO01 = [
					[-1, -1], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12],
					[-1, -1], [0, 14], [0, 14], [0, 18], [0, 18], [0, 14]];
var LetterO02 = [
					[-1, -1], [0, 12], [8, 12], [8, 20], [0, 20], [0, 12],
					[-1, -1], [2, 14], [6, 14], [6, 18], [2, 18], [2, 14]];
var LetterR01 = [
					[-1, -1], [0, 12], [0, 12], [0, 17], [0, 17], [0, 20], [0, 20], [0, 17], [0, 17], [0, 20], [0, 20], [0, 12],
					[-1, -1], [0, 14], [0, 14], [0, 15], [0, 15], [0, 14]];
var LetterR02 = [
					[-1, -1], [0, 12], [8, 12], [8, 17], [6, 17], [8, 20], [6, 20], [4, 17], [2, 17], [2, 20], [0, 20], [0, 12],
					[-1, -1], [2, 14], [6, 14], [6, 15], [2, 15], [2, 14]];

/*var LetterS02 = [
					[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 15], [8, 15], [8, 19], [0, 19], [0, 17], [6, 17], [6, 16], [0, 16], [0, 12] ] ;*/
var LetterS02 = [
					[-1, -1], [0, 0], [8, 0], [8, 2], [2, 2], [2, 4], [8, 4], [8, 8], [0, 8], [0, 6], [6, 6], [6, 5], [0, 5], [0, 0]];
