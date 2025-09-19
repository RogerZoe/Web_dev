function com(props) {
    console.log(props)
    return (
      <>
        <h2>Hello Master {props.name}</h2>
        <h2>Hello Master {props.village}</h2>
        <h1>Arigatho</h1>
      </>
    );
  }
  
  export default com;

// *In the APP.js file

//   import User from './user';

//   function App(){
//    return(
//      <>
//      <User name="Arif"  age ='12' village ="NDCL"/>
//      <User name="shaik"  age ='12' village ="BHNGR"/>
//      </>
//    )
//   }
//   export default App;