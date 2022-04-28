const getTheTitles = function (array) {
    listOfTitles = []
    array.forEach(element => listOfTitles.push(element.title)
    );
    return listOfTitles
};

// const books = [
//     {
//         title: 'Book',
//         author: 'Name'
//     },
//     {
//         title: 'Book2',
//         author: 'Name2'
//     }
// ]

// console.log(getTheTitles(books))


// Do not edit below this line
module.exports = getTheTitles;
