var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Shelf = require('../models/shelf.js');

router.get('/', function(req,res){
  console.log('in get');
  Shelf.find({}, function (err,shelfResults){
    if (err){
      console.log('error:',err);
      res.sendStatus(500);
    }//end if
    else{
      console.log('shelfResults:',shelfResults);
      res.send(shelfResults);
      res.sendStatus(200);
    }//end else
  });//end find
});//end get

module.exports = router;
