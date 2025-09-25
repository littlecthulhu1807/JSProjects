const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorsBtn = document.querySelector("#sciccors-button");

rockBtn.addEventListener("click", () => {
    playRound(1);
});
paperBtn.addEventListener("click", () => {
    playRound(2);
});
scissorsBtn.addEventListener("click", () => {
    playRound(3);
});

const computerChoiceDisplay = document.querySelector("#computer-pick");

const roundDisplay = document.querySelector("#round-counter");
const winnerDisplay = document.querySelector("#win-display");
const scoreDisplay = document.querySelector("#score-counter");

let humanScore = 0;
let computerScore = 0;
let round = 1;

roundDisplay.textContent = "Round " + round + "/5";

function getComputerChoice(){
    rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    computerChoiceDisplay.textContent = "The computer picked: " + transateChoice(rand);
    return rand;
}

function transateChoice(choice){
    switch(choice){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function playRound(choice){

    roundDisplay.textContent = "Round " + round + "/5";

    if (round > 5){
        alert("the game is over!");
        roundDisplay.textContent = "Round " + 5 + "/5";
        return;
    } 

    round++;

    computer = getComputerChoice();
    human = choice;


    if (human > 3 || human < 1 || human == NaN){
        console.log("Invalid input! Draw!");
    }
    else if (human == computer){
        winnerDisplay.textContent = "no winner! Draw!";
        scoreDisplay.textContent = "Human: " + humanScore + " || computer: " + computerScore;
    }
    else if (human == 1 && computer == 2 ){
        computerScore++;
        winnerDisplay.textContent = "The computer won!";
        scoreDisplay.textContent = "Human: " + humanScore + " || computer: " + computerScore;
    }
    else if (human == 2 && computer == 3){
        computerScore++;
        winnerDisplay.textContent = "The computer won!";
        scoreDisplay.textContent = "Human: " + humanScore + " || computer: " + computerScore;
    }
    else if (human == 3 && computer == 1){
        computerScore++;
        winnerDisplay.textContent = "The computer won!";
        scoreDisplay.textContent = "Human: " + humanScore + " || computer: " + computerScore;
    }
    else{
        humanScore++;
        winnerDisplay.textContent = "You won!";
        scoreDisplay.textContent = "Human: " + humanScore + " || computer: " + computerScore;
    }

}