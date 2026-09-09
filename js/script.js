createGrid(16);

const container = document.querySelector(".container");
container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = changeBackgroundColor();
    e.currentTarget.style.backgroundColor = "";
});

container.addEventListener("mouseout", e => {
    e.target.style.opacity = changeBackgroundColor();
    e.currentTarget.style.backgroundColor = "";
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let userInput = "";
    do {
        userInput = prompt("Enter a whole positive number between 2 and 100");
    } while(userInput == "" || userInput == "0" || Number(userInput) < 2 ||
            Number(userInput) > 100 || !Number.isInteger(Number(userInput)));
    
    if(userInput) {
        console.log(userInput);
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        createGrid(Number(userInput));
    }
});

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeBackgroundColor() {
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return randomColor;
}

function createGrid(gridSize) {
    const container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.classList.toggle("column");
        container.appendChild(column);
        
        for(let j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
            row.setAttribute("id", `cell${i}x${j}`);
            row.classList.toggle("row");
            column.appendChild(row);
        }
    }
}