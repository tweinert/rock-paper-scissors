const scoreDisplayDiv = document.querySelector('#scoreDisplay');
const playerDisplayDiv = document.querySelector('#playerScoreDisplay');
const compDisplayDiv = document.querySelector('#compScoreDisplay');

let playerScore = 0;
let compScore = 0;
let gamesPlayed = 0;


function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);

    switch(randomNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "";
    }
}

function playRound(playerSelection, computerSelection) {
    let isPlayerWin = false;
    
    playerSelection = playerSelection.toLowerCase();

    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);
    
    if(playerSelection === computerSelection) {
        return "It's a draw!";
    } else if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            isPlayerWin = false;
        } else if (computerSelection === "scissors") {
            isPlayerWin = true;
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            isPlayerWin = true;
        } else if (computerSelection === "scissors") {
            isPlayerWin = false;
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            isPlayerWin = false;
        } else if(computerSelection === "paper") {
            isPlayerWin = true;
        }
    }

    if(isPlayerWin) {
        playerScore++;
        playerDisplayDiv.textContent = "Player Score: " + playerScore;
    } else {
        compScore++;
        compDisplayDiv.textContent = "Computer Score: " + compScore;
    }
}



function game() {
    let playerSelection = prompt("rock, paper, or scissors?");
    let roundMessage = playRound(playerSelection, computerPlay());
    console.log(roundMessage);
}

