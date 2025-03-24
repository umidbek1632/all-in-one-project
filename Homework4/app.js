let next = document.querySelector('.next')
next.style.display = 'none'

let third = document.querySelector('.third')
let email = "safarbek4564@gmail.com"
let password = "20072010"
console.log(password)
console.log(email)
console.log(first)
let picture = document.querySelector('.picture3')
const second = document.getElementById('second').value


let main = document.querySelector('.main')
third.addEventListener('click', ()=>{

    const first = document.getElementById('first').value
    const second = document.getElementById('second').value
    if(first === email && parseInt(second) === parseInt(password)){
 
        document.getElementById('first').style.border = '2px solid green'
        document.getElementById('second').style.border = '2px solid green'
    }
 
    else{
        let alert = document.querySelector('.alert')
        document.getElementById('first').style.border = '2px solid red'
        document.getElementById('second').style.border = '2px solid red'
        alert.textContent = 'Parol yoki login xato!'
    }
    picture.addEventListener('click', ()=>{
        picture.src = 'img/eye.png'
  
    })
})
let forget = document.querySelector('.forget')


forget.onclick = function(){
    main.style.display = 'none'
    next.style.display = 'block'

}


let random1 = 0
let random12 = 0

let hisoblang = document.querySelector('.hisoblang')
let keyingi =document.querySelector('.keyingi')


setInterval(function(){
    random1 = Math.floor(Math.random()*9)
    random12 = Math.floor(Math.random()*9)
    hisoblang.textContent = `${random1}+${random12}=`
},10000)

keyingi.onclick = function(){

    const answer =  parseInt(document.getElementById('answer').value)
 
    console.log(random1+random12)
    if(answer === random1+random12){
     
        document.getElementById('answer').style.border = '3px solid green'
    }
    else{
        document.getElementById('answer').style.border = '3px solid red'
    }
}
