const mongoose = require("mongoose");
const wandSchema = mongoose.Schema({
  wandName: String,
  description: String,
  power: String,
  sizeInches: Number
});

module.exports = mongoose.model("Wand", wandSchema);
