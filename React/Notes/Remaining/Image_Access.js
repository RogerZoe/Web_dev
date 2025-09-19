 
 import React from'react';
 import Profile from './Profile_Photo.JPG';
 export let person={
     Name:"Arif"
  };
 export function Hello(){
     const ele=<h1 id="edit">Hello----------------</h1>
    return(
        <>
        {ele}
        <img 
        src={Profile}
        alt="My profile"
        />
        </>
    )
 }