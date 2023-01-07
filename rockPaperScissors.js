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
    const roundResults = document.querySelector("#round-results");
    if(winner === "tie") {
        roundResults.textContent = `it was a tie, no winner this round!`;
    } else if (winner === "player") {
        roundResults.textContent = `you won! ${playerChoice} beats ${compChoice}`;
    } else {
        roundResults.textContent = `you lose! ${compChoice} beats ${playerChoice}`;
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

    // update score and display round results
    incrementScore(winner);
    displayRoundResults(winner, playerChoice, computerChoice);

    // check for winner, end game if so
    let gameWinner = getGameWinner();
    if (gameWinner) {
        gameOver(gameWinner);
    }
}

/*
    displays "Game Over" screen with final scores and button to reset game
*/
function gameOver(gameWinner) {
    const gameboard = document.querySelector("#gameboard");
    const body = document.querySelector("body");
    const gameClone = gameboard.cloneNode(true);

    // remove old game and footer
    gameboard.remove();

    // create panel for game results
    const gameResultsPanel = document.createElement("div");
    gameResultsPanel.id = "game-results-panel";
    gameResultsPanel.classList.add("panel");
    body.appendChild(gameResultsPanel);

    // add label and final scores
    const gameOverHeader = document.createElement("h2");
    gameOverHeader.textContent = "game over";
    gameResultsPanel.appendChild(gameOverHeader);
    
    const winnerHeader = document.createElement("h1");
    winnerHeader.id = "winner-header";
    winnerHeader.textContent = `${gameWinner} wins`;
    gameResultsPanel.appendChild(winnerHeader);
    

    // add button to reset game
    const resetBtn = document.createElement("button");
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "try again?";
    resetBtn.addEventListener("click", () => {
        body.appendChild(gameClone);
        newGame();
        gameResultsPanel.remove();
    });
    gameResultsPanel.appendChild(resetBtn);
}


/* 
    desc: reset player and comp scores to 0 and 
    set up option buttons
*/
function newGame() {
    document.querySelector("#player-score").textContent = 0;
    document.querySelector("#comp-score").textContent = 0;


    const options = document.querySelectorAll(".option");
    options.forEach((button) => {
        button.addEventListener('click', () => playRound(button.id));
    })
}

newGame();