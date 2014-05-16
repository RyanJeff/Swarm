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
				[-1, -1], [16, 22], [16, 17], [15, 17], [15, 15], [14, 15], [14, 11], [13, 11], [13, 10],
				[12, 10], [12, 7], [13, 7], [13, 5], [12, 5], [12, 3], [11, 3], [11, 2], [10, 2], [10, 0], [9, 0],
				[9, 8], [8, 8], [8, 0], [7, 0], [7, 2], [6, 2], [6, 3], [5, 3], [5, 5], [4, 5], [4, 7],
				[5, 7], [5, 10], [4, 10], [4, 11], [3, 11], [3, 15], [2, 15], [2, 17], [1, 17], [1, 22], [3, 22],
				[3, 21], [4, 21], [4, 20], [5, 20], [5, 19], [6, 19], [6, 22], [8, 22], [8, 18], [9, 18], [9, 22],
				[11, 22], [11, 19], [12, 19], [12, 20], [13, 20], [13, 21], [14, 21], [14, 22], [16, 22],
				[-1, -1], [5, 10], [6, 10], [6, 12], [5, 12], [5, 14], [4, 14], [4, 16], [3, 16], [3, 15],
				[3, 11], [4, 11], [4, 10], [5, 10],
				[-1, -1], [12, 10], [11, 10], [11, 12], [12, 12], [12, 14], [13, 14], [13, 16], [14, 16], [14, 15],
				[14, 11], [13, 11], [13, 10], [12, 10],
				[-1, -1], [6, 19], [6, 13], [8, 13], [8, 18],
				[-1, -1], [9, 18], [9, 13], [11, 13], [11, 19],
				// Thrusters:
				[-1, -1], [6, 22], [6, 24], [7, 24], [7, 25], [8, 25], [8, 22],
				[-1, -1], [9, 22], [9, 25], [10, 25], [10, 24], [11, 24], [11, 22]
];

var shipF02 = [
				// Ship:
				[-1, -1], [16, 22], [16, 17], [15, 17], [15, 15], [14, 15], [14, 11], [13, 11], [13, 10],
				[12, 10], [12, 7], [13, 7], [13, 5], [12, 5], [12, 3], [11, 3], [11, 2], [10, 2], [10, 0], [9, 0],
				[9, 8], [8, 8], [8, 0], [7, 0], [7, 2], [6, 2], [6, 3], [5, 3], [5, 5], [4, 5], [4, 7],
				[5, 7], [5, 10], [4, 10], [4, 11], [3, 11], [3, 15], [2, 15], [2, 17], [1, 17], [1, 22], [3, 22],
				[3, 21], [4, 21], [4, 20], [5, 20], [5, 19], [6, 19], [6, 22], [8, 22], [8, 18], [9, 18], [9, 22],
				[11, 22], [11, 19], [12, 19], [12, 20], [13, 20], [13, 21], [14, 21], [14, 22], [16, 22],
				[-1, -1], [1, 10], [0, 10], [0, 12], [1, 12], [1, 14], [2, 14], [2, 16], [3, 16], [3, 15],
				[3, 11], [2, 11], [2, 10], [1, 10],
				[-1, -1], [16, 10], [17, 10], [17, 12], [16, 12], [16, 14], [15, 14], [15, 16], [14, 16], [14, 15],
				[14, 11], [15, 11], [15, 10], [16, 10],
				[-1, -1], [6, 19], [6, 13], [8, 13], [8, 18],
				[-1, -1], [9, 18], [9, 13], [11, 13], [11, 19],
				// Thrusters:
				[-1, -1], [6, 22], [6, 24], [7, 24], [7, 25], [8, 25], [8, 22],
				[-1, -1], [9, 22], [9, 25], [10, 25], [10, 24], [11, 24], [11, 22]
];

