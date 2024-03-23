//Short version
const getMax = (num1, num2, num3, num4) => Math.max(num1, num2, num3, num4);

console.log(getMax(1, 4, 2, 3))

//Long version (for Markus)
// function getMax(num1, num2, num3, num4) {
//     let max = num1;
//     max = num2 > max ? num2 : max;
//     max = num3 > max ? num3 : max;
//     max = num4 > max ? num4 : max;
//     return max; // or I could log immediately
// }
//
// console.log(getMax(1, 4, 2, 3));