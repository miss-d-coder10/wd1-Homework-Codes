const router = require('express').Router();
// const express = require('express');
const books = require('../controllers/books');
// const authController = require('../controllers/auth');
//
// router
//   .post('/login', authController.login)
//   .post('/register', authController.register);

router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/:id')
  .get(books.show)
  .put(books.update)
  .delete(books.delete);

module.exports = router;
