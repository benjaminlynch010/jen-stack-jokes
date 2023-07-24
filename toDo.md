## To Do
- [ x ] setup folder / file structure
- [ x ] HTML sourcing


### Base Functionality
- [ x ] joke data stored on server in array of objects with 3 properties:
  - [ x ] whoseJoke
  - [ x ] jokeQuestion
  - [ x ] punchline
- [  ] when app is loaded, all jokes should be displayed below the inputs
- [  ] ability to add jokes on an input form
- [  ] after a joke is added, append joke to the DOM

##### HTML
- [ x ] source client & server
- [ x ] <form>
  - [ x ] <input> new joke
  - [ x ] <button> add joke
- [ x ] <div> display joke array


##### server.js
- [ x ] setup express / base parser
- [ x ] setup listener on PORT 5000
- [ x ] store all current joke data ---> jokes = array of objects
- [ x ] setup GET route
  - [ x ] app.get 
    - [ x ] path/url = where? ---> /jokes
    - [  ] res.send( what? ) ---> 200 status for now, updated array later
- [ x ] setup POST route
  - [  ] app.post 
    - [  ] path/url = where? ---> /jokes (same as GET)
    - [  ] res.send( what? ) // status?


##### client.js
- [  ] onReady
  - [  ] handlers
    - [ x ] submit click listener, on Submit()
    - [  ] 
- [  ] getJokes()
  - [  ] ajax GET route
    - [  ] path/url: where?
    - [  ] data: array of jokes
    - [  ] call render() to refresh DOM
- [  ] onSubmit()
  - [  ] pull inputted joke
  - [  ] ajax POST route to send new joke to server
  - [  ] call getJokes() to get updated array
- [  ] render()
  - [  ] display area .empty() to clear display
  - [  ] for loop through jokes array
  - [  ] append updated array to DOM
