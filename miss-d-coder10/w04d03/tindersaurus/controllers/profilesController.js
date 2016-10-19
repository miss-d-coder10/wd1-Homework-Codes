const Profile = require("../models/profiles");

function profilesIndex(req, res){
  Profile.find({}, (err, profile) => {
    if (err) return res.status(500).send("500: Server Error");
    res.render("profiles/index", {profile});
  });
}

module.exports = {
  index: profilesIndex
};
