let video = document.querySelectorAll('.video')
video.forEach((item, index) =>{
    item.addEventListener('mouseover', ()=>{
        item.play();
    })
    item.addEventListener('mouseout', ()=>{
        item.pause();
    })
})

