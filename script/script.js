const WINNER_PLAYER = 'PLAYER';
const WINNER_COMPUTER = 'COMPUTER';
const WINNER_TIE = "TIE";

function getComputerChoice() {
    random = getRandom(3);
    if (random < 1) {
        return "Rock";
    } else if (random < 2) {
        return "Paper";
    } else if (random < 3) {
        return "Scissors";
    }
}

function getRandom(seed) {
    return Math.random() * seed;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return WINNER_TIE;
    } else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        return WINNER_PLAYER;
    } else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        return WINNER_PLAYER;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        return WINNER_PLAYER;
    } else if(computerSelection.toUpperCase() === 'ROCK' && playerSelection.toUpperCase() === 'SCISSORS') {
        return WINNER_COMPUTER;
    } else if(computerSelection.toUpperCase() === 'SCISSORS' && playerSelection.toUpperCase() === 'PAPER') {
        return WINNER_COMPUTER;
    } else if (computerSelection.toUpperCase() === 'PAPER' && playerSelection.toUpperCase() === 'ROCK') {
        return WINNER_COMPUTER;
    }
}

function game() {
    let playerWinTimes = 0;
    let computerWinTimes = 0;
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("your choice:", 'ROCK');
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        console.log("round " + index + ": playerSelection is " + playerSelection + " , computerSelection is " + computerSelection + ", winner is " + winner);
        switch (winner) {
            case WINNER_PLAYER:
                playerWinTimes++;
                break;
            case WINNER_COMPUTER:
                computerWinTimes++;    
                break;
            default:
                break;
        }
    }
    if(playerWinTimes > computerWinTimes) {
        console.log("you win");
    } else if(playerWinTimes < computerWinTimes) {
        console.log("you lose");
    } else {
        console.log("it is tie");
    }
}

