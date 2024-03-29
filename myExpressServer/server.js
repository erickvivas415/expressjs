//jshint esversion:6 

const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Hello World! This is the contact route</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h1>This server was designed by Erick Vivas :)</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});