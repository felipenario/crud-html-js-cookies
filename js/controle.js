window.addEventListener("load", carregar);



function carregar() {
    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    console.log(nomeUsuario);
    if (getCookie(nomeUsuario) != null && nomeUsuario != null) {
        console.log(nomeUsuario)
        document.getElementById("btnverUsuarios").addEventListener("click", verUsuarios);
        document.getElementById("btnbuscarUsuario").addEventListener("click", buscarUsuarios);
        document.getElementById("btneditarUsuarios").addEventListener("click", editarUsuarios);
        document.getElementById("btndeletarUsuarios").addEventListener("click", deletarUsuarios);

    } else {
        alert("Você não fez login! Retornando a página de login!")
        window.location.href = "index.html";
    }
}


function getCookie(nomeCookie) {
    var name = nomeCookie + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function verUsuarios(event) {

    window.location.href = "verUsuarios.html"
    
}

function buscarUsuarios(event) {

    window.location.href = "verUsuarios.html"
    
}

function editarUsuarios(event) {

    window.location.href = "verUsuarios.html"
    
}

function deletarUsuarios(event) {

    window.location.href = "verUsuarios.html"
    
}