function desconto(event) {
    event.preventDefault()

    const nome = document.querySelector("#nome").value
    const sexo = document.querySelector("#sexo").value
    const resposta = document.querySelector(".res")
    const produto = document.querySelector("#produto").value

    if(sexo === "Masculino"){
        const desconto = Number(produto) * 5 / 100
        const novo_valor = Number(produto) - Number(desconto)
       resposta.innerHTML = `<p>Bem vindo ao nosso site ${nome}</p>`
       resposta.innerHTML = `<p>Aplicando um desconto de (5%) no seu produto</p>`
    }
}