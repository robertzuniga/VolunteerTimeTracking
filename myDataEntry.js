// 1. Initialize Firebase
console.log('AWESOME index.html STUFF!');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDAbwLtsdY_KEnrGa6aMNrdyh11aSK94f0",
  authDomain: "time-talent-treasure.firebaseapp.com",
  databaseURL: "https://time-talent-treasure.firebaseio.com",
  projectId: "time-talent-treasure",
  storageBucket: "",
  messagingSenderId: "607547578040",
  appId: "1:607547578040:web:d670b674aa277ba5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// 2. Button for adding volunteers
$("#add-volunteer-btn").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  var volunteerName = $("#name-input").val().trim();
  var volunteerLocation = $("#location-input").val().trim();
  // var volunteerDuration = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var volunteerDuration = $("#time-input").val().trim();
  var volunteerDate = moment($("#date-input").val().trim(), "MM/DD/YYYY").format("X");

  // Creates local "temporary" object for holding volunteer data
  var newVolunteer = {
    volunteerName,
    volunteerLocation,
    volunteerDuration,
    volunteerDate
  };
localStorage
  // Uploads volunteer data to the database
  database.ref().push(newVolunteer);

  // Logs everything to console
  // console.log(newVolunteer);

  alert("Volunteer Added");

  // Clears all of the text-boxes
  $("#name-input").val("");
  $("#location-input").val("");
  $("#time-input").val("");
  $("#date-input").val("");
});

// 3. Create Firebase event for adding volunteer to the database 
//     and a row in the html when a user adds an entry

database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());
  var tName = childSnapshot.val().volunteerName;
  var tLocation = childSnapshot.val().volunteerLocation;
  var tVolunteerDuration = childSnapshot.val().volunteerDuration;
  var tVolunteerDate = childSnapshot.val().volunteerDate;

  var volunteerDatePretty = moment.unix(tVolunteerDate).format("MM/DD/YYYY");

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(tName),
    $("<td>").text(tLocation),
    $("<td>").text(tVolunteerDuration),
    $("<td>").text(volunteerDatePretty)
  );

  // // Append the new row to the table
  $("#volunteer-table > tbody").append(newRow);
});