function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var h = new Date()
    var hora = h.getHours()
    var m = new Date()
    var minuto = m.getMinutes()


    if (minuto < 10) {
        msg.innerHTML = `Agora são ${hora}:0${minuto}<br>`
    } else {
        msg.innerHTML = `Agora são ${hora}:${minuto}<br>`
    }
    
    
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/images/manhã.png'
        msg.innerHTML += '<strong>Bom dia!</strong>'
        document.body.style.background = '#74c8ff'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'assets/images/tarde.png'
        msg.innerHTML += '<strong>Bom tarde!</strong>'
        document.body.style.background = '#e4772f'
    } else {
        img.src = 'assets/images/noite.png'
        msg.innerHTML += '<strong>Boa noite!</strong>'
        document.body.style.background = '#2a1c5c'
    }
}