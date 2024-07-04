// Get document body
const body = document.querySelector("body");

// Get left-half-placeholder
const leftHalfPlaceholder = document.getElementById("left-half-placeholder");

// Get right-half-placeholder
const rightHalfPlaceholder = document.getElementById("right-half-placeholder");

let isThin = false;

window.addEventListener("resize", (event) => {
    checkWindow();
});

function checkWindow() {
    let width = window.innerWidth;
    if (width <= 850) {
        isThin = true;
        changeToThin();
    } else {
        restoreToNormal();
        isThin = false;
    }
}

function changeToThin() {
    leftHalfPlaceholder.classList.remove("width-half");
    rightHalfPlaceholder.classList.remove("width-half");
    leftHalfPlaceholder.classList.add("width-full");
    rightHalfPlaceholder.classList.add("width-full");
}

function restoreToNormal() {
    leftHalfPlaceholder.classList.remove("width-full");
    rightHalfPlaceholder.classList.remove("width-full");
    leftHalfPlaceholder.classList.add("width-half");
    rightHalfPlaceholder.classList.add("width-half");
}

checkWindow();