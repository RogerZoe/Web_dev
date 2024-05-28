//CALLING A FUNCTION ONCE FOR EACH ELEMENT..
const a=[1,2,34];
a.forEach((arr)=>{
console.log(arr);
});


// for..of loop    used to get the values
console.log("\nfor..of loop:");
for (const element of array) {
    console.log(element);
}

// for..in loop (not recommended for iterating over arrays)
console.log("\nfor..in loop:");
for (const index in array) {
    console.log(array[index]);
}