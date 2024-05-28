// *const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized.

const x = 20;
console.log(x);      // Output : 20

x = 30;
console.log(x);      // Output : Error!

//! Constants declared with const must be initialized with a value
let a;      // No Error

var y;      // No Error

// const b;  
  // ?Error! "Missing initializer in const declaration"


//   *It is important to remember that for complex data types like objects and arrays, const only prevents reassignment of the variable itself, not its properties or elements.
const person = {
    name: 'Mayank',
    age: 21
};

console.log(person.name);    // Output: Mayank

// Modifying object properties is allowed
person.name = 'Love';
console.log(person.name);    // Output: Love

// Attempting to reassign the variable will throw an error
person = {};    // Throws TypeError: Assignment to constant variable.


// ?similar with arrays
const numbers = [1, 2, 3];
console.log(numbers);    // Output: [1, 2, 3]

// Modifying array elements is allowed
numbers.push(4);
console.log(numbers);    // Output: [1, 2, 3, 4]

// Attempting to reassign the variable will throw an error
numbers = []; // Throws TypeError: Assignment to constant variable.
