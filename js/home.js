const playerHand = document.getElementsByClassName("hand")[0];
const computerHand = document.getElementsByClassName("hand")[1];
const choices = document.querySelectorAll(".choice-img");
const computerCounter = document.getElementById("computerCounter");
const playerCounter = document.getElementById("playerCounter");

const displayRock = () => {
  playerHand.setAttribute("src", "../assets/images/L1.png");
  playerHand.setAttribute("id", "rock");
  generateComputerMove();
  checkWinner();
};
const displayPaper = () => {
  playerHand.setAttribute("src", "../assets/images/L2.png");
  playerHand.setAttribute("id", "paper");
  generateComputerMove();
  checkWinner();
};

const displayScissors = () => {
  playerHand.setAttribute("src", "../assets/images/L3.png");
  playerHand.setAttribute("id", "scissors");
  generateComputerMove();
  checkWinner();
};

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

const checkWinner = () => {
  console.log(computerCounter.textContent)
  console.log(parseInt(computerCounter.textContent))

  if(computerHand.id == playerHand.id)
  console.log("draw");
  else if(computerHand.id == "rock" && playerHand.id == "scissors")
    computerCounter.textContent = parseInt(computerCounter.textContent)+1;
  else if(computerHand.id == "paper" && playerHand.id == "rock")
    computerCounter.textContent = parseInt(computerCounter.textContent)+1;
  else if(computerHand.id == "scissors" && playerHand.id == "paper")
    computerCounter.textContent = parseInt(computerCounter.textContent)+1;

  else if(playerHand.id == "rock" && computerHand.id == "scissors")
    playerCounter.textContent = parseInt(playerCounter.textContent)+1;
  else if(playerHand.id == "paper" && computerHand.id == "rock")
    playerCounter.textContent = parseInt(playerCounter.textContent)+1;
  else if(playerHand.id == "scissors" && computerHand.id == "paper")
    playerCounter.textContent = parseInt(playerCounter.textContent)+1;

}

choices[0].addEventListener("click", displayRock);
choices[1].addEventListener("click", displayPaper);
choices[2].addEventListener("click", displayScissors);
