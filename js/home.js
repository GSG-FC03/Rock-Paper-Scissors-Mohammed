const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("ComputerHand");
const choices = document.querySelectorAll(".choice-img");
const computerCounter = document.getElementById("computerCounter");
const playerCounter = document.getElementById("playerCounter");

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

const displayRock = () => {
  startMove();
  setTimeout(()=> {
    endMove();
    playerHand.setAttribute("src", "../assets/images/L1.png");
    playerHand.setAttribute("id", "rock");
    generateComputerMove();
    checkWinner();
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
  }, 3000);
};


choices[0].addEventListener("click", displayRock);
choices[1].addEventListener("click", displayPaper);
choices[2].addEventListener("click", displayScissors);
