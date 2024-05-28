
//!SHALLOW CLONING
// Original object
const original1 = { a: 1, b: { c: 2 } };

// Shallow clone using Object.assign()
const shallowClone = Object.assign({}, original1);

// Modifying the shallow clone
shallowClone.a = 100;
shallowClone.b.c = 200;

console.log(original1);     // Output: { a: 1, b: { c: 200 } }
console.log(shallowClone); // Output: { a: 100, b: { c: 200 } }


//! DEEP CLONING
// Original object
const original = { a: 1, b: { c: 2 } };

// Deep clone using JSON
const deepClone = JSON.parse(JSON.stringify(original));

// Modifying the deep clone
deepClone.a = 100;
deepClone.b.c = 200;

console.log(original);  // Output: { a: 1, b: { c: 2 } }
console.log(deepClone); // Output: { a: 100, b: { c: 200 } }


//* While shallow cloning is simpler and more efficient, deep cloning ensures complete independence between the original and cloned objects, avoiding unintended side effects caused by shared references. 
// ^However, deep cloning may not always be necessary, especially if your data structures are not deeply nested or if performance is a concern.
