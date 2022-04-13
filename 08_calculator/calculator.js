const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(listOfNums) {
	finalSum = 0;
  for (let i = 0; i < listOfNums.length; i++) {
    finalSum += listOfNums[i];
  }
  return finalSum;
};

const multiply = function(listOfNums) {
  finalProduct = 1;
  for (let i = 0; i < listOfNums.length; i++) {
    finalProduct *= listOfNums[i];
  }
  return finalProduct;
};

const power = function(base, exp) {
	return base ** exp; 
};

const factorial = function(num) {
  let fact = 1;
  if (num > 1) {
    return num * factorial(num - 1);
  }
	else {
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
