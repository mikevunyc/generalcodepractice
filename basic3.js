var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)
var marks = [20, 40, 35, 12, 37, 100]
subMarks = marks.slice(2, 5)
console.log(subMarks)

console.log("*******************************");
console.log(marks[2]) //should be 35
console.log("*******************************");
marks[3] = 14
console.log(marks) //should be 20, 40, 35, 14, 37, 100
console.log(marks.length) //should be 6
marks.push(65)
console.log(marks) //should be 20, 40, 35, 14, 37, 100, 65
console.log("*******************************");
marks.pop() //should be 20, 40, 35, 14, 37, 100
marks.unshift(12) //should be 12, 20, 40, 35, 14, 37, 100
console.log(marks);
console.log("*******************************");
console.log(marks.indexOf(100));
console.log("*******************************");
//120 is present in the array or not
console.log(marks.includes(120));
console.log("*******************************");

var sum = 0;
for (let i = 0; i < marks.length; i++) {
    // console.log(marks[i])
    sum = sum + marks[i];
}
console.log(sum)
console.log("*******************************");

//reduce
let totalMarks = marks.reduce((sum, mark) => sum + mark, 0)
console.log(totalMarks)
console.log("*******************************");

var scores = [12, 13, 14, 16]
var evenScores = []
//create a new array with even numbers from the scores array
//multiple values by 3
//Sum them afterwards
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)
//filter
let newFilterEvenScores = scores.filter(score => score % 2 == 0);
console.log(newFilterEvenScores);
console.log("*******************************");
//map
let mappedArray = newFilterEvenScores.map(score => score * 3);
console.log(mappedArray);
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0)
console.log(totalVal)
console.log("*******************************");
var scores1 = [12, 13, 14, 16];

let sumVal2 = scores.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0);
console.log(sumVal2);

console.log("*******************************");

let fruits = ["Banana", "Mango", "Pomegrante", "Apple"]
console.log(fruits.sort());
console.log(fruits.reverse());

console.log("*******************************");
var scores2 = [12, 3, 19, 16, 14];
console.log(scores2.sort());
// scores2.sort(function (a, b) {
//     return a - b;
// })

var scores2 = [12, 3, 19, 16, 14];
console.log(scores2.sort((a, b) => a - b) + " is sorted");