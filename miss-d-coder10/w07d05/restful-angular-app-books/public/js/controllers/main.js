angular.module('bookApp')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;

  function logout() {
    $auth.logout()
      .then(() => {
        $state.go('booksIndex');
      });
  }

  const protectedStates = ['booksEdit', 'booksNew'];

  function secureState(e, toState){
    main.message = null;
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)){
      e.preventDefault();
      $state.go('login');
      main.message= 'you must be logged in to go there'; //message must to after the state.
    }
  }
  $rootScope.$on('$stateChangeStart', secureState);
  main.logout = logout;
}
