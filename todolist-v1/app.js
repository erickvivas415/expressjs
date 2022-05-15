const express = require("express");
const https = require("https");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    var today = new Date();
    var currentDate = today.getDay();
    var day = "";

    switch(currentDate) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
        default:
            console.log("Error, day is not assign to any case")
    }
        
    res.render("list", {kindOfday: day} );
        //res.sendFile(__dirname + "/index.html");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});