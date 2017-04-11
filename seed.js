// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
var myInfo_list = [
{
  name: 'Billy',
  github_link: 'https://github.com/Bp3289',
  github_profile_image: 'https://avatars2.githubusercontent.com/u/26173785?v=3&u=6179293a5ec7e08ea870679dc84a5c215de86e3c&s=400',
  current_city: 'Denver',
  pets: [PetSchema]
},


];

var pets_list = [
{
	name: 'Gizmo',
	type: 'dog',
	breed: 'chihuahua'
},
{
	name: 'Maggie',
	type: 'dog',
	breed: 'chihuahua'
},
{
	name: 'Lola',
	type: 'dog',
	breed:'chihuahua'
},
{
	name: 'Max',
	type: 'dog',
	breed: 'schnauzer'
},
{
	name: 'Jack',
	type: 'cat',
	breed: 'fat'
 }
];






// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
