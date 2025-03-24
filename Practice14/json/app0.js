let click = document.querySelector(".click")
let increase = document.querySelector(".increase")
let count = 0
click.addEventListener('click', ()=>{
    count = count + 1
    increase.textContent = `${count}`
      
})