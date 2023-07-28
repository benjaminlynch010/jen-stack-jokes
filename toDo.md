## To Do
- ✅ setup folder / file structure
- ✅ HTML sourcing


### Base Functionality
- ✅ joke data stored on server in array of objects with 3 properties:
  - ✅ whoseJoke
  - ✅ jokeQuestion
  - ✅ punchline
- ✅ when app is loaded, all jokes should be displayed below the inputs
- ✅ ability to add jokes on an input form
- ✅ after a joke is added, append joke to the DOM

##### HTML
- ✅ source client & server
- ✅ form
  - ✅ inputs for new joke
  - ✅ button for add joke
- ✅ display joke array


##### server.js
- ✅ setup express / base parser
- ✅ setup listener on PORT 5000
- ✅ store all current joke data ---> jokes = array of objects
- ✅ setup GET route
  - ✅ app.get 
    - ✅ path/url = where? ---> /jokes
    - ✅ res.send( what? ) ---> 200 status for now, updated array later
- ✅ setup POST route
  - ✅ app.post 
    - ✅ path/url = where? ---> /jokes (same as GET)
    - ✅ res.send( what? ) // status?


##### client.js
- ✅ onReady
  - ✅ handlers
    - ✅ submit click listener, on Submit()
    - ✅ 
- ✅ getJokes()
  - ✅ ajax GET route
    - ✅ path/url: where?
    - ✅ data: array of jokes
    - ✅ call render() to refresh DOM
- ✅ onSubmit()
  - ✅ pull inputted joke
  - ✅ ajax POST route to send new joke to server
  - ✅ call getJokes() to get updated array
- ✅ render()
  - ✅ display area .empty() to clear display
  - ✅ for loop through jokes array
  - ✅ append updated array to DOM
