// Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a Map
const fruits = new Map([
  [apples, 500],
  [bananas, 300],
  [oranges, 200]
]);

// Get value of a key using get() method
console.log("Value of apples:", fruits.get(apples)); // Output: 500

// Add new elements to the Map using set() method
fruits.set(apples, 600);
console.log("Updated value of apples:", fruits.get(apples)); // Output: 600

// Get the number of elements in the Map using size property
console.log("Number of elements in fruits:", fruits.size); // Output: 3

// Delete an element from the Map using delete() method
fruits.delete(apples);

// Clear all elements from the Map using clear() method
fruits.clear();

// Check if a key exists in the Map using has() method
console.log("Does fruits contain apples?", fruits.has(apples)); // Output: false

// Iterate over each key/value pair in the Map using forEach() method
fruits.forEach((value, key) => {
  console.log(`${key.name}: ${value}`);
});

// Get an iterator object with [key, value] pairs using entries() method
const entriesIterator = fruits.entries();
console.log("Entries in fruits:");
for (const [key, value] of entriesIterator) {
  console.log(`${key.name}: ${value}`);
}

// Get an iterator object with keys using keys() method
const keysIterator = fruits.keys();
console.log("Keys in fruits:");
for (const key of keysIterator) {
  console.log(key.name);
}

// Get an iterator object with values using values() method
const valuesIterator = fruits.values();
console.log("Values in fruits:");
for (const value of valuesIterator) {
  console.log(value);
}
