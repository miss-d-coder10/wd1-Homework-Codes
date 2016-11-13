angular.module('bookApp')
    .factory('Book', Book);

function Book($resource) {
  return new $resource('/books/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });

}
