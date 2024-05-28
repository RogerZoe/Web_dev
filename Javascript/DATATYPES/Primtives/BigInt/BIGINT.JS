const num1 = 112233445566778899233445566778894556646n; //BigInt number declared by appendening n.
const num2 = BigInt(112233445566778899233445566778894556646);  //Bignint number declared by calling constructor
const num3 = BigInt('112233445566778899233445566778894556646'); //BigInt number declared by calling constructor where argument passed is a string.
console.log(num3);
console.log(typeof(num3));

console.log(num2);
// output: 112233445566778899233445566778894556646n

console.log(num3);
// output: 112233445566778899233445566778894556646n