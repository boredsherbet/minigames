const time = document.querySelector('#time');
const score = document.querySelector('#score');
const button = document.querySelector('#start');
const squares = document.querySelectorAll('.grid div');
document.addEventListener('keydown',moveFrog);
const grid = document.querySelectorAll('.grid');
let running = false;
let currentIndex=76;
let timeLeft = 70;
let nocheating;
function moveFrog(e){
    if(running){
    switch (e.key) {
      case "ArrowLeft":
        console.log("moved left");
        if(currentIndex%9!=0){
            currentIndex-=1;
        }
        break;
      case "ArrowRight":
        console.log("moved right");
        if(currentIndex%9!=8){
        currentIndex += 1;
        }
        break;
      case "ArrowUp":
        console.log("moved up");
        if(currentIndex>=9){
        currentIndex-=9;
        }
        break;
      case "ArrowDown":
        console.log("moved down");
        if(currentIndex<=71){
        currentIndex+=9;
        }
        break;
    }
    drawFrog(currentIndex);
}
}
let timerId;
function start(){
    running = !running;
    if(running){
    const start = document.querySelector('.start');
    start.classList.remove('start');
    start.classList.add('frog');
    timerId = setInterval(frame, 800);
    nocheaters = setInterval(checkLoss, 50);
    } if (!running){
        const frog = document.querySelector('.frog');
        frog.classList.remove('frog');
        frog.classList.add('start');
        clearInterval(timerId);
        clearInterval(nocheaters); 
    }
}
function drawFrog(place) {
  const start = document.querySelector(".frog");
  start.classList.remove("frog");
  squares[place].classList.add("frog");
  console.log(squares[place].classList);
  if(squares[place].classList.contains('c1') || timeLeft<=0|| squares[place].classList.contains('l4') || squares[place].classList.contains('l5')){
      clearInterval(timerId);
      running = false; 
      document.removeEventListener('keyup', moveFrog);
      grid.textContent="Truly a disappointment."
  } else if(squares[place].classList.contains('end')){
      clearInterval(timerId);
      running = false;
      document.removeEventListener("keyup", moveFrog);
      grid.textContent="Victory!!!"
  }
}

function frame(){
    const logLefts = document.querySelectorAll('.log-left')
    logLefts.forEach(log => moveLogLeft(log));
    const logRights = document.querySelectorAll('.log-right')
    logRights.forEach(log => moveLogRight(log));
    const carRights = document.querySelectorAll('.car-right');
    carRights.forEach(car => moveCarsRight(car));
    const carLefts = document.querySelectorAll('.car-left');
    carLefts.forEach(car => moveCarsLeft(car));
    timeLeft=timeLeft-0.8;
    time.textContent = timeLeft;
}

function moveLogLeft(log){
    switch (true) {
      case log.classList.contains("l1"):
          log.classList.add('l2');
          log.classList.remove('l1');
        break;
      case log.classList.contains("l2"):
          log.classList.add("l3");
          log.classList.remove('l2');
        break;
      case log.classList.contains("l3"):
          log.classList.add("l4");
          log.classList.remove("l3");
        break;
      case log.classList.contains("l4"):
          log.classList.add("l5");
          log.classList.remove("l4");
        break;
      case log.classList.contains("l5"):
          log.classList.add('l1');
          log.classList.remove('l5');
        break;
    }
}
function moveLogRight(log) {
  switch (true) {
    case log.classList.contains("l1"):
      log.classList.add("l5");
      log.classList.remove("l1");
      break;
    case log.classList.contains("l2"):
      log.classList.add("l1");
      log.classList.remove("l2");
      break;
    case log.classList.contains("l3"):
      log.classList.add("l2");
      log.classList.remove("l3");
      break;
    case log.classList.contains("l4"):
      log.classList.add("l3");
      log.classList.remove("l4");
      break;
    case log.classList.contains("l5"):
      log.classList.add("l4");
      log.classList.remove("l5");
      break;
  }
}
function moveCarsRight(car){
    switch (true) {
      case car.classList.contains("c1"):
        car.classList.add("c3");
        car.classList.remove("c1");
        break;
      case car.classList.contains("c2"):
        car.classList.add("c1");
        car.classList.remove("c2");
        break;
      case car.classList.contains("c3"):
        car.classList.add("c2");
        car.classList.remove("c3");
        break;
    }
}
function moveCarsLeft(car) {
  switch (true) {
    case car.classList.contains("c1"):
      car.classList.add("c2");
      car.classList.remove("c1");
      break;
    case car.classList.contains("c2"):
      car.classList.add("c3");
      car.classList.remove("c2");
      break;
    case car.classList.contains("c3"):
      car.classList.add("c1");
      car.classList.remove("c3");
      break;
  }
}

function checkLoss(){
      if (
      squares[currentIndex].classList.contains("c1") ||
      squares[currentIndex].classList.contains("l4") ||
      squares[currentIndex].classList.contains("l5") || 
      timeLeft<=0
    ) {
      clearInterval(timerId);
      running = false;
      document.removeEventListener("keyup", moveFrog);
      grid.textContent="Failure. You're a failure."
    } else if (squares[currentIndex].classList.contains("end")) {
      clearInterval(timerId);
      running = false;
      document.removeEventListener("keyup", moveFrog);
      grid.textContent="Victory!!!"
    }
  }