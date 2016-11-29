console.log("tic-tac-toe");

var boxes = document.querySelectorAll(".box");
var clickBox = 0;

for(var i=0;i<boxes.length;i++){
  //console.log(boxes[i]);
  boxes[i].addEventListener("click", function(){
    if(this.textContent === ""){
      clickBox++;
      this.textContent = clickBox%2 === 0 ? "O" : "X";
    }



//winning and draw conditions
    if(boxes[0].textContent && boxes[0].textContent === boxes[1].textContent && boxes[0].textContent === boxes[2].textContent) {
      alert("boom we have a winner");    //row 1
  } else if (boxes[3].textContent && boxes[3].textContent === boxes[4].textContent && boxes[3].textContent === boxes[5].textContent){
      alert("boom we have a winner"); // row 2
  } else if (boxes[6].textContent && boxes[6].textContent === boxes[7].textContent && boxes[6].textContent === boxes[8].textContent){
      alert("boom we have a winner"); // row 3
  } else if (boxes[0].textContent && boxes[0].textContent === boxes[3].textContent && boxes[0].textContent === boxes[6].textContent){
      alert("boom we have a winner"); // column 1
  } else if (boxes[1].textContent && boxes[1].textContent === boxes[4].textContent && boxes[1].textContent === boxes[7].textContent){
      alert("boom we have a winner");  // column 2
  } else if (boxes[2].textContent && boxes[2].textContent === boxes[5].textContent && boxes[2].textContent === boxes[8].textContent){
      alert("boom we have a winner");  // column 3
  } else if (boxes[0].textContent && boxes[0].textContent === boxes[4].textContent && boxes[0].textContent === boxes[8].textContent){
      alert("boom we have a winner");  // diagonal1
  } else if (boxes[2].textContent && boxes[2].textContent === boxes[4].textContent && boxes[2].textContent === boxes[6].textContent){
      alert("boom we have a winner");  // diagonal2
  } else if (clickBox === 9){
    alert("it's a draw");
  } else{
    return;
  }


  //reset the board
  var resetButton = document.getElementById("resetbutton");
  resetButton.addEventListener("click", clearTheBoard);

  function clearTheBoard(){
    clickBox = 0;
    for(var i=0; i<boxes.length;i++){
      boxes[i].textContent = "";
      }
    }








});
}
