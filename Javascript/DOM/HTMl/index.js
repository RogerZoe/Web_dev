let element =document.getElementById("para1");
element.style.backgroundColor="red";


let element2 =document.getElementsByClassName("class1");
console.log(element2)
for(let i=0;i<element2.length;i++)
{
    element2[i].style.backgroundColor="yellow";
}

let element_tag=document.getElementsByTagName("p");
for(let i=0;i<element2.length;i++)
{
    
    element_tag[i].style.backgroundColor="green";
}


