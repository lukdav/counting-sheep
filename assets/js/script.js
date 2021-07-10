const sheepContainer = document.getElementById("sheep-container");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");

const sheepImages = [
  "assets/images/sheep1.png",
  "assets/images/sheep2.png",
  "assets/images/sheep3.png",
  "assets/images/sheep4.png"
];

const minSheep = 5;
const maxSheep = 30;
let numSheep = minSheep;
let totalSheep = 0;
let numIncorrect = 0;

startButton.addEventListener("click", function() {
  startTimer();
  setUpGameArea();
});

restartButton.addEventListener("click", function() {
  startTimer();
  setUpGameArea();
});

submitButton.addEventListener("click", function() {
    checkAnswer();
    setUpGameArea();
  });
  

  // Get random number between 0 and x

  function getRandomNumber(x) {
    return Math.floor(Math.random() * x);
  }

// Clear game area and add random number of sheep.

function setUpGameArea() {
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
  let randomSheepIndex = getRandomNumber(sheepImages.length - 1);

  // <img src=..>
  sheepImage.setAttribute("src", sheepImages[randomSheepIndex]);

  // <img src=.. alt="A sheep">
  sheepImage.setAttribute("alt", "Sheep image");

  let leftCoordinate = getRandomNumber(90);
  let topCoordinate = getRandomNumber(90);

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

  if (correctAnswer) {
    alert("Correct number of sheep");
    correctScore();
  } else {
    alert("Wrong number of sheep");
    incorrectScore(userAnswer - numSheep)
  }

}

function correctScore() {

  document.getElementById("total").innerText = totalSheep;
}

function incorrectScore(incorrectBy) {

  numIncorrect += Math.abs(incorrectBy)

  document.getElementById("incorrect").innerText = numIncorrect;
  document.getElementById("total").innerText = totalSheep;
}

function runTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.innerText = minutes + ":" + seconds;

      if (--timer < 0) {
        display.innerText = "00:00";
        endGame();
      }
  }, 1000);
}

function startTimer() {
    var twoMinutes = 60 * 2,
      display = document.querySelector('#timer-box');
      runTimer(twoMinutes, display);
  };

  function endGame() {
    sheepContainer.innerHTML = 
    `<div class="end-container container-fluid">
      <div class="end jumbotron text-center">
        <h4>Times up!</h4>
        <p>You correctly counted ${totalSheep} sheep!</p>
        
        <p>Well done!</p>
        <p>That’s some going,</p>
        <p>but there’s no time to rest!</p>
        <p>There’s always more sheep to count!</p>
        <br>
        <button id="start" class="btn btn-light">Restart</button>
      </div>
    </div>`;

  }




