//& Iterating using the forEach() method

// there are three arguments in the Map.forEach() method with order as: value, key and map.
deviceColors.forEach((value, key, map)=>{
    console.log("I am value: ", value);
    console.log("I am key: ", key);
    console.log("I am map: ", map);
});

// Here we avoided the third argument that is map, as we just wanted to iterate over the keys of Map.
deviceColors.forEach((value, key)=>{
    console.log("I am a key: ", key);
});



// you can write anything in place of entries, but make sure that its name is the same throughout the code.
for (const entries of deviceColors){
    console.log(entries);
  }


//&   Iterating using the for..of loop
// you can write anything in place of entries, but make sure that its name is the same throughout the code.
for (const entries of deviceColors.entries()){
    console.log(entries);
  }

  
  // you can write anything in place of keys, but make sure that its name is the same throughout the code.
for (const keys of deviceColors.keys()){
    console.log(keys);
  }

  // you can write anything in place of values, but make sure that its name is the same throughout the code.
for (const [keys,values] of deviceColors){
    console.log(`${keys} => ${values}`);
  }
  
  
  