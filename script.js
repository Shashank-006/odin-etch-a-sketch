const squareLength = 16;

const boxContainer = document.createElement("div");
boxContainer.classList.toggle("boxContainer");
const sizeButton = document.querySelector(".size-button");
const colorInput = document.querySelector("#color-selector");

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

function randomHue() {
    return Math.floor(Math.random() * 256);
}

function mouseColor(e, red = randomHue(), green = randomHue(), blue = randomHue()) {
    const square = e.target;
    if(square.classList.contains("square") && e.shiftKey) {
        if(mapOpacity.has(square)) {
            mapOpacity.get(square).opacity += 0.2;
        } else {
            mapOpacity.set(square, {opacity: 0.2, r: red, g: green, b: blue});
        }
        const colors = mapOpacity.get(square);
        square.setAttribute("style", `background-color: rgb(${colors.r}, ${colors.g}, ${colors.b}, ${colors.opacity})`);
    }
}

const mapOpacity = new Map();

let lastListener = mouseColor;
boxContainer.addEventListener("mouseover", mouseColor);

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

colorInput.addEventListener("input", () => {
    boxContainer.removeEventListener("mouseover", lastListener);
    const hexadecimalColor = colorInput.value;
    
    lastListener = (e) => {
        const r = parseInt(hexadecimalColor.slice(1, 3), 16);
        const g = parseInt(hexadecimalColor.slice(3, 5), 16);
        const b = parseInt(hexadecimalColor.slice(5), 16);

        mouseColor(e, r, g, b);
    }
    boxContainer.addEventListener("mouseover", lastListener);
});

buildSquares(squareLength);

document.body.appendChild(boxContainer);