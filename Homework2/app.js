d = 0
function run(){
    let a = document.querySelector('.barabon1')
    let rand = Math.floor(Math.random()*560)
    a.style.transform = `rotate(${rand}deg)`
    d = d+rand
}