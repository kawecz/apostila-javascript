function calcular() {
    event.preventDefault()

    const preco = document.querySelector("#preco").value
    const desconto =  preco * 5 / 100
    const novo_preco = preco - desconto
    
    const resultado = document.querySelector(".resultado")

    resultado.style.marginTop = "1em"
    resultado.style.color = "white"
    resultado.innerHTML = ''
    resultado.innerHTML += `<h3>Preço do Produto: ${preco}R$</h3>`
    resultado.innerHTML += `<h3>Porcentagem do Desconto: 5% </h3>`
    resultado.innerHTML += `<h3>Valor descontado: ${desconto}R$</h3>`
    resultado.innerHTML += `<h3>Novo preço: ${novo_preco.toLocaleString(2)}R$</h3>`
}