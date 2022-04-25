const reverseString = function(string) {
    const stringArray = [];
    for (let i = 0; i < string.length; i++) {
        stringArray[i] = string.charAt(i);
    }
    newString = '';
    for (let i = stringArray.length - 1; i >= 0; i--) {
        newString += stringArray[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
