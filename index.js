document.querySelector(".start").addEventListener("click", startGame);

function startGame() {
    document.querySelector(".round").removeChild(document.querySelector(".start"));
    let roundBanner = document.createElement("h1");
    roundBanner.textContent = "Round 1";
    document.querySelector(".round").appendChild(roundBanner);
    
    // for (let i = 0; i < 5; i++) {
        console.log(getComputerChoice());
        // console.log(getPlayerChoice());

    // }

}

function getComputerChoice() {
    let choicesArr = ["Rock", "Paper", "Scissors"];
    // computer choose a random RPS
    let computerChoice = choicesArr[Math.floor((Math.random() * choicesArr.length))];
    return computerChoice;
}


function getPlayerChoice(playerSelect) {
    let selected = "";
    let playerButtons = document.querySelectorAll(".player-buttons button");
    playerButtons.forEach(button => button.addEventListener("click", cardSelect));

    let lockIn = document.querySelector(".lock");
    lockIn.addEventListener("click", returnSelected, {once: true});

    function returnSelected() {
        playerButtons.forEach(button => button.removeEventListener("click", cardSelect));
        playerSelect(selected);
    }

    function cardSelect() {
        selected = this.value;
    }

}

// playRound(getComputerChoice(), getPlayerChoice());

function playRound() {

    getPlayerChoice(playerSelect => {
        let computerChoice = getComputerChoice();
        let playerChoice = playerSelect;

        console.log(computerChoice);
        console.log(playerChoice);

    })


  }


  




























// function toggleStyle() {
//     let rpsClicked = document.querySelectorAll(".player-buttons .clicked");
//     rpsClicked.forEach(button => {
//     button.classList.toggle("clicked");
// }); //removes styling for previous clicks
// }
























// function getPlayerChoice() {
//     let rpsButtons = document.querySelectorAll(".player-buttons button");
//     let finalChoice = "";
//     let playerChoice = "";
//     console.log(rpsButtons);

    
//     rpsButtons.forEach(button => button.addEventListener("click", saveAsChoice));

//     function saveAsChoice() {
//         toggleStyle();
//         playerChoice = this.value; // saves current choice, can still be changed
//         this.classList.toggle("clicked"); // adds styling for clicked

//         let lockIn = document.querySelector(".lock");
//         lockIn.addEventListener("click", returnPlayerChoice);

//         function returnPlayerChoice() {
//             toggleStyle();
//             finalChoice = playerChoice;
//         };
//     }

//  return finalChoice;
// }


// function playRound (computerSelection, playerSelection) {

//     // Announces Player and Computer Selection
//     console.log(`   > Player Plays: ${playerSelection}!`);
//     console.log(`   > Computer Plays: ${computerSelection}!`);
 
//     function rockVsPaperVsScissors() {
//         // computer selects rock
//         if (computerSelection === "Rock" && playerSelection === "Scissors") {
//             computerScore ++;
//             return "You Lose! Rock beats Scissors";
//         } else if (computerSelection === "Rock" && playerSelection === "Paper") {
//             playerScore++;
//             return "You Win! Paper beats Rock";

//         // computer selects paper
//         } else if (computerSelection === "Paper" && playerSelection === "Rock") {
//             computerScore ++;
//             return "You Lose! Paper beats Rock";
//         } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
//             playerScore ++;
//             return "You Win! Scissors beats Paper";

//         // computer selects Scissor
//         } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
//             playerScore ++;
//             return "You Win! Rock beats Scissors";
//         } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
//             computerScore ++;
//             return "You Lose! Scissors beats Paper";
//         }  else {
//             return "Draw!"
//         }
//     }
//     return rockVsPaperVsScissors();
// }


// function game() {
    
//     for (let i = 0; i < 5; i++) { 
//         // Announces Round
//             console.log(`ROUND ${i + 1}!`);

//         // executes the playRound Function
//         playRound(getComputerChoice(), getPlayerChoice());

//         // Announces current Scores
//         console.log("   - Player Score: " + playerScore);
//         console.log("   - Computer Score: " + computerScore);
//     }

