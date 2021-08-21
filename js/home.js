const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("ComputerHand");
const choices = document.querySelectorAll(".choice-img");
const computerCounter = document.getElementById("computerCounter");
const playerCounter = document.getElementById("playerCounter");
const popMsg = document.getElementById("pop");
const popImg = document.getElementById("popImg");
const continueBtn = document.getElementById("continue");
const restartBtn = document.getElementById("restart");

const startMove = () =>{
  playerHand.classList = "handL";
  computerHand.classList = "handR";
}
const endMove = () =>{
  playerHand.classList = "hand";
  computerHand.classList = "hand";
}


const generateComputerMove = () => {
  let min = Math.ceil(1);
  let max = Math.floor(3);
  let random =  Math.floor(Math.random() * (max - min + 1) + min);
  computerHand.setAttribute("src", `../assets/images/R${random}.png`);
  let id;
  switch(random){
    case 1: id = "rock";break;
    case 2: id = "paper";break;
    case 3: id = "scissors";break;
  }
  computerHand.setAttribute("id", `${id}`);
};

let isWin = false;
let draw = false;
const checkWinner = () => {
  isWin = false;
  draw = false;

  if(computerHand.id == playerHand.id)
    draw = true;
  else if(computerHand.id == "rock" && playerHand.id == "scissors")
    computerCounter.textContent = parseInt(computerCounter.textContent)+1;
  else if(computerHand.id == "paper" && playerHand.id == "rock")
    computerCounter.textContent = parseInt(computerCounter.textContent)+1;
  else if(computerHand.id == "scissors" && playerHand.id == "paper")
    computerCounter.textContent = parseInt(computerCounter.textContent)+1;

  else if(playerHand.id == "rock" && computerHand.id == "scissors"){
    playerCounter.textContent = parseInt(playerCounter.textContent)+1;
    isWin = true;
  }
  else if(playerHand.id == "paper" && computerHand.id == "rock"){
    playerCounter.textContent = parseInt(playerCounter.textContent)+1;
    isWin = true;
  }
  else if(playerHand.id == "scissors" && computerHand.id == "paper"){
    playerCounter.textContent = parseInt(playerCounter.textContent)+1;
    isWin = true;
  }
}

const displayMsgImage = () => {
  if(draw)
  popImg.setAttribute("src", "../assets/images/draw.png");
  else if(isWin)
  popImg.setAttribute("src", "../assets/images/win.png");
  else
  popImg.setAttribute("src", "../assets/images/lose.png");
   

  popMsg.setAttribute("style","display:block;")
}

const hideMsgImage = () => {
  popMsg.setAttribute("style","display:none;")
  playerHand.setAttribute("src", "../assets/images/L1.png");
  computerHand.setAttribute("src", "../assets/images/R1.png");
}


const displayRock = () => {
  startMove();
  setTimeout(()=> {
    endMove();
    playerHand.setAttribute("src", "../assets/images/L1.png");
    playerHand.setAttribute("id", "rock");
    generateComputerMove();
    checkWinner();
    displayMsgImage();
  }, 3000);
};
const displayPaper = () => {
  startMove();
  setTimeout(()=> {
    endMove();
    playerHand.setAttribute("src", "../assets/images/L2.png");
    playerHand.setAttribute("id", "paper");
    generateComputerMove();
    checkWinner();
    displayMsgImage();
  }, 3000);
  
};

const displayScissors = () => {
  startMove();
  setTimeout(()=> {
    endMove();
    playerHand.setAttribute("src", "../assets/images/L3.png");
    playerHand.setAttribute("id", "scissors");
    generateComputerMove();
    checkWinner();
    displayMsgImage();
  }, 3000);
};

const restart = () =>{
  computerCounter.textContent = 0;
  playerCounter.textContent = 0;
}

continueBtn.addEventListener("click", hideMsgImage);
restartBtn.addEventListener("click", restart);

choices[0].addEventListener("click", displayRock);
choices[1].addEventListener("click", displayPaper);
choices[2].addEventListener("click", displayScissors);
