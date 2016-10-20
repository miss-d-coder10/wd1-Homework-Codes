const Profile = require("../models/profiles");

//index
function profilesIndex(req, res){
  Profile.find({}, (err, profile) => {
    if (err) return res.status(500).send("500: Server Error");
    res.render("profiles/index", {profile}); //profile is the name of the array from the database
  });
}

//new profile
function profilesNew(req, res){
  res.render("profiles/new");
}

//create a profile through a form which will be posted to the database and once submitted redirect to the profiles page
function profilesCreate(req, res){
  Profile.create(req.body.profile, (err, profile) => {
    if (err) return res.status(500).send("500: Server Error");
    res.redirect(301, "/profiles");
  });
}

//SHOW - shows a single profile  which will be retrieve via get method through an id. go through the profile model on database
//ID ??
function profilesShow(req, res) {
  Profile.findById(req.params.urlId, (err, profile) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('profiles/show', { profile });
  });
}

// update -
// function profilesUpdate(req, res){
//   Profile.findById(req.params.urlId, (err, quote) => {
//     if(err) return res.status(500).send("500: Server Error");
//     res.render('profiles/show', { profile });
//   });
// }

//edit


//delete

module.exports = {
  index: profilesIndex,
  new: profilesNew,
  create: profilesCreate,
  show: profilesShow
  // update: profilesUpdate

};
