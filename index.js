document.querySelector(".start").addEventListener("click", startGame);

async function startGame() {
    document.querySelector(".round").removeChild(document.querySelector(".start"));
    let roundBanner = document.createElement("h1");
    roundBanner.textContent = "Round 1";
    document.querySelector(".round").appendChild(roundBanner);
    dialogue.textContent = "QHDOUQDIBQIFVQI";
    
    for (let i = 0; i <= 100; i++) {

        if (playerScore >=5 || computerScore >=5) {
            if (playerScore > computerScore) {
                roundBanner.textContent = "YOU WIN!!!"
                dialogue.textContent = "UWU";
            } else if (playerScore < computerScore) {
                roundBanner.textContent = "YOU LOSE!!!"
                dialogue.textContent = "YEYYYY";
            }
            break;
        } else if (i === 100) {
            roundBanner.textContent = "THIS IS FUTILE, DRAW!!!"
            dialogue.textContent = "GET A LIFE!";
            break
        }

        setTimeout(() => {
            dialogue.textContent = "";
            let playerButtons = document.querySelectorAll(".player-buttons button");
            playerButtons.forEach(button => button.addEventListener("click", cardSelect));
        }, 1000);

        await playRound();
        roundBanner.textContent = `Round ${i + 1}`;     
        }

    let resetButton = document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.textContent = "RESET GAME";
    document.querySelector(".lock-in").removeChild(document.querySelector(".lock"));  
    document.querySelector(".lock-in").appendChild(resetButton);  

    document.querySelector(".reset").addEventListener("click", refresh);
    function refresh() {
        location.reload()
    };

    }


function getComputerChoice() {
    let choicesArr = ["Rock", "Paper", "Scissors"];
    // computer choose a random RPS
    let computerChoice = choicesArr[Math.floor((Math.random() * choicesArr.length))];
    return computerChoice;
}
// toggled styles on click
function toggleStyle() {
    let clickedButtons = document.querySelectorAll(".player-buttons .clicked");
        clickedButtons.forEach(button => button.classList.toggle("clicked"));
}

let selected = "";
function getPlayerChoice(playerSelect) {
    
    let playerButtons = document.querySelectorAll(".player-buttons button");
    

    let lockIn = document.querySelector(".lock");
    lockIn.addEventListener("click", returnSelected, {once: true});
    
    function returnSelected() {
        toggleStyle(); //removes styling of player cards
        playerButtons.forEach(button => button.removeEventListener("click", cardSelect));
        playerSelect(selected);
    }
  

}

function cardSelect() {
    toggleStyle();
    selected = this.value;
    this.classList.toggle("clicked");
}



let playerScore = 0;
let computerScore = 0;
let dialogue = document.querySelector(".computer-dialogue .dialogue");

let playerScoreBoard = document.querySelector(".player-score p");
let computerScoreBoard = document.querySelector(".computer-score p");


function playRound() {
    
    return new Promise (resolve => {
        

        getPlayerChoice(selected => {
            let playerFinal = selected;
            let computerFinal = getComputerChoice();

            console.log(playerFinal);
            console.log(computerFinal);

            rockVsPaperVsScissors(computerFinal, playerFinal);

            playerScoreBoard.textContent = `${playerScore}`;
            computerScoreBoard.textContent = `${computerScore}`;

            resolve();

        });

    });
   
  }

  function rockVsPaperVsScissors(computerSelection, playerSelection) {
    
    // computer selects rock
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerScore ++;
        dialogue.textContent =  "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerScore++;
        dialogue.textContent = "You Win! Paper beats Rock";

    // computer selects paper
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerScore ++;
        dialogue.textContent = "You Lose! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerScore ++;
        dialogue.textContent = "You Win! Scissors beats Paper";

    // computer selects Scissor
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerScore ++;
        dialogue.textContent = "You Win! Rock beats Scissors";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computerScore ++;
        dialogue.textContent = "You Lose! Scissors beats Paper";
    }  else {
        dialogue.textContent = "Draw!"
    }
};

