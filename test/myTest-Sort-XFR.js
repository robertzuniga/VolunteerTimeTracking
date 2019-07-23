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
var SNTotal = 0;
console.log("SNtotal ==> ",SNTotal);
database.ref().on("child_added", function (childSnapshot) {
  //   console.log(childSnapshot.val());
  
  $('#info-card').show();
  $('#sortName-card').hide();
  $('#sortSN-card').hide();
  $('#sortRole-card').hide();

  var tSn = childSnapshot.val().mySNO;
  var tName = childSnapshot.val().myName;
  var tRole = childSnapshot.val().myRole;
  // var tVolunteerDate = childSnapshot.val().volunteerDate;

  // var volunteerDatePretty = moment.unix(tVolunteerDate).format("MM/DD/YYYY");
  SNTotal += parseInt(tSn);
  console.log("SNtotal ==> ",SNTotal);
  $("#total").text("Total SN => " + SNTotal);
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
  
  
  //$('#sortName-table').empty();
  $('#info-card').hide();
  $('#sortName-card').show();
  $('#sortSN-card').hide();
  $('#sortRole-card').hide();

  // // https://firebase.google.com/docs/reference/js/firebase.database.Reference
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

  $('#info-card').hide();
  $('#sortName-card').hide();
  $('#sortSN-card').show();
  $('#sortRole-card').hide();

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

//  Button for sorting by Role
$("#sortRole-btn").on("click", function (event) {
  event.preventDefault();

  $('#info-card').hide();
  $('#sortName-card').hide();
  $('#sortSN-card').hide();
  $('#sortRole-card').show();
  

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
      $("<td>").text(tName),
      $("<td>").text(tSn)
    );

    // // Append the new row to the table
    $("#sortRole-table > tbody").append(newRow);




  });
}); // end on  button input