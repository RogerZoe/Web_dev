// 2 Dimensional arrays
// Version  6 In ES6, we can  atten the array by the spread operator ...:
function flattenES6(arr) {
  return [].concat(...arr);
}
var arrL1 = [1, 2, [3, 4]];
console.log(flattenES6(arrL1)); // [1, 2, 3, 4]
// Version  5
// In ES5, we can acheive that by .apply():
function flatten(arr) {
  return [].concat.apply([], arr);
}
var arrL1 = [1, 2, [3, 4]];
console.log(flatten(arrL1)); // [1, 2, 3, 4]
