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
  // $("#info-table").empty();
  // $("#sortName-table").empty();


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

  // // Append the new row to the table
  $("#info-table > tbody").append(newRow);
});

/////////////////////  Sort Name /////////////////////////

//  Button for sorting by Name
$("#sortName-btn").on("click", function (event) {
  event.preventDefault();

  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  var ref = firebase.database().ref();


  ref.orderByChild("myName").on("child_added", function (snapshot) {
    console.log(snapshot.key + " name sorted => " + snapshot.val().myName + " done");
    // $("#info-card").empty();
    var tName = snapshot.val().myName;
    var tRole = snapshot.val().myRole;
    var tSn = snapshot.val().mySNO;

    // Create the new row
    var newRow = $("<tr>").append(

      $("<td>").text(tName),
      $("<td>").text(tRole),
      $("<td>").text(tSn)
    );

    // // Append the new row to the table
    $("#sortName-table > tbody").append(newRow);
  });

}); // end on  button input

/////////////////////  Sort SN  /////////////////////////

//  Button for sorting by SN
$("#sortSN-btn").on("click", function (event) {
  event.preventDefault();

  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  var ref = firebase.database().ref();

  ref.orderByChild("mySNO").on("child_added", function (snapshot) {
    console.log(snapshot.key + " sno sorted => " + snapshot.val().mySNO + " done");

    var tSn = snapshot.val().mySNO;
    var tName = snapshot.val().myName;
    var tRole = snapshot.val().myRole;


    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(tSn),
      $("<td>").text(tName),
      $("<td>").text(tRole)
    );

    // // Append the new row to the table
    $("#sortSN-table > tbody").append(newRow);


  });
}); // end on  button input

/////////////////////  Sort Role /////////////////////////

//  Button for sorting by Name
$("#sortRole-btn").on("click", function (event) {
  event.preventDefault();
  $("#infoCard").empty();
  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  var ref = firebase.database().ref();

  ref.orderByChild("myRole").on("child_added", function (snapshot) {
    console.log(snapshot.key + " role sorted => " + snapshot.val().myRole + " done");

    var tRole = snapshot.val().myRole;
    var tName = snapshot.val().myName;
    var tSn = snapshot.val().mySNO;

    // Create the new row
    var newRow = $("<tr>").append(
     
      
      $("<td>").text(tRole),
      $("<td>").text(tSn),
      $("<td>").text(tName)
    );

    // // Append the new row to the table
    $("#sortRole-table > tbody").append(newRow);




  });
}); // end on  button input