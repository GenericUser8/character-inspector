// Find table body object
const charTableBody = document.getElementById("individual-character-table-body");
let tableBody = "";

// Character Types and corresponding row classes
const charTypeClassDict = {
    "Alphabetic (Lower)":"char-table-alpha-lower",
    "Alphabetic (Upper)":"char-table-alpha-upper",
    "Numeric":"char-table-num",
    "Punctuation":"char-table-punctuation",
    "Operator":"char-table-operator",
    "Other Symbol":"char-table-other-symbol",
    "Whitespace":"char-table-whitespace",
    "New Line":"char-table-newline",
    "Unknown":"char-table-unknown"
}

function updateCharTableContents() {
    tableBody="";
    for (let i = 0; i < textLength; i++) {
        let c = textInput.charAt(i);
        let charType = findCharType(c)
        tableBody = tableBody + (
            "<tr class=\"" + charTypeClassDict[charType] + "\">" +
                "<td class=\"char-table-id\">" + i + "</td>" + 
                "<td class=\"char-table-char\">" + showChar(c) + "</td>" +
                "<td class=\"char-table-unicode\">" + textInput.charCodeAt(i) + "</td>" +
                "<td>" + charType + "</td>" + 
            "</tr>"
        );
    }

    // Updates Table
    charTableBody.innerHTML = tableBody;
}

function findCharType(c) {
    if (isLower(c)) {
        return "Alphabetic (Lower)";
    } else if (isUpper(c)) {
        return "Alphabetic (Upper)";
    } else if (isNumeric(c)) {
        return "Numeric";
    } else if (c == ' ') {
        return "Whitespace";
    } else if (isPunctuation(c)) {
        return "Punctuation";
    } else if (isOperator(c)) {
        return "Operator";
    } else if (isOtherAsciiSymbol(c)) {
        return "Other Symbol";
    } else if (c == '\n') {
        return "New Line";
    } else {
        return "Unknown";
    }
}

// TODO: Some characters do not print properly.
function showChar(c) {
    return c;
}