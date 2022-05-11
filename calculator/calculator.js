const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    //res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/', function(req, res){
    var number1 = Number(req.body.number1); 
    var number2 = Number(req.body.number2);
    var total = number1 + number2;
    res.send("Yes!! This is the result: "+ total);
});

app.post('/bmicalculator', function(req, res){
    var weight = parseFloat(req.body.height); 
    var height = parseFloat(req.body.weight);
    var bmi= (weight*703) / (height*height);
    res.send("Your BMI is: "+ bmi);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});