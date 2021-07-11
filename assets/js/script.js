const sheepContainer = document.getElementById("sheep-container");
const gameContainer = document.getElementById("game-container");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("start");

const sheepImages = [
  "assets/images/sheep1.png",
  "assets/images/sheep2.png",
  "assets/images/sheep3.png",
  "assets/images/sheep4.png"
];

const minSheep = 5;
const maxSheep = 30;
let numSheep = minSheep;
let oldScore = 0;
let totalSheep = 0;
let newScore = 0;
let numIncorrect = 0
let handle = "";

document.querySelector("#submit").setAttribute("disabled", true);
document.querySelector("#answer-box").setAttribute("disabled", true);

startButton.addEventListener("click", function() {
  startTimer();
  setUpGameArea();
});

submitButton.addEventListener("click", function() {
    checkAnswer();
    setUpGameArea();
  });

  document.getElementById("answer-box").addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        checkAnswer();
        setUpGameArea();
    }
  });

  function restart() {
    clearInterval(handle);
    totalSheep = 0;
    document.querySelector("#correct").innerText = "0";
    numIncorrect = 0;
    document.querySelector("#incorrect").innerText = "0";
    document.querySelector('#timer-box').innerHTML = "";
    startTimer();
    setUpGameArea();
  }
  

  // Get random number between 0 and x

  function getRandomNumber(x) {
    return Math.floor(Math.random() * x);
  }

// Clear game area and add random number of sheep.

function setUpGameArea() {
  document.querySelector("#submit").removeAttribute("disabled");
  let answerBox = document.querySelector("#answer-box");
  answerBox.removeAttribute("disabled");
  answerBox.value = "";
  answerBox.focus();

  sheepContainer.innerHTML = "";
  console.log("Before generation: " + numSheep)
  numSheep = getRandomNumber(maxSheep);
  console.log("After generation: " + numSheep);
  totalSheep += numSheep;
  console.log(totalSheep);


  while (numSheep < minSheep) {
    numSheep = getRandomNumber(maxSheep);
  }

  for (let i = 0; i < numSheep; i++) {
    generateSheepImage();
  }
}

// Generate a sheep image with random coordinates (left, top)


function generateSheepImage() {
  const sheepImage = document.createElement("img");

  // Select a random sheep image.
  let randomSheepIndex = getRandomNumber(sheepImages.length);

  // <img src=..>
  sheepImage.setAttribute("src", sheepImages[randomSheepIndex]);

  // <img src=.. alt="A sheep">
  sheepImage.setAttribute("alt", "Sheep image");

  let leftCoordinate = getRandomNumber(80);
  let topCoordinate = getRandomNumber(80);

  sheepImage.setAttribute(
    "style",
    `left: ${leftCoordinate}%;
    top: ${topCoordinate}%;`
  );

  sheepContainer.appendChild(sheepImage);
}



// Check the user's answer against the randomly generated number of sheep.

function checkAnswer() {

  let userAnswer = parseInt(document.getElementById("answer-box").value);
  console.log("CheckAnswer: " + numSheep);
  let correctAnswer = userAnswer === numSheep;
  
  // If NaN is given an an answer, it is replaced with a zero.
  if (isNaN(userAnswer)) userAnswer = 0;

  if (correctAnswer) {
    correctMessage();
    correctScore();
  } else {
    incorrectMessage();
    incorrectScore(userAnswer - numSheep)
  }
}


function correctScore() {
  oldScore = parseInt(document.getElementById("correct").innerText);
  document.getElementById("correct").innerText = numSheep + oldScore;
}

function incorrectScore(incorrectBy) {
  numIncorrect += Math.abs(incorrectBy)

  document.getElementById("incorrect").innerText = numIncorrect;

  newScore = numSheep - numIncorrect;

  oldScore = parseInt(document.getElementById("correct").innerText);
  document.getElementById("correct").innerText = oldScore + newScore;

  if ((oldScore + newScore) < 0) {
    document.getElementById("correct").innerText = 0;
  }
}

function runTimer(duration, display) {
  var timer = duration, minutes, seconds;
  handle = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.innerText = minutes + ":" + seconds;

      if (isNaN(minutes)) minutes = 0;
      if (isNaN(seconds)) seconds = 0;

      if (--timer < 0) {
        display.innerText = "00:00";
        endGame();
        document.querySelector("#submit").setAttribute("disabled", true);
        document.querySelector("#answer-box").setAttribute("disabled", true);
      }
  }, 1000);
}

function startTimer() {
    var twoMinute = 60 * 2,
      display = document.querySelector('#timer-box');
      runTimer(twoMinute, display);
  };

  function endGame() {
    sheepContainer.innerHTML = 
    `<div class="end-container container-fluid">
      <div class="end jumbotron text-center">
        <h4>Times up!</h4>
        <p>You correctly counted ${document.getElementById("correct").innerText} sheep</p>
        <p>from a total of ${(parseInt(document.getElementById("correct").innerText)) + numIncorrect}!</p>
        <p>Well done!</p>
        <p>That’s some going,</p>
        <p>but there’s no time to rest!</p>
        <p>There’s always more sheep to count!</p>
        <br>
        <button onclick="restart()" id="restart" class="btn btn-light">Restart</button>
      </div>
    </div>`;
  }

  function correctMessage() { 
    let scoreMessage = document.getElementById("score-message");
    scoreMessage.innerHTML =
    `<div id="message" class="jumbotron text-center">
      <p>Correct!</p>
    </div>`;

    $("#message").fadeOut(3000);
  }

  function incorrectMessage() { 
    let scoreMessage = document.getElementById("score-message");
    scoreMessage.innerHTML =
    `<div id="message" class="jumbotron text-center">
      <p>Wrong!</p>
    </div>`;

    $("#message").fadeOut(3000);
  }
