const palindromes = function (phrase) {
    const altPhrase = phrase.toLowerCase().replace(/\W/g, '')
    const convertToArray = altPhrase.split('')
    const reverseArray = convertToArray.reverse()
    const joinLetters = reverseArray.join('')
    console.log(joinLetters)
    if (joinLetters == altPhrase) {
        return true
    } else {
        return false
    }

};

// const single = "this is not a palindrome!!"
// console.log(palindromes(single))

// const testPhrase = "I wwant % { kla ! . to return just letters"
// const stripped = testPhrase.replace(/\W/g, '')
// console.log(stripped)
// Do not edit below this line
module.exports = palindromes;
