var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var link = document.getElementById("jumpButton");
var jumping = 0;
var counter = 0;
//window.onload=function(){
hole.addEventListener('animationiteration', () => {
    var random = Math.random()*3;
    var top = (random*100) + 150; 
    hole.style.top = -(top) + "px"; 
    counter ++;      
});

setInterval(function move(){
    console.log("function move triggered");
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop + 3) + "px";
    }
    console.log(characterTop);
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500 - characterTop);
    if((characterTop > 480) || ((blockLeft < 20) && (blockLeft>-50) && ((cTop<holeTop) || (cTop > holeTop +130)))){
        
        character.style.top = 100 + "px";
        counter = 0;
    }
    
}, 10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(characterTop > 6) {
            character.style.top= (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10)
};
document.onkeydown = function (e) {
    if (e.keyCode == 32) {
        link.click();
    }
};
//}