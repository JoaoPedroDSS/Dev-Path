function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value>ano){
    window.alert('Verifique os dados e tente !')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero= 'Homem'
        if (idade>=0 && idade<12){
            //criança
            img.setAttribute('src', 'magens/Menino.jpg')
        } else if (idade>=12 && idade<21){
            //jovem
            img.setAttribute('src', 'magens/rapaz.jpg')
        } else if (idade<50){
            //adulto
            img.setAttribute('src', 'magens/Homem.jpg')
        } else if (idade =>50){
            //idoso
            img.setAttribute('src', 'magens/idoso.jpg')
        }
    } else if(fsex[1].checked){
        genero='Mulher'
        if (idade>=0 && idade<12){
            //criança
            img.setAttribute('src', 'magens/Menina.jpg')
        } else if (idade>=12 && idade<21){
            //jovem
            img.setAttribute('src', 'magens/moça.jpg')
        } else if (idade<50){
            //adulto
            img.setAttribute('src', 'magens/Mulher.jpg')
        } else if (idade =>50){
            //idoso
            img.setAttribute('src', 'magens/idosa.jpg')
        }
    }
    res.style.textAlign='center'
    res.innerHTML= `Detectamos ${genero} de ${idade} anos`
    res.appendChild(img)
   }
}