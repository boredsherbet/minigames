const grid = document.querySelector(".grid");
const blockHeight = 20;
const blocks = [];
const max = 800;
let userPos = 350;
let ballPos = [390, 50]
let score = 0;
class Block {
    constructor(xAxis, yAxis, blockWidth){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis+blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis+blockHeight];
        this.topRight = [xAxis+blockWidth, yAxis+blockHeight];
        blocks.push(this);
    }
}
function drawBlock(x,y, blockWidth) {
    console.log("block being created on "+x+","+y+" with a width of "+blockWidth+" px. ")
  new Block(x,y, blockWidth);
  const block = document.createElement("div");
  block.classList.add("block");
  var width = blockWidth+'px'
  var q = x+ 'px'
  var j = y+'px'
  block.style.width = width;
  block.style.left = q;
  block.style.bottom = j; 
  grid.appendChild(block); //from the bottom of the grid
}
function drawBall() {
  ball.style.left = ballPos[0] + "px";
  ball.style.bottom = ballPos[1] + "px";
}
function drawAllBlocks(numBlocks){
    let rand = 40+Math.floor(Math.random() * 180);
    drawBlock(0,370, rand);
    let y = 370;
    let x = rand;
    for(let i = 0; i<numBlocks-1; i++){
        if(x!=0){
            try {
              x = blocks[i].bottomRight[0];
            } catch (ex) {
                x=0;
            }
        }
        rand = 40 + Math.floor(Math.random() * 180);
        if(x+rand>max){
            rand = max-x;
            if(rand<30){
                y -= 30;
                rand = 40 + Math.floor(Math.random() * 180);
                drawBlock(0, y, rand);
                x = rand;
                continue;
            }
        }
        drawBlock(x, y, rand);
        
    }
}
drawAllBlocks(25);
//USER
const user = document.createElement('div');
user.classList.add('paddle');
user.style.left=userPos+'px';
user.style.bottom = '10px';
grid.appendChild(user);
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft': 
        if(userPos-10<0){userPos=0;}
        else{userPos -= 10;}
        break;
        case 'ArrowRight': 
        if (userPos + 10 > 700) {
          userPos = 700;
        } else {
          userPos += 10;
        }
        break;
    }
    user.style.left = userPos + "px";
}
document.addEventListener('keydown',moveUser);
//and now for the ball. 
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);
let xDir = 2;
let yDir = 2;
function moveBall(){
    ballPos[0]+=xDir;
    ballPos[1]+=yDir;
    checkCollide();
    drawBall();
}
//change directions
function checkCollide(){
    if(ballPos[0]>userPos&&ballPos[0]<userPos+100 && ballPos[1]<=30){
        bounce();
        return;
    }
    const allBlocks = Array.from(document.querySelectorAll(".block"));
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]; 
        if(ballPos[0]<=block.bottomRight[0] && ballPos[0]>=block.bottomLeft[0] && ballPos[1]<=block.topLeft[1] && ballPos[1]>=block.bottomRight[1]){
            bounce();
            allBlocks[i].classList.remove("block");
            score+=(220-(block.bottomRight[0]-block.bottomLeft[0]));
            document.getElementById('score').innerText = "Score: "+score;
            blocks.splice(i,1);
            break;
        }
    }
    if (ballPos[1]<30){
        clearInterval(timerId);
        endgame();
        return;
    } else if(ballPos[0]>=780){
        bounce();
    } else if (ballPos[0]<=0){
        bounce();
    } else if(ballPos[1]>=380){
        bounce();
    } 
    return;
}
function bounce() {
  if (xDir === 2 && yDir === 2) {
    yDir = -2;
    return;
  }
  if (xDir === 2 && yDir === -2) {
    xDir = -2;
    return;
  }
  if (xDir === -2 && yDir === -2) {
    yDir = 2;
    return;
  }
  if (xDir === -2 && yDir === 2) {
    xDir = 2;
    return;
  }
}
function endgame(){
    if(checkwin()){
        grid.classList.remove("grid");
        grid.classList.add("message");
        grid.textContent = "You Won!";
    } else{
        grid.classList.remove("grid");
        grid.classList.add("message");
        grid.textContent = "Welp. you lost. failure. "
    }
}
function checkwin(){
    if(blocks.length<=0){
        return true;
    } else{
        return false; 
    }
}
timerId = setInterval(moveBall, 20);
