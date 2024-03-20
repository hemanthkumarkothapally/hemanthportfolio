let initialbg = document.getElementById("bgdark");
function todark(){
    if(initialbg.style.backgroundColor=="rgb(221, 249, 250)"){
        initialbg.style.backgroundColor="black";
        initialbg.style.color="#ffffff";
    }
    else{
        initialbg.style.backgroundColor="rgb(221, 249, 250)";
        initialbg.style.color="black";
    }
}

let tablinks=document.getElementsByClassName("tab-links");
let tabcontents= document.getElementsByClassName("tab-content");
function getopen(tabname){
    for(x of tablinks){
        x.classList.remove("active-link")
    }
    for(y of tabcontents){
        y.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
