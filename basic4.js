//block of code
//var - global level/functional
//let global level/block level - {}
//const 
let greet = "Evening";
greet = "Night";

if (1 === 1) {
    let greet = "Afternoon"
}

function addNum(a, b) {
    let greet = "Morning";
    return a + b;
}

let sum = addNum(2, 3);
console.log(sum);
console.log(greet);

//do not have name => Anyonymous function-- function expressions

let sumOfInt = function (c, d) {
    return c + d;
}

let sumOfNum = (c, d) => c + d;
console.log(sumOfNum(2, 3));