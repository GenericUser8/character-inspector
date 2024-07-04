// Get document body
const body = document.querySelector("body");

// Get left-half-placeholder
const leftHalfPlaceholder = document.getElementById("left-half-placeholder");

// Get right-half-placeholder
const rightHalfPlaceholder = document.getElementById("right-half-placeholder");

// Get Summary cards
const summaryCards = document.querySelectorAll(".summary-card");

// Get Left Summary card
const leftCard = document.getElementById("individual-summary-card");

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

    summaryCards.forEach(card => {
        card.style.marginRight = '10pt';
    });

    leftCard.style.marginLeft = '10pt';
}

function restoreToNormal() {
    leftHalfPlaceholder.classList.remove("width-full");
    rightHalfPlaceholder.classList.remove("width-full");
    leftHalfPlaceholder.classList.add("width-half");
    rightHalfPlaceholder.classList.add("width-half");

    summaryCards.forEach(card => {
        card.style.marginRight = '5pt';
    });

    leftCard.style.marginLeft = '5pt';
    leftCard.style.marginRight = '10pt';
}

checkWindow();