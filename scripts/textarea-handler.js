// Summary block
const inputSummaryContainer = document.getElementById("input-summary-container");
inputSummaryContainer.setAttribute("hidden","");

// Text area object
const textAreaObject = document.getElementById("input-text-area");
let textInput = "";
let textLength = 0;

// Character Display
const characterCountDisplay = document.getElementById("characters-display");
const characterCountRow = document.getElementById("characters-row");
characterCountRow.setAttribute("hidden", "");
let charCount = 0;

// Including whitespace Display
const charactersIncludingNewlineDisplay = document.getElementById("characters-including-newline-display");
const charactersIncludingNewlineRow = document.getElementById("characters-including-newline-row");

// Alphabetical Characters Display
const alphaCountDisplay = document.getElementById("alpha-display");
const alphaCountRow = document.getElementById("alpha-row");
alphaCountRow.setAttribute("hidden","");
let alphaCount = 0;

// Uppercase Characters Display
const upperCountDisplay = document.getElementById("upper-display");
const upperCountRow = document.getElementById("upper-row");
upperCountRow.setAttribute("hidden","");
let upperCount = 0;

// Lowercase Characters Display
const lowerCountDisplay = document.getElementById("lower-display");
const lowerCountRow = document.getElementById("lower-row");
lowerCountRow.setAttribute("hidden","");
let lowerCount = 0;

// Numeric Characters Display
const numericCountDisplay = document.getElementById("numeric-display");
const numericCountRow = document.getElementById("numeric-row");
numericCountRow.setAttribute("hidden","");
let numericCount = 0;

// ASCII Symbols Display
const asciiSymbolsCountDisplay = document.getElementById("ascii-symbols-display");
const asciiSymbolsCountRow = document.getElementById("ascii-symbols-row");
asciiSymbolsCountRow.setAttribute("hidden","");
let asciiSymbolsCount = 0;

// ASCII Punctuation Display
const asciiPunctuationCountDisplay = document.getElementById("ascii-punctuation-display");
const asciiPunctuationCountRow = document.getElementById("ascii-punctuation-row");
asciiPunctuationCountRow.setAttribute("hidden","");
let asciiPunctuationCount = 0;

// ASCII Operators Display
const asciiOperatorsCountDisplay = document.getElementById("ascii-operators-display");
const asciiOperatorsCountRow = document.getElementById("ascii-operators-row");
asciiOperatorsCountRow.setAttribute("hidden","");
let asciiOperatorsCount = 0;

// ASCII Other Display
const asciiOtherCountDisplay = document.getElementById("ascii-other-display");
const asciiOtherCountRow = document.getElementById("ascii-other-row");
asciiOtherCountRow.setAttribute("hidden","");
let asciiOtherCount = 0;

// Spaces Display
const spacesCountDisplay = document.getElementById("spaces-display");
const spacesCountRow = document.getElementById("spaces-row");
spacesCountRow.setAttribute("hidden","")
let spacesCount = 0;

// Line Breaks Display
const lineBreaksDisplay = document.getElementById("line-breaks-display");
const lineBreaksRow = document.getElementById("line-breaks-row");
let lineBreaksCount = 0;

// Other Characters Count
const otherCharactersCountDisplay = document.getElementById("other-characters-display");
const otherCharactersCountRow = document.getElementById("other-characters-row");
otherCharactersCountRow.setAttribute("hidden","");
let otherCharactersCount = 0;

textAreaObject.addEventListener('input', async function() {
    textInput = textAreaObject.value;
    textLength = textInput.length
    if (textLength > 0) {
        inputSummaryContainer.removeAttribute("hidden");
        countCharacters();
        countAlpha();
        countUpper();
        countLower();
        countNumeric();
        countAsciiSymbols();
        countSpaces();
        countOther();
    } else {
        inputSummaryContainer.setAttribute("hidden","");
    }
});

function countCharacters() {
    charCount = 0;
    newLineCount = 0;
    for (let i = 0; i < textLength; i++) {
        if (textInput.charAt(i) != '\n') {
            charCount++;
        } else {
            newLineCount++;
        }
    }
    if (textLength > 0) {
        characterCountRow.removeAttribute("hidden");
        characterCountDisplay.innerHTML = charCount;
    } else {
        characterCountRow.setAttribute("hidden", "");
    }
    if (newLineCount > 0) {
        charactersIncludingNewlineRow.removeAttribute("hidden");
        charactersIncludingNewlineDisplay.innerHTML = textLength;
        lineBreaksRow.removeAttribute("hidden");
        lineBreaksDisplay.innerHTML = newLineCount;
    } else {
        charactersIncludingNewlineRow.setAttribute("hidden","");
        lineBreaksRow.setAttribute("hidden","");
        
    }
}

