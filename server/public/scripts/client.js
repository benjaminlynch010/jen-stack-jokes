$(document).ready(onReady);
console.log("client.js sourced");

function onReady() {
  console.log("DOM ready");
  // Display current jokes
  getJokes();
  // *** Listeners ***
  $("#addJokeButton").on("click", handleSubmit);
} // end onReady

// Global Variables
let author;
let question;
let punchline;

// Object for POST route
let jokePackage = {};

function captureInput() {
  console.log("In captureInput");
  // Target input IDs & use a getter '.val()' to capture input
  let author = $("#whoseJokeIn").val();
  let joke = $("#questionIn").val();
  let punchline = $("#punchlineIn").val();

  // Package input in an object
  jokePackage = {
    whoseJoke: author,
    jokeQuestion: joke,
    punchLine: punchline,
  };
} // end captureInput

// When 'Submit' is clicked
function handleSubmit() {
  console.log("In handleSubmit");
  captureInput();
  console.log("DATA for POST: ", jokePackage);

  // ajax POST request at /jokes, send jokePackage (new joke input)
  $.ajax({
    method: "POST",           // How?
    url: "/jokes",            // Where?
    data: jokePackage,        // What?
  })                          // .then Do what??? 
    .then((response) => {     
      console.log("POST 😊");
    })
    .catch((error) => {         
      alert("Error sending POST request /jokes");
      console.log("POST 😭", error);
    });
  getJokes();
} // end handleSubmit

function getJokes() {
  // GET updated jokes array from server
  $.ajax({
    method: "GET",
    url: "/jokes",
  })
    .then((response) => {
      console.log("GET response: ", response);
      let jokesArray = response;
      render(jokesArray);
    })
    .catch((error) => {
      alert("Error sending GET request: /jokes");
    });
} // end getJokes

function render(array) {
  console.log("In render");
  // Clear the DOM for updated jokes from server
  $("#outputDiv").empty();
  // for loop to
  for (let object of array) {
    console.log("in for loop");

    $("#outputDiv").append(`
    <div>
      <h4>
        <q>${object.jokeQuestion}</q>
      </h4>
      <q>${object.punchLine}</q>
      <p><i>- ${object.whoseJoke}</i><p>
    </div>
    `); // Wanted to experiment with HTML formatting, hadn't tried it
  }
} // end render
