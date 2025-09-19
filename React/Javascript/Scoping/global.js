// !Variables declared Globally (outside any function) have Global Scope.
let a=12;
var b=23;
const c=23;

function hlo()
{
    console.log(a);
    console.log(b);
    console.log(c);
    if(true)
    {
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
hlo();