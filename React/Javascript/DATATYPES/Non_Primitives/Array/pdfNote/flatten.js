//* flatten an array of objects into a single object.

const array = [
  { key1: "value1", key2: "value2" },
  { key3: "value3", key4: "value4" },
  { key5: "value5", key6: "value6" },
];

const flattenedObject = array.reduce((num, currentObject) => {
  return { ...num, ...currentObject };
}, {});

console.log(flattenedObject);

// & This code will merge all objects in the array into a single object, using the spread syntax (...) within the reduce function.
// & Each object's properties are spread into the accumulator object, effectively combining them into a single object.
