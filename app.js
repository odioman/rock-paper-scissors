const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerChoiceDisplay = document.querySelector(".playerChoice");
const playGame = document.querySelector(".playGame");
const winnerMessage = document.querySelector(".winnerMessage");
const compOptions = ["Rock", "Paper", "Scissors"] 
const compOption = compOptions[Math.floor(compOptions.length * Math.random())] 

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
        checkWinner(playerChoiceDisplay, compOption);
    })
}

function checkWinner(playerChoiceDisplay, compOption) {
    if (playerChoiceDisplay.textContent === "Rock" && compOption === "Scissors") {
        winnerMessage.textContent = "Rock crushes Scissors. Player Wins!"
    } else if (playerChoiceDisplay.textContent === "Rock" && compOption === "Paper") {
        winnerMessage.textContent = "Paper covers Rock. Computer Wins!"
    } else if (playerChoiceDisplay.textContent === "Rock" && compOption === "Rock") {
        winnerMessage.textContent = "Both chose Rock. Draw!"
    } else if (playerChoiceDisplay.textContent === "Paper" && compOption === "Scissors") {
        winnerMessage.textContent = "Scissors cut Paper. Computer Wins!"
    } else if (playerChoiceDisplay.textContent === "Paper" && compOption === "Rock") {
        winnerMessage.textContent = "Paper covers Rock. Player Wins!"
    } else if (playerChoiceDisplay.textContent === "Paper" && compOption === "Paper") {
        winnerMessage.textContent = "Both chose Paper. Draw!"
    } else if (playerChoiceDisplay.textContent === "Scissors" && compOption === "Paper") {
        winnerMessage.textContent = "Scissors cut Paper. Player Wins!"
    } else if (playerChoiceDisplay.textContent === "Scissors" && compOption === "Rock") {
        winnerMessage.textContent = "Rock crushes Scissors. Computer Wins!" 
    } else if (playerChoiceDisplay.textContent === "Scissors" && compOption === "Scissors") {
        winnerMessage.textContent = "Both chose Scissors. Draw!"
    }

}

function startGame() {
    eventListener();    
}

startGame()