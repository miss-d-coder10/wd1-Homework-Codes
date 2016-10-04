console.log("test");

/////////////long code need to be refactored////////////////

var choices = ["rock", "paper", "scissors"];
var randomindex = Math.floor(Math.random() * choices.length);
var compChoice = choices[randomindex];
var userChoice = "";
var player1score = 0;
var botscore = 0;
var notification = document.getElementById("status");
var status = document.getElementById("status");

//button selector is the buttons for rock paper and scissors from HTML page.
//use loop array to access all the button to add events listener
var buttons = document.getElementsByClassName("buttonselector");
for (var i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", userSelector);
}

function userSelector(){
  // console.log("buttons"); //when box is clicked it is working
  // if (buttons.textContent === scissors);
  userChoice = this.id;
  console.log(this.id); //show box are working
  console.log(userChoice);
  console.log(compChoice);
  checkForWin();
}

function checkForWin(){
  if (userChoice === compChoice){
        notification = "draw";
        console.log(notification);
        updateNotification();
  } else if (userChoice === "scissors" && compChoice === "rock" || userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors"){
        botscore++;
        console.log("computer wins");
        console.log(botscore);
        updateScoreBoard();
  } else if (userChoice === "scissors" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock"){
        player1score++;
        console.log("user wins");
        console.log(player1score);
        updateScoreBoard();
  }else
        ;
}

function updateScoreBoard(){
  document.getElementById("humanScore").innerHTML = player1score;
  document.getElementById("computerScore").innerHTML = botscore;
}

//////////////////to show DRAW on the status DIV tage - not working///////////////////////
function updateNotification(){
  document.getElementById("status").notification.innerHTML = notification;
}
