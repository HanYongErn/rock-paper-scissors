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
    console.log(compChoice);
    return compChoice;
}
//getComputerChoice();

/*get human choice
prompt asks user to enter choice and stored in humanChoice
function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("Enter your choice (rock/paper/scissors):", "");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}*/


function play(playerChoice, compChoice) {
    const choice = playerChoice;
    let score = [0, 0]
    switch (choice) {
        case "rock":
            if (compChoice === "scissors") {
                score[0]++;
            } else if (compChoice === "paper") {
                score[1]++;
            }
            break;
        case "paper":
            if (compChoice === "rock") {
                score[0]++;
            } else if (compChoice === "scissors") {
                score[1]++;
            }
            break;
        case "scissors":
            if (compChoice === "paper") {
                score[0]++;
            } else if (compChoice === "rock") {
                score[1]++;
            }
            break;
    }
    //console.log(score);
    return score;
}

const start = document.querySelector('.start')
const div = document.querySelector('.div');

start.addEventListener('click', () => {
    const divone = document.querySelector('.divone');
    const div = document.createElement('div');
    divone.appendChild(div);
    //show choices when click start
    const rock = document.createElement('button');
    rock.textContent = 'Rock';
    rock.setAttribute('id', 'rock');
    rock.setAttribute('class', 'btn');
    div.appendChild(rock);
    const paper = document.createElement('button');
    paper.textContent = 'Paper';
    paper.setAttribute('id', 'paper');
    paper.setAttribute('class', 'btn');
    div.appendChild(paper);
    const scissors = document.createElement('button');
    scissors.textContent = 'Scissors';
    scissors.setAttribute('id', 'scissors');
    scissors.setAttribute('class', 'btn');
    div.appendChild(scissors);
    const playerScore = document.createElement('p');
    playerScore.textContent = 'Player:';
    playerScore.setAttribute('id', 'playerScore');
    div.appendChild(playerScore);
    const compScore = document.createElement('p');
    compScore.textContent = 'Computer:';
    compScore.setAttribute('id', 'compScore');
    div.appendChild(compScore);
    
    let score = [0, 0]
    const buttons = document.querySelectorAll('.btn');
    //while(score[0] <= 5 || score[1] <= 5) {
        buttons.forEach((btn => {
            btn.addEventListener('click', function (e) {
                //console.log(e.currentTarget.id);//get player's choice
                scoreRound = play(e.currentTarget.id, getComputerChoice());
                score[0] += scoreRound[0];
                score[1] += scoreRound[1];
                //console.log(score);
                //display current score
                playerScore.textContent = `Player: ${score[0]}`;
                compScore.textContent = `Computer: ${score[1]}`;
                //check who get 5 points first
                if (score[0] == 5 || score [1] == 5) {
                    if (score[0] == 5) {
                        const playerWin = document.createElement('h3');
                        playerWin.textContent = 'Congratulation! You Win! Start again?';
                        div.appendChild(playerWin);
                    } else {
                        const compWin = document.createElement('h3');
                        compWin.textContent = 'You Lose! Start again?';
                        div.appendChild(compWin);
                    }
                    //restart
                    const btnYes = document.createElement('button');
                    btnYes.textContent = 'Yes';
                    btnYes.setAttribute('id', 'yes');
                    div.appendChild(btnYes);
                    btnYes.addEventListener('click', () => {
                        divone.removeChild(div);
                    })
                }
            })
        }))
        //}
    })