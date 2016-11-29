const express = require("express");
const router = express.Router();
const Profile = require("../models/profile");

router.get("/profiles", (req, res) => {
  Profile.find({}, (err, profiles) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render("profiles/index", {profiles});
  });
});

router.get(`/`, (req, res) => res.render("index"));

module.exports = router;
