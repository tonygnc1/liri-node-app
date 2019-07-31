const dotenv = require('dotenv');
require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys");
const omdb = new (require('omdbapi'))('trilogy');

// // console.log(keys);

// var spotify = new Spotify(keys.spotify);
// var artist = process.argv[3];



// function spotify_this_song() {
//     spotify.search({ type: 'track', query: artist })
//         .then(function (response) {
//             //artist name
//             console.log(response.tracks.items[0].album.artists[0].name);

//             console.log(response.tracks.items[0].name);
//             //preview
//             console.log(response.tracks.items[0].external_urls.spotify);
//             //album
//             console.log(response.tracks.items[0].album.name);
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// };

// spotify_this_song();

// var artist = process.argv[2];
// var nodeArgs = process.argv;
// var artists = "";

// for (var i = 2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {
//         artists = artists + "+" + nodeArgs[i];
//     } else {
//         artists = nodeArgs[i];
//     }
// }


// function concert_this() {

//     axios.get("https://rest.bandsintown.com/artists/" + process.argv[3] + "/events?app_id=codingbootcamp")

//         .then(function (response) {
//             console.log(response.data);
//             //venue name
//             // console.log(response.data[0].venue.name);
//             // //venue city
//             // console.log(response.data[0].venue.city);
//             // //event date
//             // console.log(response.data[0].datetime);
//         })
//         .catch(function (error) {

//             console.log(error);
//         });

// };
// concert_this();



// var nodeArgs = process.argv;
var movie = process.argv[3];

// for (var i = 2; i < nodeArgs.length; i++) {
//     if (i > 2 && i < nodeArgs.length) {
//         movie = movie + "+" + nodeArgs[i];
//     } else {
//         movie = nodeArgs[i];
//     }
// }
function movie_this() {
    axios.get("http://www.omdbapi.com/?t=" + process.argv[3] + "&apikey=trilogy")
        .then(function (response) {
            // console.log(response);

            console.log(response.data.Movie);

            console.log(response.data.Year);

            console.log(response.data.imdbRating);

            console.log(response.data.Ratings[1].Value);

            console.log(response.data.Country);

            console.log(response.data.Language);

            console.log(response.data.Plot);

            console.log(response.data.Actors);
        })
        .catch(function (error) {
            console.log(error);
        });
}
movie_this();



// var fs = require("fs");
// // Running the readFile module that's inside of fs.
// // Stores the read information into the variable "data"

// function do_what_it_says() {
//     fs.readFile("random.txt", "utf8", function (error, data) {
//         if (error) {
//             return console.log(error);
//         }
//         // We will then print the contents of data
//         console.log(data);
//     })
// };
// do_what_it_says();
