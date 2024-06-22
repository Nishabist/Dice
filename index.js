var sound = new Audio();
sound.src = "click.wav";
var count1 = 0;

var player1move = 0;
var move1 = document.getElementById("move1");

function roll() {
  var random = Math.floor(Math.random() * 6) + 1;
  player1move = player1move + 1;
  count1 = count1 + random;
  document.getElementById("dice").innerHTML =
    "<img src='image/" + random + ".png'/>";

  document.getElementById("count1").innerHTML = count1;
  document.getElementById("move1").innerHTML = player1move;
}




var count2 = 0;

var player2move = 0;
var move2 = document.getElementById("move2");
function player2() {
  var randomnumber = Math.floor(Math.random() * 6) + 1;
  count2 = count2 + randomnumber;
  player2move = player2move + 1;
  document.getElementById("player2").innerHTML =
    "<img src='image/" + randomnumber + ".png'/>";
  document.getElementById("move2").innerHTML = player2move;
  document.getElementById("count2").innerHTML = count2;
}

while(player1move==player2move==10){
    alert('Stop the game');
}


