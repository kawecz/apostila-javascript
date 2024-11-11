function calc(event) {
    event.preventDefault()

    const nome = document.querySelector("#nome").value
    const sal = Number(document.querySelector("#sal").value)
    const anos = Number(document.querySelector("#anos").value)
    const res = document.querySelector(".res")
    let porcentagem = 0

    switch(true) {
        case  (anos <= 3):
           porcentagem = 3
            break
        case (anos > 3 && anos <=10):
            porcentagem = 12.5
            break
        case (anos > 10):
            porcentagem = 20
            break
        default:
            porcentagem = 0
        break
    }

    const aumento = (sal * porcentagem) / 100
    const novo_sal = sal + aumento

    res.innerHTML = `<p>Nome do Funcionário: ${nome}</p>`
    res.innerHTML += `<p>Anos de serviço: ${anos} anos</p>`
    res.innerHTML += `<p>Porcentagem de aumento: ${porcentagem}%</p>`
    res.innerHTML += `<p>Aumento de: R$${aumento.toFixed(2)}</p>`
    res.innerHTML += `<p>Novo Salário: R$${novo_sal.toFixed(2)}</p>`

}