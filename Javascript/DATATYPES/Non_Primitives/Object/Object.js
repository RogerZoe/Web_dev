//!By literal method
let car = {
    name: "Maruti",
    model: "Swift",
    color: "red", 
    price: 550000
}

//!By constructor method
let bike = new Object();
bike.name = "Pulsar";
bike.model = "Dominar";
bike.color = "red";
bike.price = 200000;

//!ACCESSING
// let car = {
//     name: "Maruti",
//     model: "Swift",
//     color: "red", 
//     price: 550000
// }

// console.log(car.name);
// // output: Maruti;
// console.log(car["color"]);


// ?Using functions as a key-value:
// let car = {
//     name: "Maruti",
//     model: "Swift",
//     color: "red", 
//     price: 550000,
//     about: function(){
//         return `This is a ${this.name}, of ${this.color} color.`;
//     }
// }

// console.log(car.about);
// output: This is a Maruti, of red color.


// & If you need special characters, such as space, ?, or user-provided content, this is possible using [] bracket notation.

const obj = {
    'special char': 'value with a space',
    '?': 'value with a question mark'
  };
  
  console.log(obj['special char']); // Output: 'value with a space'
  console.log(obj['?']); // Output: 'value with a question mark'
  

