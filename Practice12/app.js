
function changePhoto(name, photo, price){
          document.querySelector(".fruit-image").src = photo
          document.querySelector(".fruit-price").textContent = `narxi: ${price} so'm`
}

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let container = document.querySelector(".container")
let d = 0
let b = 0

next.addEventListener('.click', ()=>{
    d += 25
    if(d>75){
        d = 0
    }
    
    container.style.transform = `translateX(${-d}%)`

})