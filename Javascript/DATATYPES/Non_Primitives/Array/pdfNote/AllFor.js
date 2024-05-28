// The following example shows the di  erence between a for...of loop and a for...in loop:
 let myArray = [3, 5, 7]; 
 myArray.foo = "hello"; 
 for (var i in myArray) {
     console.log(i); 
}
// logs 0, 1, 2, "foo"
for (var i of myArray) {
    console.log(i); // logs 3, 5, 7 }A
}