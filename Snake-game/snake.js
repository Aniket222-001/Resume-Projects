let board = document.querySelector('.board')

const foodaudio = new Audio("music/food.mp3")
const gameoverAudio = new Audio("music/gameover.mp3")
const moveAudio = new Audio("music/move.mp3")
const musicAudio = new Audio("music/music.mp3")
lastTime = 0;
speed = 5;

let inputdir = {x:0,y:0}

let snakeArr =[
    {x:10,y:10}
]

let food = {x:2,y:4}

function main(ctime){
    window.requestAnimationFrame(main)

    if((ctime-lastTime)/1000 < 1/speed){
        return;
    }
    lastTime = ctime;
    gameEngine();   
}

function collided(snake){
    for(let i = 1;i<snakeArr.length;i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            return true;
        }
    }
    if(snake[0].x >= 16 || snake[0].x <= 0 || snake[0].y >= 16 || snake[0].y <= 0 ){
        return true;
    } 
    return false   
}

function gameEngine(){
    //gameover
    if(collided(snakeArr)){    
        musicAudio.pause();   
        gameoverAudio.play();
        alert("Game over press ok to restart the game")
        inputdir = {x:0,y:0}
        snakeArr =[
            {x:10,y:10}
        ]
        
    }
    //food eaten and update size
    if(snakeArr[0].x === food.x && snakeArr[0].y === food.y){
        foodaudio.play();
        snakeArr.unshift({x: snakeArr[0].x + inputdir.x,y: snakeArr[0].y + inputdir.y})
        let a = 2;
        let b = 14;

        food = ({x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())})
    }
    // foodaudio.pause();

    // move the snake
    for(let i = snakeArr.length-2;i>= 0;i--){
        snakeArr[i+1] = {...snakeArr[i]}

    }

    snakeArr[0].x += inputdir.x
    snakeArr[0].y += inputdir.y
    
    //snake head
    board.innerHTML = ""
    snakeArr.forEach((e,index)=>{
    snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = e.y
    snakeElement.style.gridColumnStart = e.x
    if(index === 0){
        snakeElement.classList.add('head')
    }
    snakeElement.classList.add('sbody')
    board.appendChild(snakeElement)
    })


    //food
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    board.appendChild(foodElement)
}
window.requestAnimationFrame(main);

window.addEventListener('keydown',e=>{
    musicAudio.play();
    inputdir = {x:0,y:0}
    switch (e.key) {
        case ('ArrowUp'):
            inputdir.y = -1   
            inputdir.x = 0   
            break;
        case ('ArrowDown'):
            inputdir.y = 1     
            inputdir.x = 0     
            break;
        case ('ArrowLeft'):
            inputdir.x = -1     
            inputdir.y = 0    
            break;
        case ('ArrowRight'):
            inputdir.x = 1 
            inputdir.y = 0 
            break;
        default:
          break;
        
    }
})












