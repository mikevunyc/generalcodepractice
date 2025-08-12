var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)
var marks = [20, 40, 35, 12, 37, 100]
console.log(marks[2]) //should be 35
marks[3] = 14
console.log(marks) //should be 20, 40, 35, 14, 37, 100
console.log(marks.length) //should be 6
marks.push(65)
console.log(marks) //should be 20, 40, 35, 14, 37, 100, 65
marks.pop() //should be 20, 40, 35, 14, 37, 100
marks.unshift(12) //should be 12, 20, 40, 35, 14, 37, 100
console.log(marks)