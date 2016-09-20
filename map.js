const myNumber = [1, 2, 3];

// create a new array from the result of calling
var resultMyNumber = myNumber.map(function (n) {
    return n * 2;
});

console.log(myNumber);  // [1, 2, 3]
console.log(resultMyNumber); // [2, 4, 6]
