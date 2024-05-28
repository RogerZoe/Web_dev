// When you need to remove a speci  c value from an array, you can use the following one-liner to create a copy array without the given value:
array.filter(function (val) {
  return val !== to_remove;
});
//  Or if you want to change the array itself without creating a copy (for example if you write a function that get an array as a function and manipulates it) you can use this snippet:
while ((index = array.indexOf(3) !== -1)) {
  array.splice(index, 1);
}
//  And if you need to remove just the  rst value found, remove the while loop:
var index = array.indexOf(to_remove);
if (index !== -1) {
  array.splice(index, 1);
}
