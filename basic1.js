console.log("Hello, World!");
console.log("This is a basic JavaScript file.");
console.log("Let's write some more code here.");

//these are comments
console.log("Comments are useful for explaining code.");
/*
dsdsadlfdasfasfd
This is a multi-line comment.
You can use it to provide detailed explanations or to temporarily disable code.
*/
console.log("This is a multi-line comment example.");

//int a = 4;
let a = 4;
// Using 'var' to declare a variable. ('let' and 'const' are also available) ES6 introduced 'let' and 'const' for block scope and constant variables.
//var a  = 4;
console.log("Variables can be declared using var, let, or const in JavaScript.");
console.log(a);
console.log(typeof (a)); // Outputs the type of variable 'a'
let b = 234.6;

console.log("You can perform arithmetic operations like addition in JavaScript.");
console.log("The value of b is: " + b);
let c = "Michael Vu";
console.log("The value of c is: " + c + " and its type is: " + typeof (c)); // Outputs the type of variable 'c'

let required = true;
console.log("The value of required is: " + required + " and its type is: " + typeof (required)); // Outputs the type of variable 'required'
console.log(!required + " is the negation of required, which is: " + !required); // Outputs the negation of 'required'

c = a + b;
console.log("The value of d (a + b) is: " + c + " and its type is: " + typeof (c)); // Outputs the value and type of variable 'c'
