const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=san+francisco&appid=1707f794027617a2d2a4dc1d53bd972f"
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    })
    res.send("Server is up and running");
})

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
}
);