let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice(){
    return rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function getHumanChoice(){
    return Number(window.prompt("Round"+ round + "/5 type 1 for Rock | 2 for Paper | 3 for Scissors ", "Let's go!"));
}

function transateChoice(choice){
    switch(choice){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function playRound(computer, human){
    if (human > 3 || human < 1 || human == NaN){
        console.log("Invalid input! Draw!");
    }
    else if (human == computer){
        console.log("You picked: " + transateChoice(human) + "! || The computer picked: " + transateChoice(computer) + "!");
        console.log("no winner! Draw!");
    }
    else if (human == 1 && computer == 2 ){
        computerScore++;
        console.log("You picked: " + transateChoice(human) + "! || The computer picked: " + transateChoice(computer) + "!");
        console.log("The computer won!");
    }
    else if (human == 2 && computer == 3){
        computerScore++;
        console.log("You picked: " + transateChoice(human) + "! || The computer picked: " + transateChoice(computer) + "!");
        console.log("The computer won!");
    }
    else if (human == 3 && computer == 1){
        computerScore++;
        console.log("You picked: " + transateChoice(human) + "! || The computer picked: " + transateChoice(computer) + "!");
        console.log("The computer won!");
    }
    else{
        humanScore++;
        console.log("You picked: " + transateChoice(human) + "! || The computer picked: " + transateChoice(computer) + "!");
        console.log("You won!");
    }
}

function playGame(){
    for(i = 0; i < 5; i++){

        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
        console.log("the Score is you: " + humanScore + " || computer: " + computerScore);
        round++;
    }

    if(humanScore < computerScore){
        console.log("The computer won the game! :(");
    }
    else {
        console.log("You won the game! :)")
    }
}

playGame();