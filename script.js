let backgroundColor = document.querySelector("body");
let button = document.getElementById("change-colour");
// colors is the array containing all the colors
let colors = ["red", "yellow", "green", "blue", "black", "white", "pink", "purple", "orange", "grey"];
let colorText = document.getElementById("color-text");
let value = Math.floor(Math.random()*10);

button.addEventListener("click", changeColor);

function randomNumber() {
    value = Math.floor(Math.random()*10);
    return value;
}

function changeColor() {
    backgroundColor.style.backgroundColor = colors[randomNumber()];
    // backgroundColor.innerHTML = `
    // <button type="button" id="change-colour">Change Color</button>
    // `
    console.log(randomNumber());
    // for (let i=0; i<colors.length, i++;) {
    // }
}