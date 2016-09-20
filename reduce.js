const number = [0, 1, 2, 3];

// method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
var result = number.reduce(function (previousValue, currentValue, currentIndex, array) {
    console.log(previousValue);
    console.log(currentValue);
    console.log(currentIndex);

    return previousValue + currentValue;
});

console.log(result);    // 6
