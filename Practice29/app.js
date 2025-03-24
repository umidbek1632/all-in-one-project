
let letters = document.querySelector('.letter-number')
let main = document.querySelector('.main-display')
let matn = 'ABCDEFGHIJKLMNPQRTWXYZJDJAD'
let audio = new Audio('3.mp3')
let audio2 = new Audio('6.mp3')
let score = document.querySelector('.score')
let cnt = 0
let measurement = matn.length
let show =  document.querySelector('.show')
console.log(measurement)
show.style.display = 'none'
window.addEventListener('keypress',(e)=>{

        show.style.display = 'block'
        show.textContent = e.key.toUpperCase()
     
  
    if(e.key == 'Enter'){
        show.textContent = null
        setInterval(function(){
            let span = document.createElement('span')
            span.textContent = matn[0]
            matn = matn.slice(1)
    
            let rand = Math.floor(Math.random()*main.offsetWidth)
            span.style.transform = `translateX(${rand}px)`
    
            main.appendChild(span)
           
            measurement -= 1

            letters.textContent = `Harflar qoldi: ${measurement}`
            if(measurement <= 0){
                measurement= null
    
                if(measurement= -1){
                
                    audio2.play()
                    measurement = measurement+2
                    audio2.autofocus()
                    
                }
            }
        },800)
              
    }
    
    else{
        document.querySelectorAll('.main-display span').forEach(item=>{
            if(item.textContent == e.key.toUpperCase()){
                item.textContent = '💥'
                audio.currentTime = 0
                audio.play()
                cnt ++
                score.textContent = `Togri: ${cnt}`
      
            }
            
        })

    }
})
