
// var topScores = document.querySelector("#topscores");
var containers = document.querySelectorAll(".container");
var cursor = 0;


var startTimer = function() {

    nextQuestion();
}
var showQuestions = function() {
    for (var item of containers) {
        console.log(item);
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
        if (cursor < containers.length - 1) {         
            
            cursor++;
        

    }
    showQuestions();
}
}

document.addEventListener('click', startTimer);
document.addEventListener('click', nextQuestion);
showQuestions();


