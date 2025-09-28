const displayText = document.querySelector("#displayText");

const clearButton = document.querySelector(".clearButton");
const solveButton = document.querySelector(".solveButton");

const numberButtons = document.querySelectorAll(".numberButton");
const operatorButtons = document.querySelectorAll(".operatorButton");

let operator = null;
let displayString = [null, null];

operatorButtons.forEach((element) =>{
    //console.log(element.innerHTML);
    const oButton = element;
    oButton.addEventListener("click", () => addOperation(oButton))
});

numberButtons.forEach((element) =>{
    //console.log(element.innerHTML);
    const nButton = element;
    nButton.addEventListener("click", () => {
        //console.log(nButton.innerHTML);
        displayText.textContent = displayText.textContent + nButton.innerHTML;
    });
});

clearButton.addEventListener("click", clear);

solveButton.addEventListener("click", () => {
    //console.log("solve");
    calculate();
});

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
    if(operator == null){
        displayText.textContent = displayText.textContent + oButton.innerHTML;
        operator = oButton.innerHTML;
    }
    else{
        calculate();
    }
}

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};