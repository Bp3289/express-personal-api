var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Pet = require('./hobbie');


  var PetSchema = new Schema({
    name: String,
    type: String,
    breed: String

 });



var myInfoSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pet: [PetSchema],
  hobbies: {type: Schema.Types.ObjectId, ref: 'hobbie'}
});

var myInfo = mongoose.model('myInfo', myInfoSchema);

module.exports = myInfo;
