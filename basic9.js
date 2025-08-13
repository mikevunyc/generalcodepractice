var personalExpenses = [3, 9, 10, 2, 99, 25, 30];
var highestBill = personalExpenses[0];
var lowestBill = personalExpenses[0];
// console.log(personalExpenses);
// console.log(personalExpenses.length);

let totalSum = 0;
for (let i = 0; i < personalExpenses.length; i++) {
    totalSum = totalSum + personalExpenses[i];
}
console.log(totalSum);

// console.log(personalExpenses.reduce((sum, personalExpenses) => sum + personalExpenses, 0));
let totalPersonalExpenses = personalExpenses.reduce((sum, personalExpenses) => sum + personalExpenses, 0);
console.log(totalPersonalExpenses);

for (let i = 0; i < personalExpenses.length; i++) {
    if (personalExpenses[i] > highestBill) {
        highestBill = personalExpenses[i];
    }
    if (personalExpenses[i] < lowestBill) {
        lowestBill = personalExpenses[i];
    }
}
console.log(highestBill);
console.log(lowestBill);