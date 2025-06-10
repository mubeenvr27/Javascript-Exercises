const reverseString = function(string) {
    // Check if the input is a string
    if (typeof string !== 'string') {
        return 'Input must be a string';
    }
    
    // Split the string into an array of characters, reverse it, and join it back into a string
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
