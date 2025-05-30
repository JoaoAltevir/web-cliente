document.addEventListener("DOMContentLoaded" ,() => {});
const btn = document.querySelector("button");
const btn1 = document.querySelector("div");
    
    btn.addEventListener("click",
        function(evt){
            console.log("botão");
        });

    btn1.addEventListener("click",
        function(evt){
           console.log("div");
        });    
