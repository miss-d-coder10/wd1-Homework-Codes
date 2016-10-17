const express = require("express");
const router = express.Router();

//homepage
router.get("/",(req, res) => res.render("index"));
//hilary page
router.get("/hilary", (req,res) => res.render("hilary"));
//trump page
router.get("/trump", (req,res) => res.render("trump"));

module.exports = router;
