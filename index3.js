let caixa = document.getElementById("area-rifas")
let btn = document.getElementById('botao-rifas')
let bts = document.getElementById("botao-doe-aqui")
let fechado = true
function mostrarImagem() {
    let imagemRifas = document.getElementById("RIFAS");
   
    if (fechado) {
        imagemRifas.style.display = "block";
        caixa.style['height'] = '10%'
        caixa.style['transition'] = '1s'
        bts.style['display'] = 'block'
        fechado = false
        btn.style['transform'] = 'rotate(180deg)'
    } else {
        fechado = true
        caixa.style['transition'] = '1s'
        imagemRifas.style.display = "none";
        btn.style['transform'] = 'rotate(0deg)'
    }
} 