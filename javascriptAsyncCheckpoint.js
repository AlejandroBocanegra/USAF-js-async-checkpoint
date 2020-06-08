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


// //import fetch module
// const fetch = require ('node-fetch');
// const fs = require ('fs');
// //call the approps API which lists pokemon, sorted by name and containing tpye..i will have to increment the tail end at somepoint so that it cycles through the pokemans

/*
console.log ('hello world')
function pokenmans(){
fetch ( 'https://pokeapi.co/api/v2/pokemon/')
.then (response => response.json()) //to turn the response into JSON
.then (json => {
    console.log(json)
    for (var i=0; i < json.length; i++){ //this will help increment line 39
    fetch ('https://pokeapi.co/api/v2/pokemon/' + json[i].id, //this will pull up each pokemans
//     {//this is where I want to pull the information that I need
//         method: 'GET'
//         body: JSON.stringify({
//             //need to find out how to extract the info i want from this location
//             // couldnt figure it out on time
//             //but the info is contained in a link, so I know ill have to make another fetch to retrieve the data. THe dudes code below shows how but its geared for making a webpage and the prompt asked for a text file. But in the readout, his method extracts the whole file from the website and ignores all but the fields specified, in my case, it would be the name and tpye. So from there i would have to extract the data and console.log it into something. This will show name followed by anything in the tpye fields. 
});

//     })
// }
// })
*/

const fetch = require ('node-fetch') //enabling fetch
var fs = require('fs'); // i need this to make txt file

  fetch('https://pokeapi.co/api/v2/pokemon/6') //this is the website (I was using charizard to make sure things worked)
  .then (function (response) { //standard formula
    return response.json()
    .then (function (json){
        // .then(function (data){ 
        //   const pokeNames = data['name']
        //   const pokeTypes = data['types']
        //   // const firstType = pokeTypes [0]
        //   // const firstTypeName = pokeType ['name']
        //   // const secondType = pokeTypes [1]
        //   console.log (pokeNames)
        //   });
      console.log (json ['name']) //checking to see if I can get the info I need
      console.log (json ['types']) 
    })
})//checking here too, and this is where I notice the types isnt coming out right
    //    for (var i=0; i<json.length;i++){ //the number at the end of the web address is how each pokemon are selected so I needed it incremented
    //  fetch ('https://pokeapi.co/api/v2/pokemon/' + json [i]) // here is where I attach the incrimentor to the web address
    //  .then function (reponse2) { // so instead of following the class example, I thought maybe I could just extract the obj's and adjust them as needed
    //    return response2.json () //i should probably add in a CATCH statement in here as well
    //    .then function (json2) {
    //      console.log (json2 ['name'])
    //    } 
    //  }
    // }
//}
  //} // the new plan was to get the obj's and refine them until I had the info I needed in the format I needed, and then I was going to write that info into a txt file using a varible I was going to assign the input. The idea was that the 'type' would be one const and 'name' would be another and I would concat the two together (name + types). Not sure if I was going to have to use an IF statement or not, but maybe if I did, i could somehow link it by var name {'name'} === var type {'name'}. 

  //Some replit playgrounds I was using:
  //https://repl.it/languages/javascript
  //https://repl.it/languages/javascript

  //resoures
  //https://www.youtube.com/watch?v=XehSJF85F38&t=618s
  //https://www.youtube.com/watch?v=MZWUKEkcQaY&t=249s
  //https://www.youtube.com/watch?v=T-VQUKeSU1w&t=236s
  //https://www.youtube.com/watch?v=wXjSaZb67n8&t=1753s
  //https://www.youtube.com/watch?v=wXjSaZb67n8
  //https://javascript.info/fetch
  //https://developers.google.com/web/updates/2015/03/introduction-to-fetch
  //https://www.websparrow.org/web/how-to-create-and-save-text-file-in-javascript
  //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  //https://learn-2.galvanize.com/cohorts/1968/blocks/74/content_files/Objects/objects.md
  //https://learn-2.galvanize.com/cohorts/1968/blocks/74/content_files/Operators_And_Methods/objects.md
  //https://learn-2.galvanize.com/cohorts/1985/blocks/649/content_files/units/fetch.md