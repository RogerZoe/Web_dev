// function Counter() {
//   //*One way data Binding...............
//   let Num=12;
//   return(
//     <>
//     <h1>{Num}</h1>
//     <button onClick={()=>{
//   Num=200;
//   alert("Num is "+Num);  //^ This will not be Rendered in the Website because there is no Support for one way data Binding=======> SO we USe State
// }}>Click me</button>
//     </>
//   )
// }
// export default Counter;

import { useState } from "react";

//* NOw it Renders the update value Using State.................One way Data Binding.
// function Counter() {
//   let [Num,update]=useState(100);
//   return(
//     <>
//     <h1>{Num}</h1>
//     <button onClick={()=>{
//       update(200);
//     }}>click me</button>

//     </>
//   )
// }
// export default Counter;

//^TWO WAY DATA BINDING...........[If you  'click' on  click me then the value 100 changes to 200 and also shows at int the box,but two way is
//^ the input field should also reflect back to the Num  variable in h1 as we changes  ]
function Counter() {
  let [Num, update] = useState(100);
  return (
    <>
      <h1>{Num}</h1>
      <button
        onClick={() => {
          update(200);
        }}
      >
        click me
      </button>
      <br />
      <br />
      <input
        onChange={(event) => {
          let upt = event.target.value;
          update(upt);
        }}
        type="text"
        value={Num}
      />
    </>
  );
}
export default Counter;
