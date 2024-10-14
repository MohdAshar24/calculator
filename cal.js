let btn=document.querySelector('.drk');
let b=document.querySelector('body');
let main=document.querySelector(".main");
let butn=document.querySelectorAll(".btn");
let c=document.querySelectorAll(".chnge");
let ag=document.querySelectorAll(".again");


btn.addEventListener("click",()=>{
   b.style.backgroundColor="#333235";
   main.style.backgroundColor="black";
   for(b of butn){
    b.style.boxShadow="none";
    b.style.backgroundColor="#0f0f0f"
    }
    for(ch of c){
        ch.style.color="orange";
    }

    ag.style.color="orange";
})
