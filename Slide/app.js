let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let bear = document.querySelector('.bear')
let wolf = document.querySelector('.wolf')
let lion = document.querySelector('.lion')
let tiger = document.querySelector('.tiger')
let photo1 =  document.querySelector('.photo1')
let photo2 = document.querySelector('.photo2')
let photo3 = document.querySelector('.photo3')
let photo4 = document.querySelector('.photo4')
let smallSlide = document.querySelector('.small-slide')
let cnt = 0
next.onclick = function(){
    cnt +=1 
    if(cnt == 1){
        bear.style.display = 'none'
        wolf.style.display = 'block'
        photo2.style.width = '140px'
        photo2.style.height = '120px'
        photo1.style.width = '120px'
        photo1.style.height = '100px'
        photo3.style.width = '120px'
        photo3.style.height = '100px'
        photo4.style.width = '120px'
        photo4.style.height = '100px'
        smallSlide.style.marginRight = '420px'

    }
    else if(cnt == 2){
        wolf.style.display = 'none'
        lion.style.display = 'block'
        photo3.style.width = '140px'
        photo3.style.height = '120px'
        photo1.style.width = '120px'
        photo1.style.height = '100px'
         photo2.style.width = '120px'
        photo2.style.height = '100px'
        photo4.style.width = '120px'
        photo4.style.height = '100px'
        smallSlide.style.marginRight = '580px'
    }
    else if(cnt == 3){
        lion.style.display = 'none'
        tiger.style.display = 'block'
        photo4.style.width = '140px'
        photo4.style.height = '120px'
        photo1.style.width = '120px'
        photo1.style.height = '100px'
      
       
        photo3.style.width = '120px'
        photo3.style.height = '100px'
        photo2.style.width = '120px'
        photo2.style.height = '100px'
        smallSlide.style.marginRight = '680px'
    }
    else{
        tiger.style.display = 'none'
        bear.style.display = 'block'
        photo1.style.width = '140px'
        photo1.style.height = '120px'
        photo2.style.width = '120px'
        photo2.style.height = '100px'
        photo3.style.width = '120px'
        photo3.style.height = '100px'
        photo4.style.width = '120px'
        photo4.style.height = '100px'
         smallSlide.style.marginRight = '300px'

        cnt = 0
    }
    console.log(cnt)

}
console.log(cnt)
prev.addEventListener('click', ()=>{

    if(cnt == 1){
        bear.style.display = 'block'
        wolf.style.display = 'none'
        photo1.style.width = '140px'
        photo1.style.height = '120px'
        photo2.style.width = '120px'
        photo2.style.height = '100px'
        photo3.style.width = '120px'
        photo3.style.height = '100px'
        photo4.style.width = '120px'
        photo4.style.height = '100px'
         smallSlide.style.marginRight = '280px'
       cnt-=1
    
    }
    else if(cnt == 2){
        wolf.style.display = 'block'
        lion.style.display = 'none'
        photo2.style.width = '140px'
        photo2.style.height = '120px'
        photo1.style.width = '120px'
        photo1.style.height = '100px'
        photo3.style.width = '120px'
        photo3.style.height = '100px'
        photo4.style.width = '120px'
        photo4.style.height = '100px'
        smallSlide.style.marginRight = '400px'
        cnt -= 1
    }
    else if(cnt == 3){
        lion.style.display = 'block'
        tiger.style.display = 'none'
        photo3.style.width = '140px'
        photo3.style.height = '120px'
        photo1.style.width = '120px'
        photo1.style.height = '100px'
         photo2.style.width = '120px'
        photo2.style.height = '100px'
        photo4.style.width = '120px'
        photo4.style.height = '100px'
        smallSlide.style.marginRight = '560px'
        cnt-=1
    }
    else if(cnt== 0){
        bear.style.display = 'none'
        tiger.style.display = 'block'
        photo4.style.width = '140px'
        photo4.style.height = '120px'
        photo1.style.width = '120px'
        photo1.style.height = '100px'
      
       
        photo3.style.width = '120px'
        photo3.style.height = '100px'
        photo2.style.width = '120px'
        photo2.style.height = '100px'
        smallSlide.style.marginRight = '700px'
        cnt = 3

    }
    // else{
    //     tiger.style.display = 'block'
    //     bear.style.display = 'none'
    //     cnt = 0
    // }
    console.log(cnt)
})
const check = document.getElementById('check')
let main = document.querySelector('.main')
check.addEventListener('change', ()=>{
    if(check.checked){
        main.style.backgroundColor = 'rgb(85, 82, 82)'
        prev.style.backgroundColor = 'red'
        next.style.backgroundColor = 'red'
    }
    else{
        main.style.backgroundColor = 'antiquewhite'
         prev.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
        next.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
    }
})