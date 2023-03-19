let btxt=document.querySelector("b");

window.addEventListener('scroll', ()=>{
    let html=document.documentElement;
    let scrolltop=html.scrollTop;
    if(scrolltop>0){
        btxt.style.fontSize="initial";
    }
    else{
        btxt.style.fontSize="30px";
    }
})


