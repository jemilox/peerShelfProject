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
    }//end else
  });//end find
});//end get

router.post('/', function(req,res){
  var sentData = req.body;
  console.log('in post',sentData);
  var newItem = new Shelf({
    placer: sentData.placer,
    description: sentData.decription,
    image: sentData.image
  });
  newItem.save(function(err){
    if (err){
      console.log('error:',err);
      res.sendStatus(500);
    }//end if
    else{
      console.log('success',newItem);
      res.send(newItem);
    }//end else
  });//end save
});//end post

router.put('/', function (req, res) {
  console.log( 'put', req.body.id );
  Shelf.remove({ _id: req.body.id}, function(err, result){
    res.send( result );
  });
})

module.exports = router;
