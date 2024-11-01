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
let vsDiv = document.querySelector("#vs");
let avatarSecDiv = document.querySelectorAll(".avatars>div"); //selects the divs inside the avatars section

let superBackground = document.querySelector(".superBack");

let hand = true; //something is on hand, used to toggle display of player hand


// event functions start -------
function addEventListeners() {
    let playerButtons = document.querySelectorAll(".player-buttons button");
        playerButtons.forEach(button => button.addEventListener("click", cardSelect));

    let allButtons = document.querySelectorAll(".play-area button");
        allButtons.forEach(button => button.addEventListener("mouseover", playHoverSound));
        allButtons.forEach(button => button.addEventListener("mouseout", playHoverSound));
}

function removeHoverListener() {
    let allButtons = document.querySelectorAll(".play-area button");       
        allButtons.forEach(button => button.removeEventListener("mouseover", playHoverSound));
        allButtons.forEach(button => button.removeEventListener("mouseout", playHoverSound));
}

function lastPlayedToggle(action) {
    let lastPlayedPlayer = document.querySelector("#last-player");
    let lastPlayedComputer = document.querySelector("#last-computer");
    

    if (action === "add") {
        lastPlayedPlayer.classList.add(`${selected}`);
        lastPlayedComputer.classList.add(`${compSelect}`);
    } else if (action === "remove") {
        lastPlayedPlayer.removeAttribute("class");
        lastPlayedComputer.removeAttribute("class");
    }
}

function putWinnerOnCenter(winner) {
    vsDiv.style.display = "none";
    playerHand.style.display = "none";
    compHand.style.display = "none";

    if (winner === "computer") {
        playerSide.style.display = "none"; 
        computerSide.style.animation = "slideLeft 1s ease-in-out";
    } else if (winner === "player") {
        computerSide.style.display = "none";
        playerSide.style.animation = "slideRight 1s ease-in-out";
    }
}

// Audio functions start ----------
let bgm = new Audio("./sounds/bgm.mp3");
    bgm.volume = 0.3;
    bgm.loop = true;

let hoverSound = new Audio("./sounds/hover-sound.mp3");

function soundForWinOrLoss(gameResult) {
    let lossSound = new Audio("./sounds/defeated.mp3");
    let winSound = new Audio("./sounds/win.mp3");
    bgm.pause();

    if (gameResult === "win") { 
        winSound.play();
    } else if (gameResult === "loss") {
        lossSound.play();
    }
}

function playHoverSound(event) {   
        if (event.type === "mouseover") {
            hoverSound.play();
         } else if (event.type === "mouseout") {
            hoverSound.pause();
         }  
}

function playClickSound() {
    new Audio("./sounds/player-hand-click.mp3").play(); //don't put in variable to continuously play new sound on click
}

function playRoundResultSound(result) {
    let winRoundSound = new Audio("./sounds/win-round.mp3");
    let lossRoundSound = new Audio("./sounds/loss-round.mp3");
    let drawRoundSound = new Audio ("./sounds/draw-round.mp3");

    if (result === "win") {
        winRoundSound.play();
    } else if (result === "loss") {
        lossRoundSound.play();
    } else {
        drawRoundSound.play();
    }
}
// Audio functions end ----------




// starts the game ---------

