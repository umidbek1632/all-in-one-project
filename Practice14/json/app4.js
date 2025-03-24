let given1 = document.querySelector('.given1').value
let given2 = document.querySelector('.given2').value
let solution = document.querySelector('.solution')
let y = given1 + given2
console.log(given1)
window.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        solution.textContent = y
    }
})