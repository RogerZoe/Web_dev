// Untagged template literals
const name = 'John';
const age = 30;
const sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence); // Output: My name is John and I am 30 years old.

// Tagged template literals
function customTag(strings, ...values) {
  console.log(strings); // Array of string parts
  console.log(values); // Array of interpolated values
  let result = '';
  strings.forEach((string, i) => {
    result += string;
    if (i < values.length) {
      result += values[i];
    }
  });
  return result.toUpperCase(); // Custom logic here
}

const taggedResult = customTag`My name is ${name} and I am ${age} years old.`;
console.log(taggedResult); // Output: MY NAME IS JOHN AND I AM 30 YEARS OLD.
//use double Quotes as well
console.log('hello my name is "Arif" ');