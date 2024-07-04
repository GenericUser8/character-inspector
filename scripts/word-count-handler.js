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