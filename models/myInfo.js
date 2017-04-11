var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Pet = require('./pet.js');
  Hobbie = require('./hobbies.js');

var myInfoSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pets: [PetSchema],
  hobbies: [HobbieSchema]
});

var myInfo = mongoose.model('myInfo', myInfoSchema);

module.exports = myInfo;
