angular.module('bookApp')
  .factory('Book', Book);

Book.$inject = ['$resource'];
function Book($resource) {
  return new $resource('/books/:id', { id: '@_id' }, {
    update: {method: 'PUT'}
  });
}
