import React from "react";
class Name extends React.Component {
  render() {
    return (
      <>
        <h2>Hello Master {this.props.name}</h2>
        <h2>Hello Master {this.props.village}</h2>
        <h1>Arigatho</h1>
      </>
    );
  }
}

export default Name;

//*App.js
// import User from './user';

// function App(){
//  return(
//    <>
//    <User name="Arif"  age ='12' village ="NDCL"/>
//    <User name="shaik"  age ='12' village ="BHNGR"/>
//    </>
//  )
// }
// export default App;