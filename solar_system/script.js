var fundo = document.getElementById('fundo')
var ativo = false

function descricao() {
    var buttom = document.getElementsByClassName("material-symbols-outlined")[0]
    
    
    if (ativo == false) {
        ativo = true
        buttom.innerText = 'toggle_on'
        for (let i = 0 ; i <= 8; i++) {
            var nome = document.getElementsByClassName('nome')[i]
            nome.style.visibility = 'visible' 
        }
        
    } else {
        ativo = false
        buttom.innerText = 'toggle_off'
        for (let i = 0 ; i <= 8; i++) {
            var nome = document.getElementsByClassName('nome')[i]
            nome.style.visibility = 'hidden' 
        }
    }
}


function criarEstrelas() {
    for (let i=0; i < 500; i ++) {
        let estrelas = document.createElement('div')
        estrelas.className = 'estrelas'
        estrelas.style.height = '1.5px'
        estrelas.style.width = '1.5px'
        estrelas.style.top = Math.random() * 100 + '%'
        estrelas.style.left = Math.random() * 100 + '%'
        estrelas.style.opacity = Math.random() * 100 + '%'
        fundo.appendChild(estrelas)
    }
}

criarEstrelas()

