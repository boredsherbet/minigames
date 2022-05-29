const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const time = document.querySelector('#timeLeft');
const score = document.querySelector('#score');
let result = 0;
let molePos = 0;
let currentTime = 60;
function placeMole(){
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    let randPos = squares(Math.floor(Math.random()*squares.length));
    randPos.classList.add('mole');
    molePos = randPos.id;
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.classList.contains('mole')){
            result++;
            score.textContent = result; 
            placeMole();
        }
    })
})

function moveMole (){
    let timerId = null;
    timerId = setInterval(placeMole, 500);
    placeMole();
}

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime = 0){
        clearInterval(countDownTimerId);
        alert("Time's up b*tch..." + "You only got "+result+" points. ");
    }
}
//Method Calls. 
moveMole();
let countDownTimerId = setInterval(countDown, 1000)