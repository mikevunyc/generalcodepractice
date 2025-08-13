const productPrices = [100, 20, 35, 15, 6, 50];
// console.log(productPrices.length);
const discountedPrices = productPrices.map(price => price * 0.90);
console.log(discountedPrices);
const affordableProducts = discountedPrices.filter(price => price < 50);
console.log(affordableProducts);
let totalSum = affordableProducts.reduce((sum, mark) => sum + mark, 0);
console.log(totalSum);