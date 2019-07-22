// my datareport.js  Robert Zuniga
// 1. Initialize Firebase
console.log('AWESOME myTest-Sort.js STUFF!');

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDCladk9SjpXC2T383qLfyceYfUx77pGkU",
//   authDomain: "mydataxfr.firebaseapp.com",
//   databaseURL: "https://mydataxfr.firebaseio.com",
//   projectId: "mydataxfr",
//   storageBucket: "",
//   messagingSenderId: "95334722866",
//   appId: "1:95334722866:web:6d873dc203ee8df9"
// };
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

//var database = firebase.database();

database.ref().on("child_added", function (childSnapshot) {
//   console.log(childSnapshot.val());


  var tSn = childSnapshot.val().mySNO;
  var tName = childSnapshot.val().myName;
  var tRole = childSnapshot.val().myRole;
 // var tVolunteerDate = childSnapshot.val().volunteerDate;

 // var volunteerDatePretty = moment.unix(tVolunteerDate).format("MM/DD/YYYY");

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(tSn),
    $("<td>").text(tName),
    $("<td>").text(tRole)
  );

  console.log("tSn ==> ", tSn);
  // // Append the new row to the table
  $("#info-table > tbody").append(newRow);
});


console.log("tSn ==> ", tSn);



