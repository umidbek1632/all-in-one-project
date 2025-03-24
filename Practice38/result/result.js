let rasmlar = document.querySelector('.rasmlar')
let tanlanganlar = JSON.parse(localStorage.getItem('word'))
let result = document.querySelector('.result')

console.log(tanlanganlar)

    
    for(let i = 0 ; i < tanlanganlar.length; i++){
        let div = document.createElement('div')
        div.classList.add('div-rasm')
        div.innerHTML =`    <p class="uzbek">${tanlanganlar[i]['name-uzb']}</p>
                <img class="image" src="../rasmlar/${tanlanganlar[i]['img']}" alt="ananas">
                <input type="text" class="number">
                `
        

            
        rasmlar.appendChild(div)

       
    }
let text = document.querySelectorAll('.number')

text.forEach((element,num) => {
    element.addEventListener('input', function(){
        if(element.value == tanlanganlar[num]['name-eng']){
            element.style.border = '2px solid green'
        }
        else{
            element.style.border = '2px solid red'
        }
    })
});
 



    
    
    
