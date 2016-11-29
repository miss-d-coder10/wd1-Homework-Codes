console.log("test");

var playButton = document.getElementById("button");
var player = document.getElementById("player");
//add events listener that applies to all the loops
for (var i=0 ; i<playButton.length; i++){
  playButton[i].addEventListener("click", playSound); //invoking a function
  console.log(this);
}
  function playSound(){
  var musicFile = this.id + ".wav"; // concatinating
  player.src = "../sounds/" + musicFile;
  player.play(); //calling the function
}


//using if/else statement to run the conditions.

  // function musicPlayer(){
  //   // console.log(playButton); click button works
  //   console.log(this); //this refers to the () whatever it is invoking the function in this situation, it is the Button.
  //   if(this.textContent === "Work it"){
  //       player.src = "../sounds/work_it.wav";
  //       player.play();
  //     }
  //   else if (this.textContent === "Make it"){
  //     player.src = "../sounds/make_it.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Do it"){
  //     player.src = "../sounds/do_it.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Makes us"){
  //     player.src = "../sounds/makes_us.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Harder"){
  //     player.src = "../sounds/harder.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Better"){
  //     player.src = "../sounds/better.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Faster"){
  //     player.src = "../sounds/faster.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Stronger"){
  //     player.src = "../sounds/stronger.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "More than"){
  //     player.src = "../sounds/more_than.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Hour"){
  //     player.src = "../sounds/hour.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Our"){
  //     player.src = "../sounds/our.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Never"){
  //     player.src = "../sounds/never.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Ever"){
  //     player.src = "../sounds/ever.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "After"){
  //     player.src = "../sounds/after.wav";
  //     player.play();
  //   }
  //   else if (this.textContent === "Work is"){
  //     player.src = "../sounds/work_is.wav";
  //     player.play();
  //   }
  //   // else if (this.textContent === "Over"){
  //   //
  //   // }
  //   else {player.src = "../sounds/over.wav";
  //   player.play();}
  //   }





//////////////// 1. "Long CODE to be refactored" ////////////////////////////////////////////////////////
  //
  // var playButton = document.getElementById("workit");
  // playButton.addEventListener("click", music);
  //
  // function music(){
  //   console.log(playButton);
  //   player.src = "../sounds/work_it.wav";
  //   player.play();
  // }
  //
  // var playButton2 = document.getElementById("makeit");
  // playButton2.addEventListener("click", music2);
  //
  // function music2(){
  //   console.log(playButton2);
  //   player.src = "../sounds/make_it.wav";
  //   player.play();
  // }
  //
  // var playButton3 = document.getElementById("doit");
  // playButton3.addEventListener("click", music3);
  //
  // function music3(){
  //   console.log(playButton3);
  //   player.src = "../sounds/do_it.wav";
  //   player.play();
  // }
  //
  // var playButton4 = document.getElementById("makesus");
  // playButton4.addEventListener("click", music4);
  //
  // function music4(){
  //   console.log(playButton4);
  //   player.src = "../sounds/makes_us.wav";
  //   player.play();
  // }
  //
  // var playButton5 = document.getElementById("harder");
  // playButton5.addEventListener("click", music5);
  //
  // function music5(){
  //   console.log(playButton5);
  //   player.src = "../sounds/harder.wav";
  //   player.play();
  // }
  //
  // var playButton6 = document.getElementById("better");
  // playButton6.addEventListener("click", music6);
  //
  // function music6(){
  //   console.log(playButton6);
  //   player.src = "../sounds/better.wav";
  //   player.play();
  // }
  //
  // var playButton7 = document.getElementById("faster");
  // playButton7.addEventListener("click", music7);
  //
  // function music7(){
  //   console.log(playButton7);
  //   player.src = "../sounds/faster.wav";
  //   player.play();
  // }
  //
  // var playButton8 = document.getElementById("stronger");
  // playButton8.addEventListener("click", music8);
  //
  // function music8(){
  //   console.log(playButton8);
  //   player.src = "../sounds/stronger.wav";
  //   player.play();
  // }
  //
  // var playButton9 = document.getElementById("morethan");
  // playButton9.addEventListener("click", music9);
  //
  // function music9(){
  //   console.log(playButton9);
  //   player.src = "../sounds/more_than.wav";
  //   player.play();
  // }
  //
  // var playButton10 = document.getElementById("hour");
  // playButton10.addEventListener("click", music10);
  //
  // function music10(){
  //   console.log(playButton10);
  //   player.src = "../sounds/hour.wav";
  //   player.play();
  // }
  //
  // var playButton11 = document.getElementById("our");
  // playButton11.addEventListener("click", music11);
  //
  // function music11(){
  //   console.log(playButton11);
  //   player.src = "../sounds/our.wav";
  //   player.play();
  // }
  //
  // var playButton12 = document.getElementById("never");
  // playButton12.addEventListener("click", music12);
  //
  // function music12(){
  //   console.log(playButton12);
  //   player.src = "../sounds/never.wav";
  //   player.play();
  // }
  //
  // var playButton13 = document.getElementById("ever");
  // playButton13.addEventListener("click", music13);
  //
  // function music13(){
  //   console.log(playButton13);
  //   player.src = "../sounds/ever.wav";
  //   player.play();
  // }
  //
  // var playButton14 = document.getElementById("after");
  // playButton14.addEventListener("click", music14);
  //
  // function music14(){
  //   console.log(playButton14);
  //   player.src = "../sounds/after.wav";
  //   player.play();
  // }
  //
  // var playButton15 = document.getElementById("workis");
  // playButton15.addEventListener("click", music15);
  //
  // function music15(){
  //   console.log(playButton15);
  //   player.src = "../sounds/work_is.wav";
  //   player.play();
  // }
  //
  // var playButton16 = document.getElementById("over");
  // playButton16.addEventListener("click", music16);
  //
  // function music16(){
  //   console.log(playButton16);
  //   player.src = "../sounds/over.wav";
  //   player.play();
  // }
