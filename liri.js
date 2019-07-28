const dotenv = require('dotenv');
require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys");
const omdb = new (require('omdbapi'))('trilogy');

// console.log(keys);

var spotify = new Spotify(keys.spotify);

var song = process.argv[2];
// var title = process.argv[3];

var queryUrl = "https://api.spotify.com/v1/search?q=track";
console.log(queryUrl)

spotify.search({ type: 'track', query: 'All the Small Things'})
.then(function(response) {
    console.log(response.data);
})
.catch(function(err){
    console.log(err);
})



// var artist = process.argv[2];

// axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

// .then(function (response) { 
//        console.log(response.data); 
//     })
//    .catch(function (error) {
//        console.log(error);
//    });



// var nodeArgs = process.argv;
// var movie = "";

// for (var i =2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {
//         movie = movie + "+" + nodeArgs[i];
//     } else {
//         movie = nodeArgs[i];
//     }
// }

//    axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(
//   function(response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
// });




