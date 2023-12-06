let caixa = document.getElementById("area-rifas")
let btn = document.getElementById('botao-rifas')
let bts = document.getElementById("botao-doe-aqui")

let fechado = true//false
function mostrarImagem() {
    let imagemRifas = document.getElementById("RIFAS");
   
    if (fechado) {
        imagemRifas.style.display = "block";
        caixa.style['height'] = '10%'
        caixa.style['transition'] = '1s'
        bts.style['display'] = 'block'
        btn.style['transform'] = 'rotate(180deg)'
        fechado = false
    } else {
        fechado = true
        caixa.style['transition'] = '1s'
        bts.style['display'] = 'none'
        imagemRifas.style.display = "none";
        btn.style['transform'] = 'rotate(0deg)'
    }
} 
