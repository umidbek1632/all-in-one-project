let numberline = document.querySelector('.number-line')
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
window.addEventListener('keypress', (e)=>{

    numberline.textContent += parseInt(e.key)
    console.log(numberline.length)
    if(numberline.textContent.length>3){
        numberline.textContent = null
    }
    console.log(numberline[1])
    first.textContent = numberline.textContent[0]
    second.textContent = numberline.textContent[1]
    third.textContent = numberline.textContent[2]
})