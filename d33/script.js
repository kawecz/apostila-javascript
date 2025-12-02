const formulario = document.querySelector("form");
const res = document.querySelector(".res");
res.innerHTML = "";

// Adicionando imagem
const main_h1 = document.querySelector(".main_h1");
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3742/3742410.png"
);
main_h1.insertAdjacentElement("afterend", img);

// FUNÇÃO PARA REMOVER FORMATAÇÃO (CRUCIAL!)
function removerFormatacao(valorFormatado) {
  // Remove tudo que não é dígito (pontos, vírgulas, R$, etc)
  return valorFormatado.replace(/\D/g, '');
}

//Adicionando evento ao formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const input_valor_casa = document.querySelector("#valor_casa").value;
  const salario = document.querySelector("#salario").value;
  const qnt_anos = document.querySelector("#quantidade_anos").value;
  
  // REMOVE A FORMATAÇÃO ANTES DE CONVERTER
  const valorCasaNum = Number(removerFormatacao(input_valor_casa));
  const salarioNum = Number(removerFormatacao(salario));
  const anosNum = Number(qnt_anos);

  // Validação básica
  if (valorCasaNum <= 0 || salarioNum <= 0 || anosNum <= 0) {
    res.innerHTML = "Por favor, preencha todos os campos com valores válidos!";
    res.style.color = "orange";
    return;
  }

  const prestacao = valorCasaNum / (anosNum * 12);
  const porcentagem_sal = salarioNum * 0.3;

  if (prestacao > porcentagem_sal) {
    res.innerHTML = `Emprestimo Negado!`;
    res.style.color = "red";
    res.innerHTML += `<br>Prestação Mensal: R$ ${prestacao.toFixed(2)}`;
    res.innerHTML += `<br>30% do Salário: R$ ${porcentagem_sal.toFixed(2)}`;
  } else {
    res.innerHTML = `Emprestimo Aprovado!`;
    res.style.color = "green";
    res.innerHTML += `<br>Prestação Mensal: R$ ${prestacao.toFixed(2)}`;
    res.innerHTML += `<br>30% do Salário: R$ ${porcentagem_sal.toFixed(2)}`;
  }

  formulario.reset();
});

// Função para formatar número com separadores de milhar
function formatarNumero(input) {
  // Remove tudo que não é dígito
  let valor = input.value.replace(/\D/g, '');
  
  // Formata com separador de milhar
  if (valor) {
    // Pega a posição do cursor antes de formatar
    const cursorPos = input.selectionStart;
    
    // Formata o número
    const valorFormatado = Number(valor).toLocaleString('pt-BR');
    input.value = valorFormatado;
    
    // Tenta manter a posição do cursor (aproximadamente)
    const diff = valorFormatado.length - input.value.length;
    input.setSelectionRange(cursorPos + diff, cursorPos + diff);
  }
}

// Adiciona os eventos aos inputs
const valorCasaInput = document.querySelector("#valor_casa");
const salarioInput = document.querySelector("#salario");

if (valorCasaInput && salarioInput) {
  valorCasaInput.addEventListener('input', () => formatarNumero(valorCasaInput));
  salarioInput.addEventListener('input', () => formatarNumero(salarioInput));
}