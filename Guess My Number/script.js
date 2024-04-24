'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number! ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 // document.querySelector('.number').textContent = '?';
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to send message //
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function for display number //

const backColor = function (message) {
  document.querySelector('body').style.backgroundColor = message;
};

// Function for number text //

const secretText = function (message) {
  document.querySelector('.number').textContent = message;
};

// Function for score text //

const scoreText = function (message) {
  document.querySelector('.score').textContent = message;
};

// Function for number width //

const numberWidth = function (message) {
  document.querySelector('.number').style.width = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    secretText(secretNumber);
    backColor('#60b347');
    numberWidth('30rem');
    // document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreText(score);
    } else {
      displayMessage('💥 You lost the game!');
      scoreText(0);
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again / Reset button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreText(score);
  secretText('?');
  document.querySelector('.guess').value = '';
  backColor('#222');
  numberWidth('15rem');
});
