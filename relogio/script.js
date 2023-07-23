var div_hora = document.getElementById('hora')
var div_min = document.getElementById('min')
var div_seg = document.getElementById('seg')

var relogio = setInterval(function () {
    let hoje = new Date()
    let hora = hoje.getHours()
    let min = hoje.getMinutes()
    let seg = hoje.getSeconds()

    div_hora.innerText = complemento(hora)
    div_min.innerText = complemento(min)
    div_seg.innerText = complemento(seg)
}, 1000)

function complemento(num) {
    if (num <= 9 && num >= 0) {
        return `0${num}`
    } else {
        return num
    }
}

