var msg = document.querySelector('div#msg')
var img = document.getElementById('imagem')
var divimg = document.querySelector('div#foto')
var data = new Date()
var ano = data.getFullYear()
var sexo = document.querySelectorAll('[name=sexo]')
var artigo
var anoInput = document.querySelector('input#ano')
function msgOffAno() {
  if (anoInput.value.length > 0) {
    document.querySelector('div#msgErroAno').style.display = "none"
  }}

function verificar () {
  var idade = ano - Number(anoInput.value)
  if (sexo[0].checked && anoInput.value.length > 0) {
    var sexoMF = 'homem'
    verifique();
  } else if (sexo[1].checked && anoInput.value.length > 0) {
    var sexoMF = 'mulher'
    verifique();
  } else {
    msgErro.innerHTML = '<p style="color:red;font-size:10pt;">*Sexo obrigatório.*</p>'
    msgErroAno.innerHTML = '<p style="color:red;font-size:10pt;">*Ano de nascimento obrigatório.*</p>'
    msgErroAno.style.display = "block"
    img.style.display = "none"
  }
  function verifique() {
    if (sexo[0].checked) {
    artigo = 'um'
  } else if (sexo[1].checked) {
    artigo = 'uma'
  } 
  if (idade < 2) {
    var sinOrPl = 'ano'
  } else {
    var sinOrPl = 'anos'
  }
  if (Number(anoInput.value) == ano) {
    msg.innerHTML = 'Você ainda não completou ano!'
  } else if (idade > 120) {
    msg.innerHTML = `Você ainda está vivo? Se sim, você é ${artigo} ${sexoMF} com ${idade} ${sinOrPl}.`
  } else {
    msg.innerHTML = `Você é ${artigo} ${sexoMF} com ${idade} ${sinOrPl}.`
  }
  }
  if (idade == 0) {
    if (sexo[0].checked) {
      img.src = 'img/Bebê Menino.png'
      divimg.style.display = "flex"
    } else if (sexo[1].checked) {
      img.src = "img/Bebê Menina.png"
      divimg.style.display = "flex"
    }
  } else if (idade >= 1 && idade <= 5) {
    if (sexo[0].checked) {
      img.src = "img/Menininho.png"
      divimg.style.display = "flex"
    } else if (sexo[1].checked) {
      img.src = "img/Menininha.png"
      divimg.style.display = "flex"
    }
  } else if (idade >= 6 && idade <= 12) {
    if (sexo[0].checked) {
      img.src = "img/Menino.png"
      divimg.style.display = "flex"
    } else if (sexo[1].checked) {
      img.src = "img/Menina.png"
      divimg.style.display = "flex"
    }
  } else if (idade >= 13 && idade <= 17) {
    if (sexo[0].checked) {
      img.src = "img/Adolescente Menino.png"
      divimg.style.display = "flex"
    } else if (sexo[1].checked) {
      img.src = "img/Adolescente Menina.png"
      divimg.style.display = "flex"
    }
  } else if (idade >= 18 && idade <= 39) {
    if (sexo[0].checked) {
      img.src = "img/Jovem Homem.png"
      divimg.style.display = "flex"
    } else if (sexo[1].checked) {
      img.src = "img/Jovem Mulher.png"
      divimg.style.display = "flex"
    }
  } else if (idade >= 40 && idade <= 59) {
    if (sexo[0].checked) {
      img.src = "img/Senhor.png"
      divimg.style.display = "flex"
    } else if (sexo[1].checked) {
      img.src = "img/Senhora.png"
      divimg.style.display = "flex"
    }
  } else if (idade >= 60 && idade <= 120) {
    if (sexo[0].checked) {
      img.src = "img/Idoso.png"
      divimg.style.display = "flex"
    } else if (sexo[1].checked) {
      img.src = "img/Idosa.png"
      divimg.style.display = "flex"
    }
  } else {
    img.src = "img/Caveira.png"
      divimg.style.display = "flex"
  }
}


function msgOff() {
  if (sexo[0].checked) {
    document.querySelector('div#msgErro').style.display = "none"
  } else if (sexo[1].checked) {
    document.querySelector('div#msgErro').style.display = "none"
  }}
