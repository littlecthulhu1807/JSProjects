//-------------------- Var Setup --------------------//
const displayText = document.querySelector("#displayText");

const clearButton = document.querySelector(".clearButton");
const solveButton = document.querySelector(".solveButton");

const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

let operator = null;
let displayString = [null, null];

//-------------------- Event Listeners  --------------------//

operatorButtons.forEach((element) =>{
    //console.log(element.innerHTML);
    const oButton = element;
    oButton.addEventListener("click", () => addOperation(oButton))
});

numberButtons.forEach((element) =>{
    const nButton = element;
    nButton.addEventListener("click", () => {
        displayText.textContent = displayText.textContent + nButton.innerHTML;
    });
});

clearButton.addEventListener("click", clear);

solveButton.addEventListener("click", () => {
    calculate();
});

//-------------------- Functionallity --------------------//

function calculate(){
    displayString = displayText.textContent.split(operator);
    console.log(displayString);
    switch(operator){
        case '+':
            displayText.textContent = Number(displayString[0]) + Number(displayString[1]);
            operator = null;
            break;
        case '-':
            displayText.textContent = Number(displayString[0]) - Number(displayString[1]);
            operator = null;
            break;
        case '/':
            displayText.textContent = Number(displayString[0]) / Number(displayString[1]);
            operator = null;
            break;
        case '*':
            displayText.textContent = Number(displayString[0]) * Number(displayString[1]);
            operator = null;
            break;
    }
};

function clear(){
    displayText.textContent = "";
    operator = null;
}

function addOperation(oButton){
    const currentDisplay = displayText.textContent;
    if(currentDisplay == ""){
        return;
    }
    else if(operator == null && currentDisplay !== ""){
        displayText.textContent = displayText.textContent + oButton.innerHTML;
        operator = oButton.innerHTML;
    }
    else{
        calculate();
        displayText.textContent = displayText.textContent + oButton.innerHTML;
        operator = oButton.innerHTML;
    }
}