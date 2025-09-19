// function hello(){
//     console.log("num 1");
// }

// hello();

// !NOW  LETS SAY WE WANT TO GET THE DATA AFTER TWO SECONDS

// function Hello(){
//     setTimeout(()=>{
//         console.log("num 1");
//     },2000); //2s
// }

// !NOW WE WANT PRINT THE THREE DATA'S AFTER EVERY 2 SECONDS

// function Hello(getData) {
//   setTimeout(() => {
//     console.log("num 1");
//   }, 2000); //2s
// }
// Hello(1);
// Hello(2);
// Hello(3);
// ? Output
// num 1
// num 1
// num 1

//! HERE AFTER 2S IT PRINTS IMMEDIATELY THREE DATAS,BUT WE WANT 2S DELAY FOR EACH DATA..
//^SO WE PASS ANOTHER ARGUMENT AS FUNCTION FOR NEXT DATA..

// function Hello(getData,NextData) {
//   setTimeout(() => {
//     NextData();
//     console.log("num ",getData);
//   }, 2000); //2s
// }
// Hello(1,Hello(2)); // * TypeError: NextData is not a function,here it self it exceutes the function ,then it doesnt know what is NExtData..

// function Hello(getData, NextData) {
//   setTimeout(() => {
//     console.log("num ", getData);
//     if (NextData) {
      // *  If it's not a function (i.e., if NextData is undefined), it won't attempt to call it, preventing the error.
//       NextData();
//     }
//   }, 2000); //2s
// }
// Hello(1, () => {
//   Hello(2);
// });

// !NOW THIRD PARAMETER...and fourth
function Hello(getData, NextData) {
    // Simulate asynchronous behavior with setTimeout
    setTimeout(() => {
      console.log("num ", getData); // Log the current data
      if (NextData) {
        NextData(); // Call the next function in the callback chain
      }
    }, 2000); // Delay execution by 2 seconds
  }
  
  // Start the callback chain
  Hello(1, () => { // First callback function
    Hello(2, () => { // Second callback function, nested within the first
      Hello(3, () => { // Third callback function, nested within the second
        Hello(4); // Fourth callback function, nested within the third
        // This is the end of the callback chain, where no further callbacks are provided
      });
    });
  });
  


//   &The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. 
//   &The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. 
//   &It makes the code very difficult to understand and maintain. It is most frequently seen while working with Node.js. The code below shows an example of a callback hell.