
let heart=document.querySelector(".far.fa-heart");



heart.addEventListener("click",()=>{
    if(heart.style.backgroundColor === "red"){
        heart.style.backgroundColor = "white"
    }else{
        heart.style.background = "red"
    }
})

