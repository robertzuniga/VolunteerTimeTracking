console.log('AWESOME index.html STUFF!');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCladk9SjpXC2T383qLfyceYfUx77pGkU",
    authDomain: "mydataxfr.firebaseapp.com",
    databaseURL: "https://mydataxfr.firebaseio.com",
    projectId: "mydataxfr",
    storageBucket: "",
    messagingSenderId: "95334722866",
    appId: "1:95334722866:web:6d873dc203ee8df9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// 2. Button for adding volunteers
$("#add-btn").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  var sno = $("#sn").val().trim();
  var name = $("#name").val().trim();
  // var volunteerDuration = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var role = $("#role").val().trim();
  
  // Creates local "temporary" object for holding volunteer data
  var newEntry = {
    sno,
    name,
    role,
  };
localStorage
  // Uploads volunteer data to the database
  database.ref().push(newEntry);

  // Logs everything to console
  // console.log(newVolunteer);

  alert("Added");

  // Clears all of the text-boxes
  $("#sn").val("");
  $("#name").val("");
  $("#role").val("");
 
});

// 3. Create Firebase event for adding volunteer to the database 
//     and a row in the html when a user adds an entry

// database.ref().on("child_added", function (childSnapshot) {
//   console.log(childSnapshot.val());
//   var tSn = childSnapshot.val().volunteerName;
//   var tName = childSnapshot.val().volunteerLocation;
//   var tRole = childSnapshot.val().volunteerDuration;
//  // var tVolunteerDate = childSnapshot.val().volunteerDate;

//  // var volunteerDatePretty = moment.unix(tVolunteerDate).format("MM/DD/YYYY");

//   // Create the new row
//   var newRow = $("<tr>").append(
//     $("<td>").text(tName),
//     $("<td>").text(tLocation),
//     $("<td>").text(tVolunteerDuration),
//   //  $("<td>").text(volunteerDatePretty)
//   );

//   // // Append the new row to the table
//   $("#volunteer-table > tbody").append(newRow);
// });