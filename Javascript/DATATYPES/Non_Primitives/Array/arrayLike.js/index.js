// !- The **`Array.from()`** method creates a new, shallow-copied Array instance from an array-like or iterable object.
// !- This method is available in ECMAScript 6 (ES6).
const arrayLike1 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array1 = Array.from(arrayLike);
console.log(array); // Output: ['a', 'b', 'c']

 
//* - You can use the spread operator (**`...`**) to convert an array-like object to an array.
//* - This method is available in ECMAScript 6 (ES6).

const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = [...arrayLike];
console.log(array); // Output: ['a', 'b', 'c']


