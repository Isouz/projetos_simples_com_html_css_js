//Descrições
const descricao1 = 'Seu Índice de Massa Corporal está abaixo do normal. Isso pode ser um sinal de que você não está recebendo a nutrição adequada que seu corpo precisa. Recomendo que você consulte um profissional de saúde para discutir suas necessidades dietéticas e garantir que você esteja se mantendo saudável. 🍎🥦'

const descricao2 = 'Normal. Parabéns por manter um estilo de vida saudável! Seu Índice de Massa Corporal está na faixa normal, o que é um ótimo indicador de boa saúde. Continue com o bom trabalho! 🎉'

const descricao3 = 'Sobrepeso. Seu Índice de Massa Corporal está na faixa de sobrepeso. Isso pode ser um sinal de que você pode se beneficiar de algumas mudanças saudáveis em sua dieta e rotina de exercícios. Considere conversar com um profissional de saúde para obter orientação personalizada. 🏃‍♀️🥗'

const descricao4 = 'Obesidade grau I Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

const descricao5 = 'Obesidade grau II Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

const descricao6 = 'Obesidade grau III: Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

// linhas
const linha1 = document.getElementById('lin1')
const linha2 = document.getElementById('lin2')
const linha3 = document.getElementById('lin3')
const linha4 = document.getElementById('lin4')
const linha5 = document.getElementById('lin5')
const linha6 = document.getElementById('lin6')


function calcular() {
    
    document.getElementById('tabela').style.backgroundColor = 'white'
    
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let resultado = document.getElementById('resultado')
    let descricao = document.getElementById('descricao')
    let imc = peso / (altura * altura)
    imc = imc.toFixed(2)

    resultado.innerHTML = imc + ' kg/m2'
    
    if (imc <= 18.5) {
        descricao.innerHTML = descricao1
        linha1.classList.add('selecionado')
    } else if (imc <= 24.9){
        descricao.innerHTML =  descricao2
        linha2.classList.add('selecionado')
    } else if(imc <= 29.9) {
        descricao.innerHTML = descricao3
        linha3.classList.add('selecionado')
    } else if(imc <= 34.9) {
        descricao.innerHTML = descricao4
        linha4.classList.add('selecionado')
    } else if(imc <= 39.9) {
        descricao.innerHTML = descricao5
        linha5.classList.add('selecionado')
    } else {
        descricao.innerHTML = descricao6
        linha6.classList.add('selecionado')
    }
}


// Dados obrigatorios
//  o "avatar" vai aparecer na tela de acordo com o sexo e peso do usuário