var BumbleBee01 = [
				[-1, -1], [0, 0], [0, 2], [2, 2], [2, 0], [0, 0], [2, 2], [2, 5], [3, 5], [3, 6], [4, 6], [4, 7], [5, 8], [5, 7], 
				[5, 6], [6, 6], [6, 5], [7, 5], [7, 2], [6, 2], [6, 1], [3, 1], [3, 2], [2, 2], 
				[-1, -1], [7, 2], [9, 0], [7, 0], [7, 2], [9, 2], [9, 0],
				[-1, -1], [6, 2], [6, 3], [5, 3], [5, 4], [4, 4], [4, 3], [3, 3], [3, 2], 
				[-1, -1], [4, 7], [5, 7], 
				[-1, -1], [4, 6], [5, 6], 
				[-1, -1], [3, 5], [6, 5],  
				[-1, -1], [2, 3], [4, 5], [5, 5], [7, 3],
				[-1, -1], [4, 1], [4, 2], [3, 3],
				[-1, -1], [5, 1], [5, 2], [6, 3]];

var BumbleBee02 = [
				[-1, -1], [0, 0], [0, 2], [2, 2], [2, 0], [0, 0], [2, 2], [2, 5], [3, 5], [3, 6], [4, 6], [4, 7], [4, 8], [5, 7], 
				[5, 6], [6, 6], [6, 5], [7, 5], [7, 2], [6, 2], [6, 1], [3, 1], [3, 2], [2, 2], 
				[-1, -1], [7, 2], [9, 0], [7, 0], [7, 2], [9, 2], [9, 0],
				[-1, -1], [6, 2], [6, 3], [5, 3], [5, 4], [4, 4], [4, 3], [3, 3], [3, 2], 
				[-1, -1], [4, 7], [5, 7], 
				[-1, -1], [4, 6], [5, 6], 
				[-1, -1], [3, 5], [6, 5], 
				[-1, -1], [2, 3], [4, 5], [5, 5], [7, 3],
				[-1, -1], [4, 1], [4, 2], [3, 3],
				[-1, -1], [5, 1], [5, 2], [6, 3]];

var centipedeHead01 = [
					  [-1, -1], [0, 1], [2, 0], [3, 0], [3, 1], [7, 0], [8, 0], [9, 1], [9, 2], [7, 1], 
					  [6, 1], [4, 2], [3, 3], [4, 4], [6, 5], [7, 5], [9, 4], [9, 5], [8, 6], [7, 6], 
					  [3, 5], [3, 6], [2, 6], [0, 5], [0, 1],
					  [-1, -1], [4, 2], [3, 1], [2, 1], [1, 2], [2, 3], [1, 4], [2, 5], [3, 5], [4, 4],
					  [-1, -1], [2, 3], [3, 3],
					  [-1, -1], [4, 2], [5, 2], [4, 3], [5, 4], [4, 4]];

var centipedeHead02 = [
					  [-1, -1], [0, 1], [2, 0], [3, 0], [3, 1], [7, 1], [8, 1], [9, 2], [9, 3], [7, 2], 
					  [6, 2], [4, 2], [3, 3], [4, 4], [6, 4], [7, 4], [9, 3], [9, 4], [8, 5], [7, 5], 
					  [3, 5], [3, 6], [2, 6], [0, 5], [0, 1],
					  [-1, -1], [4, 2], [3, 1], [2, 1], [1, 2], [2, 3], [1, 4], [2, 5], [3, 5], [4, 4],
					  [-1, -1], [2, 3], [3, 3],
					  [-1, -1], [4, 2], [5, 3], [3, 3], [5, 3], [4, 4]];
					  
var centipedeBody01 = [
					  [-1, -1], [0, 1], [1, 2], [5, 2], [5, 1], [6, 1], [6, 5], [5, 5], [5, 4], [1, 4], [0, 5], [0, 1],
					  [-1, -1], [1, 2], [1, 0], [2, 2], [2, 0], [3, 2], [4, 0], [4, 2], [5, 0], [5, 2],
					  [-1, -1], [1, 4], [1, 6], [2, 4], [2, 6], [3, 4], [4, 6], [4, 4], [5, 6], [5, 4]];

