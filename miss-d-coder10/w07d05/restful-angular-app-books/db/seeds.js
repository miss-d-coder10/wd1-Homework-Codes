const mongoose = require('mongoose');
const Book = require('../models/book');
const db = require('../config/db');

mongoose.connect(db.uri);

const books = [
  {
    title: 'The Scorch Trials',
    director: 'James Dashner',
    description: 'Thomas was sure that escape from the maze meant he and the Gladers would get their lives back. But no one knew what sort of life they were going back to. The earth is a wasteland. Government and order have disintegrated and now Cranks, people driven to murderous insanity by the infectious disease known as the Flare, roam the crumbling cities hunting for their next victim\.and meal.Thomas can only wonder - does he hold the secret of freedom somewhere in his mind? Or will he forever be at the mercy of WICKED? The pulse-pounding sequel to The Maze Runner.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/The_Scorch_Trials_cover.jpg/220px-The_Scorch_Trials_cover.jpg'
  },{
    title: 'Fantastic Beasts and Where to Find Them',
    director: 'J.K. Rowling',
    description: 'When Magizoologist Newt Scamander arrives in New York, he intends his stay to be just a brief stopover. However, when his magical case is misplaced and some of Newts fantastic beasts escape, it spells trouble for everyone...',
    image: 'http://cdn.collider.com/wp-content/uploads/fantastic-beasts-and-where-to-find-them-book.jpg'
  }
];

Book.collection.drop();

Book.create(books, (err, books) => {
  if(err) console.log('Error creating books');
  else console.log(`${books.length} books created`);

  mongoose.connection.close();
});
