angular.module('TicTacToe')
  .controller('GameController', GameController);

function GameController() {
  // this.clickBox = 0;
  let counter = 0;
  let game = this; // this is game controller. 

//ng repeat is looking on all cells / LI in html
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




//to find each cells - this.cells[$index]
//with repeat - $index
//bind creates function

  function mrClick($index) {
    this.cells[$index] =  counter%2 ? 'X': 'O';
    // this.clickBox++;
    // if(this.clickBox%2){
    //   this.cells[$index] = 'X';
    // }else
    //   this.cells[$index] = '0';
      // this.checkRows(); 1
    checkRows();
  }

  function checkRows(){
    // console.log(this); //no window 1
    // or
    console.log(game);
  }
  // this.checkRows = checkRows; 1
  this.mrClick = mrClick;
}
