const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const time = document.querySelector('#time');
const score = document.querySelector('#score');
let result = 0;
let molePos = 0;
let currentTime = 60;

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.classList.contains('mole')){
            result++;
            score.textContent = result; 
            placeMole();
        }
    })
})

function placeMole() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  molePos = randomSquare.id;
}

function moveMole (){
    let timerId = null;
    timerId = setInterval(placeMole, 500);
    placeMole();
}

function countDown(){
    currentTime=currentTime-1;
    time.textContent = currentTime;
    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("Time's up b*tch..." + "You only got "+result+" points. ");
    }
}
//Method Calls. 
moveMole();
let countDownTimerId = setInterval(countDown, 1000);