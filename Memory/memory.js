
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var cards = ["images/cobol.png", "images/cobol.png", "images/csharp.png",
            "images/csharp.png", "images/css.png", "images/css.png",
            "images/elixir.png", "images/elixir.png", "images/html.png",
            "images/html.png", "images/java.png", "images/java.png",
            "images/nodejs.png", "images/nodejs.png", "images/ocaml.jpg",
            "images/ocaml.jpg", "images/php.png", "images/php.png",
            "images/python.jpg", "images/python.jpg", "images/r.jpg",
            "images/r.jpg", "images/ruby.png", "images/ruby.png",
            "images/rust.png", "images/rust.png", "images/sql.png",
            "images/sql.png", "images/swift.png", "images/swift.png",
            "images/vb.jpg", "images/vb.jpg", "images/c.png",
            "images/c.png", "images/js.png", "images/js.png"];

// max = 36;

var max = 36;

function randomizeCards(){
  cards = ["images/cobol.png", "images/cobol.png", "images/csharp.png",
              "images/csharp.png", "images/css.png", "images/css.png",
              "images/elixir.png", "images/elixir.png", "images/html.png",
              "images/html.png", "images/java.png", "images/java.png",
              "images/nodejs.png", "images/nodejs.png", "images/ocaml.jpg",
              "images/ocaml.jpg", "images/php.png", "images/php.png",
              "images/python.jpg", "images/python.jpg", "images/r.jpg",
              "images/r.jpg", "images/ruby.png", "images/ruby.png",
              "images/rust.png", "images/rust.png", "images/sql.png",
              "images/sql.png", "images/swift.png", "images/swift.png",
              "images/vb.jpg", "images/vb.jpg", "images/c.png",
              "images/c.png", "images/js.png", "images/js.png"];

    for (var i = 1; i < 37; i++) {
      var index = getRandomInt(max);
      console.log("card" + i)
      document.getElementById("card" + i).src = cards[index];
      cards.splice(index, 1);
      max--;
      console.log(cards.length);
      console.log(cards);
    }
}

var counter = 0;
var guess1;
var guessElem1;
var guess2;
var guessElem2;

function cardFlip(){
  var elemId = document.getElementById(event.target.id);

  elemId.style.opacity = "1";
  elemId.style.backgroundColor = "white";

  switch (counter) {
    case 0:
      guessElem1 = event.target.id;
      guess1 = elemId.src;
      document.getElementById(guessElem1).style.pointerEvents = "none";
      counter++;
      break;

    case 1:
      guessElem2 = event.target.id;
      guess2 = elemId.src;
      document.getElementById(guessElem2).style.pointerEvents = "none";

    case 2:
    counter = 0;
    if (guess1 === guess2){
      console.log("hello");
      // document.getElementById(guessElem1).style.pointerEvents = "none";
      // document.getElementById(guessElem2).style.pointerEvents = "none";
    } else {

      for (var i = 1; i < 37; i++) {
        document.getElementById("card" + i).style.pointerEvents = 'none';
      }

      setTimeout(function(){

        for (var i = 1; i < 37; i++) {
          document.getElementById("card" + i).style.pointerEvents = 'auto';
        }

        document.getElementById(guessElem1).style.opacity = "0";
        document.getElementById(guessElem2).style.opacity = "0";
        // document.getElementById(guessElem1).style.pointerEvents = 'auto';
        // document.getElementById(guessElem2).style.pointerEvents = 'auto';
      }, 1000);
    }
  }
}


function reset(){
  max = 36;
  randomizeCards();
  countdown(1);

  for (var i = 1; i < 37; i++) {
    document.getElementById("card" + i).style.opacity = "0";
    document.getElementById("card" + i).style.pointerEvents = 'auto';
  }
}

function playConcentration(){
  document.getElementById("board").style.pointerEvents = 'none';

  document.getElementById('start').addEventListener('click', function(){
    reset();
  });
}

// code below was written by Navaneeth M, found at
// http://navaneeth.me/simple-countdown-timer-using-javascript/#.Wz7eA9JKjIU

var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            timeoutHandle=setTimeout(tick, 1000);
        } else {
            if(mins > 1){
               // countdown(mins-1);   never reach “00″ issue solved: Contributed by Victor Streithorst
               setTimeout(function () { countdown(mins - 1); }, 1000);
            }
        }
    }
    tick();
  }
