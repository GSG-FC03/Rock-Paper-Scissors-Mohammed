const gameSound = new Audio("../assets/sounds/ingame.mp3");
const clickSound = new Audio("../assets/sounds/click.wav");

const playBtn = document.getElementById("play");
const instructionBtn = document.getElementById("instruction");

const playSound = () =>{
    gameSound.loop = true;
    gameSound.play();
}
playSound();

const play = () =>{
    clickSound.play();
}
  
playBtn.addEventListener("click", play);
instructionBtn.addEventListener("click", play);