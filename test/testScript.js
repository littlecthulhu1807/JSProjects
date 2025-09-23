
const div01 = document.createElement("div");
const div02 = document.createElement("div");
const mainDiv = document.querySelector('.main');


console.log(div01);
console.log(div02);
console.log(mainDiv);

div01.textContent = "Hello World!";
div02.innerHTML = "<span>Hello World!</span>";

mainDiv.appendChild(div01);
mainDiv.appendChild(div02);