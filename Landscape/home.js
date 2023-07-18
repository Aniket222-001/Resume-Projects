let slides = document.querySelectorAll(".content");
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let counter = 0;

slides.forEach((slide,index)=>{
    slide.style.left =  `${index*100}%`
})

function move(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}

next.addEventListener("click",()=>{
    if(counter < 2){
        counter++;
        move();
    }
    else{
        counter = 0;
        move();
    }
})
prev.addEventListener("click",()=>{
    if(counter > 0){
        counter--;
        move();
    }
    else{
        counter = 2;
        move();
    }
})


let more = document.getElementById("more_btn")
more.addEventListener("click",()=>{
    let c3 = document.getElementById("c3");
    c3.style.transition = '5s';
    c3.style.display = 'flex';
    more.innerHTML = "That is all";
    more.style.backgroundColor = 'rgba(0, 0, 0, 0.872)'

})
