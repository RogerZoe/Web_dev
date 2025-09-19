//* It is often necessary to generate a new array based on the values of an existing array.
console.log(['one', 'two', 'three', 'four'].map(value => value.length));
//& In this example, an anonymous function is provided to the map() function, and the map function will call it for every element in the array, providing the following parameters, in this order:
//& The element itself The index of the element (0, 1...) The entire array