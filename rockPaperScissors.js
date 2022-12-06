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
    desc: displays information about a round with given winner, winnerChoice, and 
    loserChoice
*/
function displayRoundResults (winner, playerChoice, compChoice) {
    if(winner === "tie") {
        console.log(`it was a tie, no winner this round!`)
    } else if (winner === "player") {
        console.log(`you won! ${playerChoice} beats ${compChoice}`);
    } else {
        console.log(`you lose! ${compChoice} beats ${playerChoice}`);
    }
}

/*
    desc: returns a string indicating whether the player won or lost that round
*/
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "tie";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return `comp`;
        } else {
            return `player`;
        }
    } else if (playerChoice == "paper") {
        if (computerChoice === "rock") {
            return `player`;
        } else {
            return `comp`;
        }
    } else {
        if(computerChoice === "rock") {
            return `comp`;
        } else {
            return `player`;
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
        const playerChoice = prompt(`enter "rock", "paper", or "scissors"`);
        const compChoice = getComputerChoice();
        const roundWinner = playRound(playerChoice, compChoice);
        
        // add point to winner's score
        if (roundWinner === "player") {
            playerScore++;
        } else if (roundWinner === "comp") {
            compScore++;
        } else {
            // round is tied, do not include round in total 5
            i--;
        }

        displayRoundResults(roundWinner, playerChoice, compChoice);
    }

    console.log(`player score: ${playerScore}`);
    console.log(`computer score: ${compScore}`);
}


game();