

var active = false

function descricao() {
    
    var buttom = document.getElementsByClassName("material-symbols-outlined")[0]
    var nome = document.querySelector('p.nome')
    
    if (active == false) {
        active = true
        buttom.innerText = 'toggle_on'
        nome.style.visibility = 'visible'   
        
    } else {
        active = false
        buttom.innerText = 'toggle_off'
        nome.style.visibility = 'hidden'
    }
}

