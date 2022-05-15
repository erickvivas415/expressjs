const express = require("express");
const https = require("https");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// var item = ""; only pass one item
var items = []; // An array allow us to pass multiple items

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    var today  = new Date();
    var options = { 
        weekday: 'long', 
        //year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    //var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("en-US", options));

    //var currentDate = today.getDay();
    var day = today.toLocaleDateString("en-US", options);

    console.log(items);
    res.render("list", {kindOfday: day, newListItems: items} );
        //res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});