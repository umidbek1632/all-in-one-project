function add(){
    let elements = document.querySelector(".elements")
    let newElement = document.createElement("div")
    newElement.textContent = "Bu yangi element"
    elements.appendChild(newElement)
    rang = document.querySelector(".color-code").value
    newElement.style.backgroundColor = `#${rang}`
    newElement.classList.add("box")
    size = document.querySelector(".font-size").value
    newElement.style.fontSize = `${size}px`
    let divWidth = document.querySelector('.div-width').value
    newElement.style.width = `${divWidth}px`
    let divHeight = document.querySelector('.div-height').value
    newElement.style.width = `${divHeight}px`
}
function remove(){
    let h1 = document.querySelector(".box")
    h1.remove()
}