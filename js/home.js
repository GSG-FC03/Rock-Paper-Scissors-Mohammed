const playerHand = document.getElementsByClassName("hand")[0];
const computerHand = document.getElementsByClassName("hand")[1];
const choices = document.querySelectorAll(".choice-img");

//const choices = Array.from(document.getElementsByClassName('choice-img'));

const displayRock = () => {
  playerHand.setAttribute("src", "../assets/images/L1.png");
  generateComputerMove();
};
const displayPaper = () => {
  playerHand.setAttribute("src", "../assets/images/L2.png");
  generateComputerMove();
};

const displayScissors = () => {
  playerHand.setAttribute("src", "../assets/images/L3.png");
  generateComputerMove();
};

const generateComputerMove = () => {
  let min = Math.ceil(1);
  let max = Math.floor(3);
  let random =  Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random)
  computerHand.setAttribute("src", `../assets/images/R${random}.png`);
};

choices[0].addEventListener("click", displayRock);
choices[1].addEventListener("click", displayPaper);
choices[2].addEventListener("click", displayScissors);
