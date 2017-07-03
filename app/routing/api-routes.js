var friends = require("../data/friends.js");



module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

 app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

 
 // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

 app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    var friendMatch = {
      name: "",
      photo: "",
      Difference: 1000
    };


    var friendsArray = req.body;
    var friendScores = friendsArray.scores;

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++){
      friends.push(friendsArray);
      res.json(friendsArray);

      for (var j = 0; j < friends[i].scores[j]; j++){
        totalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= friendMatch.Difference){
          friendMatch.name = friends[i].name;
          friendMatch.photo = friends[i].photo;
          friendMatch.Difference = totalDifference;
        }
      }
    }

      friends.push(friendsArray);

      res.json(friendsMatch);
  });
};


// var user1 = req.body.scores;
// var friendRequest = friends[0].scores;

// var user1Total = 0;
// var user2Total = 0;

// var totalDifference = [];

// module.exports = userInfo;

// function userDifference(){
// for (var i=0; i<userInfo.length; i++){
// 	var userScores = userInfo[i].scores;
// 	user1.push(userScores)
// 	console.log("score data:" + userScores);
// 	console.log("user1:" + user1)
// 	// }
// 	// for (var x = 0; x < userScores.length; x++){
// 	totalDifference = Math.abs(user1.map(function(value){
// 		return value - user2 }));
// 	console.log(totalDifference)
// 	user1Total += user1[i]
// }
// 	for (var z = 0; z < user1.length; z++){
// 		user1Total += user1[z];
// 		console.log(user1Total);
// 	}

// 	var userDiff = [];
// 	for(var i; i < user1.length && i < user2.length; i++){
// 		var diff = Math.abs(user1[i] - user2[i]);
// 		userDiff.push(diff);
// 		console.log("user difference :" + userDiff);
// 	}
// };


//     });

// userDifference();

//  // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//  // app.post("/api/clear", function() {
//   //   // Empty out the arrays of data
//   //   friendData = [];
  

//  //   console.log(friendData);
//   // });
// };
