var timeLeft = 50;
var container = document.getElementsByClassName (".container");
var startBtn = document.getElementsByClassName (".start-btn");
var openingMessage = document.getElementsByClassName (".opening");
var hidden = document.getElementsByClassName (".hidden")
var submit = document.getElementById ("#submit")
var score = 0;
var downloadTimer;

document.getElementById("start").addEventListener("click", function(){
  document.getElementById("opening").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("question1").style.display = "block";
    downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeLeft + 
    "&nbsp"+"seconds remaining";
    timeLeft -= 1;
    if(timeLeft === 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!"
    }
    }, 1000);
});

  document.getElementById("correct1").onclick = function() {
    score += 5;
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
  
  }
  
  document.getElementById("wrong1").onclick = function () {
    timeLeft -= 10;
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
  
  }

  document.getElementById("wrong1a").onclick = function () {
    timeLeft -= 10;
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
  
  }

  document.getElementById("correct2").onclick = function() {
    score += 5;
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
 
  }

  document.getElementById("wrong2").onclick = function () {
    timeLeft -= 10;
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";

  }

  document.getElementById("wrong2a").onclick = function () {
    timeLeft -= 10;
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
  
  }

  document.getElementById("correct3").onclick = function() {
    score += 5;
    document.getElementById("question3").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("submit").style.display = "block";
    stopTimer()
  
  }

  document.getElementById("wrong3").onclick = function () {
    timeLeft -= 10;
    document.getElementById("question3").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("submit").style.display = "block";
    stopTimer()

  }

  document.getElementById("wrong3a").onclick = function () {
    timeLeft -= 10;
    document.getElementById("question3").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("submit").style.display = "block";
    stopTimer()
  }

  function stopTimer() {
    clearInterval(downloadTimer);
    document.getElementById("score-here").innerHTML = "Score " + score;
 }

  function keepScore () {
    var score = localStorage.getItem("score");
    var username = localStorage.getItem("username")
    console.log(typeof score)
    console.log(typeof username)
  
    if (!score || !username) {
      return;
    }
  }

  document.getElementById ("submit").addEventListener ("click" , function (event) {
    event.preventDefault()
    document.getElementById("submit").style.display = "none";
    document.getElementById("highscores").style.display = "block";

   var username = document.getElementById("input").value;

    localStorage.setItem("Score" , score);
    localStorage.setItem("Username" , username);
    keepScore();
    return;
  })

 
  
 