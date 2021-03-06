//create project controller with full CRUD actions

const Project = require("../models/project");

function projectsIndex(req, res) {
	Project.find({}, (err, projects) => {
		if(err) return res.status(500).json({ error: err });
		return res.status(200).json(projects);
	});
}

function projectsCreate(req, res) {
	Project.create(req.body, (err, project) => {
		if(err) return res.status(422).json({ error: err});
		return res.status(201).json(project);
	});
}
//show by ID
// function projectsShow(req, res) {
// 	Project.findById(req.params.id, (err, project) => {
// 		if(err) return res.status(500).json({ error: err});
// 		// return res.status(200).json(project);
//     res.json(project); //to resolve deprecated avoid
//     // res.status(204).end();
// 	});
// }

//GET REQUEST
// project show - populate using "users". Always look for the id - id based on 1 project.
//find user and setting ID as parameter.
//set user ids
//execute - if error return status 500 or return the project with users ID
function projectsShow(req, res){
  console.log(req.params.id); //req.params.id - id is the parameter of the model.
  Project.findById(req.params.id)
  .populate("users")
  .exec((err, project) =>{
    if(err) return res.status(500).json({ error: err});
    return res.status(200).json(project);
  });
}

function projectsUpdate(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, project) => {
    if(err) return res.status(422).json({ error: err });
    return res.status(200).json(project);
  });
}

function projectsDelete(req, res) {
  Project.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).json({ error: err });
    // return res.send(204);
    res.status(204).end(); //to resolve to deprecated issue
  });
}

module.exports = {
  index: projectsIndex,
  create: projectsCreate,
	show: projectsShow,
	update: projectsUpdate,
	delete: projectsDelete
};
