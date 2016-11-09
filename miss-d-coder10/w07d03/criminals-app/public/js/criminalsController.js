angular.module('criminalsApp')
  .controller('CriminalsController', CriminalsController);


CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  const criminals = this;

  criminals.all = [];
  criminals.newCriminal = {};
  criminals.addCriminal = addCriminal;
  criminals.deleteCriminal = deleteCriminal;
  // criminals.editCriminal = editCriminal;

  function addCriminal (){
    $http.post('/criminals', criminals.newCriminal)
    .then((res) =>{
      console.log(res);
      criminals.all.push(res.data);
      console.log(res.data);
      criminals.newCriminal = {};

      criminals.form.$setPristine();
      criminals.form.$setUntouched();
    })
    .catch(() =>{
      console.log('error');
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  //GET

  function getCriminal(){
    $http.get('/criminals')
      .then((res)=>{
        console.log(res);
        criminals.all = res.data;
      });
  }

  function deleteCriminal(id) {
    console.log('delete', id);
    $http.delete(`/criminals/${id}`)
      .then(() => {
        criminals.all = criminals.all.filter((criminal) => {
          return criminal._id !==  id;
        });
      });
  }

////////////////////////////////////////////////////////////////////
//edit
  // function editCriminal(id){
  //   console.log('click', id);
  //   $http.delete(`/criminals/${id}`)
  // }







  getCriminal();
}
