function calcular(event) {
    event.preventDefault();  // Evita o envio do formulário e o recarregamento da página
    
    const hidden = document.querySelector("#hidden");  // Seleciona a div de resultado
    hidden.classList.add("is-active");  // Adiciona a classe que faz o elemento aparecer

    const res = document.querySelector(".res")
    const km = document.querySelector("#km").value
    const dias = document.querySelector("#dias").value
    const calculo_dias = Number(dias) * 90
    const calculo_km = Number(km) * 0.20
    const valor_pagar = Number(calculo_dias) + Number(calculo_km)    
    res.innerHTML = `Você alugou o carro por: ${dias}</br>`
    res.innerHTML = `Você percorreu: ${km}Km</br>`
    res.innerHTML = `Valor total a ser pago: R$${valor_pagar.toFixed(2)}`
}

document.querySelector("#resetButton").addEventListener("click", function() {
    // Limpa os campos de input
    document.querySelector("#km").value = "";
    document.querySelector("#dias").value = "";
    
    // Esconde a div de resultado
    const hidden = document.querySelector("#hidden");
    hidden.classList.remove("is-active");
});