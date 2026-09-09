const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const column = document.createElement("div");
  column.classList.toggle("column");
  container.appendChild(column);
  
  for(let j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.setAttribute("id", `cell${i}x${j}`);
    row.classList.toggle("row");
    column.appendChild(row);
  }
}

container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = changeBackgroundColor();
    e.currentTarget.style.backgroundColor = "";
});

container.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = changeBackgroundColor();
    e.currentTarget.style.backgroundColor = "";
});

function random(number) {
return Math.floor(Math.random() * (number + 1));
}

function changeBackgroundColor() {
const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
return randomColor;
}