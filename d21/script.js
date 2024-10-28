function calcular(event) {
    event.preventDefault()

    const ano = document.querySelector("#ano").value
    const resposta = document.querySelector(".res")

    if(ano % 4 == 0 ) {
        resposta.innerHTML = `<p>O ano é <strong>BISSEXTO</strong></p>`
        resposta.style.color = "green"
    } else {
        resposta.innerHTML = `<p>O ano não é <strong>BISSEXTO</strong></p>`
        resposta.style.color = "red"
    }
}