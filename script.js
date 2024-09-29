let r = "";
let g = "";
let b = "";

//css selector
const container = document.querySelector(".container");
const form = document.querySelector(".form");

//input grid size
const input = document.createElement("input");
input.classList.add("input");
caution = document.createElement("p");
caution.textContent = "<<Choose a grid between size not smaller than 1 or bigger than 100>>";
caution.classList.add("caution");

//button to submit the input
const submitbtn = document.createElement("button");
submitbtn.classList.add("submitbtn");
submitbtn.textContent = "SUBMIT";
const submit = submitbtn.addEventListener("click", function(){getGridSize(input.value)});

form.appendChild(input);
form.appendChild(caution)
form.appendChild(submitbtn);

//refreshes last grid set, with set limits
function getGridSize(gridSize) {
    if (gridSize > 100 || gridSize < 1) {
        alert("Invalid! Choose again!");
        container.replaceChildren();
        return;
    }
    container.replaceChildren(); //refreshes the grid size when button is pressed
    createGrid(gridSize);
}

//creating the grid
function createGrid(gridSize) {
    
    const square = Math.pow(gridSize, 2);
    const squareSize = (100 / gridSize); //each square size 

    for (i = 0; i < square; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("hover");
        gridBlock.style.width = `${squareSize}%`;
        gridBlock.style.height = `${squareSize}%`;
        gridBlock.style.border = "2px solid black";
        gridBlock.style.boxSizing = "border-box"; // gives 0 margins between squares
        gridBlock.addEventListener("mouseover", () => gridBlock.style.backgroundColor = getRandomColor(r, g, b));
        container.appendChild(gridBlock);
    }
}

function getRandomColor(r, g, b) {
    r = generateColor(0, 255);
    g = generateColor(0, 255);
    b = generateColor(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateColor(min, max) {
    let color = Math.floor(Math.random() * (max - min));
    return color;
}

