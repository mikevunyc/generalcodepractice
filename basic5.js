const Person = require('./basic7');

let day = "tuesday ";
console.log(day.length);
let subDay = day.slice(0, 4);
console.log(subDay);
console.log(day[1]) //u
//tue  day
let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let date = '23';
let nextDate = '27';
console.log(parseInt(nextDate) - parseInt(date));
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff)
diff.toString()

let newQuote = day + "is a Funday";
console.log(newQuote);
let val = newQuote.indexOf("day", 5);
console.log(val);
//tuesday is Funday
let count = 0
let value = newQuote.indexOf("day");
while (value !== -1) {
    count++
    value = newQuote.indexOf("day", val + 1);
}
console.log(count);

console.log("*******************************");

let person = new Person("Chris", "Edward");
console.log(person.fullName());