generateGrid(16);

const rainbowCheckbox = document.querySelector("#rainbow");
let randomColor = "";

rainbowCheckbox.addEventListener("click", () => {
    randomColor = getRandomColor();
});

const grid = document.querySelector("#grid");
const button = document.querySelector("button");

grid.addEventListener("mouseover", changeBackground);
button.addEventListener("click", () => {
    const userInput = getUserInput()
    
    if(userInput) {
        clearGrid(grid),
        generateGrid(userInput);
    }
});

function getRandomColor() {
    const randomNumber = (max) => Math.floor(Math.random() * (max + 1));
    return `rgb(${randomNumber(255)}
                ${randomNumber(255)} 
                ${randomNumber(255)})`;
}

function changeBackground(e) {
    if(e.target) {
        const currentBackground = e.target.style.backgroundColor;
        let currentOpacity = Number(e.target.style.opacity);
        
        if(currentBackground == "") {
            (rainbow.checked) ? e.target.style.backgroundColor = getRandomColor() :
                                e.target.style.backgroundColor = randomColor;
        }
        
        if(currentOpacity < 1) e.target.style.opacity = String(currentOpacity + 0.1);
    }
}

function generateGrid(size) {
    const grid = document.querySelector("#grid");    
    
    for(let i = 0; i < size; i++) {
        const column = document.createElement("div");
        
        column.classList.toggle("column");
        grid.appendChild(column);
        
        for(let j = 0; j < size; j++) {
            const row = document.createElement("div");           
            
            row.setAttribute("id", `cell${i}x${j}`);
            row.classList.toggle("row");
            column.appendChild(row);
        }
    }
}

function getUserInput() {
    let userInput = "";    
    
    do {
        userInput = prompt("Enter a whole positive number between 16 and 100");
        if (userInput == null) break;
    } while(userInput == "" ||
            Number(userInput) < 16 ||
            Number(userInput) > 100 ||
            !Number.isInteger(Number(userInput)));
    
    return Number(userInput);
}

function clearGrid(grid) {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}