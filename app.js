const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 5500;

//tell express to expect ejs files
app.set("view engine", "ejs");

//tell express to run static files from public directory
app.use("/public", express.static("public"));

//API Key
require('dotenv').config();

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/results", (req, res) => {
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?s=" + query + process.env.SECRET_KEY;
    
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.get("/movie/:id", (req, res) => {
    let id = req.params.id;
    let url = "http://www.omdbapi.com/?i=" + id + "&plot=full" + process.env.SECRET_KEY;

    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let movie = JSON.parse(body);
            res.render("movie", {movie: movie});
        }
    });

});

//request listener
app.listen(port, () => {
    console.log("application is live");
});