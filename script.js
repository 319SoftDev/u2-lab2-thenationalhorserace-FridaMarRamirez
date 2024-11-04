console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

let randomNumber = Math.floor(Math.random() * 3);

// Query Selectors Here
// blue horse 
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
// pink horse
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
// brown horse
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");
// defining the winner
const horseWinner = document.querySelector("#winner");
// restarting the game
const restartGame = document.querySelector("#restart-button");
// steps button that randomizes the steps
const stepsButton = document.querySelector("#steps-button");
const steps = document.querySelector("#steps")

restartGame.disabled = true;
restartGame.style.display = "none";

// disabling buttons
const disableButton = () => {
  if (blue_position >= 5 || pink_position >= 5 || brown_position >= 5){
    blueButton.disabled = true;
    pinkButton.disabled = true;
    brownButton.disabled = true;
    restartGame.disabled = false;
  }
}

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  disableButton();
  return checkWinner();
}

const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  disableButton();
  return checkWinner();
};

const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  disableButton();
  return checkWinner();
};

const randomSteps = (e) => {
  steps.innerHTML = "Move " + randomNumber + " steps.";
}


// Check for a winner
const checkWinner = (position, color) => {
  if (blue_position == 5) {
    horseWinner.innerHTML = '<p>Blue is the Winner!</p>';
    restartGame.style.display = "block";
  } else if (pink_position == 5) {
    horseWinner.innerHTML = '<p>Pink is the Winner!</p>';
    restartGame.style.display = "block";  
  } else if (brown_position == 5) {
    horseWinner.innerHTML = '<p>Brown is the Winner!</p>';
    restartGame.style.display = "block";
  }
};


// Restarting the game
const newGame = (e) => {
  blue_position = 1;
  pink_position = 1;
  brown_position = 1;
  horseWinner.innerHTML = '';
  blueButton.disabled = false;
  pinkButton.disabled = false;
  brownButton.disabled = false;
  restartGame.disabled = true;
  restartGame.style.display = "none";
}

// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);
restartGame.addEventListener("click", newGame);
stepsButton.addEventListener("click", randomSteps);