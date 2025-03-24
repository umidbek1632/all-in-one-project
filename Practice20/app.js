let d = false
let result = []




document.querySelectorAll('.square').forEach((item,num) =>{
    window.addEventListener('keypress', run)
    function run(e){
        if(e.key == 'Enter'){
            document.querySelectorAll(".square").forEach(item2 =>{
                item2.textContent = result[num]
            })
            document.querySelector(".game-display").style.filter = 'none'
            natija.textContent = 'none'
            natija.style.display = 'none'
            
            d = true
           
         }
      
    }
    item.addEventListener('click',()=>{
        if(item.textContent == ''){
            if(d == false){
                item.textContent = 'X'
                result[num] = 'X'
                d = true
            }
            else if(d == true){
                item.textContent = 'O'
                result[num] = 'O'
                d = false
            }
            hisoblash()
        
        
        }

        
         
    })


})

let natija = document.querySelector('.natija')
let game_display = document.querySelector(".game-display")
let b = 0
let xxx = document.querySelector(".xxx")
let ooo = document.querySelector(".ooo")
function hisoblash(){
    if(result[0]+result[1]+result[2] == 'XXX' ||
       result[3]+result[4]+result[5] == 'XXX' ||
       result[6]+result[7]+result[8] == 'XXX' ||
       result[0]+result[3]+result[6] == 'XXX' ||
       result[1]+result[4]+result[7] == 'XXX' ||
       result[2]+result[5]+result[8] == 'XXX' ||
       result[0]+result[4]+result[8] == 'XXX' ||
       result[2]+result[4]+result[6] == 'XXX' 
    ){
   
        natija.style.backgroundColor = 'blue'
        natija.textContent = 'X wins'
        game_display.style.filter = 'blur(5px)'
        b = b+1
        xxx.textContent = b

        
    }
    if(result[0]+result[1]+result[2] == 'OOO' ||
        result[3]+result[4]+result[5] == 'OOO' ||
        result[6]+result[7]+result[8] == 'OOO' ||
        result[0]+result[3]+result[6] == 'OOO' ||
        result[1]+result[4]+result[7] == 'OOO' ||
        result[2]+result[5]+result[8] == 'OOO' ||
        result[0]+result[4]+result[8] == 'OOO' ||
        result[2]+result[4]+result[6] == 'OOO' 
     ){
        natija.style.backgroundColor = 'blue'
        natija.textContent = 'O wins'
         game_display.style.filter = 'blur(5px)'
         b = b+1
         ooo.textContent = b
     }

  

}
