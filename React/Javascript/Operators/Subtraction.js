var num1 = 28;
var num2 = 22;
var num3 = 28.50;
var num4 = 22.75;
console.log("28 - 22 = " + num1 - num2);   // 28 - 22 = NaN
// !Here, JavaScript first concatenates the string "28 - 22 = " with num1, resulting in the string "28 - 22 = 28". Then, it tries to subtract num2, which is a number, from the string "28 - 22 = 28".
//  *Since subtraction doesn't make sense with a string operand, JavaScript coerces the string into a number, resulting in NaN.
console.log (typeof("28 - 22 = " + num1 - num2));   // 28 - 22 = NaN
console.log(typeof("28 - 22 = " + (num1 - num2))); // 28 - 22 = 6
console.log("28.50 - 22.75 = " + (num3 - num4)); // 28.50 - 22.75 = 5.75
