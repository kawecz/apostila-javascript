function calcular() {
    event.preventDefault()
    let altura = document.querySelector("#altura")
    let largura = document.querySelector("#largura")
    let res = document.querySelector(".res")
    let litros = (Number(altura.value) * Number(largura.value)) / 2
    
    res.style.color = "white"
    res.style.marginTop = "2em"

    res.innerHTML = `Com uma altura de ${altura.value}m e uma largura de ${largura.value}m </br>você precisará de ${litros.toFixed(2)}L para pintar a parede`
  
}