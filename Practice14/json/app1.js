let mix = document.querySelector(".mix")
let oshir = document.querySelector(".oshir") 
let kamaytir = document.querySelector(".kamaytir")
let count2 = 0
oshir.addEventListener('click', ()=>{
    count2 = count2 + 1
    mix.textContent = `${count2}`
      
})
kamaytir.addEventListener('click',()=>{
    count2 = count2 - 1
    mix.textContent = `${count2}`
})

