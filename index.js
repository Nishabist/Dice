var sound = new Audio();
sound.src = "click.wav";
var count1 = 0;
var gameOver = false;

var player1move = 0;
var move1 = document.getElementById("move1");

function roll() {
  if (gameOver) return;
  var random = Math.floor(Math.random() * 6) + 1;
  player1move = player1move + 1;
  count1 = count1 + random;
  document.getElementById("dice").innerHTML =
    "<img src='image/" + random + ".png'/>";

  document.getElementById("count1").innerHTML = count1;
  document.getElementById("move1").innerHTML = player1move;
  if(player1move==10){
    alert("No more move")
    checkWinner();
  }
}




var count2 = 0;

var player2move = 0;
var move2 = document.getElementById("move2");

function player2() {
  if (gameOver) return;
  var randomnumber = Math.floor(Math.random() * 6) + 1;
  count2 = count2 + randomnumber;
  player2move = player2move + 1;
  document.getElementById("player2").innerHTML =
    "<img src='image/" + randomnumber + ".png'/>";
  document.getElementById("move2").innerHTML = player2move;
  document.getElementById("count2").innerHTML = count2;
  if(player2move==10){
    alert("No more moves!");
    checkWinner();
  }
}

function checkWinner(){
 
  if(player1move ==10 && player2move==10){
    gameOver = true; 
    if(count1>count2){
      alert('Player 1 wins with a score of ' + count1  +''+ 'to' +count2);
    }
   else if(count2>count1){
      alert('Player 2 wins with a score of ' + count2 + ''+ 'to' +count1);
    }
       
    else{
      alert('Tie')
    }
  }
}



