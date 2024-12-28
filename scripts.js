const bars = document.getElementById("bars");
const menu = document.getElementById("left-menu");
let a;

bars.addEventListener("click", function(){
    if (!a) {
       menu.style.transform = "translateX(0%)";
       bars.className = "fa-solid fa-xmark";
    }

    else{
        menu.style.transform = "translateX(-103%)"; 
        bars.className = "fa-solid fa-bars";
    }

    a=!a;
});

document.addEventListener("click", function(e){
    if (!menu.contains(e.target) && !bars.contains(e.target)) {
        menu.style.transform = "translateX(-103%)";
       bars.className = "fa-solid fa-bars";

       a=!a;
    }
})