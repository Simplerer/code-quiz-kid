
// var topScores = document.querySelector("#topscores");
var containers = document.querySelectorAll(".container");
var timer = document.getElementById("timer");
var cursor = 0;
var secondsLeft = 60;


var countDown = function() {
    var tickTock = " seconds";
        if (secondsLeft === 1) {
            tickTock = " second";
        }
        timer.textContent = secondsLeft + tickTock;

}

var startTimer = function() {
    countDown();
        
    var clockTimer = setInterval(function() {
        secondsLeft--;
        countDown();

        if (secondsLeft === 0) {
            clearInterval(clockTimer);
            //run form page for highscores
        }

    }, 1000)

    nextQuestion();
}
var showQuestions = function() {
    for (var item of containers) {
        
        if (item.dataset.index != cursor) {

            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
}
}

var nextQuestion = function(event) {
    var element = event.target;
    
    if (element.matches(".container button"))  {
        var dataAnswer = element.getAttribute("data-name");
        if (dataAnswer === "correct") {

        if (cursor < containers.length - 1) {
            cursor++;
        } 

        if (cursor > 0 && cursor < 2) {
            startTimer();
        }
    }
    showQuestions();
    // startTimer();
}
}


document.addEventListener('click', nextQuestion);
showQuestions();


