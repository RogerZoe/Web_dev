// *The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. 
// *During this phase, accessing or using the variable will result in a ReferenceError.
console.log(a);
console.log("hello");
console.log("world");
//?ABOVE AREA IS CALLED TDZ..............
let a=12;
console.log(12);