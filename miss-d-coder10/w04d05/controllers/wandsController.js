const Wand = require("../models/wand");

//not working
// function wandsIndex(res, req) {
//   Wand.find((err, wands) => {
//     if(err) return res.status(500).json({error: "500: Server Error"});
//     res.json(wands);
//   });
// }

//index
function wandsIndex(req, res){
  Wand.find({}, (err, wands) => {
    if (err) return res.status(500).json({error: err});
    res.json(wands);
  });
}

//create
function wandsCreate(req, res) {
  Wand.create(req.body, (err, wand) => {
    if(err) return res.status(500).json({ error: err });
    res.status(201).json(wand);
  });
}

//show
function wandsShow(req, res){
  Wand.findById(req.params.id, (err, wand) => {
    if(err) res.status(500).json({error: err});
    res.json(wand);
  });
}

//update = put
function wandsUpdate(req, res) {
  Wand.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, wand) => {
    if(err) return res.status(500).json({ error: err });
    res.json(wand);
  });
}
//delete = remove
function wandsDelete(req, res){
  Wand.findByIdAndRemove(req.params.id, (err) =>{
    if(err) res.status(500).json({error: err});
    res.send(204);
  });
}



module.exports = {
  index: wandsIndex,
  create: wandsCreate,
  show: wandsShow,
  update: wandsUpdate,
  delete: wandsDelete
};
