let arr=[1,2,3,4,0,22,13,32];

let ans=arr.reduce((Num,num)=>{
    return Num>num ?Num:num;
},-Infinity);
console.log(ans);

//! We can use the accumulator to keep track of an array element as well. Here is an example leveraging this to  nd the min value:
