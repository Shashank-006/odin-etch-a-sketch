const squareLength = 16;

const boxContainer = document.createElement("div");
boxContainer.classList.toggle("boxContainer");

for(let i = 0; i < squareLength; i++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for(let j = 0; j < squareLength; j++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        row.appendChild(square);
    }
    boxContainer.appendChild(row);
}

document.body.appendChild(boxContainer);