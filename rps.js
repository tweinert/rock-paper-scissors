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
        return "You Win the round! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose the round! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    let gamesPlayed = 0;

    while(gamesPlayed < 5) {
        let playerSelection = prompt("rock, paper, or scissors?");
        let roundMessage = playRound(playerSelection, computerPlay());
        console.log(roundMessage);
        if(roundMessage.startsWith("You Win")) {
            playerScore++;
            gamesPlayed++;
        } else if(roundMessage.startsWith("You Lose")) {
            compScore++;
            gamesPlayed++;
        } else {
            gamesPlayed++;
        }
        console.log("player score: " + playerScore);
        console.log("computer score: " + compScore);
        console.log("games played: " + gamesPlayed);
    }

    if(playerScore > compScore) {
        console.log("You Win the game!");
    } else if(compScore > playerScore) {
        console.log("You Lose the game!");
    } else {
        console.log("The game is a draw! How boring..");
    }
}



