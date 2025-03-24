
let user_photo = document.querySelector(".user-photo")

document.querySelectorAll(".elements span").forEach(item =>{
    item.addEventListener('click', ()=>{
        if(item.textContent == '✋🏻'){
            user_photo.src = 'img/qogoz1.jpg'
        }
        else if(item.textContent == '✊🏻'){
            user_photo.src = 'img/tosh1.jpg'
        }
        else if(item.textContent == '✌🏻'){
            user_photo.src = 'img/qaychi1.jpg'
        }
    
    })
})

let user_load = document.querySelector(".user-load")
let comp_load = document.querySelector(".computer-load")
window.addEventListener('keypress', (e)=>{
    user_load.style.display = 'flex'
    comp_load.style.display = 'flex'
    setTimeout(function(){
        user_load.style.display = 'none'
        comp_load.style.display = 'none'
    },1000)
    if(e.key == '1'){
        user_photo.src = 'img/qogoz1.jpg'
    }    
    else if(e.key == '2'){
        user_photo.src = 'img/tosh1.jpg'
    }  
    else if(e.key == '3'){
        user_photo.src = 'img/qaychi1.jpg'
    }  
    let comp_photo = document.querySelector(".computer-photo")
    if(e.key == 'q'){
        comp_photo.src = 'img/qogoz2.jpg'
    }    
    else if(e.key == 'w'){
        comp_photo.src = 'img/tosh2.jpg'
    }  
    else if(e.key == 'e'){
        comp_photo.src = 'img/qogoz2.jpg'
    } 
})




