
var topScores = document.querySelector("#topscores");
var containers = document.querySelectorAll(".container");
var cursor = 0;

var showQuestions = function() {
    for (var item of containers) {
        console.log(item);
        if (item.dataset.index != cursor) {

            item.style.display = "none";
        }
}
}

var nextQuestion = function(event) {
    var element = event.target;
    
    if (element.matches("container"))  {
        if (cursor < containers.length) {
            cursor++;

    }
    showQuestions();
}
}

showQuestions();


// var questions = ["a", "b", "c", "d"];

// var displayQuestion = function() {
//     nextEl.textContent = questions[cursor];
// };

// var advance = function() {
//     if (cursor < questions.length - 1) {
//         cursor++;
//         displayQuestion()
//     }
// };

// nextEl.addEventListener('click', advance);

// displayQuestion();