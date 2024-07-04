// Find table body object
const charTableBody = document.getElementById("individual-character-table-body");
let tableBody = "";

// Find ranking table body object
const charCountTableBody = document.getElementById("character-count-table-body");
let rankingList = [];

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
};

// Replacing some characters that aren't visible
const charReplaceDict = {
    ' ':"\' \'",
    '\u{A}':"\\n"
};

function updateCharTableContents() {
    tableBody="";
    rankingList=[];
    for (let i = 0; i < textLength; i++) {
        let c = textInput.charAt(i);

        // Checks if the character already exists in rankingList
        let found = false;
        let j = 0;
        for(j = 0; j < rankingList.length; j++) {
            if (rankingList[j].char == c) {
                found = true;
                break;
            }
        }
        if (found == true) {
            rankingList[j].count += 1;
        } else {
            rankingList.push({
                char: c,
                count: 1
            });
        }

        // Populates all chars table
        let charType = findCharType(c);
        tableBody = tableBody + (
            "<tr class=\"" + charTypeClassDict[charType] + "\">" +
                "<td class=\"char-table-id\">" + i + "</td>" + 
                "<td class=\"char-table-char\">" + showChar(c) + "</td>" +
                "<td class=\"char-table-unicode\">" + textInput.charCodeAt(i) + "</td>" +
                "<td class=\"char-table-type\">" + charType + "</td>" + 
            "</tr>"
        );
    }

    // Sorts occurances table by most common
    // Adapted from https://www.geeksforgeeks.org/sort-array-of-objects-by-single-key-with-date-value-in-javascript/
    rankingList.sort((a, b) => b.count - a.count);

    // Populates Occurences Table
    let charType = "";
    let rankingTableBody = "";
    for (let i = 0; i < rankingList.length; i++) {
        let charType = findCharType(rankingList[i].char);
        rankingTableBody = rankingTableBody + (
            "<tr class=\"" + charTypeClassDict[charType] + "\">" + 
                "<td class=\"char-count-table-rank\">" + (i + 1) + "</td>" +
                "<td class=\"char-count-table-char\">" + showChar(rankingList[i].char) + "</td>" +
                "<td class=\"char-count-table-unicode\">" + rankingList[i].char.charCodeAt(0) + "</td>" + 
                "<td class=\"char-count-table-type\">" + charType + "</td>" +
                "<td class=\"char-count-table-count\">" + rankingList[i].count + "</td>" +
            "</tr>"
        );
    }

    // Updates Table
    charTableBody.innerHTML = tableBody;
    charCountTableBody.innerHTML = rankingTableBody;
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
    let returnStr = charReplaceDict[c];
    if (returnStr == undefined) {
        return c;
    } else {
        return returnStr;
    }
}