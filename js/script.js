createGrid(16);

const container = document.querySelector(".container");
container.addEventListener("mouseover", e => {
    if (e.target.style.backgroundColor == "") {
        e.target.style.backgroundColor = changeBackgroundColor();
        e.target.style.opacity = "10%";
    }
    
    switch (e.target.style.opacity) {
        case "0.1":
            e.target.style.opacity = "20%";
            break;
        case "0.2":
            e.target.style.opacity = "30%";
            break;
        case "0.3":
            e.target.style.opacity = "40%";
            break;
        case "0.4":
            e.target.style.opacity = "50%";
            break;
        case "0.5":
            e.target.style.opacity = "60%";
            break;
        case "0.6":
            e.target.style.opacity = "70%";
            break;
        case "0.7":
            e.target.style.opacity = "80%";
            break;
        case "0.8":
            e.target.style.opacity = "90%";
            break;
        case "0.9":
            e.target.style.opacity = "100%";
            break;
    }

    e.currentTarget.style.backgroundColor = "";
    e.currentTarget.style.opacity = "";
});

container.addEventListener("mouseout", e => {
    e.target.style.backgroundColor = changeBackgroundColor();
    e.currentTarget.style.backgroundColor = "";
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let userInput = "";
    
    do {
        userInput = prompt("Enter a whole positive number between 1 and 100");
    } while (userInput == "" || userInput == "0" || Number(userInput) < 0 ||
            Number(userInput) > 100 || !Number.isInteger(Number(userInput)));
    
    if (userInput) {
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
        
        for (let j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
            row.setAttribute("id", `cell${i}x${j}`);
            row.classList.toggle("row");
            column.appendChild(row);
        }
    }
}