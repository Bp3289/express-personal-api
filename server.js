// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/
 var myInfo = {

  name: 'Billy',
  github_link: 'https://github.com/Bp3289',
  github_profile_image: 'https://avatars2.githubusercontent.com/u/26173785?v=3&u=6179293a5ec7e08ea870679dc84a5c215de86e3c&s=400',
  current_city: 'Denver',
  pet: [{name: "Gizmo", type: "Dog", breed: "chihuahua"}, {name: "Maggie", type: "Cat", breed: "siamese"}],
};

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/Bp3289/express-personal-api", 
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  });
});


app.get('/api/myInfo', function (req, res) {
  // db.myInfo.find().populate('myInfo')
  // .exec(function(err, myInfo) {
  //   if (err) { return console.log("index error:" + err); }
    res.json(myInfo);
  });


app.get('/api/hobbies', function (req, res) {
  db.Hobbie.find({}, function (err, hobbies) {
      if (err) { return console.log("index error: " + err); }
      res.json(hobbies);
  });
});

app.get('/api/hobbies/:id', function (req, res) {
  db.Hobbie.findOne({_id: req.params.id}, function(err, hobbie) {
    if (err) { return console.log("index error:" + err); }
    res.json(hobbie);
  });
});

app.post('/api/hobbies', function(req, res){

  var differentHobbie = new db.Hobbie({

    name: req.body.name,
    type: req.body.type
  });
  differentHobbie.save(function(err, hobbie){
    if (err) { return console.log("index error:" + err); }
    console.log("saved", hobbie.name);
    res.json(hobbie);
  });
});

app.delete('/api/hobbies/:id', function(req, res){
  db.Hobbie.findOneAndRemove({_id: req.params.id}, function(err, hobbie) {
    if (err) { return console.log("index error:" + err); }
    res.json(hobbie + "was deleted");
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
