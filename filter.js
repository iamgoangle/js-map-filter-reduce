const number = [1, 2, 3];

var filtered = number.filter(function (i) {
    return i > 1;
});

console.log(number);    // [number]
console.log(filtered); // [2, 3]
