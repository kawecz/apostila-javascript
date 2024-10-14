
function calcular(event) {
    event.preventDefault()
    const salario = document.querySelector("#sal").value
    const aumento = (salario * 15) / 100
    const novo_salario = Number(salario) + Number(aumento)
    const resposta = document.querySelector(".res")

    resposta.innerHTML = ''
    resposta.innerHTML += `<h1>Com um salário de R$${salario} e com um aumento salarial de 15%(R$${aumento}), seu novo salário será de R$${novo_salario.toFixed(2)}</h1>`
}