async function startGame() {
// initiates the game, puts round banner
    document.querySelector(".round").removeChild(document.querySelector(".start"));
    let roundBanner = document.createElement("h1");
    roundBanner.textContent = "Round 1";
    roundBanner.setAttribute("class", "hidden");
    document.querySelector(".round").appendChild(roundBanner);

// makes first computer dialogue after starting
    dialogue.textContent = "I have already calculated your defeat";

//plays bgm music
    bgm.play();

// places the avatar in the center with animation by changing display to block 
    playerSide.style.animation = "slideLeft 1s ease-in-out"
    computerSide.style.animation = "slideRight 1s ease-in-out"
    playerHand.style.display = "block";
    compHand.style.display = "block";
    document.querySelector(".avatars").style.justifyContent = "space-around";
    vsDiv.style.display = "block";

// loops the game rounds to specified required win score
    for (let i = 0; i <= 100; i++) {    
        
        if (playerScore >=5 || computerScore >=5) {
            if (playerScore > computerScore) {
                roundBanner.textContent = "YOU WIN!!!"
                superBackground.classList.add("sakura");
                dialogue.textContent = "THiS cAn'T bE. HOw dID YoU bEAt mE?!";
                fadeInFadeOut("fade-out"); //buttons fade out
                soundForWinOrLoss("win");
                putWinnerOnCenter("player");
            } else if (playerScore < computerScore) {
                roundBanner.textContent = "YOU LOSE!!!"
                superBackground.style.backdropFilter = "brightness(50%)";
                superBackground.classList.add("storm");
                dialogue.textContent = "Know your place, Hooman!";
                fadeInFadeOut("fade-out");  //buttons fade out
                soundForWinOrLoss("loss");
                putWinnerOnCenter("computer");
            }
            break;

        } else if (i === 100) {
            roundBanner.textContent = "THIS IS FUTILE, DRAW!!!"
            dialogue.textContent = "GET A LIFE!";
            break;
        }


        // buttons fade out
        fadeInFadeOut("fade-out");

        function fadeInFadeOut(action) {
            if (action === "fade-out") {
                document.querySelector(".player-buttons").classList.toggle("fade-out");
                document.querySelector(".lock").classList.toggle("fade-out");
            } else if (action === "fade-in") {
                document.querySelector(".player-buttons").classList.toggle("fade-out");
                document.querySelector(".lock").classList.toggle("fade-out");
            }
        }

              
        setTimeout(() => {
            dialogue.textContent = "...";
            
            addEventListeners();
                
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
        
        
        let hiddenItems = document.querySelectorAll(".hidden");
        hiddenItems.forEach(item => {
            if (item.hasAttribute("class") && item.getAttribute("class").split(" ").includes("hidden")) {
                item.classList.remove("hidden");
            }
        });

        document.querySelector(".round").style.height = "8vh";
        document.querySelector(".score-board-sec").style.display = "block";
        
        // buttons fade in
        fadeInFadeOut("fade-in");

        roundBanner.textContent = `Round ${i + 1}`;
        }, 2000);

// play another round when required score is not yet met
        await playRound(); 
             
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

// plays one round ----------------------------
function playRound() {
    
    return new Promise (resolve => {
        
        getPlayerChoice(selected => {
            let playerFinal = selected;
            let computerFinal = getComputerChoice();

            rockVsPaperVsScissors(computerFinal, playerFinal);

            playerScoreBoard.textContent = `${playerScoreTally}`;
            computerScoreBoard.textContent = `${computerScoreTally}`;

            resolve();
        });
    }); 
}

//   changes dialogue according to result, part of playRound sequence
  function rockVsPaperVsScissors(computerSelection, playerSelection) {
    
    function addScoreToWinner(winner) {
        if (winner === "computer") {
            computerScore ++;
            computerScoreTally += "🌸";
            computerSide.classList.toggle("win");
            playRoundResultSound("loss");
        } else if (winner === "player") {
            playerScore++;
            playerScoreTally += "🌸";
            playerSide.classList.toggle("win");
            playRoundResultSound("win");
        }
    }

    // computer selects rock
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        // reusable function to add score to round winner 
       
        addScoreToWinner("computer");
        dialogue.textContent =  "You Lose! Rock beats Scissors";  
        
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        addScoreToWinner("player");
        dialogue.textContent = "You Win! Paper beats Rock";      

    // computer selects paper
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        addScoreToWinner("computer");
        dialogue.textContent = "You Lose! Paper beats Rock";    

    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        addScoreToWinner("player");
        dialogue.textContent = "You Win! Scissors beats Paper";      

    // computer selects Scissor
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        addScoreToWinner("player");
        dialogue.textContent = "You Win! Rock beats Scissors";

    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        addScoreToWinner("computer");
        dialogue.textContent = "You Lose! Scissors beats Paper";
        

    }  else {
        dialogue.textContent = "Draw!"
        playRoundResultSound("draw");
    }
};


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
    
    function returnSelected() { //lock in function

        // checks if a card was selected
        let clicked = false;
        playerButtons.forEach(button => {
            if (button.getAttribute("class") === "clicked") {
                clicked = true;
                toggleStyle(); //removes styling of player cards

                playerButtons.forEach(button => button.removeEventListener("click", cardSelect));

                removeHoverListener();

                playerSelect(selected);

                // inserts played hands 
                playerHand.classList.add(`${selected}`);
                compHand.classList.add(`${compSelect}`);


                // inserts last played hands
                lastPlayedToggle("remove");
                lastPlayedToggle("add");
          
                hand = false; //removes hand after play
            }
        });

        if (!clicked) {
            getPlayerChoice(playerSelect);
        }
    }
}

function cardSelect() {
    toggleStyle(); //removes styles of other buttons
    selected = this.value;
    this.classList.toggle("clicked");
    playClickSound();
}

// toggled styles on click
function toggleStyle() {
    let clickedButtons = document.querySelectorAll(".player-buttons .clicked");
        clickedButtons.forEach(button => button.classList.toggle("clicked"));
}

// Update footer content
const updateFooterContent = (function () {
    const footerYear = document.querySelector('#footer-year');
    footerYear.textContent = (new Date()).getFullYear();
})();

