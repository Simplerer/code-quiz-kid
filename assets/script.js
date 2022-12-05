
// var topScores = document.querySelector("#topscores");
var containers = document.querySelectorAll(".container");
var timer = document.getElementById("timer");
var opener = document.getElementById("opener");
var cursor = 0;
var secondsLeft = 60;


opener.addEventListener("click", function() {
    startTimer();
    nextQuestion();
})

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
    event.stopPropagation();
    
    if (element.matches(".container button"))  {
        var dataAnswer = element.getAttribute("data-name");
        if (dataAnswer === "correct") {

        if (cursor < containers.length - 1) {
            cursor++;
        } 
    } else {
        secondsLeft = secondsLeft - 5;
    };

        
    showQuestions();
    // startTimer();
}
}


document.addEventListener("click", nextQuestion);

showQuestions();


