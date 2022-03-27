const compChoiceDisp = document.getElementById("compChoice");
const userChoiceDisp = document.getElementById("userChoice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
possibleChoices.forEach(possibleChoice).addEventListener(click, (e)=> {
    userChoice = e.target.id;
    userChoiceDisp.innerHTML = userChoice;
})
