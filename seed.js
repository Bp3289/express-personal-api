// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}


var hobbies_list =[

  {
  	name: 'baseball',
  	type: 'sport'
  },
  {
  	name: 'movies',
  	type:'entertainment'
  },
  {
  	name: 'hiking',
  	type: 'exercise'
  }
];




db.Hobbie.remove({}, function(err, hobbies) {
  console.log('removed all hobbies');
  db.Hobbie.create(hobbies_list, function(err, hobbies){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all hobbies');
    console.log("created", hobbies.length, "hobbies");

 // db.myInfo.remove({}, function(err, myInfo){
 //      console.log('removed all myInfo');
 //      myInfo_list.forEach(function (myInfoData) {
 //        var myInfo = new db.myInfo({
 //          name: myInfoData.name,
 //          github_link: myInfoData.github_link,
 //          github_profile_image: myInfoData.github_profile_image,
 //          current_city: myInfoData.current_city,
 //          pet: myInfoData.pet,
 //        });
 //        db.Hobbie.findOne({name: myInfoData.hobbie}, function (err, foundHobbie) {
 //          console.log('found hobbie ' + foundHobbie.name);
 //          if (err) {
 //            console.log(err);
 //            return;
 //          }
 //          myInfo.hobbie = foundHobbie;
 //          myInfo.save(function(err, saveHobbie){
 //            if (err) {
 //              return console.log(err);
 //            }

 //            console.log('saved' + foundHobbie.name);

 //          });
       
    
});
 


});


// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
