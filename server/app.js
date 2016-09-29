var express =require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var port = process.env.PORT || 3000;
var mongoose = require ('mongoose');

app.use(bodyParser.json());

var shelfRouter = require('../router/shelfRouter');

app.use('/shelf', shelfRouter)

mongoose.connect("mongodb://localhost:27017/PiShelf");

//spin up server
app.listen(port, function(){
  console.log("listening on port ",port);
});//end listen

//base url hit
app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('./public/views/index.html'));
});//end base url

app.use(express.static('public'));
