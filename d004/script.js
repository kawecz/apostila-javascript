function somar(){
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    let res = document.getElementById('res')
    let somando = Number(n1.value) + Number(n2.value)
    if(n1.value.length == 0 || n2.value.length == 0) {
        alert('Preencha os dados!')
    } else {
        res.style.marginTop = '3em'
        res.innerHTML = `<h3>A soma entre ${n1.value} e ${n2.value} é de ${somando}</h3>`
    }
}