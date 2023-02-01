document.querySelector(".start").addEventListener("click", startGame);

// some global variables ----------------------------
let playerScore = 0;
let computerScore = 0;
let playerScoreTally = "";
let computerScoreTally = "";

let dialogue = document.querySelector(".computer-dialogue p");

let playerScoreBoard = document.querySelector(".player-score p");
let computerScoreBoard = document.querySelector(".computer-score p");

let playerHand = document.querySelector(".player-hand");
let compHand = document.querySelector(".computer-hand");

let playerSide = document.querySelector("#left-side");
let computerSide = document.querySelector("#right-side");
let avatarSecDiv = document.querySelectorAll(".avatars>div");

let superBackground = document.querySelector(".superBack");


let hand = true; //something is on hand, used to toggle display of player hand





async function startGame() {
    document.querySelector(".round").removeChild(document.querySelector(".start"));
    let roundBanner = document.createElement("h1");
    roundBanner.textContent = "Round 1";
    document.querySelector(".round").appendChild(roundBanner);
    dialogue.textContent = "I have already calculated your defeat";
    
    for (let i = 0; i <= 100; i++) {

        if (playerScore >=5 || computerScore >=5) {
            if (playerScore > computerScore) {
                roundBanner.textContent = "YOU WIN!!!"
                superBackground.classList.add("sakura");
                dialogue.textContent = "UWU";
            } else if (playerScore < computerScore) {
                roundBanner.textContent = "YOU LOSE!!!"
                superBackground.style.backdropFilter = "brightness(50%)";
                superBackground.classList.add("storm");
                dialogue.textContent = "YEYYYY";
            }
            break;
        } else if (i === 100) {
            roundBanner.textContent = "THIS IS FUTILE, DRAW!!!"
            dialogue.textContent = "GET A LIFE!";
            break
        }

        // buttons fade out
        document.querySelector(".player-buttons").classList.toggle("fade-out");
        document.querySelector(".lock").classList.toggle("fade-out");
        
        setTimeout(() => {
            dialogue.textContent = "...";
            let playerButtons = document.querySelectorAll(".player-buttons button");
            playerButtons.forEach(button => button.addEventListener("click", cardSelect));
           
            // removes player and computer hands
            if (!hand) {
                playerHand.classList.remove(`${selected}`);
                compHand.classList.remove(`${compSelect}`);
            };

            // removes winner effects
            avatarSecDiv.forEach(side => {
                if (side.hasAttribute("class")) {
                    side.removeAttribute("class")
                }
            });
    

        // show hidden objects
        document.querySelector(".player-buttons").style.visibility = "visible";
        document.querySelector(".lock").style.visibility = "visible";
        document.querySelector(".round h1").style.visibility = "visible";
        document.querySelector(".round").style.height = "8vh";
        document.querySelector(".score-board-sec").style.display = "block";
        
        

        // buttons fade in
        document.querySelector(".player-buttons").classList.toggle("fade-out");
        document.querySelector(".lock").classList.toggle("fade-out");
        }, 2000);

        await playRound();
        roundBanner.textContent = `Round ${i + 2}`;     
        } //end of for loop -----

// creates a reset button after the game
    let resetButton = document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.textContent = "RESET";
    document.querySelector(".lock-in").removeChild(document.querySelector(".lock"));  
    document.querySelector(".lock-in").appendChild(resetButton);  

    document.querySelector(".reset").addEventListener("click", refresh);
    function refresh() {
        location.reload()
    };
    }

// randomly generate computer choice -------------------------
let compSelect = ""; //send computer hands
function getComputerChoice() {
    let choicesArr = ["Rock", "Paper", "Scissors"];
    // computer choose a random RPS
    let computerChoice = choicesArr[Math.floor((Math.random() * choicesArr.length))];
    compSelect = computerChoice;
    return computerChoice;
}


// gets user choice to play --------------------------
let selected = "";
function getPlayerChoice(playerSelect) {
    
    let playerButtons = document.querySelectorAll(".player-buttons button");
    
    let lockIn = document.querySelector(".lock");
    lockIn.addEventListener("click", returnSelected, {once: true});
    
    function returnSelected() {

        // checks if a card was selected
        let clicked = false;
        playerButtons.forEach(button => {
            if (button.getAttribute("class") === "clicked") {
                clicked = true;
                toggleStyle(); //removes styling of player cards
                playerButtons.forEach(button => button.removeEventListener("click", cardSelect));

                playerSelect(selected);

                // inserts played hands 
                playerHand.classList.add(`${selected}`);
                compHand.classList.add(`${compSelect}`);
                hand = false; //removes hand after play
            }
        });

        if (!clicked) {
            getPlayerChoice(playerSelect);
        }
    }
}

function cardSelect() {
    toggleStyle();
    selected = this.value;
    this.classList.toggle("clicked");
}

// toggled styles on click
function toggleStyle() {
    let clickedButtons = document.querySelectorAll(".player-buttons .clicked");
        clickedButtons.forEach(button => button.classList.toggle("clicked"));
}





// plays one round ----------------------------
function playRound() {
    
    return new Promise (resolve => {
        
        getPlayerChoice(selected => {
            let playerFinal = selected;
            let computerFinal = getComputerChoice();

            console.log(playerFinal);
            console.log(computerFinal);

            rockVsPaperVsScissors(computerFinal, playerFinal);

            playerScoreBoard.textContent = `${playerScoreTally}`;
            computerScoreBoard.textContent = `${computerScoreTally}`;

            resolve();
        });
    }); 
  }

//   changes dialogue according to result, part of playRound sequence
  function rockVsPaperVsScissors(computerSelection, playerSelection) {
    
    // computer selects rock
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerScore ++;
        computerScoreTally += "🌸";
        computerSide.classList.toggle("win");
        dialogue.textContent =  "You Lose! Rock beats Scissors";
        
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerScore++;
        playerScoreTally += "🌸";
        playerSide.classList.toggle("win");
        dialogue.textContent = "You Win! Paper beats Rock";

    // computer selects paper
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerScore ++;
        computerScoreTally += "🌸";
        computerSide.classList.toggle("win");
        dialogue.textContent = "You Lose! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerScore ++;
        playerScoreTally += "🌸";
        playerSide.classList.toggle("win");
        dialogue.textContent = "You Win! Scissors beats Paper";

    // computer selects Scissor
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerScore ++;
        playerScoreTally += "🌸";
        playerSide.classList.toggle("win");
        dialogue.textContent = "You Win! Rock beats Scissors";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computerScore ++;
        computerScoreTally += "🌸";
        computerSide.classList.toggle("win");
        dialogue.textContent = "You Lose! Scissors beats Paper";
    }  else {
        dialogue.textContent = "Draw!"
    }
};

