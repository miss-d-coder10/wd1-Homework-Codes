angular.module('TicTacToe')
  .controller('GameController', GameController);



function GameController() {
  this.clickBox = 0;

  this.cells = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];




  function mrClick($index) {
    this.clickBox++;
    if(this.clickBox%2){
      this.cells[$index] = 'X';
    }else
      this.cells[$index] = '0';
  }
  this.mrClick = mrClick;
}
