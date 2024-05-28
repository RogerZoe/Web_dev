
// & The proposed Object.entries() method returns an array of key/value pairs for the given object. It does not return an iterator like Array.prototype.entries(), but the Array returned by Object.entries() can be iterated regardless.

const obj = {
  one: 1,
  two: 2,
  three: 3,
};
console.log(Object.entries(obj));

//   It is an useful way of iterating over the key/value pairs of an object:
for (const [key, value] of Object.entries(obj)) {
  console.log(key); // "one", "two" and "three"
  console.log(value); // 1, 2 and 3
}
