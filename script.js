// Prompt the user for an exam score and assign a letter grade.
let button = document.querySelector("button");
let letterGrade = document.querySelector(".letter-grade");

button.onclick = function() {
    // get the score they typed into the input
    let score = document.querySelector("input").value;

    // play a sound
    let audio = document.querySelector(".audio");
    audio.play();

    // show them a message
    if (score >= 90) {
        letterGrade.innerHTML = "Grade = A<br><em>Nailed it!</em>";
    }
};