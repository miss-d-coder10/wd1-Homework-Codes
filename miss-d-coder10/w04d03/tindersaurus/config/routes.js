const express = require("express");
const router = express.Router();
const profilesController = require("../controllers/profilesController.js");

router.get("/profiles", profilesController.index);


// router.get("/profiles", (req, res) => {
//   Profile.find({}, (err, profile) => {
//     if(err) return res.status(500).send("500: Server Error");
//     res.render("profiles/index", { profile});
//   });
// });

router.get("/profiles/new", profilesController.new);
router.post("/profiles", profilesController.create);




//change app name to variable name called router.
router.get("/", (req, res) => res.render("index"));

module.exports = router;
