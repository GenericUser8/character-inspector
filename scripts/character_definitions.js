// Does not consider all punctuation, but should be fine in most situations.
// Based on: https://www.grammarly.com/punctuation#
const punctuation = [
    '!', '.', ',', '?', 
    '"', '\'', 
    ';', ':', 
    '(', ')', '[', ']', '{', '}',
    '-'
];

// Only consideres ASCII operators
const operators = [
    '+', '-', '/', '*', '%', '='
];

const otherAsciiSymbols = [
    '#', '&', '@', '\\', '^', '_', '`', '~', '|', '$',
    '<', '>'
];

const sentenceEnds = [
    '.', '!', '?'
];