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
