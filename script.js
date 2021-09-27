function calcularDolar() {
    let real = document.getElementById("input-real").value //variável guarda valor do real digitado
    let dolar = document.getElementById("input-dolar").value // varialvel guarda valor do dolar digitado

    let resultado = real / dolar // variavel guarda o valor do resultado

    dolares.innerHTML = 'Você possui hoje $ ' + resultado.toFixed(2) + ' dólares! ' // insere o valor do resultado no nosso paragrafo

   // alert('O resultado é $'+ resultado + ' dólares')  mostra na tela o resultado
}