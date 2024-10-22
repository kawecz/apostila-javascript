function calcular(event) {
    event.preventDefault()

    const kmh = document.querySelector("#velocidade").value
    const resposta = document.querySelector(".res")
    const valor_multa = (Number(kmh) - 80) * 5 
        if (kmh > 80) {
        resposta.style.color = 'red'
        resposta.innerHTML = `<p>Você foi multado! valor da multa: R$${valor_multa}</p>`
    } else {
        resposta.style.color = 'green'
        resposta.innerHTML = `<p>Você não foi multado.</p>`
    }
}