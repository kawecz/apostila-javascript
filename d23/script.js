function desconto(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const sexo = document.querySelector('input[name="sex"]:checked').value;
    const resposta = document.querySelector(".res");
    const produto = Number(document.querySelector("#produto").value);



    if (sexo === "Masculino") {
        desconto = produto * 0.05;
    } else if (sexo === "Feminino") {
        desconto = produto * 0.13;
    }

    const novo_valor = produto - desconto;

    resposta.innerHTML = `
        <p>Bem-vindo(a) ao nosso site, <strong>${nome}!</strong></p>
        <p>Aplicando um desconto de <strong>${sexo === "Masculino" ? "5%" : "13%"}</strong> no seu produto <strong>(R$ ${produto.toFixed(2)})</strong></p>
        <p>O novo valor será de: <strong>R$ ${novo_valor.toFixed(2)}</strong></p>
    `;
}