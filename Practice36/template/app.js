
let chosen = document.querySelector('.chosen')
let value = JSON.parse(localStorage.getItem('products'))
let p = document.createElement('p')
p.textContent = JSON.parse(localStorage.getItem('products')).length
console.log(value)
// localStorage.removeItem('products')



    for(let i = 0; i<=p.textContent-2;i++){
        let div = document.createElement('div')
        div.classList.add('rasm')
        chosen.appendChild(div)
     
        div.textContent = i+1
        div.addEventListener('click', ()=>{
            div.style.backgroundImage = `url(..//photos/${value[i]['img']})`
            div.textContent = ' '
            let img = document.createElement('img')
            img.classList.add('picture')
            img.src = `../photos/${value[i]["img"]}`
            div.appendChild(img)
        })
    }





let clear = document.querySelector('.clear')

clear.addEventListener('click',()=>{
    chosen.style.display = 'none'
    localStorage.removeItem('products')
    localStorage.setItem('products', JSON.stringify([]))
})