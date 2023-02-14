var elementos = document.querySelectorAll(".player-img");
var title = document.querySelector(".title")
var playerOption = ""
var enemyOption = ""
const enemyOptions = document.querySelectorAll(".enemy-options img");
const winingMessage = document.querySelector(".wining-message h2");
var playerScore = 0;
var enemyScore = 0;
var playerScorePlace = document.querySelector(".player-score h1");
var enemyScorePlace = document.querySelector(".enemy-score h1");

//metodo principal de seleção 
for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener("click", function(elementoclicado){
        resetOpacity(); //chamando outra função 
        elementoclicado.target.style.opacity = 1;
        playerOption = elementoclicado.target.getAttribute("opt");

        enemyTurn();//chamando a função que jogará pelo inimigo 
        

    });
}

//função para resetar a opacidade durante outra jogada
function resetOpacity(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3
    }
}

//função para a jogada inimiga 
function enemyTurn(){
    let rand = Math.floor(Math.random()*3);    

    enemyReset();
    
    for(var i = 0; i < enemyOptions.length; i++){
        if (i == rand){
            enemyOptions[i].style.opacity = 1
            enemyOption = enemyOptions[i].getAttribute("opt");
        }
    }

    console.log("Player jogou: " + playerOption);
    console.log("Inimigo jogou: " + enemyOption);
    
    checkVictory();

}

//função para resetar o inimigo 
function enemyReset(){
    for(var i = 0; i < enemyOptions.length; i++){        
            enemyOptions[i].style.opacity = 0.3;        
    }
}

//função para verificar vitória 
function checkVictory(){
    if(playerOption == "papel"){
        if(enemyOption == "papel"){
            winingMessage.innerText = "Empate";
            winingMessage.style.backgroundColor = "gray";

        }else if(enemyOption == "pedra"){
            winingMessage.innerText = "Você venceu!";
            winingMessage.style.backgroundColor = "green";
            playerScore++;
            console.log(playerScore);
            playerScorePlace.textContent = playerScore;

        }else if(enemyOption == "tesoura"){
            winingMessage.innerText = "A máquina venceu!";
            winingMessage.style.backgroundColor = "red";
            enemyScore++;
            console.log(playerScore);
            enemyScorePlace.textContent = enemyScore;

        }
    }
    else if(playerOption == "pedra"){
        if(enemyOption == "papel"){
            winingMessage.innerText = "A máquina venceu!";
            winingMessage.style.backgroundColor = "red";
            enemyScore++;
            console.log(playerScore);
            enemyScorePlace.textContent = enemyScore;

        }else if(enemyOption == "pedra"){
            winingMessage.innerText = "Empate";
            winingMessage.style.backgroundColor = "gray";

        }else if(enemyOption == "tesoura"){
            winingMessage.innerText = "Você venceu!";
            winingMessage.style.backgroundColor = "green";
            playerScore++;
            console.log(playerScore);
            playerScorePlace.textContent = playerScore;

        }
    }
    else if(playerOption == "tesoura"){
        if(enemyOption == "papel"){
            winingMessage.innerText = "Você venceu!";
            winingMessage.style.backgroundColor = "green";
            playerScore++;
            console.log(playerScore);
            playerScorePlace.textContent = playerScore;

        }else if(enemyOption == "pedra"){
            winingMessage.innerText = "A máquina venceu!";
            winingMessage.style.backgroundColor = "red";
            enemyScore++;
            console.log(playerScore);
            enemyScorePlace.textContent = enemyScore;

        }else if(enemyOption == "tesoura"){
            winingMessage.innerText = "Empate";
            winingMessage.style.backgroundColor = "gray";

        }
    }

}