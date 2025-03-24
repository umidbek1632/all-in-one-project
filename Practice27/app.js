let col1_img = [
    'ananas.png',
    'banan.png',
    'gilos.png',
    'malina.png',
    'nok.png',
    'olma.png',
    'qoziqorin.png',
    'shaftoli.png',
    'tarvuz.png',
    'uzum.png',
    'ananas.png',
    'banan.png',
    'gilos.png',
    'malina.png',
    'nok.png',
    'olma.png',
    'qoziqorin.png',
    'shaftoli.png',
    'tarvuz.png',
    'uzum.png',
    'ananas.png',
    'banan.png',
    'gilos.png',
    'malina.png',
    'nok.png',
    'olma.png',
    'qoziqorin.png',
    'shaftoli.png',
    'tarvuz.png',
    'uzum.png'
]
let col2_img  = [...col1_img]
let col3_img = [...col1_img]

let col1 = document.querySelector(".col-1")
let col2 = document.querySelector(".col-2")
let col3 = document.querySelector(".col-3")



for(let i=0;i<30;i++){
    let img = document.createElement('img')
    img.src = 'img/' + col1_img[i]
    col1.appendChild(img)

    let img2 = document.createElement('img')
    img2.src = 'img/' + col2_img[i]
    col2.appendChild(img2)

    let img3 = document.createElement('img')
    img3.src = 'img/'+ col3_img[i]
    col3.appendChild(img3)

    
}
let col1_photo = document.querySelectorAll('.col-1 img')
let col2_photo = document.querySelectorAll('.col-2 img')
let col3_photo = document.querySelectorAll('.col-3 img')
let calculate = parseInt( document.querySelector(".calculator"))
window.addEventListener('keypress', (e)=>{
    if(e.key = 'Enter'){
        let rand = Math.floor(Math.random()*20)
        col1_photo.forEach(element => {
            element.style.transform = `translateY(-${rand * 100}%)`
            calculate+=1
        });
        let rand1 = Math.floor(Math.random()*20)
        col2_photo.forEach(item =>{
            item.style.transform = `translateY(-${rand1 * 100}%)`
        })
        let rand2 = Math.floor(Math.random()*20)
        col3_photo.forEach(item1 =>{
            item1.style.transform = `translateY(-${rand2 * 100}%)`
        })
    }
    let p = document.querySelector(".won")
    if(col1_img.src == col2_img.src){
        p.textContent = ''
    }
})
