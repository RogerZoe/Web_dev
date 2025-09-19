var a=10
console.log(a)

var a="Arif"
console.log(a);

// !The "var" keyword was the traditional way of declaring variables in JavaScript. Variables declared with var are function-scoped or globally-scoped, but not block-scoped
function cool()
{
var str="Arif"
console.log(str);
}
// console.log(str); 
  // * GIVES ERROR BECAUSE VAR IS LIMITED TO FUNCTION SCOPE



