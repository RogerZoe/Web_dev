// !  SYNC  A network request for fetching some data
const fetchData = (anyURL) => {
  
    // Request code...
    // requestedData = ...code
    return requestedData;
  }
//  * due to the synchronous behavior of JavaScript, someFunction() will only get executed when the fetchData() finishes execution
  
  function someFunction(){
      // function code here
  }
  fetchData('url here');
  someFunction();




  
  //! ASYNC
  const fetchData2 = (anyURL) => {
    setTimeout(() => {
      console.log('Asynchronous Code here');
    }, 3000);
    // requestedData = ...code
    return dataFetched;
  }
  
  function someFunction(){
      // function code here
  }
  fetchData2('url here');
  someFunction();
  