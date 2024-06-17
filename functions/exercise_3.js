//Short version
const getMax = (...args) => Math.max(...args);

console.log(getMax(11, 4, 8));

//Long version (for Markus)
// function getMax(...args) {
//     let max = -1;
//     if (args.length !== 0) {
//         max = args[0];
//         for (let num of args) {
//             max = num > max ? num : max;
//         }
//     }
//     return max; // or I could log immediately
// }
//
// console.log(getMax(11, 4, 2));