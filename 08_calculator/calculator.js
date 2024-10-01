const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
  result = 0;
  for(i =0 ; i < numbers.length; i++){
    result=result + numbers[i];
  }
  return result;
};

const multiply = function(numbers) {
  result = 1;
  for(i =0 ; i < numbers.length; i++){
    result=result * numbers[i];
  }
  return result;

};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
	if(number == 1 || number == 0){
    return 1;
  }else{
    return number * factorial(number-1)
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
