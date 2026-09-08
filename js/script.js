const container = document.querySelector(".container");
let i;
let j;

for (i = 0; i < 16; i++) {
  const column = document.createElement("div");
  column.classList.toggle("column");
  container.appendChild(column);
  
  for(j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.setAttribute("id", `cell${i}x${j}`);
    row.classList.toggle("row");
    column.appendChild(row);
  }
}

const cells = document.querySelectorAll("div");
cells.forEach((cell) => {
    if (cell.id) {
        cell.addEventListener("mouseenter", () => {
            cell.classList.add("class", "mouseenter");
        });

        cell.addEventListener("mouseleave", () => {
            cell.classList.add("class", "mouseleave");
        });
    }
});