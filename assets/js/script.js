const sheepContainer = document.querySelector("#sheep-container");
const submitButton = document.querySelector("#submit");

const sheepImages = [
  "assets/images/green-sheep1.png",
  "assets/images/green-sheep2.jpg",
  "assets/images/green-sheep3.jpg"
];

const minSheep = 5;
const maxSheep = 10;

submitButton.addEventListener("click", function() {
    checkAnswer();
    setUpGameArea();
  });
  
  function checkAnswer() {}

  // Clear the game area, and add random number of sheep images.

  function getRandomNumber(x) {
    return Math.floor(Math.random)*(x)
  }


function setUpGameArea() {
  sheepContainer.innerHTML = "";

  let numSheep = getRandomNumber(maxSheep);

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
}
