function calcular() {
    let idade = Number(document.getElementById('idade').value)
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let resultado = document.getElementById('resultado')
    let descricao = document.getElementById('descricao')
    let imc = peso / (altura * altura)
    imc = imc.toFixed(2)


    resultado.innerHTML = imc + ' kg/m2'

    if (imc <= 18.5) {
        descricao.innerHTML = 'Seu Índice de Massa Corporal está abaixo do normal. Isso pode ser um sinal de que você não está recebendo a nutrição adequada que seu corpo precisa. Recomendo que você consulte um profissional de saúde para discutir suas necessidades dietéticas e garantir que você esteja se mantendo saudável. 🍎🥦'
    } else if (imc <= 24.9){
        descricao.innerHTML = 'Normal. Parabéns por manter um estilo de vida saudável! Seu Índice de Massa Corporal está na faixa normal, o que é um ótimo indicador de boa saúde. Continue com o bom trabalho! 🎉'
    } else if(imc <= 29.9) {
        descricao.innerHTML = 'Sobrepeso. Seu Índice de Massa Corporal está na faixa de sobrepeso. Isso pode ser um sinal de que você pode se beneficiar de algumas mudanças saudáveis em sua dieta e rotina de exercícios. Considere conversar com um profissional de saúde para obter orientação personalizada. 🏃‍♀️🥗'
    } else if(imc <= 34.9) {
        descricao.innerHTML = 'Obesidade grau I Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. Pequenas mudanças positivas podem fazer uma grande diferença. 🌻👟'
    } else if(imc <= 39.9) {
        descricao.innerHTML = 'Obesidade grau II Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. Pequenas mudanças positivas podem fazer uma grande diferença. 🌻👟'
    } else {
        descricao.innerHTML = 'Obesidade grau III Seu Índice de Massa Corporal indica obesidade, aumentando o risco de problemas de saúde. A saúde não é só sobre números, mas também sobre bem-estar. É importante procurar um profissional de saúde para um plano de ação personalizado. Pequenas mudanças positivas podem fazer uma grande diferença. 🌻👟'
    }
}


// Dados obrigatorios
// A linha da tabela vai ficar destacada de acordo com o resultado
//  o "avatar" vai aparecer na tela de acordo com o sexo e peso do usuário