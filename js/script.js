const container = document.querySelector(".container");
let i;
let j;

for (i = 0; i < 16; i++) {
  const column = document.createElement("div");
  column.classList.toggle("column");
  container.appendChild(column);
  
  for(j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.setAttribute("id", `div${i}x${j}`);
    row.classList.toggle("row");
    column.appendChild(row);
  }
}