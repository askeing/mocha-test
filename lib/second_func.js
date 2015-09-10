function isValid(val) {
    var text;
    // If val is Not a Number or less than one or greater than 10
    if (isNaN(val) || val < 1 || val > 10) {
        text = "Input " + val + " not valid";
    } else {
        text = "OK";
    }
    return text;
}

module.exports.isValid = isValid


function add(x, y) {
    return x + y;
}

module.exports.add = add
