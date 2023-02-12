var elementos = document.querySelectorAll(".player-img");
var title = document.querySelector(".title")
var playerOption = ""

//metodo principal de seleção 
for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("click", function(elementoclicado){
        resetOpacity(); //chamando outra função 
        elementoclicado.target.style.opacity = 1;
        playerOption = elementoclicado.target.getAttribute("opt");
        
        alert(playerOption);

    });
}

//função para resetar a opacidade durante outra jogada
function resetOpacity(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.4
    }
}
