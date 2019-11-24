var checagemPagina = false;
var nomeUsuario = "";

window.addEventListener("load", checar);

function checar(){

    console.log(tokenAcesso);

}


if(userLogin != undefined){

    checagemPagina = true;

}else{
    checagemPagina = false;
}

    if(checagemPagina == true){
    userLogin.addEventListener("submit", fazerLogin);
}

function fazerLogin(event) {
    event.preventDefault();

    let formulario = document.forms["userLogin"];
    let password = formulario.password.value;
    let username = formulario.username.value;
    nomeUsuario = username;

    let login = {
        "password": password,
        "username": username
    };

    fetch('http://138.197.78.0/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(

            resultado => {
                
                if(resultado.status == 200){

                    alert("Login realizado com sucesso! Você será redirecionado para a página de controle.")
                    
                    console.log("header", resultado.headers)
                    console.log("resultado", resultado)
                    console.log("Token", resultado.headers.get("Authorization"))
                    let tokenAcesso = resultado.headers.get("Authorization");  
                    setCookie(username, tokenAcesso, 30);
                    window.location.href = "controle.html";
                    
                }else{
                    alert("Erro ao realizar login!")
                }
            },

            

            /*resultado => {
            console.log("header", resultado.headers)
            console.log("resultado", resultado)
            console.log("Token", resultado.headers.get("Authorization"))

            return resultado.json()
            
        }
        */

        )
        .catch(error => {
            console.log(error);
        })


function setCookie(cname,cvalue,exdays) {
     var d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
     var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 
} 

}