var centipedeBody02 = [
					  [-1, -1], [0, 1], [1, 2], [5, 2], [5, 1], [6, 1], [6, 5], [5, 5], [5, 4], [1, 4], [0, 5], [0, 1],
					  [-1, -1], [1, 2], [2, 0], [2, 2], [3, 0], [3, 2], [3, 0], [4, 2], [4, 0], [5, 2],
					  [-1, -1], [1, 4], [2, 6], [2, 4], [3, 6], [3, 4], [3, 6], [4, 4], [4, 6], [5, 4]];
					  
var centipedeTail01 = [
					  [-1, -1], [0, 2], [1, 2], [2, 1], [3, 2], [7, 0], [8, 1], [9, 1], [9, 5], 
					  [8, 5], [7, 6], [3, 4], [2, 5], [1, 4], [0, 4], [1, 3], [0, 2],
					  [-1, -1], [2, 2], [7, 4], [7, 2], [2, 4], [2, 2],
					  [-1, -1], [8, 2], [9, 3], [8, 4], [8, 2]];

var centipedeTail02 = [
					  [-1, -1], [0, 3], [1, 2], [2, 1], [3, 2], [7, 0], [8, 1], [9, 1], [9, 5], 
					  [8, 5], [7, 6], [3, 4], [2, 5], [1, 4], [0, 3], [1, 3], [0, 3],
					  [-1, -1], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3],
					  [-1, -1], [8, 2], [9, 3], [8, 4], [8, 2]];

var fly01 = [
			[-1, -1], [1, 0], [2, 1], [2, 4], [1, 5], [2, 6], [3, 6], [4, 5], [3, 4], [3, 1], [2, 1], 
			[-1, -1], [3, 1], [4, 0], 
			[-1, -1], [3, 4], [5, 2], [5, 1], [4, 1], [3, 2], 
			[-1, -1], [2, 4], [0, 2], [0, 1], [1, 1], [2, 2],  
			[-1, -1], [3, 4], [4, 4], 
			[-1, -1], [2, 4], [1, 4],
			[-1, -1], [1, 5], [2, 5], [2, 6],
			[-1, -1], [4, 5], [3, 5], [3, 6]];

var fly02 = [
			[-1, -1], [1, 1], [2, 1], [2, 4], [1, 5], [2, 6], [3, 6], [4, 5], [3, 4], [3, 1], [2, 1], 
			[-1, -1], [3, 1], [4, 1], 
			[-1, -1], [3, 4], [4, 5], [5, 5], [5, 4], [3, 2], 
			[-1, -1], [2, 4], [1, 5], [0, 5], [0, 4], [2, 2], 
			[-1, -1], [3, 4], [3, 4], 
			[-1, -1], [2, 4], [2, 4],
			[-1, -1], [1, 5], [2, 5], [2, 6],
			[-1, -1], [4, 5], [3, 5], [3, 6]];

