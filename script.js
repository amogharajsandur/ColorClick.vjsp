let backgroundColor = document.querySelector("body");
let mainContent = document.querySelector("main");
let button = document.getElementById("change-colour");
let colorText = document.querySelectorAll(".color-text");
let infoButton = document.getElementById("info");
let infoIcon = document.getElementById("info-icon");
let infoBox = document.querySelector(".info-box");

// colors is the array containing all the colors
let colors = ["red", "yellow", "green", "blue", "black", "white", "pink", "purple", "orange", "grey"];
let value = Math.floor(Math.random()*10);
let infoVisible = false;

// alert("Change the color of the HTML doc with just a mouse click!")

button.addEventListener("click", changeColor);
infoButton.addEventListener("click", showInfo);

// This function generates a random number between 0-9
function randomNumber() {
    value = Math.floor(Math.random()*10);
    return value;
}

// This function updates the background color
function changeColor() {
    let i = randomNumber();
    backgroundColor.style.backgroundColor = colors[i];
    colorText.forEach(element => 
        {element.style.color = colors[i];}
    );
    // colorText.style.color = colors[i];
}

function showInfo() {
    if (infoVisible === false) {
        // infoBox.style.display = "flex";
        infoIcon.style.cssText = "rotate: 180deg; transition: ease-in-out 0.1s;";
        infoBox.style.cssText = "display: flex; transition: ease-in-out 0.3s;";
        infoVisible = true;
    } else if (infoVisible) {
        // infoBox.style.display = "none";
        infoIcon.style.cssText = "rotate: 0; transition: ease-in-out 0.1s;";
        infoBox.style.cssText = "display: none; transition: ease-in-out 0.3s;"
        infoVisible = false;
    }
}