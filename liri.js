var fs = require("fs");
var moment = require("moment")
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

//             var spotifyData = [
//                 "Artist:" + response.tracks.items[0].album.artists[0].name,
//                 "Song:" + response.tracks.items[0].name,
//                 "URL:" + response.tracks.items[0].external_urls.spotify,
//                 "Album:" + response.tracks.items[0].album.name,
//             ].join("\n\n");

//             fs.appendFile("log.txt", spotifyData, function (err) {
//                 if (err) throw err;
//                 console.log(spotifyData);
//             });
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// };

// spotify_this_song();



// function concert_this() {
//     axios.get("https://rest.bandsintown.com/artists/" + process.argv[3] + "/events?app_id=codingbootcamp")

//         .then(function (response) {
//             // console.log(response.data);
//             // venue name
//             console.log(response.data[0].venue.name);
//             //venue city
//             console.log(response.data[0].venue.city);
//             //event date
//             console.log(moment().format('MMMM Do YYYY, h:mm:ss a'), response.data[0].datetime);

//             var bandsData = [
//                 "Venue:" + response.data[0].venue.name,
//                 "City:" + response.data[0].venue.city,
//                 "Date:" + response.data[0].datetime,
//             ].join("\n\n");

//             fs.appendFile("log.txt", bandsData + divider, function (err) {
//                 if (err) throw err;
//                 console.log(bandsData);
//             });
//         })
//         .catch(function (error) {

//             console.log(error);
//         });
// };
// concert_this();

var divider = "\n------------------------------------------------------------\n\n";



// function movie_this() {
//     axios.get("http://www.omdbapi.com/?t=" + process.argv[3] + "&apikey=trilogy")
//         .then(function (response) {
//             // console.log(response);

//             console.log(response.data.Title);
//             console.log(response.data.Year);
//             console.log(response.data.imdbRating);
//             console.log(response.data.Ratings[1].Value);
//             console.log(response.data.Country);
//             console.log(response.data.Language);
//             console.log(response.data.Plot);
//             console.log(response.data.Actors);

//             var imdbData = [
//                 "Title:" + response.data.Title,
//                 "Year:" + response.data.Year,
//                 "Rating:" + response.data.imdbRating,
//                 "Rotten Tomatoes:" + response.data.Ratings[1].Value,
//                 "Country:" + response.data.Country,
//                 "Language:" + response.data.Language,
//                 "Plot:" + response.data.Plot,
//                 "Actors:" + response.data.Actors,
//             ].join("\n\n");

//             fs.appendFile("log.txt", imdbData + divider, function (err) {
//                 if (err) throw err;
//                 console.log(imdbData);
//             });
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };
// movie_this();



function do_what_it_says() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        // We will then print the contents of data
        console.log(data);

        fs.appendFile("log.txt", data + divider, function (err) {
            if (err) throw err;
            console.log(do_what_it_says);
          });
    })
};
do_what_it_says();



