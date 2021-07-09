// Wait for DOM to finish loading before running the game.
// Add event listeners to the buttons.

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

}

function checkAnswer() {

}

function correctScore() {

}

function incorrectScore() {

}

function displaySheep() {

}

function startTimer() {

}

function endTimer() {

}

function addTime() {

}

function subtractTime() {

}