var playerGuessInput = document.querySelector('.playerGuessInput');
var guessSubmitButton = document.querySelector('.guess-button');
var lastGuess = document.querySelector('.lastGuess');
var clearGuess = document.querySelector('#clear');
var resetForm = document.querySelector('#resetButton');
var userGuess = parseInt(playerGuessInput.value);
var minMax = document.querySelector(".min-Max");
var newMinInput = document.querySelector('.min-Range');
var newMaxInput = document.querySelector('.max-Range');
var min = parseInt(newMinInput.value);
var max = parseInt(newMaxInput.value);
var gameCount = 0;
var newRandom;

guessSubmitButton.addEventListener('click', checkGuess);
playerGuessInput.addEventListener('keyup', disableButton);
resetForm.addEventListener('click', newGame);
minMax.addEventListener('click', randomNumber);

function disableButton() { 
  if (playerGuessInput.value === "") { 
    guessSubmitButton.disabled = true;
    clearGuess.disabled = true;
    resetForm.disabled = true;
  } else { 
    guessSubmitButton.disabled = false; 
    clearGuess.disabled = false;
    resetForm.disabled = false;
  }
}

function newGame() {
   playerGuessInput.value = "";
   newMinInput.value = "";
   newMaxInput.value = "";
   disableButton();
   randomNumber();
}

function adjustMinMax() {
  var userGuess = parseInt(playerGuessInput.value);
  if (userGuess === newRandom) {
    min = parseInt(newMinInput.value) - 10;
    max = parseInt(newMaxInput.value) + 10;
  }
}

function randomNumber() {
  var min = parseInt(newMinInput.value);
  var max = parseInt(newMaxInput.value);
  newRandom = Math.floor(Math.random() * (max - min)) + min;
}

function customGame() {
  var min = parseInt(newMinInput.value);
  var max = parseInt(newMaxInput.value);
  randomNumber();
}

function submitGuess() {
  lastGuess.innerHTML = playerGuessInput.value;
}

function gameCounter() {
 var userGuess = parseInt(playerGuessInput.value);
  if (userGuess === newRandom) {
  gameCount ++;
 } 
}

function checkGuess(event) {
  event.preventDefault();
  var userGuess = parseInt(playerGuessInput.value);
  var displayTwo = document.querySelector('.displayTwo');
  submitGuess();
  adjustMinMax();
  numberRange();
  gameCounter();

    if (userGuess > max || userGuess < min) {
    displayTwo.innerHTML = "NaN";
  } else if (userGuess === newRandom) { 
    displayTwo.innerHTML = "BOOM!";
  } else if (userGuess > newRandom) { 
    displayTwo.innerHTML = "This is to High";
  } else if (userGuess < newRandom) { 
    displayTwo.innerHTML = "This is to Low"; 
  } else {
    displayTwo.innerHTML = "Else";     
  }
}

function numberRange() {
 var min = parseInt(newMinInput.value);
 var max = parseInt(newMaxInput.value);
 var userGuess = parseInt(playerGuessInput.value);
  if (userGuess > max) {
  alert("Your Guess was higher than the Max range");
  } else if (userGuess < min) {
  alert("Your guess was lower than the Min range");
  }
} 


