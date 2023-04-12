const WINNER_PLAYER = 'PLAYER';
const WINNER_COMPUTER = 'COMPUTER';
const WINNER_TIE = "TIE";

let PLAYER_WIN_TIMES = 0;
let COMPUTER_WIN_TIMES = 0;

let finished = false;

function getComputerChoice() {
    random = getRandom(3);
    if (random < 1) {
        return "ROCK";
    } else if (random < 2) {
        return "PAPER";
    } else if (random < 3) {
        return "SCISSORS";
    }
}

function getRandom(seed) {
    return Math.random() * seed;
}

function playRound(playerSelection) {

    if (finished) {
        alert("Game is finished");
        return;
    }

    let computerSelection = getComputerChoice();
    let winner;
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        winner = WINNER_TIE;
    } else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        winner = WINNER_PLAYER;
    } else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        winner = WINNER_PLAYER;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        winner = WINNER_PLAYER;
    } else if(computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS') {
        winner = WINNER_COMPUTER;
    } else if(computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER') {
        winner = WINNER_COMPUTER;
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'ROCK') {
        winner = WINNER_COMPUTER;
    }

    switch (winner) {
        case WINNER_PLAYER:
            PLAYER_WIN_TIMES++;
            break;
        case WINNER_COMPUTER:
            COMPUTER_WIN_TIMES++;    
            break;
        default:
            break;
    }

    displayWinner(winner);

    if(PLAYER_WIN_TIMES === 5) {
        displayFinalWinner(WINNER_PLAYER);
        finished = true;
    } else if(COMPUTER_WIN_TIMES === 5) {       
        displayFinalWinner(WINNER_COMPUTER);
        finished = true;
    }
}

// a function that add an element to display final winner using DOM manipulation
function displayFinalWinner(winner) {
    let finalWinnerElement = document.createElement('div');
    finalWinnerElement.textContent = 'final winner is: ' + winner;
    document.body.appendChild(finalWinnerElement);
}

//a function that add some element to display winner using DOM manipulation
function displayWinner(winner) {
    let winnerElement = document.createElement('div');
    winnerElement.textContent = 'winner is: ' + winner;
    document.body.appendChild(winnerElement);
}
