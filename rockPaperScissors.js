function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "you tied!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return `you lose! ${compChoice} beats ${playerChoice}`;
        } else {
            return `you win! ${playerChoice} beats ${compChoice}`;
        }
    } else if (playerChoice == "paper") {
        if (computerChoice === "rock") {
            return `you win! ${playerChoice} beats ${compChoice}`;
        } else {
            return `you lose! ${compChoice} beats ${playerChoice}`;
        }
    } else {
        if(computerChoice === "rock") {
            return `you lose! ${compChoice} beats ${playerChoice}`;
        } else {
            return `you win! ${playerChoice} beats ${compChoice}`;
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {

    }
}

compChoice = getComputerChoice();
console.log(compChoice);
console.log(playRound("ROCk", compChoice));