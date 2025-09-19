// function hlo(name,surname)
// {
//     console.log("name is ",name,"surname is",surname);
// }
// hlo("arif","SHAIK");

//*IF I REMOVE SHAIK PARAMETER THEN IT WILL BE PRINT UNDEIFNED

// ?so we use default paramters
// function hlo(name,surname="shaik")
// {
//     console.log("name is ",name,"surname is",surname);
// }
// hlo("arif");


// function hlo(name="arif",surname="shaik")
// {
//     console.log("name is ",name,"surname is",surname);
// }
// hlo();


//!ONE PARAMETER IS DEPEND ON  ANOTHER PARAMETER

// function hlo(name,surname=name.toUpperCase())
// {
//     console.log("name is ",name,"surname is",surname);
// }
// hlo("arif");

//*in parameters we can even pass objects,arrays..
// function hlo(name=[1,2,3]) // name ={name:"arif",age:12};
// {
//     console.log("-->",name);
// }
// hlo();


//!FOR NULL AND UNDEFINED
// function hlo(name=null)
// {
//     console.log("==>",name);
// }
// hlo();  //?so for null ,if we pass null then null prints otherwise value prints,
// ^for undefined
// function hlo(name="arif")
// {
//     console.log("==>",name);
// }
// hlo(undefined);  // ?if we pass undeifned then value printed not the undeifned .


//default parameters passing function
function hlo()
{
    return 54;
}
function hlo2(name,age=hlo())
{
    console.log("name is ",name,"age is ",hlo());
}
hlo2("arif");


