const reverseString = function(string) {
   let letters = [];
   let newString = "";
   for (let char of string) {
       letters.push(char);
   } 
   for (let i = letters.length - 1; i >= 0; i--){
       newString += letters[i];
   } 
   return newString
};

// Do not edit below this line
module.exports = reverseString;