var Beetle01 = [
				//Open Wings
				[-1, -1], [3, 0], [2, 1], [2, 2], [0, 4], [0, 6], [2, 8], [3, 8], [4, 9], [10, 9], [11, 8], [12, 8], [14, 6], [14, 4],
				[12, 2], [12, 1], [11, 0], [11, 1], [10, 2], [10, 4], [9, 5], [9, 6], [8, 7], [7, 9], [6, 7], [5, 6], [5, 5], [4, 4], 
				[4, 2], [3, 1], [3, 0], 
				[-1, -1], [5, 5], [5, 4], [6, 3], [7, 1], [8, 3], [9, 4], [9, 5], 
				[-1, -1], [5, 9], [5, 10], [6, 11], [6, 10], [5, 9], [9, 9], [9, 10], [8, 11], [6, 11],  
				[-1, -1], [8, 11], [8, 10], [9, 9], 
				[-1, -1], [9, 7], [11, 7], [12, 6], [12, 6], [12, 4], [9, 7], 
				[-1, -1], [5, 7], [3, 7], [2, 6], [2, 6], [2, 4], [5, 7],
				[-1, -1], [6, 11], [7, 12], [7, 11], [7, 12], [8, 11]];
				
 var Beetle02 = [
				//Closed Wings 
				[-1, -1], [6, 1], [5, 2], [5, 3], [3, 5], [3, 7], [5, 9], [5, 9], [5, 9], [9, 9], [9, 9], [9, 9], [11, 7], [11, 5], 
				[9, 3], [9, 2], [8, 1], [8, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 9], [7, 7], [7, 6], [7, 5], [7, 4], 
				[7, 3], [6, 2], [6, 1],
				[-1, -1], [7, 5], [7, 4], [7, 3], [7, 3], [7, 3], [7, 4], [7, 5],
				[-1, -1], [5, 9], [5, 10], [6, 11], [6, 10], [5, 9], [9, 9], [9, 10], [8, 11], [6, 11],
				[-1, -1], [8, 11], [8, 10], [9, 9],
				[-1, -1], [8, 8], [9, 8], [10, 7], [10, 6], [8, 4], [8, 8],
				[-1, -1], [6, 8], [5, 8], [4, 7], [4, 6], [6, 4], [6, 8],
				[-1, -1], [6, 11], [6, 12], [7, 11], [8, 12], [8, 11]];

var lifeBar = [
                [-1, -1], [0, 0], [0, 1], [2, 3], [0, 5], [0, 6], [3, 6], [5, 4], [6, 4], [6, 5], [5, 6], [8, 6], [10, 4], [13, 4],
                [15, 6], [18, 6], [20, 4], [23, 4], [25, 6], [28, 6], [30, 4], [33, 4], [35, 6], [38, 6], [40, 4], [41, 4], [41, 5],
                [40, 6], [43, 6], [46, 3], [43, 0], [40, 0], [41, 1], [41, 2], [40, 2], [38, 0], [35, 0], [33, 2], [30, 2], [28, 0],
                [25, 0], [23, 2], [20, 2], [18, 0], [15, 0], [13, 2], [10, 2], [8, 0], [5, 0], [6, 1], [6, 2], [5, 2], [3, 0], [0, 0],
                [-1, -1], [0, 5], [2, 5], [4, 3], [13, 3], [14, 4], [14, 2], [13, 3], [-1, -1], [4, 3], [2, 1], [0, 1], [-1, -1], [7, 6],
                [9, 3], [-1, -1], [7, 0], [9, 3], [-1, -1], [20, 3], [19, 2], [19, 4], [20, 3], [23, 3], [24, 4], [24, 2], [23, 3], [-1, -1],
                [30, 3], [29, 2], [29, 4], [30, 3], [33, 3], [34, 4], [34, 2], [33, 3], [-1, -1], [40, 3], [39, 2], [39, 4], [40, 3],
                [46, 3], [-1, -1], [44, 3], [41, 0], [-1, -1], [41, 6], [44, 3], [-1, -1], [42, 5], [42, 1]];

var playerBullet = [[-1, -1], [1, 0], [1, 2], [0, 2], [0, 4], [1, 4], [1, 8], [2, 8], [2, 4], [3, 4],
					[3, 2], [2, 2], [2, 0], [1, 0],
					[-1, -1], [1, 3], [1, 4], [2, 4], [2, 3], [1, 3]];

var enemyBomb01 = [[-1, -1], [0, 0], [0, 1], [1, 1], [1, 2], [0, 2], [0, 4], [1, 4], [1, 5], [2, 5], [2, 4], [3, 4], [3, 2], [2, 2], [2, 1], [3, 1], [3, 0], [0, 0]];

