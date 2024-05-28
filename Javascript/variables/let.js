// !Variables declared with let can be reassigned, just like those declared with var, 
// *but they cannot be redeclared ==> within the same block scope
// *let keyword is used to declare variables that are block-scoped,

let x = 10;
if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Throws ReferenceError: y is not defined



//! Re assignment using 'let'

let z = 10;
console.log(z);    // Output : 10

z = "Mayank";
console.log(z);    // Output : Mayank

// !Re definition using 'let'

// let y = 10;

// let y = "Mayank";
// console.log(y);    // ?Output : Error!