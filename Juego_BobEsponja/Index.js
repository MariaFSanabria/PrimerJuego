//variables globales
var gameStart = false;
var activate = true;
var level = 1;
var character = document .getElementById("character");
var obstacle = document .getElementById("obstacle");
var message = document .getElementById("message");
//metodo o funcion jump = agregar la clase para que el character salte
function jump(){

    if(character.classList !="jump"){

        character.classList.add("jump");
    }


    character.classList.add("jump");
    setTimeout (function(){
        character.classList.remove("jump");
    }, 500);

}


document.addEventListener ("keydown", function (){
    if(!gameStart){
        message.classList.remove("loose");
        message.classList.add("beggining")
        gameStart = true;   
        obstacle.style.animation = "obstacleMovement 2s infinite linear";
        message.innerHTML = "Nivel"+level;
    }else{
        jump();
    }
});
    



setInterval(function() {
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    


    if(obstacleLeft < 10 && activate ){
        level= level+1;
        message.innerHTML = "Nivel "+level;
        activate = false;
    }



    if(obstacleLeft > 500 && !activate){
        activate = true;
    }

    

    

    if(obstacleLeft <40 && obstacleLeft >10 && characterTop >=  190){
        obstacle.style.animation = "none";
        gameStart = false;
        message.innerHTML = "HAS PERDIDO, PRESIONA CUALQUIER TECLA PARA VOLVER A EMPEZAR";
        message.classList.remove("beggining");
        message.classList.add("loose");
        level=1;
    }


    if(level === 10){
        obstacle.style.animation = "none";
        gameStart = false;
        message.innerHTML = "HAS GANADO, ERES UN CRACK, TK";
        level=1;
    }


},1);