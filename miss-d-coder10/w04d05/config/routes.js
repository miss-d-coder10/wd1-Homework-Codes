const router = require("express").Router();
const wandsController = require("../controllers/wandsController");

router.route("/wands")
  .get(wandsController.index)
  .post(wandsController.create);

router.route("/wands/:id")
  .get(wandsController.show)
  .put(wandsController.update)
  .delete(wandsController.delete);




module.exports = router;
