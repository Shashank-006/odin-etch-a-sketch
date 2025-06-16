const squareLength = 16;

const boxContainer = document.createElement("div");
boxContainer.classList.toggle("boxContainer");
const box = document.createElement("div");
boxContainer.appendChild(box);

box.classList.toggle("box");

document.body.appendChild(boxContainer);