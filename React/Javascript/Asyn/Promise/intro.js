// let promise = new Promise((resolve, reject) => {
//   console.log("hello");
//   resolve("success");
// });

//!so we made a promise that we will return the resolve or reject..

// function Hello(getData, NextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("num ", getData);
//       resolve("completed success"); //promise success...
//       if (NextData) {
//         NextData();
//       }
//     }, 2000);
//   });
// }

//!NOW WE WILL SEE HOW TO USE  RETURNED PROMISES.............
//use .THEN() , .CATCH().................>
const promise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("Iam a");
        resolve("success");
    });
}
let ans=promise();
ans.then((RES)=>{
  console.log("promise fulfilled",RES);
});
