// function Data1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data 1");
// let ans=Data1();
// ans.then((res)=>{
//     console.log(res);
// });


//!Now We want to print  two Data's one after another  4s.

// function Data1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data 1");
//         resolve("success");
//       }, 4000);
//     });
//   }
//   function Data2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data 2");
//         resolve("success");
//       }, 4000);
//     });
//   }
  
//   console.log("fetching data 1");
//   let ans=Data1();
//   ans.then((res)=>{
//       console.log(res);
//   });
//   console.log("fetching data 2");
//   let ans2=Data2();
//   ans2.then((res)=>{
//       console.log(res);
//   });


  // !as we see Two of them will print at a time ..............but we need after 4s another.
  // !SO WE USE CHAINING THEN INSIDE ANOTHER THEN...
//   function Data1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data 1");
//         resolve("success");
//       }, 4000);
//     });
//   }
//   function Data2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("data 2");
//         resolve("success");
//       }, 4000);
//     });
//   }
  
//   console.log("fetching data 1");
//   let ans=Data1();
//   ans.then((res)=>{
//     console.log(res);
//       console.log("fetching data 2");
//        let ans2=Data2();
//        ans2.then((res)=>{
//         console.log(res);
//        })
      
//   });


  // so now it is better looking than callback...........and solve callback hell
  function Hello(getData, NextData) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("num ", getData); // Log the current data
            if (NextData) {
                NextData(); // Call the next function in the callback chain
            }
            resolve("success");
        }, 2000); // Delay execution by 2 seconds
    });
  }

//   Hello(1).then((res)=>{
//     console.log(res);
//     Hello(2).then(()=>{
//         console.log(res);
//     });
//   });

 //we can also write like this ,actually this is the promise chaining...
  Hello(1).then((res)=>{
         return Hello(2);
  }).then((ans)=>{
        return Hello(3);
  }).then((res)=>{
    console.log(res);
  })

  
  









