const palindromes = function (string) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedString = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedString = cleanedString.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reverse
    return cleanedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
