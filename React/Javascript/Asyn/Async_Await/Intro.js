// async function hello() {
//   console.log("hello");
// }
//ASYNC WILL RETURN A PROMISE.. AND AWAIT WILL WAIT  FOR THE PROMISE..

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ");
      resolve("get successfully");
    }, 3000);
  });
}
//WRITE AWAIT INSIDE ASYNC.....
async function GetData(){
    console.log("getting data 1");
    await api();
    console.log("getting data 2");
    //if we need to call multiple calls,then add more api() calls..
    await api();
    console.log("getting data 3");
    await api();
    console.log("getting data 4");
    await api();
}
