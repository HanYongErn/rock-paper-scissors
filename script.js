console.log("Hello World!");


//computer chooses rock/paper/scissor randomly
//rock paper scissors every 3 numbers in 1 - 100
//example of sequence: r p s r p s r p s r p s ...
//chooses number randomly by math.random, r/p/s stored in compChoice
function getComputerChoice() {
    let compChoice;
    let a = Math.floor(Math.random() * 100);
    if (a % 3 === 2) {
        compChoice = "rock";
    } else if (a % 3 === 1) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    };
    return compChoice;
}
//getComputerChoice();

//get human choice
//prompt asks user to enter choice and stored in humanChoice
function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("Enter your choice (rock/paper/scissors):", "");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playGame() {
    let i = 0;
    let compScore = 0;
    let humanScore = 0;
    //play the game for 5 rounds and store the score in compScore and humanScore
    while (i < 5) {
        let compChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, compChoice);
        console.log("Computer's choice: " + compChoice);
        console.log("Your choice: " + humanChoice);
        function playRound(human, comp) {
            if (human === "rock") {
                if (comp === "scissors") {
                    humanScore++;
                } else if (comp === "paper") {
                    compScore++;
                }
            } else if (human === "paper") {
                if (comp === "rock") {
                    humanScore++;
                } else if (comp === "scissors") {
                    compScore++;
                }
            } else if (human === "scissors") {
                if (comp === "paper") {
                    humanScore++;
                } else if (comp === "rock") {
                    compScore++;
                }
            }
        }
        console.log("ROUND " + (i+1) + ": " + compScore + ":" + humanScore);
        i++;
    }
    //show final score and declares winner
    console.log("Final: " + compScore + ":" + humanScore);
    if (humanScore > compScore) {
        console.log("Congratulations!! You Win!!");
    } else if (compScore > humanScore) {
        console.log("YOU LOSE!!");
    } else {
        console.log("It's a tie!!");
    }
}

//play the game
playGame();