var header = document.createElement("h1");

header.textContent = "Here is a connection";

document.body.appendChild(header)

var nextEl = document.querySelector('#next');
var cursor = 0;

var questions = ["a", "b", "c", "d"];

var displayQuestion = function() {
    nextEl.textContent = questions[cursor];
};

var advance = function() {
    if (cursor < questions.length - 1) {
        cursor++;
        displayQuestion()
    }
};

nextEl.addEventListener('click', advance);

displayQuestion();