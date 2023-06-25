var on = document.getElementById('on')
var off = document.getElementById('off')
var img = document.getElementById('lampada')

function acender() {
    img.src= 'imagens/ligada.jpg'
}

function quebra() {
    img.src = 'imagens/quebrada.jpg'
    on.onclick = ""
    off.onclick = ""
}

function apagar() {
    img.src = 'imagens/desligada.jpg'
}