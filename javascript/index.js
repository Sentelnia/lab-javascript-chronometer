const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
btnLeft.onclick = function(){
  if(btnLeft.innerHTML === 'START') {
    btnLeft.setAttribute('class','btn stop');
    btnLeft.innerHTML = 'STOP';
    chronometer.startClick(printTime);
  } else {
    btnLeft.setAttribute('class','btn start');
    btnLeft.innerHTML = 'START';
    chronometer.stopClick()
  }
}
const btnRight = document.getElementById('btnRight');
btnRight.onclick = function(){
  if (btnRight.innerHTML === "RESET") {
    btnRight.setAttribute('class', 'btn split');
    btnRight.innerHTML = 'SPLIT';
  } else {
    btnRight.setAttribute('class', 'btn reset');
    btnRight.innerHTML = 'RESET';
  }
}


// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let minutes = chronometer.splitClick();
  minDec.innerHTML = minutes[0]
  minUni.innerHTML = minutes[1]
}

function printSeconds() {
  let seconds = chronometer.splitClick();  
  secDec.innerHTML = seconds[3]  
  secUni.innerHTML = seconds[4]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
