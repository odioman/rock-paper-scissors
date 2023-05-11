const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerChoiceDisplay = document.querySelector(".computerChoice");
const playerChoiceDisplay = document.querySelector(".playerChoice");
const playGame = document.querySelector(".playGame");
let player;



function eventListener() { 
    rock.addEventListener('click', () => {
        playerChoiceDisplay.textContent = "Rock";
    });
    paper.addEventListener('click', () => {
        playerChoiceDisplay.textContent = "Paper";
    });
    scissors.addEventListener('click', () => {
        playerChoiceDisplay.textContent = "Scissors";
    });

    playGame.addEventListener('click', () => {
        computerChoiceDisplay.textContent = compOptions[0];
    })
}

eventListener();

computerOptions(compOptions);
function computerOptions(compOptions) {
    compOptions = ["Rock", "Paper", "Scissors"] * Math.random();
    return compOptions;
}
computerChoiceDisplay.textContent = compOptions[0];

