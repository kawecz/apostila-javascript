function nomesal() {
    let nome = document.getElementById('nome')
    let sal = document.getElementById('sal')
    let res = document.getElementById('res')
    if(nome.value.length == 0 || sal.value.length == 0) {
        alert("Preencha os dados!")
    } else {
        res.style.color = 'white'
        res.innerHTML = `<h2><strong>Nome do funcionário:</strong> ${nome.value}</h2></br>`
        res.innerHTML += `<h2><strong>Salário:</strong> R$${sal.value}</h2></br>`
        res.innerHTML += `<h2><strong>O funcionário</strong> ${nome.value} tem um <strong>salário de R$</strong>${sal.value}</h2>`
    }
   
}