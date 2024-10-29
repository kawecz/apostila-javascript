function calcular(event) {
    event.preventDefault()

    const data_atual = new Date()
    const ano_atual = data_atual.getFullYear()
    
    const ano = document.querySelector("#ano").value
    const resposta = document.querySelector(".res")
    const idade = Number(ano_atual) - Number(ano) 
    const alistamento = Number(idade) - 18

    if(idade < 18 ) {
        resposta.innerHTML = `<p>Você não precisa fazer o <strong>Alistamento.</strong></p>`
        resposta.innerHTML += `<p>Restam ${Math.abs(alistamento)} anos para o seu <strong>Alistamento Militar.</storng></p> `
    } else {
        resposta.innerHTML =`<p>Você tem idade para fazer o seu <strong>Alistamento Militar</strong></p>`
        resposta.innerHTML +=`<p>Já se passaram <strong>${alistamento} anos</strong> desde o seu <strong>Alistamento Militar</strong></p>`
    } if (alistamento == 0) {
        resposta.innerHTML =`<p>Você tem idade para fazer o seu <strong>Alistamento Militar</strong></p>`
    }
}