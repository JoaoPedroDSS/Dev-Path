function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora <12){
        img.src ='magens/Manhã.jpg'
        document.body.style.backgroundColor = '#85C8F2'
    } else if (hora>=12 && hora<18){
        img.src = 'magens/Tarde.jpg'
        document.body.style.backgroundColor='#F28444'
    } else {
        img.src = 'magens/Noite.jpg'
        document.body.style.backgroundColor ='#736A72'
    }
}