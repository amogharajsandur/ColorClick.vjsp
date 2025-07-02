let backgroundColor = document.querySelector("body");
let button = document.getElementById("change-colour");
let colorText = document.getElementById("color-text");

// colors is the array containing all the colors
let colors = ["red", "yellow", "green", "blue", "black", "white", "pink", "purple", "orange", "grey"];
let value = Math.floor(Math.random()*10);

button.addEventListener("click", changeColor);

function randomNumber() {
    value = Math.floor(Math.random()*10);
    return value;
}

// This function updates the background color
function changeColor() {
    let i = randomNumber()
    backgroundColor.style.backgroundColor = colors[i];
    colorText.style.color = colors[i]
}