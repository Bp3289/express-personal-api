var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PetSchema = new Schema({
	name: String,
	type: String,
	breed: String,

});

var myInfo = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pets: [PetSchema]
});

var myInfo = mongoose.model('Campsite', CampsiteSchema);

module.exports = myInfo;
