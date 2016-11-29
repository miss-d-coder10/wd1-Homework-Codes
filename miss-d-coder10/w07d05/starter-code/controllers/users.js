const User = require('../models/user');

function UsersIndex(req, res) {
  User.find((err, users) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(users);
  });
}

function UsersCreate(req, res) {
  User.create(req.body, (err, user) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(user);
  });
}

function UsersShow(req, res) {
  User.findById(req.params.id, (err, user) => {
    if(err) return res.status(500).json({ error: err });
    if(!user) return res.status(404).json({ error: 'Not found' });
    return res.json(user);
  });
}

function UsersUpdate(req, res) {
  User.findById(req.params.id, (err, user) => {
    if(err) return res.status(500).json({ error: err });
    if(!user) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      user[key] = req.body[key];
    }

    user.save((err, user) => {
      if(err) return res.status(400).json({ error: err });
      res.json(user);
    });
  });
}

function UsersDelete(req, res) {
  User.findById(req.params.id, (err, user) => {
    if(err) return res.status(500).json({ error: err });
    if(!user) return res.status(404).json({ error: 'Not found' });

    User.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: UsersIndex,
  create: UsersCreate,
  show: UsersShow,
  update: UsersUpdate,
  delete: UsersDelete
};
