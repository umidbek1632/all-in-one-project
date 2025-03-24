let carX = 0
let carY = 0
function run(e){

    let car = document.querySelector(".car")
    switch(e.key){
        case 'ArrowRight':
            car.style.transform = 'rotate(90deg)'
            carX += 10
            break;
        case 'ArrowDown':
            car.style.transform = 'rotate(180deg)'
            carY += 10
            break;
        case 'ArrowLeft':
            car.style.transform = 'rotate(270deg)'
            carX -= 10
            break;
        case 'ArrowUp':
            car.style.transform = 'rotate(0deg)'
            carY -= 10
            break;
    let car2 = document.querySelector(".car2")      

    }
    car.style.left = `${carX}px`
    car.style.top = `${carY}px`

}



window.addEventListener('keydown', run)
let carx = 0
let cary = 0
function run1(d){
    let car2 = document.querySelector(".car2")
    switch(d.key){
        case 'w':
            car2.style.transform = 'rotate(0deg)'
            cary -= 10
            break;
        case 'd':
            car2.style.transform = 'rotate(90deg)'
            carx += 10
            break;
        case 's':
            car2.style.transform = 'rotate(180deg)'
            cary +=10
            break;
        case 'a':
            car2.style.transform = 'rotate(270deg)'
            carx -=10
            break;
    }
    car2.style.left = `${carx}px`
    car2.style.top = `${cary}px`
}
window.addEventListener('keydown',run1)
