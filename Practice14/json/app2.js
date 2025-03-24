let changeColor = document.querySelector(".changeColor")

changeColor.addEventListener("click" ,()=>{
    let d1 = Math.random()* 256
    let d2 = Math.random()* 256
    let d3 = Math.random()* 256
    changeColor.style.backgroundColor = `rgb(${d1}, ${d2}, ${d3})`
})
