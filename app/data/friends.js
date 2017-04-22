var userInfo =
[{
   "name":"Ahmed",
   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
   "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
 }];

var user1 = [2,3,4,1,1,1,2,3,9];
var user2 = [6,3,7,1,2,5,2,3,9];

var user1Total = 0;
var user2Total = 0;

var totalDifference = [];

module.exports = userInfo;

function userInput(){
for (var i=0; i<userInfo.length; i++){
	var userScores = userInfo[i].scores;
	user1.push(userScores)
	console.log("score data:" + userScores);
	console.log("user1:" + user1)
	// }
	// for (var x = 0; x < userScores.length; x++){
	totalDifference = Math.abs(user1.map(function(value){
		return value - user2 }));
	console.log(totalDifference)
	user1Total += user1[i]
}
	for (var z = 0; z < user1.length; z++){
		user1Total += user1[z];
		console.log(user1Total);
	}

	var userDiff = [];
	for(var i; i < user1.length && i < user2.length; i++){
		var diff = Math.abs(user1[i] - user2[i]);
		userDiff.push(diff);
		console.log("user difference :" + userDiff);
	}
};

userInput();


// var scoreValues = 

// var totalDifference; 

// for (var x=0; i<userData.length; x++){
// 	for (var i=0; i<userData.scores[i].length; i++){
// 	userData[x].scores[i]
// } 
// };
