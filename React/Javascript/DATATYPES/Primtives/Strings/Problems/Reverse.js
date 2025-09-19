function reverse(str) {
  return str.split("").reverse().join(""); //"string" ==> ["s","t","r","i","n","g"] ==> ["g","n","i","r","t","s"] ==>  "gnirts"
}
console.log(reverse("Arif"));



//! Using spread operator
function reverseString(str) {
  return [...String(str)].reverse().join("");
}
console.log(reverseString("stack_overflow")); // "wolfrevo_kcats"
console.log(reverseString(1337)); // "7331"
console.log(reverseString([1, 2, 3])); // "3,2,1"



//! Custom reverse() function
function reverse(string) {
  var strRev = "";
  for (var i = string.length - 1; i >= 0; i--) {
    strRev += string[i];
  }
  return strRev;
}
reverse("zebra");
