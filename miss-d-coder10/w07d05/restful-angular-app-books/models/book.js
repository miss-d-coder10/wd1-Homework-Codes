const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  description: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Book', booksSchema);