function countAlpha() {
    alphaCount = 0;
    for (let i = 0; i < textLength; i++) {
        c = textInput.charAt(i);
        if (isAlpha(c)) {
            alphaCount++;
        }
    }
    if (alphaCount > 0) {
        alphaCountRow.removeAttribute("hidden");
        alphaCountDisplay.innerHTML = alphaCount;
    } else {
        alphaCountRow.setAttribute("hidden","");
    }
}

function countUpper() {
    upperCount = 0;
    for (let i = 0; i < textLength; i++) {
        c = textInput.charAt(i);
        if (isUpper(c)) {
            upperCount++;
        }
    }
    if (upperCount > 0) {
        upperCountRow.removeAttribute("hidden");
        upperCountDisplay.innerHTML = upperCount;
    } else {
        upperCountRow.setAttribute("hidden","");
    }
}

function countLower() {
    lowerCount = 0;
    for (let i = 0; i < textLength; i++) {
        c = textInput.charAt(i);
        if (isLower(c)) {
            lowerCount++;
        }
    }
    if (lowerCount > 0) {
        lowerCountRow.removeAttribute("hidden");
        lowerCountDisplay.innerHTML = lowerCount;
    } else {
        lowerCountRow.setAttribute("hidden","");
    }
}

function countNumeric() {
    numericCount = 0;
    for (let i = 0; i < textLength; i++) {
        c = textInput.charAt(i);
        if (isNumeric(c)) {
            numericCount++;
        }
    }
    if (numericCount > 0) {
        numericCountRow.removeAttribute("hidden");
        numericCountDisplay.innerHTML = numericCount;
    } else {
        numericCountRow.setAttribute("hidden","");
    }
}

function countAsciiSymbols() {
    asciiSymbolsCount = 0;
    asciiPunctuationCount = 0;
    asciiOperatorsCount = 0;
    asciiOtherCount = 0;
    for (let i = 0; i < textLength; i++) {
        c = textInput.charAt(i);
        if (isPunctuation(c)) {
            asciiSymbolsCount++;
            asciiPunctuationCount++;
        } else if (isOperator(c)) {
            asciiSymbolsCount++;
            asciiOperatorsCount++;
        } else if (isOtherAsciiSymbol(c)) {
            asciiSymbolsCount++;
            asciiOtherCount++;
        }
    }
    if (asciiSymbolsCount > 0) {
        asciiSymbolsCountRow.removeAttribute("hidden");
        asciiSymbolsCountDisplay.innerHTML = asciiSymbolsCount;
        if (asciiPunctuationCount > 0) {
            asciiPunctuationCountRow.removeAttribute("hidden");
            asciiPunctuationCountDisplay.innerHTML = asciiPunctuationCount;
        } else {
            asciiPunctuationCountRow.setAttribute("hidden","");
        }
        if (asciiOperatorsCount > 0) {
            asciiOperatorsCountRow.removeAttribute("hidden");
            asciiOperatorsCountDisplay.innerHTML = asciiOperatorsCount;
        } else {
            asciiOperatorsCountRow.setAttribute("hidden","");
        }
        if (asciiOtherCount > 0) {
            asciiOtherCountRow.removeAttribute("hidden");
            asciiOtherCountDisplay.innerHTML = asciiOtherCount;
        } else {
            asciiOtherCountRow.setAttribute("hidden","");
        }
    } else {
        asciiSymbolsCountRow.setAttribute("hidden","");
        asciiPunctuationCountRow.setAttribute("hidden","");
        asciiOperatorsCountRow.setAttribute("hidden","");
        asciiOtherCountRow.setAttribute("hidden","");
    }
}

function countSpaces() {
    spacesCount = 0;
    for (let i = 0; i < textLength; i++) {
        let c = textInput.charAt(i);
        if (c == ' ') {
            spacesCount++;
        }
    }
    if (spacesCount > 0) {
        spacesCountRow.removeAttribute("hidden");
        spacesCountDisplay.innerHTML = spacesCount;
    } else {
        spacesCountRow.setAttribute("hidden","");
    }
}

function countOther() {
    otherCharactersCount = 0;
    for (let i = 0; i < textLength; i++) {
        let c = textInput.charAt(i);
        if (!(
            isAlpha(c) ||
            isNumeric(c) ||
            isPunctuation(c) ||
            isOperator(c) ||
            isOtherAsciiSymbol(c) ||
            (c == '\n')
        )) {
            otherCharactersCount++;
        }
    }
    if (otherCharactersCount > 0) {
        otherCharactersCountRow.removeAttribute("hidden")
        otherCharactersCountDisplay.innerHTML = otherCharactersCount;
    } else {
        otherCharactersCountRow.setAttribute("hidden","");
    }
}