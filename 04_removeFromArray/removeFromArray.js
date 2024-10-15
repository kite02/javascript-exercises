const removeFromArray = function (numbers, ...args) {

    let newArray = [];
    numbers.forEach(element => {
        if(!args.includes(element))
        newArray.push(element);
    });
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
