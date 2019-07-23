console.log('AWESOME myTestXFR.js STUFF!');

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

var newEntry;

// 2. Button for adding info
$("#add-btn").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  var mySNO = $("#sn").val().trim();
  var myName = $("#name").val().trim();
  // var volunteerDuration = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var myRole = $("#role").val().trim();

  // Creates local "temporary" object for holding volunteer data
  newEntry = {
    mySNO,
    myName,
    myRole
  };
  localStorage
  // Uploads volunteer data to the database
  database.ref().push(newEntry);

  // Logs everything to console
  console.log("In function new entry==> ",newEntry);

  alert("Added");

  // Clears all of the text-boxes
  $("#sn").val("");
  $("#name").val("");
  $("#role").val("");
});
