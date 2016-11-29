const router = require('express').Router();
const beersController = require('../controllers/beers');

router.route('/beers')
  .get(beersController.index)
  .post(beersController.create);

router.route('/beers/:id')
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);

module.exports = router;