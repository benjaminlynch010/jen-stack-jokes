const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));
// serve back static files
app.use(express.static('server/public'));


let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];


// GET request, client expecting something back
app.get('/jokes', (req, res) => {
  console.log('in server, /jokes 😛 jokes array: ', jokes)
  // Send jokes array to client
  res.send(jokes)
})

app.post('/jokes', (req, res) => {
  
  const author = (req.body.whoseJoke)
  const joke = (req.body.jokeQuestion)
  const punchline = (req.body.punchLine)
  console.log('Req.body:', req.body)
  // on the client side we're going have to know
  //  how to use this data & how to parse it
    // *** Make sure to keep the same labels ***
  let newJoke = {
    whoseJoke: author,
    jokeQuestion: joke,
    punchLine: punchline
  }
  // push new joke to the end of the array, usually best practice
  console.log('New Joke:', newJoke)
  jokes.push(newJoke)
  // Send updated [ jokes ] to client
  console.log('Jokes Array:', jokes)
  res.send(jokes)
})


app.listen(PORT, () => {
  console.log('🙉 server running on: ', PORT);
}); // end spin up server


// *** Andrew Object Notes ***
  // Pull feedback from files & copy to Obsidian!
  
// JS will help create an object with the shortcut but...
// Any declared variables HAVE to exactly match keys
  // So if someone throws an uppercase "L" in a compound word...

// let author = whoseJoke
// let joke = jokeQuestion
// let punchline = punchLine <--- (Hope you caught that L)

// Shortcut Version
// let newJoke = {
//  author,
//  joke,
//  punchline <--- (If you didn't, it'll be hard to find now)
// }

// Long Way --> I know exactly what the keys are
// Easier to keep track of paths, esp. while learning

// let newJoke = { 
//   author: whoseJoke,
//   joke: joke,
//   punchline: punchLine
// }
