let interruptor = document.querySelector('.interruptor')
let lampara = document.querySelector('.lampara')
let foco = document.querySelector('.foco')
let cont = 0
function encender() {
    if (cont % 2 == 0){
        foco.style.backgroundColor = 'rgb(255, 225, 0)'
        foco.style.boxShadow = '1px 140px 100000px 90px rgb(255, 225, 0)'
    }else{
        foco.style.backgroundColor = 'rgb(184, 182, 166)'
        foco.style.boxShadow = ''
    }
    lampara.style.animation = 'mov 3s 4 alternate';
    interruptor.style.animation = 'movI 2s 4 alternate';
    cont++
}