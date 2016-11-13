angular.module('bookApp')
  .controller('BooksIndexController', BooksIndexController)
  .controller('BooksNewController', BooksNewController)
  .controller('BooksShowController', BooksShowController)
  .controller('BooksEditController', BooksEditController);

BooksIndexController.$inject = ['Book'];

function BooksIndexController(Book){
  const booksIndex = this;

  booksIndex.all = Book.query();
  console.log(booksIndex);
}

BooksNewController.$inject = ['Book', '$state'];

function BooksNewController(Book, $state) {
  const booksNew = this;
  booksNew.book = {};

  function createBook() {
    Book.save(booksNew.book, () => {
      $state.go('booksIndex');
    });
  }
  booksNew.createBook = createBook;
}

BooksShowController.$inject = ['Book', '$state'];

function BooksShowController(Book, $state) {
  const booksShow = this;
  booksShow.book = Book.get($state.params);

  function deleteBook() {
    booksShow.book.$remove(() => {
      $state.go('booksIndex');
    });
  }
  booksShow.deleteBook = deleteBook;
}

BooksEditController.$inject = ['Book', '$state'];

function BooksEditController(Book, $state) {
  const booksEdit = this;
  booksEdit.book = Book.get($state.params);

  function update() {
    Book.update({ id: booksEdit.book._id }, booksEdit.book, () => {
      $state.go('booksShow', $state.params);
    });
  }

  this.update = update;
}