var enemyBomb02 = [[-1, -1], [1, 0], [1, 1], [1, 1], [1, 2], [0, 2], [0, 4], [1, 4], [1, 5], [2, 5], [2, 4], [3, 4], [3, 2], [2, 2], [2, 1], [2, 1], [2, 0], [1, 0]];
//	var enemyBomb02 = [[-1, -1], [1, 0], [1, 1], [1, 1], [1, 2], [0, 2], [0, 5], [1, 5], [1, 6], [2, 6], [2, 5], [3, 5], [3, 2], [2, 2], [2, 1], [2, 1], [2, 0], [1, 0]];

var starVector = [
					[-1, -1], [0, 0], [1, 1], [0, 0], [-1, -1], [1, 0], [0, 1], [1, 0]];

var LetterA02 = [
                    [-1, -1], [0, 3], [0, 8], [2, 8], [2, 5], [6, 5], [6, 8], [8, 8], [8, 3], [7, 3], [7, 2], [6, 2], [6, 1], [5, 1],
                    [5, 0], [3, 0], [3, 1], [2, 1], [2, 2], [1, 2], [1, 3], [0, 3], [-1, -1], [2, 4], [6, 4], [6, 3], [5, 3], [5, 2],
                    [3, 2], [3, 3], [2, 3], [2, 4], [6, 4]];

var LetterB02 = [
                     [-1, -1], [0, 0], [0, 8], [8, 8], [8, 6], [6, 4], [8, 2], [6, 0], [0, 0], [0, 8],
					 [-1, -1], [2, 5], [2, 7], [5, 7], [6, 6], [5, 5], [2, 5], [2, 7],
					 [-1, -1], [2, 1], [2, 3], [5, 3], [6, 2], [5, 1], [2, 1][2, 3]];

var LetterC01 = [
					[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12], [0, 12]];
var LetterC02 = [
					[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12], [8, 12]];

var LetterD02 = [
                    [-1, -1], [0, 0], [0, 8], [6, 8], [6, 7], [7, 7], [7, 6], [8, 6], [8, 2], [7, 2], [7, 1], [6, 1], [6, 0], [0, 0], [0, 8],
					[-1, -1], [2, 2], [2, 6], [5, 6], [5, 5], [6, 5], [6, 3], [5, 3], [5, 2], [2, 2], [2, 6]];

var LetterE01 = [
					[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 15], [0, 15], [0, 17],
					[0, 17], [0, 18], [0, 18], [0, 20], [0, 20], [0, 12], [0, 12]];
var LetterE02 = [
					[-1, -1], [0, 12], [8, 12], [8, 14], [2, 14], [2, 15], [6, 15], [6, 17],
					[2, 17], [2, 18], [8, 18], [8, 20], [0, 20], [0, 12], [8, 12]];

var LetterF02 = [
                     [-1, -1], [0, 0], [0, 8], [2, 8], [2, 5], [6, 5], [6, 3], [2, 3], [2, 2], [8, 2], [8, 0], [0, 0], [0, 8]];

var LetterG02 = [
                    [-1, -1], [0, 0], [0, 8], [8, 8], [8, 4], [3, 4], [3, 6], [5, 6], [5, 5], [6, 5], [6, 7], [2, 7],
                    [2, 2], [6, 2], [6, 3], [8, 3], [8, 0], [0, 0], [0, 8]];

var LetterH02 = [
                    [-1, -1], [0, 0], [0, 8], [2, 8], [2, 5], [6, 5], [6, 8], [8, 8], [8, 0], [6, 0], [6, 3], [2, 3], [2, 0], [0, 0], [0, 2]];

var LetterI02 = [
                    [-1, -1], [0, 0], [8, 0], [8, 2], [5, 2], [5, 6], [8, 6], [8, 8], [0, 8], [0, 6], [3, 6], [3, 2], [0, 2], [0, 0], [2, 0]];

var LetterJ02 = [
                    [-1, -1], [0, 4], [0, 6], [1, 7], [2, 8], [4, 8], [5, 7], [6, 6], [6, 0], [4, 0], [4, 5], [3, 6], [2, 5], [2, 4], [0, 4]];

