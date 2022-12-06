
var topScores = document.querySelector("#topscores");
var containers = document.querySelectorAll(".container");
var timer = document.getElementById("timer");
var opener = document.getElementById("opener");
var closer = document.getElementById("closer");
var stopTimer = document.getElementById("stopTimer");
var cursor = 0;
var secondsLeft = 60;
var timerInterval;
var scoredTime;


opener.addEventListener("click", function() {
    startTimer();
    showQuestions();
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
        
        timerInterval = setInterval(function() {
            secondsLeft--;
            countDown();
            
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                timer.textContent = "Out of Time!";
                scoredTime = 0;
                Scoring();
                
            }
            
        }, 1000)
        
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
        } else if (dataAnswer === "done") {
            cursor++;
            scoredTime = secondsLeft;
            console.log(scoredTime);
            Scoring();
        }else {
            secondsLeft = secondsLeft - 5;
        }
        
        
        showQuestions();
    }
}

var Scoring = function() {
    clearInterval(timerInterval)
    localStorage.setItem("timeScore", scoredTime);
}

var initialSubmit = function(event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value;
    localStorage.setItem("ititials", initials);
}



document.addEventListener("click", nextQuestion);

showQuestions();


