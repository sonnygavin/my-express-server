const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello, welcome to Gavin's website.");
});

app.get("/about", function(req, res) {
    res.send("Software developer with proven working skills in the following technologies.");
})

app.get("/contact", function(req, res) {
    res.send("Contact me at: reachme@SonnyGavin.com");
})

app.get("/hobbies", function(req, res) {
    res.send("I love coding.");
})

app.listen(3000, function() {
    console.log("Server succesfully started on port 3000.");
});