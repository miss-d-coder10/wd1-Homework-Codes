angular
	.module('todoApp', ['ui.router'])
  .config(MainRouter);

//create MainRouter function
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider){
  //router
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('archive', {
      url: '/archive',
      templateUrl: 'archive.html'
    })
    //edit route for edit page
    .state('edit', {
      url: '/edit',
      templateUrl: 'edit.html'
    });
  $urlRouterProvider.otherwise('/');
}
