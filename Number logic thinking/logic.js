const secretNumber = 100;

let guessedNumber = 50;

function checkGuess(secretNumber, guessedNumber) {
  if (guessedNumber === secretNumber) {
    return "Correct!";
  } else if (guessedNumber > secretNumber) {
    return "Too high!";
  } else if (guessedNumber < secretNumber) {
    return "Too low!";
  }
}

console.log(checkGuess(secretNumber, guessedNumber));

guessedNumber = 200;

console.log(checkGuess(secretNumber, guessedNumber));

guessedNumber = 0;
console.log(checkGuess(secretNumber, guessedNumber));
