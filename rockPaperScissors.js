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
    returns game winner if there is one, otherwise returns false
*/
function getGameWinner() {
    const playerScore = document.querySelector("#player-score").textContent;
    const compScore = document.querySelector("#comp-score").textContent;
    if(playerScore == 5) {
        return "player";
    } else if(compScore == 5) {
        return "comp";
    } else {
        return "";
    }
}

/*
    desc: updates the score using the given winner of the round;
        will not update if there is a tie
*/
function incrementScore(winner) {
    if(winner !== "tie") {
        const scoreElement = document.querySelector(`#${winner}-score`);
        let score = Number(scoreElement.textContent);
        scoreElement.textContent = score + 1;
    }
}

/*
    desc: displays information about a round with given winner, winnerChoice, and 
    loserChoice
*/
function displayRoundResults (winner, playerChoice, compChoice) {
    const scoreboard = document.querySelector(".scoreboard");
    if(winner === "tie") {
        console.log(`it was a tie, no winner this round!`)
    } else if (winner === "player") {
        console.log(`you won! ${playerChoice} beats ${compChoice}`);
    } else {
        console.log(`you lose! ${compChoice} beats ${playerChoice}`);
    }
}

/*
    desc: returns a string indicating who won the round: 'comp' or 'player'
    or 'tie'
*/
function playRound(playerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = getComputerChoice();
    let winner;

    // get round winner
    if (playerChoice === computerChoice) {
        winner = "tie";
    } else if (playerChoice === "rock") {
        computerChoice === "paper" ? winner = "comp" : winner = "player";
    } else if (playerChoice == "paper") {
        computerChoice === "scissors" ? winner = "comp" : winner = "player"; 
    } else {
        computerChoice === "rock" ? winner = "comp" : winner = "player";
    }

    // update score
    incrementScore(winner);


    displayRoundResults(winner, playerChoice, computerChoice);
    let gameWinner = getGameWinner();
    if (gameWinner) {
        console.log(gameWinner);
        console.log("game ova");
    }
}

/* set up game buttons, scoreboard */
function setup() {
    const options = document.querySelectorAll(".option");
    options.forEach((button) => {
        button.addEventListener('click', () => playRound(button.id));
    })
}

setup();