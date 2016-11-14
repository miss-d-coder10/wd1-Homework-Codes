angular.module('bookApp')
    .controller('RegisterController', RegisterController)
    .controller('LoginController', LoginController);

RegisterController.$inject = ['$auth', '$state'];
function RegisterController($auth, $state) {
  const register = this;

  register.user = {};
  function submit() {
    $auth.signup(register.user)
        .then(() => {
          $state.go('booksIndex');
        });
  }

  register.submit = submit;
}

LoginController.$inject = ['$auth', '$state'];
function LoginController($auth, $state) {
  const login = this;

  function submit() {
    $auth.login(login.credentials)
      .then(() => {
        $state.go('booksIndex');
      });
  }

  login.submit = submit;
}
