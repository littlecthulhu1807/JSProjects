const gridContainer = document.querySelector(".grid-container");
const setButton = document.querySelector("#setter");

let gridArray;

let gridSize = 16;
let gridElementWidth = 100 / gridSize;

function loadGrid(size, width){
    gridArray = Array.from({ length: (size * size) }, (_, index) => {
    const div = document.createElement('div');

    div.style = "aspect-ratio: 1 / 1; width: " + width +"%;  flex: 0 0 "+ width +"%;"
    div.style.opacity = 1;
    div.classList.add("inactive");

    //div.textContent = `Div ${index + 1}`;
    gridContainer.appendChild(div);
    //console.log("grid div: " + index);

        div.addEventListener("mouseenter", () => {
            mouseInteraction(div);
        });


    return div;
    });
}

function removeGrid(element){
    gridContainer.removeChild(element);
}

function mouseInteraction(div){
    div.classList.remove("inactive");
    const randCol = "rgb(" + randomGenerator(0,255) + ", " + randomGenerator(0,255) + ", " + randomGenerator(0,255) +")";
    div.style.backgroundColor = randCol;
    div.style.opacity = div.style.opacity - 0.1
}

function randomGenerator(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

setButton.addEventListener("click", () => {

    gridArray.forEach(removeGrid);
    
   const gridSize = Number(window.prompt("enter a number between 1 and 100", 16));

   if(gridSize < 1 || gridSize > 100){
    return;
   }
   else {
    gridArray = [];
    let width = 100 / gridSize;
    loadGrid(gridSize, width);
   }
    
});

loadGrid(gridSize, gridElementWidth);