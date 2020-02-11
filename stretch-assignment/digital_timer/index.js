const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

const digits = document.querySelectorAll('.digit');

let intervalID;

const secTens = document.querySelector('#secondTens');
const secOnes = document.querySelector('#secondOnes');
const msHunds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

startBtn.addEventListener('click', () => {
  resetTimer();
  timer();
});

resetBtn.addEventListener('click', () => {
  resetTimer();
});

function timer() {
  startBtn.disabled = true;
  intervalID = window.setInterval(tick, 10);
}

function tick() {
  msTens.textContent = parseInt(msTens.textContent) + 1;
  if (msTens.textContent === '10') {
    msTens.textContent = 0;
    msHunds.textContent = parseInt(msHunds.textContent) + 1;
    if (msHunds.textContent === '10') {
      msHunds.textContent = 0;
      secOnes.textContent = parseInt(secOnes.textContent) + 1;
      if (secOnes.textContent === '10') {
        secOnes.textContent = 0;
        secTens.textContent = parseInt(secTens.textContent) + 1;
        window.clearInterval(intervalID);
        makeItRed();
        startBtn.disabled = false;
      }
    }
  }
}

function resetTimer() {
  secTens.textContent = 0;
  secOnes.textContent = 0;
  msHunds.textContent = 0;
  msTens.textContent = 0;
  window.clearInterval(intervalID);
  startBtn.disabled = false;
  makeItBlack();
}

function makeItBlack() {
  digits.forEach(digit => {
    digit.classList.remove('redDigit');
  });
}

function makeItRed() {
  digits.forEach(digit => {
    digit.classList.add('redDigit');
  });
}
