const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((product, number) => product * number, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  let product=1;
  if (number == 0 || number == 1) {
    return 1;
  } else if(number > 1){
    for (i = number; i >= 1; i--) {
      product *= i;
    }
  }
  return product;
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
