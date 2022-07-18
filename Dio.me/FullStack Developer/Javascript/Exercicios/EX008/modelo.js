function analisa() {
    var numero = window.document.getElementById("aqui")
    var num = Number(numero.value)
    var analisador = window.document.getElementById("Analisador")
    var item = window.document.createElement('option')
    item.text = `${num} e unas cossitas`
    analisador.appendChild(item)
    var listinha = [item]
    
}