var LetterK02 = [
                    [-1, -1], [0, 0], [0, 8], [2, 8], [2, 6], [3, 6], [3, 7], [4, 7], [4, 8],
                    [6, 8], [6, 6], [5, 6], [5, 5], [4, 5], [4, 4], [5, 4], [5, 3], [6, 3],
                    [6, 2], [6, 1], [4, 1], [4, 2], [3, 2], [3, 3], [2, 3], [2, 0], [0, 0], [0, 8]];

var LetterL02 = [
                    [-1, -1], [0, 0], [0, 8], [7, 8], [7, 6], [2, 6], [2, 0], [0, 0], [0, 8]];

var LetterM02 = [
                    [-1, -1], [0, 0], [0, 8], [2, 8], [2, 4], [3, 4], [3, 6], [5, 6], [5, 4], [6, 4], [6, 8], [8, 8], [8, 0], [6, 0],
                    [6, 1], [5, 1], [5, 2], [3, 2], [3, 1], [2, 1], [2, 0], [0, 0], [0, 8]];

var LetterN02 = [
                    [-1, -1], [0, 0], [0, 8], [2, 8], [2, 4], [3, 4], [3, 5], [4, 5], [4, 6],
                    [5, 6], [5, 7], [6, 7], [6, 8], [8, 8], [8, 0], [6, 0], [6, 4], [5, 4],
                    [5, 3], [4, 3], [4, 2], [3, 2], [3, 1], [2, 1], [2, 0], [0, 0]];

var LetterO01 = [
					[-1, -1], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12],
					[-1, -1], [0, 14], [0, 14], [0, 18], [0, 18], [0, 14], [0, 14]];
var LetterO02 = [
					[-1, -1], [0, 12], [8, 12], [8, 20], [0, 20], [0, 12],
					[-1, -1], [2, 14], [6, 14], [6, 18], [2, 18], [2, 14], [3, 14]];

var LetterP02 = [
                    [-1, -1], [0, 0], [0, 8], [2, 8], [2, 6], [3, 6], [3, 5],
                    [4, 5], [4, 4], [5, 4], [5, 2], [4, 2], [4, 1], [3, 1],
                    [3, 0], [0, 0], [0, 1], [-1, -1], [2, 2],
                    [2, 4], [3, 3], [2, 2], [2, 3]];

var LetterQ02 = [
                    [-1, -1], [0, 2], [0, 6], [1, 6], [1, 7], [2, 7], [2, 8],
                    [5, 8], [5, 7], [6, 7], [6, 8], [8, 8], [8, 6], [7, 6],
                    [7, 5], [8, 5], [8, 2], [7, 2], [7, 1], [6, 1], [6, 0],
                    [2, 0], [2, 1], [1, 1], [1, 2], [0, 2], [0, 6], 
					[-1, -1], [3, 6], [5, 6], [5, 5], [6, 5], [6, 3], [5, 3],
                    [5, 2], [3, 2], [3, 3], [2, 3], [2, 5], [3, 5], [3, 6], [5, 6]];

var LetterR01 = [
					[-1, -1], [0, 12], [0, 12], [0, 17], [0, 17], [0, 20], [0, 20], [0, 17], [0, 17], [0, 20], [0, 20], [0, 12], [0, 12],
					[-1, -1], [0, 14], [0, 14], [0, 15], [0, 15], [0, 14], [0, 13]];
var LetterR02 = [
					[-1, -1], [0, 12], [8, 12], [8, 17], [6, 17], [8, 20], [6, 20], [4, 17], [2, 17], [2, 20], [0, 20], [0, 12], [8, 12],
					[-1, -1], [2, 14], [6, 14], [6, 15], [2, 15], [2, 14], [6, 14]];

var LetterS02 = [
					[-1, -1], [0, 0], [8, 0], [8, 2], [2, 2], [2, 4], [8, 4], [8, 8], [0, 8], [0, 6], [6, 6], [6, 5], [0, 5], [0, 0], [8, 0]];

