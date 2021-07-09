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
    setUpCanvas();
  });
  
  function checkAnswer() {}
  