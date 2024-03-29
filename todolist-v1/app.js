const express = require("express");
const https = require("https");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;

// var item = ""; only pass one item
let items = []; // An array allow us to pass multiple items
let workItems = [];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    let day = date.getDate();

    console.log(items);
    res.render("list", {listTitle: day, newListItems: items} );
        //res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {
    console.log(req.body.list);

    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get('/work', function(req, res) {
    res.render("list", {listTitle: "Work", newListItems: workItems})
});

app.get('/about', function(req, res) {
    res.render("about")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});