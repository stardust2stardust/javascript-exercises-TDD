const findTheOldest = function (array) {
    let oldestSoFar = 0;
    let oldestPerson = {}
    const currentYear = (new Date()).getFullYear();
    let age;
    array.forEach(element => {
        if (!(element.hasOwnProperty('yearOfDeath'))) {
            age = currentYear - element.yearOfBirth;
        } else {
            age = element.yearOfDeath - element.yearOfBirth;
        }

        if (age > oldestSoFar) {
            oldestSoFar = age;
            oldestPerson = element;
        }
    });
    return oldestPerson
};

// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1066,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]

// const oldest = findTheOldest(people)
// console.log(oldest)

// Do not edit below this line
module.exports = findTheOldest;
