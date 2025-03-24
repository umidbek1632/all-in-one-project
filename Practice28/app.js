let last_text = document.querySelector('.last-text')
let new_text = document.querySelector('.new-text')

new_text.textContent = 'lorem ipsum dolor sit'
let matn = new_text.textContent

let audio = new Audio('2.wav')
let audio2 = new Audio('1.mp3')

let cnt = 0
let count = 0
let result = document.querySelector('.result')
let d = matn.length
let losing = document.querySelector(".losing")

window.addEventListener('keypress', (e)=>{
    if(matn[0]==e.key){
        new_text.textContent = matn.slice(1)
        last_text.textContent += matn[0]
        matn = matn.slice(1)
        audio.currentTime = 0
        audio.play()
        cnt += 1
        result.textContent = cnt
        let audio3 = new Audio('6.mp3')
        if(cnt == d ){
            audio3.currentTime = 0
            audio3.play()
        }
    }
    // else if(cnt == matn.length){
    //     audio3.play()
    
    else{
        audio.currentTime = 0
        audio2.play()
        count += 1
        losing.textContent = `-${count}`
        // b = cnt
        // cnt += 1
    }
   


})

