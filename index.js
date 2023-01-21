function getComputerChoice() {
    let choicesArr = ["Rock", "Paper", "Scissor"];
    // computer choose a random RPS
    let computerChoice = choicesArr[Math.floor((Math.random() * choicesArr.length))];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissor, What will you choose?", "Paper");
    // ensures that the value is capitalized
    let firstLetter = playerChoice[0].toUpperCase();
    let restOfLetter = playerChoice.slice(1).toLowerCase();
    playerChoice = firstLetter + restOfLetter;
    return playerChoice;
}
// Declare Score Variables;
let playerScore;
let computerScore;


function playRound (computerSelection, playerSelection) {

    // Announces Player and Computer Selection
    console.log(`   > Player Plays: ${playerSelection}!`);
    console.log(`   > Computer Plays: ${computerSelection}!`);
 
    function rockVsPaperVsScissor() {
        // computer selects rock
        if (computerSelection === "Rock" && playerSelection === "Scissor") {
            computerScore ++;
            return "You Lose! Rock beats Scissor";
        } else if (computerSelection === "Rock" && playerSelection === "Paper") {
            playerScore++;
            return "You Win! Paper beats Rock";

        // computer selects paper
        } else if (computerSelection === "Paper" && playerSelection === "Rock") {
            computerScore ++;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "Paper" && playerSelection === "Scissor") {
            playerScore ++;
            return "You Win! Scissor beats Paper";

        // computer selects Scissor
        } else if (computerSelection === "Scissor" && playerSelection === "Rock") {
            playerScore ++;
            return "You Win! Rock beats Scissor";
        } else if (computerSelection === "Scissor" && playerSelection === "Paper") {
            computerScore ++;
            return "You Lose! Scissor beats Paper";
        }  else {
            return "Draw!"
        }
    }

    return rockVsPaperVsScissor();
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) { 
        // Announces Round
            console.log(`ROUND ${i + 1}!`);

        // executes the playRound Function
        console.log(playRound(getComputerChoice(), getPlayerChoice()));

        // Announces current Scores
        console.log("   - Player Score: " + playerScore);
        console.log("   - Computer Score: " + computerScore);
    }

    if (computerScore > playerScore) {
        return `You Ultimately Lose! Computer Wins by ${computerScore} to ${playerScore}!`;
    } else if (computerScore === playerScore) {
        return `Draw! Player Score: ${playerScore} VS Computer Score: ${computerScore}!`;
    } else {
        return `You Ultimately Win! Player Wins by ${playerScore} to ${computerScore}!`;
    }
}