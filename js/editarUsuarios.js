
window.addEventListener("load", carregar);



function carregar() {
    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    console.log(nomeUsuario);
    if (getCookie(nomeUsuario) != null && nomeUsuario != null) {
        document.getElementById("btnUsuarios").addEventListener("click", pegarUsuarios);
        document.getElementById("btnSalvarUser").addEventListener("click", editarUsuario);

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


function editarUsuario(event){

  event.preventDefault();

  let nomeUsuario = localStorage.getItem("nomeDeUsuario");
  let tokenAut = getCookie(nomeUsuario);
  let editarUsuario = document.forms["editarUsuarios"];
  let idUsuario = document.getElementById("usernameID").value;
  let cpf = editarUsuario.cpf.value;
  let email = editarUsuario.email.value;
  let nome = editarUsuario.nome.value;
  let username = editarUsuario.username.value;



  let user = {
      "cpf": cpf,
      "email": email,
      "fullname": nome,
      "username": username
  };

  fetch('http://138.197.78.0/users/' + idUsuario, {
          method: 'PUT',
          body: JSON.stringify(user),
          headers: {
              "Authorization": tokenAut,
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      .then(
          
          resultado => {
              if(resultado.status == 200){
                  alert("Usuario editado com sucesso!");
              }else if(resultado.status == 403){
                  alert("Não autorizado!");
              }else if(resultado.status == 404){
                alert("Usuário não encontrado!")
              }else{
                console.log(resultado.status)
              }
          }

      )
      .catch(error => {
          console.log(error);
      })


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
      document.getElementById("cpf").disabled = false;
      document.getElementById("email").disabled = false;
      document.getElementById("nome").disabled = false;
      document.getElementById("btnSalvarUser").disabled = false;

      document.getElementById("cpf").value = data.cpf;
      document.getElementById("email").value = data.email;
      document.getElementById("nome").value = data.fullname;
      document.getElementById("username").value = data.username;
    
  } else if(request.status == 403){
    alert("Não autorizado! Por favor envie seu token de acesso")
  }else if(request.status == 404){
    alert("Usuário não encontrado!")
  }

}

request.send()

}