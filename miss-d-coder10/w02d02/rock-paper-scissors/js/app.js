console.log("test");

/////////////long code need to be refactored////////////////

var choices = ["rock", "paper", "scissors"];
// var randomindex = Math.floor(Math.random() * choices.length);
var compChoice = "";
var userChoice = "";
var player1score = 0;
var botscore = 0;
var notification = "";
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
  console.log("user: ", userChoice);
  console.log("computer: ", compChoice);

  checkForWin();
}

function checkForWin(){
  // if (userChoice === compChoice){
  //       notification = "Its a draw";
  //       // console.log(notification); checking
  //       updateNotification();
  // } else
  var randomNumber = Math.floor(Math.random() * choices.length);
  var compChoice = choices[randomNumber];

  if (userChoice === "scissors" && compChoice === "rock" || userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors"){
        botscore++;
        console.log("computer wins");
        // console.log(botscore);
        notification = "computer wins";
        updateNotification();
        updateScoreBoard();
  } else if (userChoice === "scissors" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock"){
        player1score++;
        console.log("user wins");
        // console.log(player1score);
        notification = "user wins";
        updateScoreBoard();
        updateNotification();
  } else {
        notification = "Its a draw";
        updateNotification();
}

function updateScoreBoard(){
  document.getElementById("humanScore").innerHTML = player1score;
  document.getElementById("computerScore").innerHTML = botscore;
}


function updateNotification(){
  document.getElementById("status").innerHTML = notification;
}
}
//need to be done
// restart function
// write in OOP


//
//
// var playerChoice = "";
// var computerChoice = "";
// var playerScore = 0;
// var computerScore = 0;
//
//
// var rockBtn = document.getElementById('rock');
// var paperBtn = document.getElementById('paper');
// var scissorsBtn = document.getElementById('scissors');
//
// function setPlayerChoice() {
//   playerChoice = this.id;
//   botChoice();
//   displayWinner();
//   displayCompChoice();
//   updateScores();
// }
//
// rockBtn.addEventListener('click', setPlayerChoice);
// paperBtn.addEventListener('click', setPlayerChoice);
// scissorsBtn.addEventListener('click', setPlayerChoice);
//
//
// var botChoice = function() {
//   var num = Math.random();
//   console.log(num);
//   if(num < 0.33) {
//     console.log('rock');
//     computerChoice = 'rock';
//     return computerChoice;
//   } else if(num > 0.33 && num < 0.66) {
//     console.log('paper');
//     computerChoice = 'paper';
//     return computerChoice;
//   } else if(num > 0.66) {
//     console.log('scissors');
//     computerChoice = 'scissors';
//     return computerChoice;
//   }
// }
//
//
// var displayWinner = function() {
//   if(playerChoice === 'rock' && computerChoice === 'scissors') {
//     document.getElementById('status').innerHTML = "Player wins";
//     playerScore++;
//   } else if(playerChoice === 'scissors' && computerChoice === 'paper') {
//     document.getElementById('status').innerHTML = "Player wins";
//     playerScore++;
//   } else if(playerChoice === 'paper' && computerChoice === 'rock') {
//     document.getElementById('status').innerHTML = "Player wins";
//     playerScore++;
//   } else if(playerChoice === computerChoice) {
//     document.getElementById('status').innerHTML = "Draw";
//   } else {
//     document.getElementById('status').innerHTML = "Computer wins";
//     computerScore++;
//   }
// }
//
// var displayCompChoice = function() {
//   if (computerChoice === "rock") {
//     document.getElementById("computer_choice").innerHTML = "Computer chose rock";
//   } else if (computerChoice === "paper") {
//     document.getElementById("computer_choice").innerHTML = "Computer chose paper";
//   } else if (computerChoice === "scissors") {
//     document.getElementById("computer_choice").innerHTML = "Computer chose scissors";
//   }
// }
//
// var updateScores = function() {
//   document.getElementById('humanScore').innerHTML = playerScore;
//   document.getElementById('computerScore').innerHTML = computerScore;
// }
