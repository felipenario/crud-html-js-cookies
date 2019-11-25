
window.addEventListener("load", carregar);



function carregar() {
    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    console.log(nomeUsuario);
    if (getCookie(nomeUsuario) != null && nomeUsuario != null) {
        document.getElementById("btnUsuarios").addEventListener("click", pegarUsuarios);

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


function pegarUsuarios(event){
   
    event.preventDefault();

    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    let tokenAut = getCookie(nomeUsuario);
    let idUsuario = document.getElementById("usernameID").value;
    var request = new XMLHttpRequest();
    console.log(tokenAut)

    request.open('GET','http://138.197.78.0/users/' + idUsuario, true)

    request.setRequestHeader("Authorization", tokenAut);
  
  
    request.onload = function() {
    var data = JSON.parse(this.response)
  
    if (request.status == 200) {
    
        console.log(data);
        document.getElementById("linhaUsuario").innerHTML = data.username;
      
    } else {
      console.log('error')
      console.log(request.status)
    }

  }
 
  request.send()

}