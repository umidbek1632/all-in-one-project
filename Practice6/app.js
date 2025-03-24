let question = document.querySelector(".question")
let rand = Math.floor(Math.random()*1000000)  
question.textContent = rand 
// Math floor => butun qismini oladi
// Math random => har xil raqamlarni paydo qiladi


window.addEventListener('keypress', run)

function run(e){
    let answer = document.querySelector(".answer")
    if(e.key == ' '){
        answer.textContent = ""
    }
    else if(!isNaN(e.key)){
        answer.textContent += e.key
    }
  
    else if(e.key == 'Enter'){
        let son = answer.textContent
        if(son == rand){
            let result = document.querySelector(".result")
            let h4 = document.createElement("h4")
           
            h4.textContent = "✅"
        
            result.appendChild(h4)
        }
        else{
            let result = document.querySelector(".result")
            let h4 = document.createElement("h4")
            h4.textContent = "❌"
            result.appendChild(h4)
        }
        answer.textContent = ''
        rand = Math.floor(Math.random()*1000000)  
        question.textContent = rand 

    }
}
// ! => shartni inkor qilish uchun 
// isNan => raqamni aniqlab beradi
// appendCild => element qo'shib beradi
// createElement => element yaratib beradi