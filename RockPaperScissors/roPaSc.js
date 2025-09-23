

function getComputerChoice(){

    const rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch(rand){
        case 1: return "Rock";
        case 2: return "Paper";
        default: return "Scissors";
    }


}

console.log(getComputerChoice());