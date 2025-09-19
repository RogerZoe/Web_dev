// !Implicit Conversion to String:
// let num =5;
// console.log("age is "+num);
// console.log(typeof("age is "+num));
// *when non-string values are used with the + operator where a string is expected, they are automatically converted to strings.

//! Implicit Conversion to Number: USING UNARY + 
// let num2="arif";
// var num3="10";
// console.log(num2 +5);
// console.log(num3 *5);
// console.log(+num3 +5);//?UNARY +
// console.log (typeof(num2 +5));
// console.log (typeof(+num3 +5));//?NUMBER

// !Implicit Boolean Conversion to Number:
let bool=true;
console.log(bool +1);
console.log(typeof(bool +1));


//! null Conversion to Number:
console.log(null + 2); // 2
// *null is used in a numeric context, such as arithmetic operations, it is implicitly converted to the number 0

//! undefined used with number, boolean, or null:
console.log(undefined + 2); // NaN
// *undefined in numeric, boolean, or null operations results in NaN, indicating an undefined or unrepresentable value




