// Word Count Display
const wordCountDisplay = document.getElementById("word-count-display");
const wordCountRow = document.getElementById("word-count-row");
wordCountRow.setAttribute("hidden","");
let wordCount = 1;

// Sentence Count Display
const sentenceCountDisplay = document.getElementById("sentence-count-display");
const sentenceCountRow = document.getElementById("sentence-count-row");
sentenceCountRow.setAttribute("hidden","");
let sentenceCount = 0;

// Paragraph Count Display
const paragraphCountDisplay = document.getElementById("paragraph-count-display");
const paragraphCountRow = document.getElementById("paragraph-count-row")
paragraphCountRow.setAttribute("hidden","")
let paragraphCount = 0;

// Readability Display
const readabilityDisplay = document.getElementById("readability-display");
const readabilityRow = document.getElementById("readability-row");
readabilityRow.setAttribute("hidden","");

// Readability Raw Display
const readabilityRawDisplay = document.getElementById("readability-raw-display");
const readabilityRawRow = document.getElementById("readability-raw-row");
readabilityRawRow.setAttribute("hidden","");
const READABILITY_DATA_DECIMAL_PLACES = 4;

// Readability L Display
const readabilityLDisplay = document.getElementById("readability-l-display");
const readabilityLRow = document.getElementById("readability-l-row");
readabilityLRow.setAttribute("hidden","");

// Readability S Display
const readabilitySDisplay = document.getElementById("readability-s-display");
const readabilitySRow = document.getElementById("readability-s-row");
readabilitySRow.setAttribute("hidden","");

// Handler Functions
function countWords() {
    wordCount = 1;
    sentenceCount = 0;
    paragraphCount = 1;
    for (let i = 0; i < textLength - 1; i++) {
        c = textInput.charAt(i);
        n = textInput.charAt(i + 1);

        if (c == ' ' && isAlpha(n)) {
            wordCount++;
        }
        if (sentenceEnds.includes(c) && (n == ' ' || n == '\n')) {
            sentenceCount++;
        }
        if (c == '\n' && n !='\n') {
            paragraphCount++;
        }
    }

    if (sentenceEnds.includes(textInput.charAt(textLength - 1))) {
        sentenceCount++;
    }

    if (wordCount > 1) {
        wordCountRow.removeAttribute("hidden");
        wordCountDisplay.innerHTML = wordCount;
    } else {
        wordCountRow.setAttribute("hidden","")
    }

    if (sentenceCount > 0) {
        sentenceCountRow.removeAttribute("hidden");
        sentenceCountDisplay.innerHTML = sentenceCount;
    } else {
        sentenceCountRow.setAttribute("hidden","")
    }

    if (paragraphCount > 1) {
        paragraphCountRow.removeAttribute("hidden");
        paragraphCountDisplay.innerHTML = paragraphCount;
    } else {
        paragraphCountRow.setAttribute("hidden","")
    }
}

function calculateReadability() {    
    if (wordCount > 1) {
        // console.log("alphaCount: " + alphaCount);
        // console.log("wordCount: " + wordCount);
        let averageLetters = alphaCount / wordCount * 100; // Per 100 words.
        // console.log("averageLetters: " + averageLetters);
        let averageSentences = sentenceCount / wordCount * 100; // Per 100 words.
        // console.log("averageSentences: " + averageSentences);
        let index = (0.0558 * averageLetters) - (0.296 * averageSentences) - 15.8;
        // console.log("index:" + index);

        if (index < 1) {
            readabilityDisplay.innerHTML = "Before Grade 1";
        } else if (index >= 16) {
            readabilityDisplay.innerHTML = "Grade 16+";
        } else {
            readabilityDisplay.innerHTML = "Grade " + Math.round(index);
        }

        readabilityRawDisplay.innerHTML = index.toFixed(READABILITY_DATA_DECIMAL_PLACES);
        readabilityLDisplay.innerHTML = averageLetters.toFixed(READABILITY_DATA_DECIMAL_PLACES);
        readabilitySDisplay.innerHTML = averageSentences.toFixed(READABILITY_DATA_DECIMAL_PLACES);

        readabilityRow.removeAttribute("hidden");
        readabilityRawRow.removeAttribute("hidden");
        readabilityLRow.removeAttribute("hidden");
        readabilitySRow.removeAttribute("hidden");
    } else {
        readabilityRow.setAttribute("hidden","");
        readabilityRawRow.setAttribute("hidden","");
        readabilityLRow.setAttribute("hidden","");
        readabilitySRow.setAttribute("hidden","");
    }
}