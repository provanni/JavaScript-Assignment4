function getRandomInt() {
  return Math.floor(Math.random() * 6) + 1;
}

var button = document.getElementById("roll");
var reset = document.getElementById("reset");

var die1 = 0;
var die2 = 0;

var counter = 0;
var points = [];

function numClicks(){
  counter += 1;
};

function rollDice() {
  numClicks();

  die1 = getRandomInt();
  die2 = getRandomInt();

  document.getElementById('die1').innerHTML = '<img src="images/' + die1 + '.png" height="100" width="100">';
  document.getElementById('die2').innerHTML = '<img src="images/' + die2 + '.png" height="100" width="100">';

  var total = die1 + die2;
  document.getElementById("diceResult").innerHTML = die1 + " + " + die2 + " = " + total;

  if (counter === 1){
    switch (total) {
      case 7: case 11:
        document.getElementById("gameResult").innerHTML = "WIN";
        document.getElementById("roll").disabled = true;
        break;

      case 12: case 3: case 2:
        document.getElementById("gameResult").innerHTML = "LOSE";
        document.getElementById("roll").disabled = true;
        break

      default:
        document.getElementById("gameResult").innerHTML = "PLEASE ROLL AGAIN"
        points.push(total);
        document.getElementById("points").innerHTML = "Your points: ";

      }
    } else {
        if (total === 7){
          document.getElementById("gameResult").innerHTML = "LOSE";
          document.getElementById("roll").disabled = true;

        } else if (total === points[points.length - 1]){
          document.getElementById("gameResult").innerHTML = "WIN";
          document.getElementById("roll").disabled = true;

        } else {
          document.getElementById("gameResult").innerHTML = "PLEASE ROLL AGAIN"
          points.push(total);
          document.getElementById("points").innerHTML = "Your points: " + points[points.length - 1];
        }
    }
    console.log(points);
};

function resetGame(){
  counter = 0;
  points = [];
  document.getElementById("diceResult").innerHTML = " ";
  document.getElementById("gameResult").innerHTML = " ";
  document.getElementById("points").innerHTML = " ";
  document.getElementById('die1').innerHTML = " ";
  document.getElementById('die2').innerHTML =  " ";
  document.getElementById("roll").disabled = false;
}

button.addEventListener('click', function(){
  rollDice();
});

reset.addEventListener('click', function(){
  resetGame();
});
