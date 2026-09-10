generateGrid(16);

const grid = document.querySelector("#grid");

grid.addEventListener("mouseover", e => {
    const target = e.target.id;
    const currentTarget = e.currentTarget.id;
    const targetCurrentBackgroundColor = e.target.style.backgroundColor;
    
    let targetCurrentOpacity = "0";
    
    if (target != currentTarget) {
        targetCurrentOpacity = e.target.style.opacity;
        targetCurrentOpacity = Number(targetCurrentOpacity);
    }

    if ((targetCurrentBackgroundColor == "") && (target != currentTarget)) {
        e.target.style.backgroundColor = setBackgroundColor();
        e.target.style.opacity = String(targetCurrentOpacity + 0.1);
    }

    if ((target != currentTarget) && (targetCurrentOpacity < 1)) {
        e.target.style.opacity = String(targetCurrentOpacity + 0.1);
    }
});

grid.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = setBackgroundColor();
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let userInput = "";
    
    do {
        userInput = prompt("Enter a whole positive number between 1 and 100");
    } while (userInput == "" || userInput == "0" || Number(userInput) < 0 ||
            Number(userInput) > 100 || !Number.isInteger(Number(userInput)));
    
    if (userInput) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        
        generateGrid(Number(userInput));
    }
});

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

function setBackgroundColor() {
    return `rgb(${getRandomNumber(255)}
                ${getRandomNumber(255)} 
                ${getRandomNumber(255)})`;
}

function generateGrid(size) {
    const grid = document.querySelector("#grid");
    
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        
        column.classList.toggle("column");
        grid.appendChild(column);
        
        for (let j = 0; j < size; j++) {
            const row = document.createElement("div");
            
            row.setAttribute("id", `cell${i}x${j}`);
            row.classList.toggle("row");
            column.appendChild(row);
        }
    }
}