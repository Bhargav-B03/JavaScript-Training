'use strict';

let diceNumber,
  scores = [0, 0],
  curScore = 0,
  activePlayer = 0,
  playing = true;
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let dice = document.querySelector('.dice');
dice.classList.add('hidden');

function reset (){
  curScore = 0;
  scores = [0, 0];
  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`#current--0`).textContent = curScore;
  document.querySelector(`#current--1`).textContent = curScore;
  document.querySelector(`#score--0`).textContent = curScore;
  document.querySelector(`#score--1`).textContent = curScore;
  activePlayer = 0;
  playing = true;
}

function switchPlayer() {
  curScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    curScore;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  activePlayer = activePlayer===0 ? 1 : 0;
}

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      curScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        curScore;
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += curScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', reset);
