var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Pet = require('./pet');

var myInfoSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pets: [PetSchema]
});

var myInfo = mongoose.model('myInfo', myInfoSchema);

module.exports = myInfo;
