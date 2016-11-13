const books = require('../models/book');

function booksIndex(req, res) {
  books.find((err, books) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.', error: err });
    return res.status(200).json(books);
  });
}

function booksCreate(req, res) {
  const book = new books(req.body);
  book.save((err, book) => {
    if (err) return res.status(400).json({ messsage: 'Something went wrong.', error: err });
    return res.status(201).json(book);
  });
}

function booksShow(req, res) {
  books.findById(req.params.id, (err, book) => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
    if (!book) return res.status(404).json({ message: 'No character found.' });
    return res.status(200).json(book);
  });
}

function booksUpdate(req, res) {
  books.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
    if (!book) return res.status(404).json({ message: 'No book found.' });
    return res.status(200).json(book);
  });
}

function booksDelete(req, res) {
  books.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: booksIndex,
  create: booksCreate,
  show: booksShow,
  update: booksUpdate,
  delete: booksDelete
};
