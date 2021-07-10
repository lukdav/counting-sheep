const sheepContainer = document.getElementById("sheep-container");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("start");

const sheepImages = [
  "assets/images/green-sheep1.png",
  "assets/images/green-sheep2.jpg",
  "assets/images/green-sheep3.jpg"
];

const minSheep = 5;
const maxSheep = 30;
let numSheep = minSheep;
let totalSheep = 0;
let numIncorrect = 0;

startButton.addEventListener("click", function() {
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
  // Gets the current score from the DOM and increments it

  document.getElementById("total").innerText = totalSheep;
}

function incorrectScore(incorrectBy) {
  // Gets the current tally of incorrect answers from the DOM and increments it

  numIncorrect += Math.abs(incorrectBy)

  document.getElementById("incorrect").innerText = numIncorrect;
  document.getElementById("total").innerText = totalSheep;
}




