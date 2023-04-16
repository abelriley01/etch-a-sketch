// Declare variables at the top of the file
let numRows = 0;
let numCols = 0;
const grid = document.getElementById("container");
const slider = document.querySelector(".slider");
const resetButton = document.getElementById("clear");
const colorPicker = document.querySelector('#color-picker');

// Call createGrid() function on slider value change
slider.addEventListener("input", () => {
  numRows = slider.value;
  numCols = slider.value;
  createGrid();
});

// Create a grid with specified rows and columns
function createGrid() {
  // Clear the grid before creating a new one
  grid.innerHTML = "";
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  for (let row = 0; row < numRows; row++){
    for (let col = 0; col < numCols; col++){
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }
  }
}

// Add event listeners for coloring cells and clearing the grid
grid.addEventListener("mousedown", () => {
  grid.addEventListener("mouseover", colorChange);
});

window.addEventListener("mouseup", () => {
  grid.removeEventListener("mouseover", colorChange);
});

resetButton.addEventListener("click", clearGrid);

colorPicker.addEventListener("input", () => {
  const color = colorPicker.value;
  event.target.style.backgroundColor = color;
});

// Functions for clearing the grid and coloring cells
function clearGrid() {
  const coloredCells = grid.querySelectorAll(".colored");
  coloredCells.forEach((cell) => {
    cell.classList.remove("colored");
    cell.style.backgroundColor = "";
  });
}

function colorChange(event) {
  const color = colorPicker.value;
  event.target.classList.add("colored");
  event.target.style.backgroundColor = color;
}
