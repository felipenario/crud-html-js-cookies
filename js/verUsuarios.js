
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


function addRow(tableID, usuarioInserido) {
  // Get a reference to the table
  let tableRef = document.getElementById("tabelaUsers");

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode(usuarioInserido);
  newCell.appendChild(newText);
}




function pegarUsuarios(event){
   
    event.preventDefault();

    let nomeUsuario = localStorage.getItem("nomeDeUsuario");
    let tokenAut = getCookie(nomeUsuario);
    var request = new XMLHttpRequest();
    console.log(tokenAut)

    request.open(  'GET','http://138.197.78.0/users', true)

    request.setRequestHeader("Authorization", tokenAut);
  
  
    request.onload = function() {
    var data = JSON.parse(this.response)
  
    if (request.status == 200) {
      data.forEach(usuarios => {
        console.log(usuarios)
        addRow('my-table', usuarios.username);
      })
    } else {
      console.log('error')
    }

  }
 
  request.send()

}