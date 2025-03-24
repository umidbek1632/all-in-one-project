let data = ['Televizor',
    'Salfetka',
    'Noutbuk',
    'Cobalt',
    'Lampochka',
    '2 xonali uy',
    'Mebellar toplami',
    'Telefon',
    'Konditsoner',
    'Lampochka',
    'Gugurt',
    'Gaz plita',
    'Muzlatkich',
    'Planshet',
    'Damas',
    'Kompyuter',
    'Chang yutgich',
    'Vaucher',
    'Klaviatura',
    'Sichqoncha',
    '3 mln vaucher',
    'Velosiped',
    'Nothing',
    'Airpods'
]

// let ind = Math.floor(Math.random()*data.length)
// alert(data[ind])
// data.splice(ind, 1)

document.querySelectorAll('.gift').forEach(item =>{
    item.addEventListener('click', ()=>{
        item.style.transform = 'rotateY(180deg)'
        setTimeout(function(){
            let ind = Math.floor(Math.random()*data.length)
            item.textContent = data[ind]
            data.splice(ind, 1)
    
            item.style.background = 'none'
            item.style.background = 'blue'
            item.style.transform = 'rotateY(0deg)'
        }, 500)
     
    })

})


function run(e){
    let int = Math.floor(Math.random()*data.length)
    switch(e.key){
        case 'q':
          
        
                    
                document.querySelectorAll(".one").forEach(item1=>{
                    item1.style.transform = 'rotateY(180deg)'
                    setTimeout(function(){
                    item1.textContent = data[int]
                    data.splice(int, 1)

                    item1.style.background = 'none'
                    item1.style.background = 'blue'
                    item1.style.transform = 'rotateY(0deg)'
                    document.querySelector('.qqq').style.backgroundColor = 'blue'
                    document.querySelector('.qqq').style.color = 'white'
                    },500)
                  
                })
                break;
        case 'w':
            document.querySelectorAll(".two").forEach(item1=>{
                item1.style.transform = 'rotateY(180deg)'
                setTimeout(function(){
                item1.textContent = data[int]
                data.splice(int, 1)

                item1.style.background = 'none'
                item1.style.background = 'blue'
                item1.style.transform = 'rotateY(0deg)'
                document.querySelector('.www').style.backgroundColor = 'blue'
                document.querySelector('.www').style.color = 'white'
                },500)
              
            })
            break;
        case 'e':
            let item2 = document.querySelector(".three")


            item2.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item2.textContent = data[int]
                data.splice(int, 1)
                item2.style.background = 'none'
                item2.style.background = 'blue'
                item2.style.transform = 'rotateY(0deg)'
                document.querySelector('.eee').style.backgroundColor = 'blue'
                document.querySelector('.eee').style.color = 'white'
            },500)
            break;
        case 'r':
            let item3 = document.querySelector(".four")
    
    
            item3.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item3.textContent = data[int]
                data.splice(int, 1)
                item3.style.background = 'none'
                item3.style.background = 'blue'
                item3.style.transform = 'rotateY(0deg)'
                document.querySelector('.rrr').style.backgroundColor = 'blue'
                document.querySelector('.rrr').style.color = 'white'
            },500)
            break;
        case 't':
            let item4 = document.querySelector(".five")
        
        
            item4.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item4.textContent = data[int]
                data.splice(int, 1)
                item4.style.background = 'none'
                item4.style.background = 'blue'
                item4.style.transform = 'rotateY(0deg)'
                document.querySelector('.ttt').style.backgroundColor = 'blue'
                document.querySelector('.ttt').style.color = 'white'
            },500)
            break;
        case 'y':
            let item5 = document.querySelector(".six")
    
    
            item5.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item5.textContent = data[int]
                data.splice(int, 1)
                item5.style.background = 'none'
                item5.style.background = 'blue'
                item5.style.transform = 'rotateY(0deg)'
                document.querySelector('.yyy').style.backgroundColor = 'blue'
                document.querySelector('.yyy').style.color = 'white'
            },500)
            break;
        case 'u':
            let item6 = document.querySelector(".seven")
    
    
            item6.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item6.textContent = data[int]
                data.splice(int, 1)
                item6.style.background = 'none'
                item6.style.background = 'blue'
                item6.style.transform = 'rotateY(0deg)'
                document.querySelector('.uuu').style.backgroundColor = 'blue'
                document.querySelector('.uuu').style.color = 'white'
            },500)
            break;  
        case 'i':
            let item7 = document.querySelector(".eight")
    
    
            item7.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item7.textContent = data[int]
                data.splice(int, 1)
                item7.style.background = 'none'
                item7.style.background = 'blue'
                item7.style.transform = 'rotateY(0deg)'
                document.querySelector('.iii').style.backgroundColor = 'blue'
                document.querySelector('.iii').style.color = 'white'
            },500)
            break;
        case 'a':
            let item8 = document.querySelector(".nine")
    
    
            item8.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item8.textContent = data[int]
                data.splice(int, 1)
                item8.style.background = 'none'
                item8.style.background = 'blue'
                item8.style.transform = 'rotateY(0deg)'
                document.querySelector('.aaa').style.backgroundColor = 'blue'
                document.querySelector('.aaa').style.color = 'white'
            },500)
            break;
        case 's':
            let item9 = document.querySelector(".ten")
    
    
            item9.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item9.textContent = data[int]
                data.splice(int, 1)
                item9.style.background = 'none'
                item9.style.background = 'blue'
                item9.style.transform = 'rotateY(0deg)'
                document.querySelector('.sss').style.backgroundColor = 'blue'
                document.querySelector('.sss').style.color = 'white'
            },500)
            break;
        case 'd':
            let item10 = document.querySelector(".eleven")
    
    
            item10.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item10.textContent = data[int]
                data.splice(int, 1)
                item10.style.background = 'none'
                item10.style.background = 'blue'
                item10.style.transform = 'rotateY(0deg)'
                document.querySelector('.ddd').style.backgroundColor = 'blue'
                document.querySelector('.ddd').style.color = 'white'
            },500)
            break;
        case 'f':
            let item11 = document.querySelector(".twelve")
    
    
            item11.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item11.textContent = data[int]
                data.splice(int, 1)
                item11.style.background = 'none'
                item11.style.background = 'blue'
                item11.style.transform = 'rotateY(0deg)'
                document.querySelector('.fff').style.backgroundColor = 'blue'
                document.querySelector('.fff').style.color = 'white'
            },500)
            break;
        case 'g':
            let item12 = document.querySelector(".thirteen")
    
    
            item12.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item12.textContent = data[int]
                data.splice(int, 1)
                item12.style.background = 'none'
                item12.style.background = 'blue'
                item12.style.transform = 'rotateY(0deg)'
                document.querySelector('.ggg').style.backgroundColor = 'blue'
                document.querySelector('.ggg').style.color = 'white'
            },500)
            break;
        case 'h':
            let item13 = document.querySelector(".fourteen")
    
    
            item13.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item13.textContent = data[int]
                data.splice(int, 1)
                item13.style.background = 'none'
                item13.style.background = 'blue'
                item13.style.transform = 'rotateY(0deg)'
                document.querySelector('.hhh').style.backgroundColor = 'blue'
                document.querySelector('.hhh').style.color = 'white'
            },500)
            break;
        case 'j':
            let item14 = document.querySelector(".fiveteen")
    
    
            item14.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item14.textContent = data[int]
                data.splice(int, 1)
                item14.style.background = 'none'
                item14.style.background = 'blue'
                item14.style.transform = 'rotateY(0deg)'
                document.querySelector('.jjj').style.backgroundColor = 'blue'
                document.querySelector('.jjj').style.color = 'white'
            },500)
            break;
        case 'k':
            let item15 = document.querySelector(".sixteen")
    
    
            item15.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item15.textContent = data[int]
                data.splice(int, 1)
                item15.style.background = 'none'
                item15.style.background = 'blue'
                item15.style.transform = 'rotateY(0deg)'
                document.querySelector('.kkk').style.backgroundColor = 'blue'
                document.querySelector('.kkk').style.color = 'white'
            },500)
            break;
        case 'l':
            let item16 = document.querySelector(".seventeen")
    
    
            item16.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item16.textContent = data[int]
                data.splice(int, 1)
                item16.style.background = 'none'
                item16.style.background = 'blue'
                item16.style.transform = 'rotateY(0deg)'
                document.querySelector('.lll').style.backgroundColor = 'blue'
                document.querySelector('.lll').style.color = 'white'
            },500)
            break;
        case 'z':
            let item17 = document.querySelector(".eighteen")
    
    
            item17.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item17.textContent = data[int]
                data.splice(int, 1)
                item17.style.background = 'none'
                item17.style.background = 'blue'
                item17.style.transform = 'rotateY(0deg)'
                document.querySelector('.zzz').style.backgroundColor = 'blue'
                document.querySelector('.zzz').style.color = 'white'
            },500)
            break;
        case 'x':
            let item18 = document.querySelector(".nineteen")
    
    
            item18.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item18.textContent = data[int]
                data.splice(int, 1)
                item18.style.background = 'none'
                item18.style.background = 'blue'
                item18.style.transform = 'rotateY(0deg)'
                document.querySelector('.xxx').style.backgroundColor = 'blue'
                document.querySelector('.xxx').style.color = 'white'
            },500)
            break;
        case 'c':
            let item19 = document.querySelector(".twenty")
    
    
            item19.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item19.textContent = data[int]
                data.splice(int, 1)
                item19.style.background = 'none'
                item19.style.background = 'blue'
                item19.style.transform = 'rotateY(0deg)'
                document.querySelector('.ccc').style.backgroundColor = 'blue'
                document.querySelector('.ccc').style.color = 'white'
            },500)
            break;
        case 'v':
            let item20 = document.querySelector(".twentyone")
    
    
            item20.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item20.textContent = data[int]
                data.splice(int, 1)
                item20.style.background = 'none'
                item20.style.background = 'blue'
                item20.style.transform = 'rotateY(0deg)'
                document.querySelector('.vvv').style.backgroundColor = 'blue'
                document.querySelector('.vvv').style.color = 'white'
            },500)
            break;
        case 'b':
            let item21 = document.querySelector(".twentytwo")
    
    
            item21.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item21.textContent = data[int]
                data.splice(int, 1)
                item21.style.background = 'none'
                item21.style.background = 'blue'
                item21.style.transform = 'rotateY(0deg)'
                document.querySelector('.bbb').style.backgroundColor = 'blue'
                document.querySelector('.bbb').style.color = 'white'
            },500)
            break;
        case 'n':
            let item22 = document.querySelector(".twentythree")
    
    
            item22.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item22.textContent = data[int]
                data.splice(int, 1)
                item22.style.background = 'none'
                item22.style.background = 'blue'
                item22.style.transform = 'rotateY(0deg)'
                document.querySelector('.nnn').style.backgroundColor = 'blue'
                document.querySelector('.nnn').style.color = 'white'
            },500)
            break;
        case 'm':
            let item23 = document.querySelector(".twentyfour")
    
    
            item23.style.transform = 'rotateY(180deg)'
            setTimeout(function(){
                item23.textContent = data[int]
                data.splice(int, 1)
                item23.style.background = 'none'
                item23.style.background = 'blue'
                item23.style.transform = 'rotateY(0deg)'
                document.querySelector('.mmm').style.backgroundColor = 'blue'
                document.querySelector('.mmm').style.color = 'white'
            },500)
            break;
    }
}
window.addEventListener('keyup', run)