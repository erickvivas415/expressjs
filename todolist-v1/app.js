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
    if(currentDate === 6 || currentDate=== 0 ) {
        day = "Weekend";
        res.render("list", {kindOfday: day} );
    }
    else {
        day = "Weekday"
        res.render("list", {kindOfday: day} );
    }
        //res.sendFile(__dirname + "/index.html");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});