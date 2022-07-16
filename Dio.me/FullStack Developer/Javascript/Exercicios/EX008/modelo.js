function analisa(){
    var numero = window.document.getElementById("aqui")
    var num = Number(numero.value)
    var analisador = window.document.getElementById("analisador")

    var item = window.document.createElement('option')
    item.text = `${num}`
    analisador.appendChild(item)
    
}