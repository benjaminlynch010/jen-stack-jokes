console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');

    // click listener
    $('#addJokeButton').on('click', onSubmit)
}

function getJokes() {
  // GET route
  $.ajax({
    method: 'GET',
    url: '/jokes'
  }).then((response) => {
    console.log('getJokes response: ', response)
    let jokesArray = response
    render(response)
  }).catch((error) => {
    alert('Error sending GET request /jokes')
  })
}

function onSubmit() {
  console.log('onSubmit()')
  // capture input
  let inputAuthor = $('#whoseJokeIn').val()
  let inputQuestion = $('#questionIn').val()
  let inputPunchline = $('#punchlineIn').val()
  // package input in obj
  let inputtedJoke = {
    inputAuthor,
    inputQuestion,
    inputPunchline
  }
  console.log('data to send: ', inputtedJoke)

  // ajax POST request
    // GET to retrieve latest jokes array
    // render?

  $.ajax({
    method: 'POST',
    url: '/jokes',
    data: inputtedJoke
  }).then((response) => {
    console.log('POST 😊')
  }).catch((error) => {
    alert('Error sending POST request /jokes')
    console.log('POST 😭', error)
  })
}

function render() {
  console.log('in render()')
  // for loop ???
$('#outputDiv').empty()

for (let joke of jokesArray) {
  console.log('in for loop') 
  $('#outputDiv').append(`
    <li>${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}
  `)
}
}