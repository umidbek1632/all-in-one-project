let main = document.querySelector('.main')
let rasmlar = ['2.gif', '2.gif', '2.gif','2.gif','2.gif','2.gif','2.gif','4.jpeg','2.gif' ]
for(let i= 0; i<=8; i++){
    let div = document.createElement('div')
    div.classList.add('find')
    main.appendChild(div)
    let rand1 = Math.floor(Math.random()*rasmlar.length)
    let rand2 = Math.floor(Math.random()*rasmlar.length)
    let t = rasmlar[rand1]
    rasmlar[rand1] = rasmlar[rand2]
    rasmlar[rand2] = t
    console.log(rasmlar.length)
    div.addEventListener('click', ()=>{
   
        div.style.backgroundImage = `url(${rasmlar[i]})`
        if(  rasmlar[i] == '4.jpeg'){
            div.style.backgroundImage = 'url(4.jpeg)'
            alert('you won')
        }
    })
}