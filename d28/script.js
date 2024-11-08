function calcular(event){
    event.preventDefault()
    const altura = Number(document.querySelector("#altura").value)
    const largura = Number(document.querySelector("#largura").value)
    const terreno = largura * altura
    const resposta = document.querySelector(".res")
    
    switch (true) {
        case (terreno < 100):
            resposta.innerHTML = `<p>TERRENO POPULAR</p>` 
        break
        case (terreno >= 100 && terreno <= 500):
            resposta.innerHTML = `<p>TERRENO MASTER</p>`
        break
        case (terreno > 500):
            resposta.innerHTML = `TERRENO VIP`
        break
    }
}