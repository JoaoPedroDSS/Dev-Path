function contar() {
        var inicio = document.getElementById('inicio')
        var ini = Number(inicio.value)
        var fim = document.getElementById('fim')
        var fi = Number(fim.value)
        var passo = document.getElementById('passo')
        var pass = Number(passo.value)
        var res = document.getElementById('res')
        while(ini<=fim) {
            ini+pass
            res.innerHTML= `${ini}`
     }
}   