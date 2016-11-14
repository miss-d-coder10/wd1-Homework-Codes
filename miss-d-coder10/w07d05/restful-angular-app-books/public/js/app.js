angular
  .module('bookApp', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router)
  .config(Auth);


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
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    });
  $urlRouterProvider.otherwise('/books');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';

}
