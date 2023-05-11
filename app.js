const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerChoiceDisplay = document.querySelector(".computerChoice");
const playerChoiceDisplay = document.querySelector(".playerChoice");
const playGame = document.querySelector(".playGame");
const winnerMessage = document.querySelector(".winnerMessage");
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
        computerChoiceDisplay.textContent = compOption;
    })
}

eventListener();


function computerOptions() {
    compOptions = ["Rock", "Paper", "Scissors"] 
    compOption = compOptions[Math.floor(compOptions.length * Math.random())] 
    console.log(compOption) 
    return compOption;
}
computerOptions();

function checkWinner(playerChoiceDisplay, compOption) {
    if (playerChoiceDisplay.textContent === "Rock" && compOption === "Scissors") {
        console.log("Rock crushes Paper. Player Wins!")
    } else if (playerChoiceDisplay.textContent === "Rock" && compOption === "Paper") {
        console.log("Paper covers Rock. Computer Wins!")
    } else if (playerChoiceDisplay.textContent === "Rock" && compOption === "Rock") {
        console.log("Both chose Rock. Draw!")
    }

}

checkWinner(playerChoiceDisplay, compOption);
