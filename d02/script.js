let nome = document.getElementById('name')
let res = document.getElementById('res')

function verificarnome() {
    res.innerHTML = ""
    if (nome.value.length == 0){
        alert("Escreva o seu nome!")
    } else {
        res.innerHTML = `<h2>Olá <strong>${nome.value} é um prazer te conhecer!</strong></h2>`
    }
    
}