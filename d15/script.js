function calcular(event) {
    event.preventDefault()
    const dias = document.querySelector("#dias").value
    const salario = (Number(dias) * 8) * 25
    const res = document.querySelector(".res")

    res.innerHTML = `<h1>Trabalhando 8 horas por dia</h1>`
    res.innerHTML +=`<h1>Recebendo R$25 por hora trabalha</h1>`
    res.innerHTML += `<h1>Por 30 Dias</h1>`
    res.innerHTML += `<h1>Seu Salário Será de: R$${salario.toFixed(2)}</h1>`
}