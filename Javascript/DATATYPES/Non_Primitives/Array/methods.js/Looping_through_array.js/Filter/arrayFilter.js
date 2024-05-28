let arr=[1,4,5,6,2];
//! ONE WAY 
 let ans=arr.filter((arr)=>{
    if(arr%2==0)
        {
            return true;
        }
        else{
            return false;
        }

 });
 //*SECOND WAY
// let ans=arr.filter(num=>num%2==0);
 console.log(ans);


 //*third way

 let ans2=arr.filter(function (number){
    return number%2==0;
 });
 console.log(ans2);

// ? let ans = arr.filter((arr) => {...}): 
//  ?This line creates a new array ans by filtering the elements of the arr array based on the provided function.
// ?(arr) => {...}: This is an arrow function used as the filtering criterion. It takes each element of the array arr as an argument.

// &if (arr % 2 == 0) { return true; } else { return false; }: This condition checks if the current element of the array arr is even. 
// &If the element is even (i.e., divisible by 2 with no remainder), it returns true, indicating that the element should be included in the filtered array. 
// &Otherwise, it returns false, indicating that the element should be excluded from the filtered array.