const removeFromArray = function(listOfThings, ...optArgs) {
    
    for (let arg of optArgs) {
        for (let i = 0; i < listOfThings.length; i++){
            if (arg === listOfThings[i]) {
                listOfThings.splice(i,1);
            } 
        }
        
    } return listOfThings;
};

// Do not edit below this line
module.exports = removeFromArray;
