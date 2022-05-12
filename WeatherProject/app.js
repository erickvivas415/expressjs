const express = require("express");
const https = require("https");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=san+francisco&appid=1707f794027617a2d2a4dc1d53bd972f&units=imperial"
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.feels_like;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
            console.log(weatherData.main.feels_like);
            res.write("<h1>The weather is currently " + weatherData.weather[0].description + "</h1>");
            res.write("<p>The temperature in San Francisco is " + temp + " degrees</p>");
            res.write("<img src=" + imageURL +" >");
            res.send();
            //res.send("The temperature in San Francisco is " + temp + " degrees");

        })

    })
    //res.send("Server is up and running");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
}
);