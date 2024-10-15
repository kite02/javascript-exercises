const sumAll = function(begin,final) {
    
    if(begin < 0 || final < 0 || begin % 1 !== 0 || final % 1 !== 0 || typeof begin !== 'number' || typeof final !== 'number'){
        return "ERROR";
    }
    currentNumber = begin;
    sum = 0;
    if(begin > final){
        currentNumber = final;
        final = begin;
    }

    while(currentNumber < final){
        sum += currentNumber;
        currentNumber++;
        
    }
    sum += currentNumber;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
