
function calcular(event) {
    event.preventDefault()

    const cigarros_porDia = document.querySelector("#qcigarros").value
    const anos_fumados = document.querySelector("#anosf").value
    const dias_perdidos = (Number(cigarros_porDia) * Number(anos_fumados) * 365 * 10) / 1440
    const resposta = document.querySelector(".resposta")

    resposta.innerHTML = ''
    resposta.innerHTML += `<p>Você fuma <strong>${cigarros_porDia} cigarros</strong> por dia</p>`
    resposta.innerHTML += `<p>E você já fumou por <strong>${anos_fumados} anos </strong> </p>`
    resposta.innerHTML += `<p>Você tem <strong>${dias_perdidos.toFixed(2)} dias perdidos</strong></p>`
}