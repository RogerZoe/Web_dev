let arr=[1,3,2,4,2,1];
let ans=arr.reduce((prev,cur) =>{
    if(prev.indexOf(cur)===-1)
        {
            prev.push(cur);
        }
        return prev;
} ,[]);
console.log(ans);

 


// let arr = [1, 3, 2, 4, 2, 1];
// let ans = arr.reduce((prev, cur) => {
//     if (!prev.includes(cur)) {
//         prev.push(cur);
//     }
//     return prev;
// }, []);
// console.log(ans); // Output: [1, 3, 2, 4]

