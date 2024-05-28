// !BLOCK SCOPE
// *SO ,VARIABLES LIKE CONST AND LET HAS A BLOCK SCOPE {__IN BETWEEN__}
// function hlo()
// {
//     let a =12;
//     const b=12;

// }
// hlo();
// console.log(b); // ?GIVES ERROR
// console.log(a); // ?GIVES ERROR

function hlo()
{
    if(4%2==0)
    {
        let a=12; //*here ,if i use var then there will be no error.
    }
    console.log(a); //? ERROR 
}
hlo();