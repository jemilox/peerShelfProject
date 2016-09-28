var mongoose = require('mongoose');
var Schema = mongoose Schema;

var shelfSchema = new Schema({
  placer: String,
  description: String,
  image: String
});//end shelfSchema

var Shelf =mongoose.model('shelves', shelfSchema);
module.exports = Shelf;
