function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else if (randomNum === 2) {
        return "scissors";
    }
}