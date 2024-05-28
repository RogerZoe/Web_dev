let arr=[12,3,4,2,5];
let sum=arr.reduce((intial_val,current_val)=> intial_val+current_val,0);
console.log(sum);


// !array.reduce(callback(accumulator, currentValue), initialValue)
// callback: A function that executes on each element of the array, taking following arguments:
// accumulator: The accumulated value resulting from the reduction.
// currentValue: The current element being processed in the array.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array will be used as the initial value, and iteration starts from the second element.