function HLO(){
    alert("fuck you "+event.target.textContent);       //^" TARGET"==>WHICH ELEMENT AT THAT TIME CLICKED...
   }
let element=document.querySelectorAll("#para");
for(let i=0;i<element.length;i++)
{
let  Para=element[i];
   Para.addEventListener('click', HLO);//not use hLO() ,because hlo() ==> 
}