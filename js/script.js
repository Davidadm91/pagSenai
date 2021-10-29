function menu() {
  document.getElementById('myDropdown').classList.toggle('show')
}
window.onclick = function () {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById('myDropdown')
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show')
    }
  }
}

function formulario() {
  let n = document.forms['form']['nome'].value
  let e = document.forms['form']['email'].value
  let p = document.forms['form']['password'].value

  if (n == '') {
    alert('preencha o campo nome')
    return false
  }
  if (e == '') {
    alert('preencha o campo e-mail')
    return false
  }
  if (p == '') {
    alert('preencha o campo senha')
    return false
  }
}
