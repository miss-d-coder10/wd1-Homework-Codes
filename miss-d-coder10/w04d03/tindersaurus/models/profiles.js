const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  url: String,
  name: String,
  age: Number,
  species: String,
  image: String
});

module.exports = mongoose.model("Profile", profileSchema);
