console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


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
const restartGame = document.querySelector("#restart");

restartGame.disabled = true;


// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  return checkWinner();
};

const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position)
  return checkWinner();
};

const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  return checkWinner();
};

const newGame = (e) => {
  if ()
}

// Check for a winner
const checkWinner = (position, color) => {
  if (blue_position == 5) {
    horseWinner.innerHTML = '<p>Blue is the Winner!</p>';
    blueButton.disabled = true;
    pinkButton.disabled = true;
    brownButton.disabled = true;
  }
  else if (pink_position == 5) {
    horseWinner.innerHTML = '<p>Pink is the Winner!</p>';
    blueButton.disabled = true;
    pinkButton.disabled = true;
    brownButton.disabled = true;
  }
  else if (brown_position == 5) {
    horseWinner.innerHTML = '<p>Brown is the Winner!</p>';
    blueButton.disabled = true;
    pinkButton.disabled = true;
    brownButton.disabled = true;
  }
};



// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);