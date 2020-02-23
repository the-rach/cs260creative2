document.getElementById("randomJokeButton").addEventListener("click", function(event) {
    event.preventDefault(); //stop having the parent elements throw events
    //console.log('got in random joke button event listener');

    //excludes explicit jokes
    const url = "http://api.icndb.com/jokes/random?limitTo=[nerdy, chuck norris]";

    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            //let results = "<p>" + json.value.joke + "</p>";
              let results = "<div>" + json.value.joke + "</div>";
            document.getElementById("jokeResults").innerHTML = results;
        })
});

//make a button
//if nothing in text field, enter an alert (please pop in a value!)
document.getElementById("manyRandomButton").addEventListener("click", function(event) {
    event.preventDefault();
    const numJokes = document.getElementById("manyRandomNum").value;
    //this is excluding explicit jokes:
    const url = "http://api.icndb.com/jokes/random/" + numJokes + "?limitTo=[nerdy, chuck norris]";
    fetch(url)
        .then(function(response) {
            return response.json();
        }) .then(function(json) {
            // console.log(json);
            let results = "";
            for (let i = 0; i < json.value.length; i++) {
                results += json.value[i].joke + "<p></p>";
            }

        document.getElementById("manyJokesResults").innerHTML = results;
    });
});

document.getElementById("newNameButton").addEventListener("click", function(event) {
    event.preventDefault();

    const newName = document.getElementById("newName").value;
    const splitName = newName.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];
    // console.log(firstName);
    // console.log(lastName);

    const url = "http://api.icndb.com/jokes/random?firstName=" + firstName + "&lastName=" + lastName;
    fetch(url)
        .then(function(response) { //handle promise and get head of json
            return response.json();
         }) .then(function(json) { //handle body of json
             // console.log(json);
             let result = json.value.joke;
             document.getElementById("newNameJokeResult").innerHTML = result;

        })
});