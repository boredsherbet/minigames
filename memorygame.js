const cardArray = [
  {
    name: "fries",
    img: "memorycards/fries.png",
  },
  {
    name: "cheeseburger",
    img: "memorycards/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "memorycards/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "memorycards/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "memorycards/milkshake.png",
  },
  {
    name: "pizza",
    img: "memorycards/pizza.png",
  },
  {
    name: "fries",
    img: "memorycards/fries.png",
  },
  {
    name: "cheeseburger",
    img: "memorycards/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "memorycards/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "memorycards/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "memorycards/milkshake.png",
  },
  {
    name: "pizza",
    img: "memorycards/pizza.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector("#grid");
const result = document.querySelector("#result");
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("data-id", i);
    card.setAttribute("src", "memorycards/blank.png");
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}
createBoard();
let lastChosen = [];
const lastChosenIds = [];
const matches = [];
function flipCard() {
  const cardId = this.getAttribute('data-id');
  this.setAttribute("src", cardArray[cardId].img);
  lastChosenIds.push(cardId);
  lastChosen.push(cardArray[cardId].name);
  if (lastChosen.length == 2) {
    setTimeout(checkMatch, 500);
    lastChosen;
  }
}
function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  if(lastChosenIds[0]==lastChosenIds[1]){
      let id = lastChosenIds[0];
      let name = lastChosen[0];
      lastChosen = [];
      lastChosen.push(name);
      lastChosenIds.push(id);
  } else if (lastChosen[0] == lastChosen[1]) {
    alert("Hmmm. you found a match. took you long enough.");
    cards[lastChosenIds[0]].setAttribute("src", "memorycards/white.png");
    cards[lastChosenIds[1]].setAttribute("src", "memorycards/white.png");
    cards[lastChosenIds[0]].removeEventListener('click', flipCard);
    cards[lastChosenIds[1]].removeEventListener("click", flipCard);
    matches.push(lastChosen);
    lastChosen = [];
    result.innerHTML = matches.length;
  } else{
    cards[lastChosenIds[0]].setAttribute("src", "memorycards/blank.png");
    cards[lastChosenIds[1]].setAttribute("src", "memorycards/blank.png");
  }
  if(matches.length==cardArray.length/2){
      result.innerHTML = "You Won!"
  }
  
}
