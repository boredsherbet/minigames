const compChoiceDisp = document.getElementById("compChoice");
const userChoiceDisp = document.getElementById("userChoice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
    userChoice = e.target.id;
    userChoiceDisp.innerHTML = userChoice;
    
}));
function chooseMove(){
    const randomNum = Math.floor(Math.random() * possibleChoices.length()) +1;
    switch(randomNum){
        case 1: 
        compChoiceDisp.innerHTML = "rock";
        break;
        case 2: 
        compChoiceDisp.innerHTML = "scissors";
        break;
        default: 
        compChoiceDisp.innerHTML = "paper";
        break;
    }

}