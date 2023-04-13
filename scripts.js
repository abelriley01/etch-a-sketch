let numRows;
let numCols;

const slider = document.querySelector(".slider");

slider.oninput = function() {
    const value = this.value;
    numRows = value;
    numCols = value;
    createGrid();   
}


  const grid = document.getElementById("container");

  function createGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
      }
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
