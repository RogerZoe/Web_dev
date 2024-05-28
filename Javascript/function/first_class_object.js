// !Function that takes another function as an argument and logs a message
function hello(world, name) {
    console.log("Name is " + name);
    world(); // *Calls the 'world' function
}



// !Function 'world' logs "hello world"
function world() {
    console.log("hello world");
}
hello(world, "arif"); // *Calls 'hello' function with 'world' function as argument




// !Function 'solve' returns another function that calculates the square of a number
function solve() {
    return function(Num) {
        return Num * Num;
    };
}
let ans = solve(); // *Assigns the returned function to 'ans'
console.log(ans(5)); // *Calls the returned function with argument 5 and logs the result




// !Array 'arr' contains three functions for different arithmetic operations
const arr = [
    function(a, b) {
        return a + b;
    },
    function(a, b) {
        return a - b;
    },
    function(a, b) {
        return a * b;
    }
];
let first = arr[0]; // *Assigns the first function from 'arr' to 'first'
console.log(first(10, 4)); // *Calls the first function with arguments 10 and 4 and logs the result




// !Object 'obj' with properties and a method
let obj = {
    name: "arif",
    age: 15,
    greet: () => {
        console.log("hello");
    }
};
console.log(obj.age); // * Logs the 'age' property of 'obj'
obj.greet(); // *Calls the 'greet' method of 'obj'
