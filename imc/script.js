const descrica = 


function calcular() {
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let resultado = document.getElementById('resultado')
    let descricao = document.getElementById('descricao')
    let imc = peso / (altura * altura)
    imc = imc.toFixed(2)

    let linha1 = document.getElementById('lin1')
    let linha2 = document.getElementById('lin2')
    let linha3 = document.getElementById('lin3')
    let linha4 = document.getElementById('lin4')
    let linha5 = document.getElementById('lin5')
    let linha6 = document.getElementById('lin6')


    resultado.innerHTML = imc + ' kg/m2'

    if (imc <= 18.5) {
        descricao.innerHTML = 'Seu Índice de Massa Corporal está abaixo do normal. Isso pode ser um sinal de que você não está recebendo a nutrição adequada que seu corpo precisa. Recomendo que você consulte um profissional de saúde para discutir suas necessidades dietéticas e garantir que você esteja se mantendo saudável. 🍎🥦'

        linha1.style.backgroundColor = '#0388A6'
    } else if (imc <= 24.9){
        descricao.innerHTML = 'Normal. Parabéns por manter um estilo de vida saudável! Seu Índice de Massa Corporal está na faixa normal, o que é um ótimo indicador de boa saúde. Continue com o bom trabalho! 🎉'

        linha2.style.backgroundColor = '#0388A6'
    } else if(imc <= 29.9) {
        descricao.innerHTML = 'Sobrepeso. Seu Índice de Massa Corporal está na faixa de sobrepeso. Isso pode ser um sinal de que você pode se beneficiar de algumas mudanças saudáveis em sua dieta e rotina de exercícios. Considere conversar com um profissional de saúde para obter orientação personalizada. 🏃‍♀️🥗'

        linha3.style.backgroundColor = '#0388A6'

    } else if(imc <= 34.9) {
        descricao.innerHTML = 'Obesidade grau I Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

        linha4.style.backgroundColor = '#0388A6'

    } else if(imc <= 39.9) {
        descricao.innerHTML = 'Obesidade grau II Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

        linha5.style.backgroundColor = '#0388A6'

    } else {
        descricao.innerHTML = 'Obesidade grau III: Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. 🌻👟'

        linha6.style.backgroundColor = '#0388A6'
    }
}


// Dados obrigatorios
// A linha da tabela vai ficar destacada de acordo com o resultado
//  o "avatar" vai aparecer na tela de acordo com o sexo e peso do usuário