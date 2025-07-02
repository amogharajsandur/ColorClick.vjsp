let backgroundColor = document.querySelector("body");
let button = document.getElementById("change-colour");
// colors is the array containing all the colors
let colors = ["red", "yellow", "green", "blue", "black", "white"];

changeColor.addEventListener("click", changeColor());

function changeColor() {
    backgroundColor.innerHTML = `
        <button id="change-colour">Change Color</button>
    `
    console.log(backgroundColor)
    // for (let i=0; i<colors.length, i++;) {
    // }
}