var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('superagent');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('views'));


app.get('/', function (req, res) {
  res.send(__dirname + "/view/index.html");
});


app.post('/index', function (req, res) {
    
    res.send('Signed Up!');
  });






app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
