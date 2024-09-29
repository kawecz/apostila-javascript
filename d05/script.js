function calcular (){
    let nota1 = document.querySelector("#nota1")
    let nota2 = document.querySelector("#nota2")
    let res = document.querySelector(".res")
    let reprovado_aprovado = document.querySelector(".media")
    let  medias = (Number(nota1.value) + Number(nota2.value)) / 2
    res.style.color = "white"
    if(nota1.value.length == 0 || nota2.value.length == 0) {
        alert("Preencha os dados corretamente")
    } else {
        
        res.innerHTML = " "
        res.innerHTML += `A média do aluno com nota de ${nota1.value} e ${nota2.value} é de <strong>${medias.toFixed(1)}</strong></br>`
    } if (nota1.value <= 5) {
        reprovado_aprovado.style.color = "red"
        reprovado_aprovado.innerHTML = `Aluno reprovado`
    } else {
        reprovado_aprovado.style.color = "green"
        reprovado_aprovado.innerHTML = "Aluno na média"
    }
}