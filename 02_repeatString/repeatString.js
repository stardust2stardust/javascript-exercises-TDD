const repeatString = function(string, num) {
    let newString = '';
    for (let i = 0; i < num; i++) {
        newString += string
    } if (num === 0) {
        newString = '';
        //return newString;
    } else if (num < 0) {
        newString = 'ERROR';
    } 
    return newString
}

// Do not edit below this line
module.exports = repeatString;
