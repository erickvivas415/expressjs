const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
    var number1 = Number(req.body.number1); 
    var number2 = Number(req.body.number2);
    var total = number1 + number2;
    res.send("Yes!! This is the result: "+ total);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});