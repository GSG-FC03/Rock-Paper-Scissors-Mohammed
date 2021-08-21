const playerHand = document.getElementsByClassName("hand")[0];
const computerHand = document.getElementsByClassName("hand")[1];
const choices = document.querySelectorAll(".choice-img");

//const choices = Array.from(document.getElementsByClassName('choice-img'));

const displayRock = () => {
  playerHand.setAttribute("src", "../assets/images/L1.png");
};
const displayPaper = () => {
  playerHand.setAttribute("src", "../assets/images/L2.png");
};

const displayScissors = () => {
  playerHand.setAttribute("src", "../assets/images/L3.png");
};

choices[0].addEventListener("click", displayRock);
choices[1].addEventListener("click", displayPaper);
choices[2].addEventListener("click", displayScissors);
