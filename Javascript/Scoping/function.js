// *Variables defined inside a function are not accessible (visible) from outside the function.
function hlo()
{
    let a=12;
    const b=23;
    var c=34;
    if(true)
    {
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
hlo();