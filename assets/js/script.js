const sheepContainer = document.getElementById("sheep-container");
const submitButton = document.getElementById("submit");

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

  // Get random number between 0 and x

  function getRandomNumber(x) {
    return Math.floor(Math.random)*(x)
  }

// Clear game area and add random number of sheep.

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

  // Select a random sheep image.
  let randomSheepIndex = getRandomNumber(sheepImages.length - 1);

  // <img src=..>
  sheepImage.setAttribute("src", sheepImages[randomSheepIndex]);

  // <img src=.. alt="A sheep">
  sheepImage.setAttribute("alt", "Sheep image");

  let leftCoordinate = getRandomNumber(100);
  let topCoordinate = getRandomNumber(100);

  sheepImage.setAttribute(
    "style",
    `left: ${leftCoordinate}%;
    top: ${topCoordinate}%;`
  );

  sheepContainer.appendChild(sheepImage);
}


