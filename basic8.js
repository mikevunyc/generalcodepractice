//Inheritance is the Main Pillar in Object oriented Programming
//one class can inherit/acquire the properties, Methods of another class
//The class which inherts the properties of other is known as subclass
//The class whose properties are inherited is know as superclass
const Person = require('./basic7');

class Pet extends Person {
    get location() {
        return "BlueCross"
    }
    constructor(firstName, lastName) {
        //call parent class constructor
        super(firstName, lastName)
    }
}

let pet = new Pet("Sam", "San");
pet.fullName();
console.log(pet.location);