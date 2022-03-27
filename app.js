const compChoiceDisp = document.getElementById("compChoice");
const userChoiceDisp = document.getElementById("userChoice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
    userChoice = e.target.id;
    userChoiceDisp.innerHTML = userChoice;
    chooseMove();
}));
function chooseMove(){
    const randomNum = Math.floor(Math.random() * possibleChoices.length()) +1;
    switch(randomNum){
        case 1: 
        compChoice = "rock";
        break;
        case 2: 
        compChoice = "scissors";
        break;
        case 3: 
        compChoice = "paper";
        break;
    }
    compChoiceDisp.innerHTML = compChoice;

}