function calc(event) {
    event.preventDefault()

    const km = Number(document.querySelector("#km").value)
    const res = document.querySelector(".res")
    if(km <= 200 ) {
        const valor = km * 0.50
        res.innerHTML = `<p>Você pretende percorrer ${km}Km</p>`
        res.innerHTML += `<p>Você pagará <strong>R$0.50</strong> por por Km</>`
        res.innerHTML += `<p>Ao total você terá que pagar R$${valor.toFixed(2)}`
    } else {
        const valor = km * 0.45
        res.innerHTML = `<p>Você pretende percorrer ${km}km</p>`
        res.innerHTML += `<p>Você pagará <strong>R$0.50</strong> por por Km</>`
        res.innerHTML += `<p>Ao total você terá que pagar R$${valor.toFixed(2)}`
    }
}