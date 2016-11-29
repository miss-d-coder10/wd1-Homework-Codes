angular.module('bookApp')
  .controller('BooksIndexController', BooksIndexController)
  .controller('BooksNewController', BooksNewController)
  .controller('BooksShowController', BooksShowController);
  // .controller('BooksEditController', BooksEditController)

BooksIndexController.$inject = ['Book'];

function BooksIndexController (Book){
  const booksIndex = this;
  booksIndex.all = Book.query();
}

////////////////////CREATE
BooksNewController.$inject = ['Book', '$state'];

function BooksNewController(Book, $state) {
  const booksNew = this;
  booksNew.Book = {};
  // console.log(booksNew.Book);
  function createBook() {
    // console.log(booksNew);
    Book.save(booksNew.book, () => {
      $state.go('booksIndex');
    });
  }
  booksNew.create = createBook;
}
////////////show and remove
BooksShowController.$inject = ['Book', '$state'];

//SHOW & DELETE
function BooksShowController(Book, $state) {
  const booksShow = this;

  booksShow.book = Book.get($state.params);

  function deleteBook() {
    booksShow.book.$remove(() => {
      $state.go('booksIndex');
    });
  }
  booksShow.delete = deleteBook;
}
