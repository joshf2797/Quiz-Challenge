var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var openingMessage = document.getElementById("opening");
var submit = document.getElementById ("submit");
var input = document.getElementById("input");
var highscores = document.getElementById("highscores");
var scoreboard = document.getElementById("scoreboard");
var question1 = document.getElementById("question1");
var correct1 = document.getElementById("correct1");
var wrong1 = document.getElementById("wrong1");
var wrong1a = document.getElementById("wrong1a");
var question2 = document.getElementById("question2");
var correct2 = document.getElementById("correct2");
var wrong2 = document.getElementById("wrong2");
var wrong2a = document.getElementById("wrong2a");
var question3 = document.getElementById("question3");
var correct3 = document.getElementById("correct3");
var wrong3 = document.getElementById("wrong3");
var wrong3a = document.getElementById("wrong3a");
var timeLeft = 50;
var score = 0;
var downloadTimer;

startBtn.addEventListener("click", function(){
  openingMessage.style.display = "none";
  startBtn.style.display = "none";
  question1.style.display = "block";
    downloadTimer = setInterval(function function1(){
    timer.innerHTML = timeLeft + 
    "&nbsp"+"seconds remaining";
    timeLeft -= 1;
    if(timeLeft === 0){
        clearInterval(downloadTimer);
        timer.innerHTML = "Time is up!"
    }
    }, 1000);
});

  correct1.onclick = function() {
    score += 5;
    question1.style.display = "none";
    question2.style.display = "block";
  
  }
  
  wrong1.onclick = function () {
    timeLeft -= 10;
    question1.style.display = "none";
    question2.style.display = "block";
  
  }

  wrong1a.onclick = function () {
    timeLeft -= 10;
    question1.style.display = "none";
    question2.style.display = "block";
  
  }

  correct2.onclick = function() {
    score += 5;
    question2.style.display = "none";
    question3.style.display = "block";
 
  }

  wrong2.onclick = function () {
    timeLeft -= 10;
    question2.style.display = "none";
    question3.style.display = "block";

  }

  wrong2a.onclick = function () {
    timeLeft -= 10;
    question2.style.display = "none";
    question3.style.display = "block";
  
  }

  correct3.onclick = function() {
    score += 5;
    question3.style.display = "none";
    scoreboard.style.display = "block";
    submit.style.display = "block";
    stopTimer()
  
  }

  wrong3.onclick = function () {
    timeLeft -= 10;
    question3.style.display = "none";
    scoreboard.style.display = "block";
    submit.style.display = "block";
    stopTimer()

  }

  wrong3a.onclick = function () {
    timeLeft -= 10;
    question3.style.display = "none";
    scoreboard.style.display = "block";
    submit.style.display = "block";
    stopTimer()
  }

  function stopTimer() {
    clearInterval(downloadTimer);
    document.getElementById("score-here").innerHTML = "Score " + score;
    timer.innerHTML = "Well Done!"
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

  submit.addEventListener ("click" , function (event) {
    event.preventDefault()
    submit.style.display = "none";
    highscores.style.display = "block";

   var username = input.value;

    localStorage.setItem("Score" , score);
    localStorage.setItem("Username" , username);
    keepScore();
    return;
  })

 
  
 