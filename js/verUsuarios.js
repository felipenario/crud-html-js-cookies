
window.addEventListener("load", carregar);



function carregar() {
    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    console.log(nomeUsuario);
    if (getCookie(nomeUsuario) != null && nomeUsuario != null) {
        document.getElementById("pegarUsuarios").addEventListener("click", pegarUsuarios);

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

    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    let tokenAut = getCookie(nomeUsuario);

    fetch('http://138.197.78.0/users', {
    method: 'GET',
    contentType: 'application/json',
    headers: {
        "Authorization": tokenAut
            }
    })
    .then(
    
    resultado => {
        if(resultado.status == 200){
           console.log(resultado.headers);
        }else if(resultado.status == 403){
            alert("Erro!");
        }
    }

)
.catch(error => {
    console.log(error);
})

}