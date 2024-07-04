// Specific Checks
function isAlpha(c) {
    if (isLower(c) || isUpper(c)) {
        return true;
    } else {
        return false;
    }
}

function isUpper(c) {
    if (c >= 'A' && c <= 'Z') {
        return true;
    } else {
        return false;
    }
}

function isLower(c) {
    if (c >= 'a' && c <= 'z') {
        return true;
    } else {
        return false;
    }   
}

function isNumeric(c) {
    if (c >= '0' && c <= '9') {
        return true;
    } else {
        return false;
    }
}

function isPunctuation(c) {
    if (punctuation.includes(c)) {
        return true;
    } else {
        return false;
    }
}

function isOperator(c) {
    if(operators.includes(c)) {
        return true;
    } else {
        return false;
    }
}

function isOtherAsciiSymbol(c) {
    if (otherAsciiSymbols.includes(c)) {
        return true;
    } else {
        return false;
    }
}