let text = document.querySelector(".text")
window.addEventListener('keypress', run)

function run(e){
    let delet = document.querySelector(".delet")
    let letter = document.querySelector(".letter")
    text.textContent += e.key
    letter.textContent += e.key
    delet.addEventListener('click', ()=>{
        text.textContent = ''
        letter.textContent = ''
    })

}   
