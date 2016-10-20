const router = require("express").Router();
const studentsController = require("../controllers/studentsController");

router.route("/student")
  .get(studentsController.index)
  .post(studentsController.create);

router.route("/student/:id")
  .get(studentsController.show)
  .put(studentsController.update)
  .delete(studentsController.delete);

module.exports = router;
