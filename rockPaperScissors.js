/*
    desc: returns a random choice of either rock, paper, or scissors
*/
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

/*
    desc: returns a string indicating whether the player won or lost that round
*/
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "you tied!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return `you lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            return `you win! ${playerChoice} beats ${computerChoice}`;
        }
    } else if (playerChoice == "paper") {
        if (computerChoice === "rock") {
            return `you win! ${playerChoice} beats ${computerChoice}`;
        } else {
            return `you lose! ${computerChoice} beats ${playerChoice}`;
        }
    } else {
        if(computerChoice === "rock") {
            return `you lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            return `you win! ${playerChoice} beats ${computerChoice}`;
        }
    }
}

/*
    desc: plays 5 rounds and displays the game winner and scores
*/
function game() {
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++) {
        const playerChoice = "scissors";
        const compChoice = getComputerChoice();
        const roundResult = playRound(playerChoice, compChoice);
        console.log(roundResult);
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            compScore++;
        } else {
            // round is tied, do not include round in total 5
            i--;
        }
    }

    console.log(`player score: ${playerScore}`);
    console.log(`computer score: ${compScore}`);
}


game();