// Descrições
const descricao1 = 'Seu Índice de Massa Corporal está abaixo do normal. Isso pode ser um sinal de que você não está recebendo a nutrição adequada que seu corpo precisa. Recomendo que você consulte um profissional de saúde para discutir suas necessidades dietéticas e garantir que você esteja se mantendo saudável. 🍎🥦'

const descricao2 = 'Normal. Parabéns por manter um estilo de vida saudável! Seu Índice de Massa Corporal está na faixa normal, o que é um ótimo indicador de boa saúde. Continue com o bom trabalho! 🎉'

const descricao3 = 'Sobrepeso. Seu Índice de Massa Corporal está na faixa de sobrepeso. Isso pode ser um sinal de que você pode se beneficiar de algumas mudanças saudáveis em sua dieta e rotina de exercícios. Considere conversar com um profissional de saúde para obter orientação personalizada. 🏃‍♀️🥗'

const descricao4 = 'Obesidade grau I Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

const descricao5 = 'Obesidade grau II Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

const descricao6 = 'Obesidade grau III: Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

// Linhas da tabela
const linha1 = document.getElementById('lin1')
const linha2 = document.getElementById('lin2')
const linha3 = document.getElementById('lin3')
const linha4 = document.getElementById('lin4')
const linha5 = document.getElementById('lin5')
const linha6 = document.getElementById('lin6')


function exibirResultado(peso, altura) {
    var boneco = document.getElementById('boneco')
    var femenino = document.getElementById('feme')
    var resultado = document.getElementById('resultado')
    var descricao = document.getElementById('descricao')
    var imc = peso / (altura * altura)

    imc = imc.toFixed(2)
    resultado.innerHTML = imc + ' kg/m2'

    if (imc <= 18.5) {
        descricao.innerHTML = descricao1
        linha1.classList.add('selecionado')

        if (femenino.checked) {
            boneco.src = 'imagens/femenino/magreza.png'
        } else {
            boneco.src = 'imagens/masculino/magreza.png'
        }

    } else if (imc <= 24.9){
        descricao.innerHTML =  descricao2
        linha2.classList.add('selecionado')

        if (femenino.checked) {
            boneco.src = 'imagens/femenino/normal.png'
        } else {
            boneco.src = 'imagens/masculino/normal.png'
        }

    } else if(imc <= 29.9) {
        descricao.innerHTML = descricao3
        linha3.classList.add('selecionado')

        if (femenino.checked) {
            boneco.src = 'imagens/femenino/sobrepeso.png'
        } else {
            boneco.src = 'imagens/masculino/sobrepeso.png'
        }

    } else if(imc <= 34.9) {
        descricao.innerHTML = descricao4
        linha4.classList.add('selecionado')

        if (femenino.checked) {
            boneco.src = 'imagens/femenino/obesidade1.png'
        } else {
            boneco.src = 'imagens/masculino/obesidade1.png'
        }

    } else if(imc <= 39.9) {
        descricao.innerHTML = descricao5
        linha5.classList.add('selecionado')

        if (femenino.checked) {
            boneco.src = 'imagens/femenino/obesidade2.png'
        } else {
            boneco.src = 'imagens/masculino/obesidade2.png'
        }

    } else {
        descricao.innerHTML = descricao6
        linha6.classList.add('selecionado')

        if (femenino.checked) {
            boneco.src = 'imagens/femenino/obesidade3.png'
        } else {
            boneco.src = 'imagens/masculino/obesidade3.png'
        }
    }
}


function calcular() {

    var altura = Number(document.getElementById('altura').value)
    var peso = Number(document.getElementById('peso').value)

    // Limpando a seleção
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`lin${i}`).classList.remove('selecionado')
    }

    if (peso == '' || altura == '') {
        alert('Por favor, preencha os campos!')
    } else {
        exibirResultado(peso, altura)
    }
}
