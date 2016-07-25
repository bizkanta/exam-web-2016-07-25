'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var decryption = require('./decryption')

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(express.static('./client'));

app.post('/decode', urlencodedParser, function(req, res) {
  console.log(req.body);
  decryption.caesarShift(req.body.text, req.body.shift, function(err, decodedText){
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(decodedText);
    }
  });
});

var port = 3000;
app.listen(port, function(){
  console.log('I am listening on port ' + port);
});
