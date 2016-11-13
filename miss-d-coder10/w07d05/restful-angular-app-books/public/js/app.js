angular
  .module('bookApp', ['ngResource', 'ui.router'])
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('booksIndex', {
      url: '/books',
      templateUrl: '/templates/booksIndex.html',
      controller: 'BooksIndexController as booksIndex'
    })
    .state('booksNew', {
      url: '/books/new',
      templateUrl: '/templates/booksNew.html',
      controller: 'BooksNewController as booksNew'
    })
    .state('booksShow', {
      url: '/books/:id',
      templateUrl: '/templates/booksShow.html',
      controller: 'BooksShowController as booksShow'
    })
    .state('booksEdit', {
      url: '/books/:id/edit/',
      templateUrl: '/templates/booksEdit.html',
      controller: 'BooksEditController as booksEdit'
    });
  $urlRouterProvider.otherwise('/books');
}
