var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HobbiesSchema = new Schema({
	name: String,
	type: String,

});

var Hobbie = mongoose.model('Hobbie', HobbieSchema);

module.exports = Hobbie;
