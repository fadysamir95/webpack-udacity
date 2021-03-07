// Packages
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('This app listening on port 8080!')
})

// Initial
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Using the .env file
const dotenv = require('dotenv');
dotenv.config();

var aylien = require("aylien_textapi");

// Set API
var textapi = new aylien({
    application_id: "b8ba2f34",
    application_key: "6c6fe2bd5f16bb88de8c2b39f80b1b50"
});
textapi.sentiment({'text': 'Lorem ipsum!'}, function(error, response) {
    if (error === null) {
      console.log(response);
    }
});

// GET Route
app.post('/natural', function (req, res) {
    natural.summarize(
        {
            url: req.body.text, sentences_number: 4
        }, 
        function(error, response) {if (error === null) res.send(response);}
    )
})