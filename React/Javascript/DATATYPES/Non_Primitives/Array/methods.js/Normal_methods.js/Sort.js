//! elements are sorted alphabetically as strings by default, rather than numerically. This means that the numbers are sorted as strings,
let arr = [4, 5, 6, 3, 21];
console.log(arr.sort()); //[21,3,4,5,6]

let arr2 = [4, 5, 6, 3, 21];
console.log(arr.sort((a, b) => a - b)); //[3,4,5,6,21]
// The compare function (a, b) => a - b subtracts b from a. The behavior of the subtraction is crucial here:

// If the result of a - b is negative, a will be placed before b.
// If the result is positive, b will be placed before a.
// If the result is zero, the order remains unchanged.
// By using this compare function, you ensure that the elements are sorted numerically in ascending order.

//*SAY WE WANT TO SORT THIS ..... then it will sort based on UNIcode order
[
  "s",
  "t",
  "a",
  34,
  "K",
  "o",
  "v",
  "E",
  "r",
  "2",
  "4",
  "o",
  "W",
  -1,
  "-4",
].sort();
//?=====> [-1, '-4', '2', 34, '4', 'E', 'K', 'W', 'a', 'l', 'o', 'o', 'r', 's', 't', 'v'];
// *so as you see Note: The uppercase characters have moved above lowercase. The array is not in alphabetical order, and numbers are not in numerical order.

["s", "t", "a", "c", "K", "o", "v", "E", "r", "f", "l", "W", "2", "1"].sort(
  (a, b) => {
    return a.localeCompare(b);
  }
);
// Results in: ['1', '2', 'a', 'c', 'E', 'f', 'K', 'l', 'o', 'r', 's', 't', 'v', 'W']

//  Note: The above sort will throw an error if any array items are not a string. If you know that the array may contain items that are not strings use the safe version below.
["s", "t", "a", "c", "K", 1, "v", "E", "r", "f", "l", "o", "W"].sort((a, b) => {
  return a.toString().localeCompare(b);
});

// String sorting by length (longest  rst)
["zebras", "dogs", "elephants", "penguins"].sort(function (a, b) {
  return b.length - a.length;
});
// Results in ["elephants", "penguins", "zebras", "dogs"];

//  String sorting by length (shortest  rst)
["zebras", "dogs", "elephants", "penguins"].sort(function (a, b) {
  return a.length - b.length;
});
// Results in ["dogs", "zebras", "penguins", "elephants"];

// Numerical Sort (ascending)
[100, 1000, 10, 10000, 1].sort(function (a, b) {
  return a - b;
});
// Results in: [1, 10, 100, 1000, 10000]

// Numerical Sort (descending)
[100, 1000, 10, 10000, 1].sort(function (a, b) {
  return b - a;
});
// Results in: [10000, 1000, 100, 10, 1]
// Sorting array by even and odd numbers
[10, 21, 4, 15, 7, 99, 0, 12].sort(function (a, b) {
  return (a & 1) - (b & 1) || a - b;
});
// Results in: [0, 4, 10, 12, 7, 15, 21, 99]


//* Sorting multidimensional array
var array = [
  ["key1", 10],
  ["key2", 3],
  ["key3", 40],
  ["key4", 20],
];
// You can sort it sort it by number(second index)
array.sort(function (a, b) {
  return a[1] - b[1];
});
//  Version  6
array.sort((a, b) => a[1] - b[1]);
