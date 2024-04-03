// Write a function, createPhoneNumber, that accepts an array of 10 integers (between 0 and 9), and returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct.
// Don't forget the space after the closing parentheses!
// ----------------


function createPhoneNumber(arrDigits) {
    // Grab the first 3 digits of the array and join them, do the same thing going forward.
    const areaCode = arrDigits.slice(0, 3).join('');
    const threeNum = arrDigits.slice(3, 6).join('');
    const fourNum = arrDigits.slice(6).join('');

    return `(${areaCode}) ${threeNum}-${fourNum}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

console.log("-------------------------------");

// Write a function, alphabetPosition. For this function you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
// ----------------

console.log(alphabetPosition("The Sunset sets at twelve o'clock."))

const toCamelCase = "";
let carmel_case = "";
for (let i=0; i <structuredClone.length; i++){
    camel_case +- str [i +1].toUpper
}
console.log("-------------------------------")

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



console.log("-------------------------------")

