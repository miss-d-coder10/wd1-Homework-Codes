//create a project model
//project can belong to multiple users. Multiple people worked on 1 project and will need to show those users.
//i.e many to one relationship - joint bank account.
const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  github: { type: String, required: true, unique: true },
  url: { type: String},
  users: [{type: mongoose.Schema.ObjectId, ref: 'User'}] //array which is referenced to the User model.
});

//export which can be accessed from routes.js file. 
module.exports = mongoose.model("Project", projectSchema);
