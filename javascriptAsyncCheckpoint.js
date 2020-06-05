/* 
This project will evaluate your ability to work with asynchronous, non-blocking Javascript code.

You will be:

processing file data
processing API data

Create a code that processes a file list of pokemon names (each name seperated by a new line) and logs each Pokemon's types (for some there are many) according to the pokeapi.co API.
This is an assessment of both your understanding of the course material so far and your ability to independently problem solve and use the internet/other resources to implement anything you don't understand.
Example file input (input.txt)

charizard
pikachu
Example console output:

Charizard: flying, fire
Pikachu: electric
*/


/* 
1. i need to fetch the data I want from the specified location
2. next I need it identify the name and the type for each pokemon
3.a. i need to log this information into an object ex { Charchar: flying, fire} (not sure how to add more than 1 characteristic)
3.b. turns out the list calls to two other lists to provide the name of the pokemans and the abilities 
4. i need to output the object
*/


//import fetch module
const fetch = require ('node-fetch');
//call the approps API which lists pokemon, sorted by name and containing tpye..i will have to increment the tail end at somepoint so that it cycles through the pokemans
console.log ('hello world')
function pokenmans(){
fetch ( 'https://pokeapi.co/api/v2/pokemon/')
.then (response => response.json()) //to turn the response into JSON
.then (json => {
    console.log(json)
    for (var i=0; i < json.length; i++){ //this will help increment line 39

    fetch ('https://pokeapi.co/api/v2/pokemon/' + json[i].id, //this will pull up each pokemans
    {//this is where I want to pull the information that I need
        method: 'GET'
        body: JSON.stringify({
            //need to find out how to extract the info i want from this location
            // couldnt figure it out on time
            //but the info is contained in a link, so I know ill have to make another fetch to retrieve the data. THe dudes code below shows how but its geared for making a webpage and the prompt asked for a text file. But in the readout, his method extracts the whole file from the website and ignores all but the fields specified, in my case, it would be the name and tpye. So from there i would have to extract the data and console.log it into something. This will show name followed by anything in the tpye fields. 
        })

    })
}
})

//abandoned due to time constraints

/*then(function(allpokemon){ //grabbed 38 to 67 from the internet
    allpokemon.results.forEach(function(pokemon){
      fetchPokemonData(pokemon); 
    })
   })
  }
  function fetchPokemonData(pokemon){
    let url = pokemon.url // 
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      console.log(pokeData)
      })
    }
    function renderPokemon(pokeData){
        let allPokemonContainer = document.getElementById('poke-container');
        let pokeContainer = document.createTextNode
        let pokeName = document.createTextNode
        pokeName.innerText = pokeData.name
        let pokeTypes = document.createTextNode
        //ul list will hold the pokemon types
        createTypes(pokeData.types, pokeTypes) 
        // helper function to go through the types array and create li tags for each one
        pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
        //appending all details to the pokeContainer div
        allPokemonContainer.appendChild(pokeContainer);       
        //appending that pokeContainer div to the main div which  will hold all the pokemon cards
        }*/