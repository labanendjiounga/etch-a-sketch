const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const column = document.createElement("div");
  column.classList.toggle("column");
  container.appendChild(column);
  
  for(let j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    column.appendChild(row);
  }
}