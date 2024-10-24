function calcular(event){
    event.preventDefault()

    const nome = document.querySelector("#nome").value
    const n1 = document.querySelector("#n1").value
    const n2 = document.querySelector("#n2").value
    const media = (Number(n1) + Number(n2)) / 2
    const resp = document.querySelector(".res")
    
   
    resp.innerHTML = ''
    resp.innerHTML += `<p>Nome do Aluno: <strong>${nome}</strong></p>`
    resp.innerHTML += `<p>Primeira Nota: <strong>${n1}</strong></p>`
    resp.innerHTML += `<p>Segunda Nota: <strong>${n2}</strong></p>`
    resp.innerHTML += `<p>Média do Aluno: <strong>${media.toFixed(2)}</strong></p>`
    
    if(media < 5) {
        resp.style.color = "red"
        resp.innerHTML += `<p><strong>Aluno de Recuperação</strong></p>`   
    } else {
        resp.style.color = "green"
        resp.innerHTML += `<p><strong>Aluno Aprovado!</strong></p>`
    }
}