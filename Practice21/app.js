let add = document.querySelector(".add")
let clear = document.querySelector(".clear")
let message = document.getElementById('message')

// add.addEventListener('click', ()=>{
//         message.style.display = 'flex'
//         message.textContent = 'Mahsulot qoshildi'
//     setTimeout(function(){
//         message.style.backgroundColor = 'rgb(0, 213, 255)'
//         message.style.display = 'none'
//     },1500)



// })
// clear.addEventListener('click', ()=>{
//     message.style.display = 'flex'
//     message.textContent = 'Barcha mahsulotlar o`chirildi'
// setTimeout(function(){
//     message.style.backgroundColor = 'rgb(0, 213, 255)'
//     message.style.display = 'none'
// },1500)

let product_name = document.querySelector('#product-name')
let mahsulotlar = []
let list_products = document.querySelector('.list-product-display')

// })
add.onclick = ()=>{
    if(product_name.value == ''){
        habar("Mahsulot nomini kirting")
    }
    else{
        mahsulotlar.push(product_name.value)
        display(mahsulotlar)
        habar('Mahsulot qoshildi')
    }
}
function display(m){
    list_products.innerHTML = ''
    m.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        list_products.appendChild(li)
    });
}


    habar('Mahsulot qo`shildi')
clear.onclick = ()=>habar('Barcha mahsulotlar o`chirildi')

// add.addEventListener('click', ()=>{
//     habar('Mahsulot qo`shildi')
// })
// clear.addEventListener('click', ()=>{
//     habar('Barcha mahsulotlar ochirildi')
// })

function habar(xat){
    message.style.display = 'flex'
    message.textContent = xat
    setTimeout(function(){
        message.style.display = 'none'
    },2500)
}


