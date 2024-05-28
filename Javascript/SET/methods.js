// Create a Set using the new Set() method
const letters = new Set(["a", "b", "c"]);

// Add elements to the Set using the add() method
letters.add("d");
letters.add("e");

// Adding equal elements, only the first will be saved
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

// List all Set elements with a for..of loop
let text = "";
for (const x of letters) {
  text += x;
}

// Check if a value exists in the Set using the has() method
const answer = letters.has("d");

// Iterate over each Set element using the forEach() method
let forEachText = "";
letters.forEach(function (value) {
  forEachText += value;
});

// Get an Iterator object with the values in a Set using the values() method
const myIterator = letters.values();
let valuesText = "";
for (const entry of myIterator) {
  valuesText += entry;
}

// Get an Iterator object with the values in a Set using the keys() method (compatible with Maps)
const keysIterator = letters.keys();
let keysText = "";
for (const x of keysIterator) {
  keysText += x;
}

// Get an Iterator with [value, value] pairs from a Set using the entries() method (compatible with Maps)
const entriesIterator = letters.entries();
let entriesText = "";
for (const entry of entriesIterator) {
  entriesText += entry;
}

console.log("List of all elements:", text);
console.log("Does the Set contain 'd'?", answer);
console.log("List of all elements using forEach:", forEachText);
console.log("List of all values using values() method:", valuesText);
console.log("List of all keys using keys() method:", keysText);
console.log("List of all entries using entries() method:", entriesText);
