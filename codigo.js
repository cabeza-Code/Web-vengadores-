window.onload = inicio;

let item = document.querySelector(".item")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")

let marvel = [
"ironman.jpg","cap.jpg",
"hulk.jpeg","thor.jpg",
"doc.jpg","black.jpg",
"barton.jpg"
]
let peliculas = [
"peli1.jpg","peli2.jpg", 
"peli3.jpg","peli4.jpg",
"peli5.jpg","peli6.jpg",
"peli7.jpg","peli8.jpg",
"peli9.jpg","peli10.jpg"
]
let item1 = document.querySelectorAll(".item1")
console.log(marvel[3])

function inicio() {
let a = Math.floor(Math.random()*
        marvel.length);
item.style.backgroundImage = `url(${marvel[a]})`;
    
   
   item1.forEach((e,i)=>{
   item1[i].style.transform = `translatex(${i*350}px)` 
   })
   
   item1.forEach((e,i)=>{
let peliculas = [
"peli1.jpg","peli2.jpg",
"peli3.jpg","peli4.jpg",
"peli5.jpg","peli6.jpg",
"peli7.jpg","peli8.jpg",
"peli9.jpg","peli10.jpg"
]
let a = Math.floor(Math.random()*
        peliculas.length)
item1[i].style.backgroundImage = `url(${peliculas[a]})`  
   })   
}


btn1.addEventListener("click",()=>{
 item.style.transform += "rotatey(180deg)" 
    let a = Math.floor(Math.random()*marvel.length);
    item.style.backgroundImage = `url(${marvel[a]})`;
})
btn2.addEventListener("click",()=>{
 item.style.transform += "rotatey(180deg)"
   let a = Math.floor(Math.random()*marvel.length);
   item.style.backgroundImage = `url(${marvel[a]})`;
})

btn3.addEventListener("click",()=>{
 item1.forEach(function(e,i) {
   item1[i].style.transform += `translatex(${200}px)` 
   })
})
btn4.addEventListener("click",()=>{
 item1.forEach(function(e,i) {
   item1[i].style.transform += `translatex(${-200}px)` 
   })
})
