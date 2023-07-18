let dino = document.querySelector(".dino")
let obstacle = document.querySelector(".obstacle")
let gameover = document.querySelector(".gameover")
let gamescore = document.querySelector(".score")

let audio = new Audio('music.mp3')
let audiogo = new Audio('gameover.mp3')

setTimeout(() => {
    audio.play();
}, 1000);

dino.classList.remove("animateddino")

cross = true;
score = 0;

document.onkeydown = function(e){

    if(e.keyCode == 38){
        dino.classList.add("animateddino")
        obstacle.classList.add("animatedobsticle")
        gameover.style.visibility = 'hidden';
        audio.play();

    }
    setTimeout(() => {
        dino.classList.remove("animateddino")   
    },800);   

    if(e.keyCode == 39){
        dxo = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = (dxo + 112)+"px"
    
    }
    if(e.keyCode == 37){
        dxs = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
        dino.style.left = (dxs - 112)+"px"
    
    }

}



setInterval(() => {
      dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
      dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))

      ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
      oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))

      offsetx = Math.abs(dx-ox);
      offsety = Math.abs(dy-oy);

      if(offsetx < 73 && offsety < 60){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('animatedobsticle')
        dino.style.left = 44+'px';
        audiogo.play();
        setTimeout(() => {  
            audiogo.pause();
            audio.pause();
            score = 0;
        }, 1000);
      }
      else if(offsetx < 88 && cross){
        score+= 1;
        updatescore(score);
        cross = false
        setTimeout(() => {
            cross = true
            speed = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
            newspeed = speed-0.1;
            if(newspeed < 3){
                newspeed = 3
            }
            obstacle.style.animationDuration = newspeed+'s';
            
        },500);

      }
    
}, 100);

function updatescore(score){
     gamescore.innerHTML = "Score : "+score;
}


