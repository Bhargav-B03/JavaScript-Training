'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20,
  highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // No input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    // guessed number is secret number
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // check whether to update the highscore or not
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // guessed number is greater than secret number
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High...';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 You Lost the game!';
    }
    // guessed number is smaller than secret number
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low...';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
