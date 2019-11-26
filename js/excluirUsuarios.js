
window.addEventListener("load", carregar);



function carregar() {
    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    console.log(nomeUsuario);
    if (getCookie(nomeUsuario) != null && nomeUsuario != null) {
        document.getElementById("btnUsuarios").addEventListener("click", excluirUsuario);

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



function excluirUsuario(event){
   
    event.preventDefault();

    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    let tokenAut = getCookie(nomeUsuario);
    let idUsuario = document.getElementById("usernameID").value;
    var request = new XMLHttpRequest();
    console.log(tokenAut)

    request.open(  'DELETE','http://138.197.78.0/users/' + idUsuario, true)

    request.setRequestHeader("Authorization", tokenAut);
  
  
    request.onload = function() {
    var data = this.response;
  
    if (request.status == 200) {
        alert("Usuário exluído com sucesso!")
    } else if(request.status == 403) {
      alert("Não autorizado! Envie o token novamente!")
    }else if(request.status == 404){

      alert("Usuário não encontrado! Verifique o ID digitado!")

    }

  }
 
  request.send()

}