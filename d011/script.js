function calcular() {
    event.preventDefault()

    const a = document.querySelector("#a").value
    const b = document.querySelector("#b").value
    const c = document.querySelector("#c").value
    const delta = b**2 - 4 * a * c
    const resultado = document.querySelector(".resultado")

    resultado.style.marginTop = "1em"
    resultado.style.color = "white"
    resultado.innerHTML = ''
    resultado.innerHTML += `<h1>Valor de Δ: ${delta}</h1>`
}