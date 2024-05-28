var obj = {
  a: "hello",
  b: "this is",
  c: "javascript!",
};
// You can convert its values to an array by doing:
var array = Object.keys(obj).map(function (key) {
  return obj[key];
});
console.log(array); // ["hello", "this is", "javascript!"]



// & use Object.keys function which return an Array containing all properties of an object and then you can loop through this array with Array.map or Array.forEach function.
// & Object.keys(obj) returns an array of a given object's keys.