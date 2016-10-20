const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: String,
  github: String,
  image: String,
  bio: String,
  portfolio: String,
  project: [String]
});

module.exports = mongoose.model("Student", studentSchema);


// - name
// - github (String - link to Github profile)
// - image (String - the url to where the image is found)
// - bio (String)
// - portfolio (String for website)
