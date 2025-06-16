const squareLength = 16;

const boxContainer = document.createElement("div");
boxContainer.classList.toggle("boxContainer");
const sizeButton = document.querySelector(".size-button");

function buildSquares(length) {
    for(let i = 0; i < length; i++) {
        const row = document.createElement("div");
        row.classList.toggle("row");
        for(let j = 0; j < length; j++) {
            const square = document.createElement("div");
            square.classList.toggle("square");
            row.appendChild(square);
        }
        boxContainer.appendChild(row);
    }
}

function removeSquares() {
    const rows = document.querySelectorAll(".boxContainer > *");
    rows.forEach(r => boxContainer.removeChild(r));
}

boxContainer.addEventListener("mouseover", (e) => {
    const square = e.target;
    if(square.classList.contains("square")) {
        square.setAttribute("style", "background-color: blue");
    }
});

sizeButton.addEventListener("click", () => {
    let result;
    do {
        result = prompt("What size do you want to pick? (1 - 100)");
        result = +result;
    }
    while (Number.isNaN(result) || !Number.isInteger(result) || result < 1 || result > 100);
    
    removeSquares();
    buildSquares(result);
});

buildSquares(squareLength);

document.body.appendChild(boxContainer);