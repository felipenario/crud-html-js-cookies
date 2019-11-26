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
        document.getElementById("btnLogout").addEventListener("click", fazerLogout);
    } else {
        alert("Você não fez login! Retornando a página de login!")
        window.location.href = "index.html";
    }
}


function fazerLogout(){
    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    apagarCookie(nomeUsuario);
    localStorage.removeItem("nomeDeUsuario");
    alert("Logout feito com sucesso! Retornando a tela de login!")
    window.location.href = "index.html";
  

}


function apagarCookie(nome) {
  let data = new Date("01/01/1970");
  document.cookie = nome = "=" + ";expires=" + data.toUTCString();
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

    window.location.href = "verUsuariosID.html"
    
}

function editarUsuarios(event) {

    window.location.href = "editarUsuarios.html"
    
}

function deletarUsuarios(event) {

    window.location.href = "excluirUsuarios.html"
    
}