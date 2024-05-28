// !Insertion at End
// !We can insert an item/element at the end of an array using the push method.

const fruits = ['apple', 'banana', 'orange'];
fruits.push('kiwi');
fruits.push('grapes');
console.log(fruits); 
// Output: [ 'apple', 'banana', 'orange', 'kiwi', 'grapes' ]


// *Insertion at Start
// *We can insert an item/element at the starting of an array using the unshift method.

const fruits1 = ['apple', 'banana', 'orange'];
fruits.unshift('kiwi');
fruits.unshift('grapes');
console.log(fruits1); 
// Output: [ 'grapes', 'kiwi', 'apple', 'banana', 'orange' ]


//! Insertion at Random Index.
//! To add an element/item at a random index inside an array we use the splice method.
//! The splice method adds or removes elements from an array at a specified index.

//? array.splice(startIndex, deleteCount, item1, item2, ...);
const fruits2 = ['apple', 'orange'];
// Inserting 'banana' at index 1
fruits.splice(1, 0, 'banana');
console.log(fruits2); // Output: ['apple', 'banana', 'orange']


 