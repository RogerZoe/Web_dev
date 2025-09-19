// src/components/ChildComponent.jsx

//initial code
//! This code demonstrates how to create a child component that re-renders every time the parent component re-renders.

// function ChildComponent(props) {
//   console.log('Child Component got re-rendered again');
//   return (
//     <div>
//       <button>{props.buttonName}</button>
//     </div>
//   );
// }
// export default ChildComponent;

// const ChildComponent = React.memo((props) => {
//   console.log("Child Component got re-rendered again");
//   return (
//     <div>
//       <button>{props.buttonName}</button>
//     </div>
//   );
// });
// export default ChildComponent;
//* This code uses React.memo to memoize the ChildComponent, preventing unnecessary re-renders when the parent component updates.

// const ChildComponent = React.memo((props) => {
//   console.log("Child Component got re-rendered again");
//   return (
//     <div>
//       <button onClick={props.handleclick}>{props.buttonName}</button>
//     </div>
//   );
// });
// export default ChildComponent;
//*this code also renders the child component every time the parent component re-renders.


const ChildComponent = React.memo((props) => {
  console.log("Child Component got re-rendered again");
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
});
export default ChildComponent;




