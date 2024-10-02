function processarFormularioEvent() {
    event.preventDefault();
    let reais = document.querySelector("#reais")
    let c_dolar = document.querySelector("#dolar")
  
    let dolar = Number(reais.value) / Number(c_dolar.value)
    let res = document.querySelector(".res")
    res.innerHTML = `<p>Com um valor em Reais (R$) de ${reais.value}
    convertendo este valor para Dólares(U$) você terá</p></br>`
    res.innerHTML += `<h3>${dolar.toFixed(2)} U$</h3>`
  
}