//     if (computerScore > playerScore) {
//         return `You Ultimately Lose! Computer Wins by ${computerScore} to ${playerScore}!`;
//     } else if (computerScore === playerScore) {
//         return `Draw! Player Score: ${playerScore} VS Computer Score: ${computerScore}!`;
//     } else {
//         return `You Ultimately Win! Player Wins by ${playerScore} to ${computerScore}!`;
//     }
// }




// document.querySelector(".start").addEventListener("click", game);

//     function game() {
//         let playerScore = 0;
//         let computerScore = 0;
    
//         let roundAnnounce = document.querySelector(".round h1");

//         for (let i = 0; playerScore >= 5 || computerScore >= 5; i++) {
//             roundAnnounce.textContent = `Round ${i + 1}`;

//             playRound(getComputerChoice(), getPlayerChoice());

//             if (computerScore > playerScore) {
//                 return `You Ultimately Lose! Computer Wins by ${computerScore} to ${playerScore}!`;
//             } else if (computerScore === playerScore) {
//                 return `Draw! Player Score: ${playerScore} VS Computer Score: ${computerScore}!`;
//             } else {
//                 return `You Ultimately Win! Player Wins by ${playerScore} to ${computerScore}!`;
//             }
             
//         }
        
//         roundAnnounce.textContent = "GAME OVER";

        
// }




































//     let playerChoice = prompt("Rock, Paper, Scissor, What will you choose?", "Paper");
//     // ensures that the value is capitalized
//     let firstLetter = playerChoice[0].toUpperCase();
//     let restOfLetter = playerChoice.slice(1).toLowerCase();
//     playerChoice = firstLetter + restOfLetter;
//     return playerChoice;
// }
// // Declare Score Variables;
// let playerScore;
// let computerScore;


// function playRound (computerSelection, playerSelection) {

//     // Announces Player and Computer Selection
//     console.log(`   > Player Plays: ${playerSelection}!`);
//     console.log(`   > Computer Plays: ${computerSelection}!`);
 
//     function rockVsPaperVsScissor() {
//         // computer selects rock
//         if (computerSelection === "Rock" && playerSelection === "Scissor") {
//             computerScore ++;
//             return "You Lose! Rock beats Scissor";
//         } else if (computerSelection === "Rock" && playerSelection === "Paper") {
//             playerScore++;
//             return "You Win! Paper beats Rock";

//         // computer selects paper
//         } else if (computerSelection === "Paper" && playerSelection === "Rock") {
//             computerScore ++;
//             return "You Lose! Paper beats Rock";
//         } else if (computerSelection === "Paper" && playerSelection === "Scissor") {
//             playerScore ++;
//             return "You Win! Scissor beats Paper";

//         // computer selects Scissor
//         } else if (computerSelection === "Scissor" && playerSelection === "Rock") {
//             playerScore ++;
//             return "You Win! Rock beats Scissor";
//         } else if (computerSelection === "Scissor" && playerSelection === "Paper") {
//             computerScore ++;
//             return "You Lose! Scissor beats Paper";
//         }  else {
//             return "Draw!"
//         }
//     }

//     return rockVsPaperVsScissor();
// }

// function game() {
//     playerScore = 0;
//     computerScore = 0;
//     for (let i = 0; i < 5; i++) { 
//         // Announces Round
//             console.log(`ROUND ${i + 1}!`);

//         // executes the playRound Function
//         console.log(playRound(getComputerChoice(), getPlayerChoice()));

//         // Announces current Scores
//         console.log("   - Player Score: " + playerScore);
//         console.log("   - Computer Score: " + computerScore);
//     }

//     if (computerScore > playerScore) {
//         return `You Ultimately Lose! Computer Wins by ${computerScore} to ${playerScore}!`;
//     } else if (computerScore === playerScore) {
//         return `Draw! Player Score: ${playerScore} VS Computer Score: ${computerScore}!`;
//     } else {
//         return `You Ultimately Win! Player Wins by ${playerScore} to ${computerScore}!`;
//     }
// }



