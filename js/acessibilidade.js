//DECLARA A VARIAVELD E TAMANHO DA FONTE
var tam = 1.0

//MUDA TAMANHO DA FONTE E CRIA O COOKIE COM A INFORMAÇÃO DE TAMANHO
function mudaFonte(tipo,elemento) {
    if (tipo=="mais") {
        if(tam<2.0)tam+=0.1;
        createCookie("fonte",tam,365)
    } else if(tipo=="menos") {
        if(tam>0.5) tam -=0.1
        createCookie("fonte",tam,365)
    } else {
        if(tam>0.95 || tam<1.1) tam = 1.0
        createCookie("fonte", tam,365)
    }

    var list = document.body.querySelectorAll(".txtFontC")
	for (var i = 0; i < list.length; ++i) {
        var item = list[i]
        item.style.fontSize = tam+"rem"
	}
    
}

//CRIA A ULR BASE DO CSS E MUDA O CSS NO HREF
function mudaStyleSheet(sheet) {
    var baseUrl = window.location.origin + '/wp-content/themes/Sigep-base/library/css/'
    var styleUrl = baseUrl + sheet
    document.getElementById("styleContraste").setAttribute('href', styleUrl)
}

//CRIA O COOKIE DA FOLHA DE ESTILO DO CONTRASTE E INSERE O ICONE NO BOTÃO
function mudaContraste() {
    var btnStyle = document.getElementById('mudaEstilo')
    var btnActive = btnStyle.classList.contains('active')

    if (btnActive) {
        btnStyle.className = ''
        btnStyle.innerHTML = '<i class="material-icons icontraste">brightness_6</i>'
        mudaStyleSheet('styles.css')
        createCookie("styleSheet", 'styles.css',365)
    } else {
        btnStyle.className = 'active'
        btnStyle.innerHTML = '<i class="material-icons icontraste">brightness_high</i>'
        mudaStyleSheet('contraste.css')
        createCookie("styleSheet", 'contraste.css',365)
    }

}


//SALVA O COOKIE COM UM PERIODO DETERMINADO DE TEMPO
function createCookie(name,value,days){
    if (days) {
        var date = new Date()
        date.setTime(date.getTime()+(days*24*60*60*1000))
        var expires = "; expires=" + date.toGMTString()
    } else var expires = ""
    document.cookie = name+"="+value+expires+"; path=/"
}

//VERIFICA OS COOKIES EXISTENTES E DESFRAGMENTA 
function readCookie(name) {
    var nameEQ = name + "="
    var ca = document.cookie.split(";")
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==" ") c = c.substring(1,c.length)
        if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length)
    }
    return null
}

//CHECA E APLICA OS COOKIES QUE FOREM SOLICITADOS PELA FUNÇÃO READCOOKIE()
function checkCookie() {

    //ALTERA FONTES DE ACORDO COM O COOKIE
    var fontC = readCookie("fonte");
    var list = document.body.querySelectorAll(".txtFontC")
    if (fontC != "") {
        for (var i = 0; i < list.length; ++i) {
            var item = list[i]
            item.style.fontSize = fontC+"rem"
        }
    }

    //MUDA CONTRASTE DE ACORDO COM O COOKIE
    var contrasteCookie = readCookie('styleSheet')
    if (contrasteCookie != "") {
        var btnStyle = document.getElementById('mudaEstilo')
        var btnActive = btnStyle.classList.contains('active')

        if (contrasteCookie === 'contraste.css') {
            btnStyle.className = 'active'
            btnStyle.innerHTML = '<i class="material-icons icontraste">brightness_high</i>'
            mudaStyleSheet('contraste.css')
        } else if(contrasteCookie === 'styles.css'){
            btnStyle.className = ''
            btnStyle.innerHTML = '<i class="material-icons icontraste">brightness_6</i>'
            mudaStyleSheet('styles.css')
        }else {
            console.log('nada')
        }
    }

}

