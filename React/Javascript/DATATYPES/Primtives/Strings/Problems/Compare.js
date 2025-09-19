// !use localeCompare(). This returns a negative value if the reference string is lexicographically (alphabetically) before the compared string (the parameter),
// *a positive value if it comes afterwards, and a value of 0 if they are equal.

var a = "Arif";
var b = "arif";
console.log(a.localeCompare(b));

// ?This is especially useful when using a sorting function that compares based on the sign of the return value (such as sort).

var arr = ["bananas", "cranberries", "apples"];
arr.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(arr);
