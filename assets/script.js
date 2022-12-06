
var topScores = document.querySelector("#topscores");
var containers = document.querySelectorAll(".container");
var timer = document.getElementById("timer");
var opener = document.getElementById("bigbutton");
var closer = document.getElementById("closer");
var stopTimer = document.getElementById("stopTimer");
var initials = document.getElementById("initials");
var cursor = 0;
var secondsLeft = 60;
var timerInterval;
var scoredTime;



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
                timer.textContent = "Game Over!";
                scoredTime = 0;
                cursor = 6;
                showQuestions();
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
        }else { if (secondsLeft > 6) {
            secondsLeft = secondsLeft - 5;
        }
        }
        
        
        showQuestions();
    }
}

var Scoring = function() {
    clearInterval(timerInterval)
    localStorage.setItem("timeScore", scoredTime);
}


opener.addEventListener("click", function() {
    startTimer();
    showQuestions();
})

document.addEventListener("click", nextQuestion);

showQuestions();


