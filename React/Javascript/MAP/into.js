// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

//!CREATION ==> 1.PASSING THE ARRAY IN MAP().
let arr = new Map([
  ["Name", "Arif"],
  ["Lover", "Aishwarya"],
  ["X", "thanami"],
]);
// there are three arguments in the Map.forEach() method with order as: value, key and map.
// arr.forEach((value, key, map) => {
//   console.log("I am value: ", value);
//   console.log("I am key: ", key);
//   console.log("I am map: ", map);
// });


//!2.CREATE A EMPTY MAP() AND USING THE SET() INSERT VALUES.
let Arr = new Map();
Arr.set("Name:", "Arif");
Arr.set(1, 23);
Arr.set("Village", "NDCL");
Arr.forEach((value, key, map) => {
  console.log("I am value: ", value);
  console.log("I am key: ", key);
  console.log("I am map: ", map);
});




