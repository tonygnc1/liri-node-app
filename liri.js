const dotenv = require('dotenv');
require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys");
const omdb = new (require('omdbapi'))('trilogy');

// // console.log(keys);

var spotify = new Spotify(keys.spotify);
var artist = process.argv[3];

spotify_this_song();

function spotify_this_song() {
    spotify.search({ type: 'track', query: artist })
        .then(function (response) {
            //artist name
            console.log(response.tracks.items[0].album.artists[0].name);
            //song
            console.log(response.tracks.items[0].name);
            //preview
            console.log(response.tracks.items[0].external_urls.spotify);
            //album
            console.log(response.tracks.items[0].album.name);
        })
        .catch(function (err) {
            console.log(err);
        })
};



// var artist = process.argv[2];
var nodeArgs = process.argv;
var artists = "";

for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        artists = artists + "+" + nodeArgs[i];
    } else {
        artists = nodeArgs[i];
    }
}
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

    .then(function (response) {
        //    console.log(response); 
        //venue name
        console.log(response.venue.name);
        //venue city
        console.log(response.venue.city);
        //event date
        console.log(response.datetime);
    })
    .catch(function (error) {

        console.log(error);
    });



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




