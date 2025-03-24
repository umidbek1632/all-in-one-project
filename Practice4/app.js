    function run(e){
    let box = document.querySelector(".box")

    // switch(e.key){
    //     case 'Enter':
    //         box.textContent = ''
    //         break;
    //     case 'ArrowLeft':
            
    // }



    if(e.key == 'Enter'){
        box.textContent = ''
    }
    else if( e.key == 'ArrowLeft'){
        box.style.textAlign = 'left'
    }
    else if(e.key == 'ArrowRight'){
        box.style.textAlign = 'right'
    }
    else if(e.keyCode == '32'){
        box.style.textAlign = 'center'
    }
    else{
        box.textContent += e.key
    }
   

    
}

window.addEventListener('keydown', run)