var LetterT01 = [
					[-1, -1], [0, 12], [0, 12], [0, 14], [0, 14], [0, 20], [0, 20], [0, 14], [0, 14], [0, 12], [0, 12]];
var LetterT02 = [
					[-1, -1], [0, 12], [8, 12], [8, 14], [5, 14], [5, 20], [3, 20], [3, 14], [0, 14], [0, 12], [8, 12]];

var LetterU02 = [
                    [-1, -1], [0, 0], [0, 6], [1, 6], [1, 7], [2, 7], [2, 8],
                    [6, 8], [6, 7], [7, 7], [7, 6], [8, 6], [8, 0], [6, 0],
                    [6, 5], [5, 5], [5, 6], [3, 6], [3, 5], [2, 5], [2, 0],
                    [0, 0], [0, 6]];

var LetterV01 = [
					[-1, -1], [0, 12], [0, 12], [0, 18], [0, 12], [0, 12], [0, 20], [0, 20], [0, 12], [0, 12]];

var LetterV02 = [
					[-1, -1], [0, 12], [2, 12], [4, 18], [6, 12], [8, 12], [5, 20], [3, 20], [0, 12], [2, 12]];

var LetterW02 = [
                    [-1, -1], [0, 0], [0, 8], [8, 8], [8, 0], [6, 0], [6, 6], [5, 6], [5, 2], [3, 2], [3, 6], [2, 6], [2, 0], [0, 0], [0, 8]];

var LetterX02 = [
                     [-1, -1], [0, 0], [0, 2], [1, 2], [1, 3], [2, 3], [2, 5],
                     [1, 5], [1, 6], [0, 6], [0, 8], [2, 8], [2, 7], [3, 7],
                     [3, 6], [5, 6], [5, 7], [6, 7], [6, 8], [8, 8], [8, 6],
                     [7, 6], [7, 5], [6, 5], [6, 3], [7, 3], [7, 2], [8, 2],
                     [8, 0], [6, 0], [6, 1], [5, 1], [5, 2], [3, 2], [3, 1],
                     [2, 1], [2, 0], [0, 0], [0, 2]];

var LetterY02 = [
                    [-1, -1], [0, 0], [0, 2], [1, 2], [1, 3], [2, 3], [2, 4],
                    [3, 4], [3, 8], [5, 8], [5, 4], [6, 4], [6, 3], [7, 3],
                    [7, 2], [8, 2], [8, 0], [6, 0], [6, 1], [5, 1], [5, 2],
                    [3, 2], [3, 1], [2, 1], [2, 0], [1, 0], [0, 0], [0, 2]];

var LetterZ02 = [
                    [-1, -1], [0, 0], [0, 3], [1, 3], [1, 2], [4, 2], [4, 3],
                    [3, 3], [3, 4], [2, 4], [2, 5], [1, 5], [1, 6], [0, 6],
                    [0, 8], [8, 8], [8, 5], [7, 5], [7, 6], [4, 6], [4, 5],
                    [5, 5], [5, 4], [6, 4], [6, 3], [7, 3], [7, 2], [8, 2],
                    [8, 0], [0, 0], [0, 3]];

var Dash02 = [
                    [-1, -1], [2, 3], [2, 5], [6, 5], [6, 3], [2, 3], [2, 5]];

var NumberOne02 = [
                    [-1, -1], [0, 2], [2, 0], [4, 0], [4, 8], [2, 8], [2, 2], [0, 2]];

var NumberTwo02 = [
                        [-1, -1], [0, 3], [-1, -1], [0, 2], [0, 1], [1, 1], [1, 0],
                        [4, 0], [4, 1], [5, 1], [5, 2], [5, 3], [4, 3], [4, 4],
                        [2, 4], [2, 5], [1, 5], [1, 6], [3, 6], [3, 5], [4, 5],
                        [5, 5], [5, 7], [0, 7], [0, 5], [0, 4], [1, 4], [1, 3],
                        [3, 3], [3, 1], [2, 1], [2, 2], [1, 2], [0, 2]];

