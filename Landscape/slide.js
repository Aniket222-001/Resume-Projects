let slides = document.querySelectorAll(".imga")
next = document.querySelector("#next")
prev = document.querySelector("#prev")
counter  = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

function move(){
    slides.forEach((slide) =>{
         slide.style.transform = `translateX(-${counter*100}%)`
    })
}

next.addEventListener("click",()=>{
    if(counter>0){
    counter--;
    move();
    }
})
prev.addEventListener("click",()=>{
    if(counter<3){
    counter++;
    move();
    }
})