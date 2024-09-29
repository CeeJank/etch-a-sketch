//grid selection
const container = document.querySelector(".container");
const form = document.querySelector(".form");

const input = document.createElement("input");
input.classList.add("input");
caution = document.createElement("p");
caution.textContent = "(Choose a grid between size not smaller than 1 or bigger than 100)";

const submitbtn = document.createElement("button");
submitbtn.classList.add("submitbtn");
submitbtn.textContent = "SUBMIT";
const submit = submitbtn.addEventListener("click", function(){getGridSize(input.value)});

form.appendChild(input);
form.appendChild(caution)
form.appendChild(submitbtn);


function getGridSize(gridSize) {
    if (gridSize > 100 || gridSize < 1) {
        alert("Invalid!");
        container.replaceChildren();
        return;
    }
    container.replaceChildren(); //refreshes the grid size when button is pressed
    createGrid(gridSize);
}

function createGrid(gridSize) {
    
    const square = Math.pow(gridSize, 2);
    const squareSize = (100 / gridSize);

    for (i = 0; i < square; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.style.width = `${squareSize}%`;
        gridBlock.style.height = `${squareSize}%`;
        gridBlock.style.border = "2px solid black";
        gridBlock.style.boxSizing = "border-box";
        container.appendChild(gridBlock);
    }
}