function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById("passo");
    var res = document.getElementById("res")
    var ini = String(inicio)
    var fi = String(fim)
    var pass = String(passo)

    if (ini.length == 0 ){
        window.alert(ini)
    } else{
        res.innerHTML = inicio
    }
}