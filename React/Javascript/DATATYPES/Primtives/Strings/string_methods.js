let str = "Hello, World!";

// To get the character code of the character at a specified index, use charCodeAt()
console.log("charCode of o is "+str.charCodeAt(4));
// length: Returns the length of the string
console.log("Length:", str.length); // Output: 13

// toUpperCase: Converts the string to uppercase
console.log("Uppercase:", str.toUpperCase()); // Output: HELLO, WORLD!

// toLowerCase: Converts the string to lowercase
console.log("Lowercase:", str.toLowerCase()); // Output: hello, world!

// indexOf: Returns the index of the first occurrence of a specified substring
console.log("Index of 'World':", str.indexOf("Wo")); // Output: 7
// indexOf also accepts an additional numeric argument that indicates on what index should the function start looking
console.log("harr dee harr dee harr".indexOf("dee", 10)); // 14

// lastIndexOf: Returns the index of the last occurrence of a specified substring
console.log("Last Index of 'o':", str.lastIndexOf("o")); // Output: 8

// slice: Extracts a section of a string and returns it as a new string
console.log("Slice:", str.slice(7, 12)); // Output: World

// substring: Extracts the characters from a string between two specified indices
console.log("Substring:", str.substring(7, 12)); // Output: World

// substr: Extracts a specified number of characters from a string, starting at a specified index
console.log("Substr:", str.substr(7, 5)); // Output: World

// replace: Searches a string for a specified value or regular expression and returns a new string where the specified values are replaced
console.log("Replace 'World' with 'Universe':", str.replace("World", "Universe")); // Output: Hello, Universe!

// concat: Joins two or more strings and returns a new string
console.log("Concatenation:", str.concat(" Have a nice day!")); // Output: Hello, World! Have a nice day!

// trim: Removes whitespace from both ends of a string
let strWithSpaces = "   Hello, World!   ";
console.log("Trim:", strWithSpaces.trim()); // Output: Hello, World!

// charAt: Returns the character at a specified index
console.log("Character at index 7:", str.charAt(7)); // Output: W

// charCodeAt: Returns the Unicode of the character at a specified index
console.log("Unicode of character at index 7:", str.charCodeAt(7)); // Output: 87

// split: Splits a string into an array of substrings based on a specified separator
console.log("Split by ',':", str.split(",")); // Output: ["Hello", " World!"]

// includes: Checks if a string contains the specified substring
console.log("Includes 'World':", str.includes("World")); // Output: true

// startsWith: Checks if a string starts with the specified substring
console.log("Starts with 'Hello':", str.startsWith("Hello")); // Output: true

// endsWith: Checks if a string ends with the specified substring
console.log("Ends with 'World!':", str.endsWith("World!")); // Output: true

// he .repeat() method in JavaScript provides a concise way to repeat a string a certain number of times.
"abc".repeat(3); // Returns "abcabcabc"
"abc".repeat(0); // Returns ""

// versions of JavaScript that do not support .repeat() (specifically versions prior to ECMAScript 2015), you'd need to use a workaround.
var myString = "abc";
var n = 3;
new Array(n + 1).join(myString); // Returns "abcabcabc"


