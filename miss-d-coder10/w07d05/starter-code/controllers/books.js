// const Book = require('../models/book');
//
// function booksIndex(req, res) {
//   Book.find((err, books) => {
//     if (err) return res.status(500).json({ message: 'Something went wrong.', error: err });
//     return res.status(200).json(books);
//   });
// }
//
// function booksCreate(req, res) {
//   const book = new Book(req.body);
//   book.save((err, book) => {
//     if (err) return res.status(400).json({ messsage: 'Something went wrong.', error: err });
//     return res.status(201).json(book);
//   });
// }
//
// function booksShow(req, res) {
//   Book.findById(req.params.id, (err, book) => {
//     if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
//     if (!book) return res.status(404).json({ message: 'No character found.' });
//     return res.status(200).json(book);
//   });
// }
//
// function booksUpdate(req, res) {
//   Book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
//     if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
//     if (!book) return res.status(404).json({ message: 'No book found.' });
//     return res.status(200).json(book);
//   });
// }
//
// function booksDelete(req, res) {
//   Book.findByIdAndRemove(req.params.id, err => {
//     if (err) return res.status(500).json({ messsage: 'Something went wrong.', error: err });
//     return res.status(204).send();
//   });
// }
//
// module.exports = {
//   index: booksIndex,
//   create: booksCreate,
//   show: booksShow,
//   update: booksUpdate,
//   delete: booksDelete
// };
//







const Book = require('../models/book');

function booksIndex(req, res) {
  Book.find((err, books) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(books);
  });
}

function booksCreate(req, res) {
  Book.create(req.body, (err, book) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(book);
  });
}

function booksShow(req, res) {
  Book.findById(req.params.id, (err, book) => {
    if(err) return res.status(500).json({ error: err });
    if(!book) return res.status(404).json({ error: 'Not found' });
    return res.json(book);
  });
}

function booksUpdate(req, res) {
  Book.findById(req.params.id, (err, book) => {
    if(err) return res.status(500).json({ error: err });
    if(!book) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      book[key] = req.body[key];
    }

    book.save((err, book) => {
      if(err) return res.status(400).json({ error: err });
      res.json(book);
    });
  });
}

function booksDelete(req, res) {
  Book.findById(req.params.id, (err, book) => {
    if(err) return res.status(500).json({ error: err });
    if(!book) return res.status(404).json({ error: 'Not found' });

    book.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: booksIndex,
  create: booksCreate,
  show: booksShow,
  update: booksUpdate,
  delete: booksDelete
};
