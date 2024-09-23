const removeFromArray = function (numbers, ...args) {

    let newArray = [];
    let j = 0;
    while (j < args.length) {
        for (i = 0; i < numbers.length; i++) {
            if (numbers[i] == args[j]) {
                continue;
            } else {
                newArray.push(numbers[i]);
            }
        }
        j++;
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
