const router = require('express').Router();
const books = require('../controllers/books');
const authController = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router
  .post('/login', authController.login)
  .post('/register', authController.register);


router.route('/books')
  .get(books.index)
  .post(secureRoute, books.create);

router.route('/books/:id')
  .get(books.show)
  .put(secureRoute, books.update)
  .patch(books.update)
  .delete(secureRoute, books.delete);

module.exports = router;
