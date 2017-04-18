var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Pet = require('./pet');


var HobbieSchema = new Schema({
	name: String,
	type: String

});



var myInfoSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pets: {type: Schema.Types.ObjectId, ref: 'Pet'},
  hobbies: [HobbieSchema]
});

var myInfo = mongoose.model('myInfo', myInfoSchema);

module.exports = myInfo;
