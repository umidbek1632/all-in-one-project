let rasmlar = ['dama-chitan.jpg',
    'dama-karyuch.jpg',
    'dama-olma.jpg',
    'dama-qorak.jpg',
    'karol-chitan.jpg',
    'karol-karyuch.jpg',
    'karol-olma.jpg',
    'karol-qorak.jpg',
    'valyet-chitan.jpg',
    'valyet-karuch.jpg',
    "valyet-olma.jpg",
    "valyet-qorak.jpg",
    "dama-chitan.jpg",
    "dama-karyuch.jpg",
    "dama-olma.jpg",
    "dama-qorak.jpg",
    "karol-chitan.jpg",
    "karol-karyuch.jpg",
    "karol-olma.jpg",
    "karol-qorak.jpg",
    "valyet-chitan.jpg",
    "valyet-karuch.jpg",
    "valyet-olma.jpg",
    "valyet-qorak.jpg"
]
let cards = document.querySelectorAll('.rasm')
    for(let i=0; i<=23; i++){
        cards[i].src = 'img/back.jpg'
    }

window.addEventListener('keypress', (e)=>{
    if(e.key == 'Enter'){
        for(let i=0; i<=50; i++){
            let rand1  = Math.trunc(Math.random()*100)%24
            let rand2  = Math.trunc(Math.random()*100)%24
            let t = rasmlar[rand1]
            rasmlar[rand1] = rasmlar[rand2]
            rasmlar[rand2] = t 
        }
        for(let i=0; i<=23; i++){
            cards[i].src = 'img/back.jpg'
        }
   
    }
})
let cnt = 0
let firstCard = null
let secondCard = null

cards.forEach((item,index)=>{
    item.onclick = () =>{
        cnt++
        item.style.transform = 'rotateY(180deg)'
      
       
        setTimeout(function(){
            item.src ='img/'+rasmlar[index]
            if(cnt == 1){
                firstCard = item
                console.log(firstCard.src)
            }
            else if(cnt == 2){
                secondCard = item
                console.log(secondCard.src)
            }
     
        },300)
        setTimeout(()=>{
            if(firstCard != null && secondCard != null){
                if(firstCard.src != secondCard.src && cnt ==2){
                    firstCard.src = 'img/back.jpg'
                    secondCard.src = 'img/back.jpg'
                    cnt = 0
                    firstCard = null
                    secondCard = null
                }
                else{
                    cnt = 0
                    firstCard = null
                    secondCard = null
                }
            }
        },700)

        
      
       
    }
})











// let rasm = document.querySelectorAll(".rasm")
// let kartalar = document.querySelector(".kartalar")


// window.addEventListener('keypress', (e)=>{
//     if(e.key == 'Enter'){
//         for(i=1;i<=50;i++){
//             rand1 = Math.floor(Math.random()*100)%24
//             rand2 = Math.floor(Math.random()*100)%24
//             let a = rasmlar[rand1]
//             rasmlar[rand1] = rasmlar[rand2]
//             a = rasmlar[rand2]
//         }
        
      
//         for(let i = 0; i<=23; i++){
//         rasm[i].src = `${rasmlar[i]}`
//         }

   

//         // rasm.forEach((item,index)=>{
//         //     // item.style.src = "rasmlar[index]"
//         //     // kartalar.style.backgroundImage = url(rasmlar[index])
//         //     item.src = `${rasmlar[index]}`
         
            
//         // })
        
//     }
// })

// let tugma = document.querySelector(".tugma")
// tugma.addEventListener('click', ()=>{
//     for(i = 0; i<=50;i++){
//         rand11 = Math.floor(Math.random()*100)%24
//         rand12 = Math.floor(Math.random()*100)%24
//         let b = rasmlar[rand11]
//         rasmlar[rand11] = rasmlar[rand12]
//         rasmlar[rand12] = b
//     }


//     for(let i = 0; i<=23; i++){
//         rasm[i].src = `${rasmlar[i]}`
//     }
// })