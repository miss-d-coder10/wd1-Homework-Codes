const Student = require("../models/student");

function studentsIndex(req, res){
  Student.find({}, (err, students) => {
    if (err) res.status(500).json({error: err});
    res.json(students);
  });
}

function studentsCreate(req, res){
  Student.create(req.body, (err, students) => {
    if (err) return res.status(500).json({error: err});
    res.status(201).json(students);
  });
}

function studentsShow(req, res){
  Student.findById(req.params.id, (err, students) => {
    if(err) res.status(500).json({error: err});
    res.json(students);
  });
}

function studentsUpdate(req, res) {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, dog) => {
    if(err) return res.status(500).json({ error: err });
    res.json(students);
  });
}

function studentsDelete(req, res){
  Student.findByIdAndRemove(req.params.id, (err) =>{
    if(err) res.status(500).json({error: err});
    res.send(204);
  });
}


module.exports = {
  index: studentsIndex,
  create: studentsCreate,
  show: studentsShow,
  update: studentsUpdate,
  delete: studentsDelete
};
