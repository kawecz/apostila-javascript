function calcular(event) {
    event.preventDefault()
    const data_atual = new Date();
    const ano_atual = data_atual.getFullYear()

    const ano = document.querySelector("#nasci").value
    const idade = Number(ano_atual) - Number(ano) 
    const res = document.querySelector(".res")

    res.innerHTML = ''
    if (idade < 18) {
        res.innerHTML += `Você nasceu no ano de <strong>${ano}</strong></br>`
        res.innerHTML += `Sua idade é de <strong>${idade} anos </strong></br>`
        res.innerHTML += `<p>Você não tem idade para votar!</p></br>`
    } else {
        res.innerHTML += `Você nasceu no ano de <strong> ${ano}</strong></br>`
        res.innerHTML += `Sua idade é de <strong>${idade} anos</strong></br>`
        res.innerHTML += `<h5>Você tem idade para votar!<h5></br>`
    }
   
}