var NumberThree02 = [
                        [-1, -1], [0, 3], [0, 0], [6, 0], [6, 8], [0, 8],
                        [0, 5], [1, 5], [1, 6], [4, 6], [4, 5], [2, 5],
                        [2, 3], [4, 3], [4, 2], [1, 2], [1, 3], [0, 3]];

var NumberFour02 = [
                        [-1, -1], [0, 0], [0, 5], [4, 5], [4, 8], [6, 8],
                        [6, 5], [7, 5], [7, 3], [6, 3], [6, 0], [4, 0],
                        [4, 3], [2, 3], [2, 0], [0, 0]];

var NumberFive02 = [
                        [-1, -1], [0, 0], [0, 4], [3, 4], [3, 3], [4, 3],
                        [4, 4], [5, 4], [5, 6], [4, 6], [4, 7], [2, 7],
                        [2, 6], [1, 6], [1, 5], [0, 5], [0, 7], [1, 7]];

var NumberSix02 = [
                        [-1, -1], [0, 0], [0, 8], [8, 8], [8, 4], [2, 4],
                        [2, 2], [6, 2], [6, 3], [8, 3], [8, 0], [0, 0],
                        [-1, -1], [6, 7], [6, 5], [2, 5], [2, 7], [6, 7]];

var NumberSeven02 = [
                        [-1, -1], [0, 0], [0, 3], [2, 3], [2, 2], [6, 2],
                        [6, 3], [5, 3], [5, 4], [4, 4], [4, 5], [3, 5],
                        [3, 6], [2, 6], [2, 7], [1, 7], [1, 8], [4, 8],
                        [4, 7], [5, 7], [5, 6], [6, 6], [6, 5], [7, 5],
                        [7, 4], [8, 4], [8, 0], [0, 0]];

var NumberEight02 = [
                        [-1, -1], [0, 0], [0, 8], [8, 8], [8, 0], [0, 0],
                        [-1, -1], [2, 1], [6, 1], [6, 3], [2, 3], [2, 1],
                        [-1, -1], [6, 7], [2, 7], [2, 5], [6, 5], [6, 7]];

var NumberNine02 = [
                         [-1, -1], [0, 0], [0, 4], [5, 4], [5, 6], [2, 6],
                         [2, 5], [0, 5], [0, 8], [7, 8], [7, 0], [0, 0],
                         [-1, -1], [2, 1], [2, 3], [5, 3], [5, 1], [2, 1]];

var NumberZero02 = [
                        [-1, -1], [0, 1], [0, 7], [1, 7], [1, 8], [7, 8],
                        [7, 7], [8, 7], [8, 1], [7, 1], [7, 0], [1, 0],
                        [1, 1], [0, 1], [-1, -1], [2, 2], [2, 6], [3, 6],
                        [3, 7], [5, 7], [5, 6], [6, 6], [6, 2], [5, 2],
                        [5, 1], [3, 1], [3, 2], [2, 2]];
					
var PowerUp01 = [ 
					[-1, -1], [0, 2], [2, 0], [6, 0], [8, 2], [8, 6], [6, 8], [2, 8], [0, 6], [0, 2],
					[-1, -1], [1, 3], [3, 1], [5, 1], [7, 3], [7, 5], [5, 7], [3, 7], [1, 5], [1, 3],
					[-1, -1], [2, 4], [4, 2], [6, 4], [4, 6], [2, 4],
					[-1, -1], [4, 4]];
					
var PowerUp02 = [ 
					[-1, -1], [0, 2], [2, 0], [6, 0], [8, 2], [8, 6], [6, 8], [2, 8], [0, 6], [0, 2],
					[-1, -1], [4, 2], [4, 2], [6, 4], [6, 4], [4, 6], [4, 6], [2, 4], [2, 4], [4, 2],
					[-1, -1], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4],
					[-1, -1], [4, 4]];

