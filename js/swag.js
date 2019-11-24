var tokenAcesso = "";

userLogin.addEventListener("submit", fazerLogin);


function fazerLogin(event) {
    event.preventDefault();

    let formulario = document.forms["userLogin"];
    let password = formulario.password.value;
    let username = formulario.username.value;


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
                    tokenAcesso = resultado.headers.get("Authorization");
                    window.location.href = "controle.html";
                }else{
                    alert("Erro ao realizar login!")
                }

            }

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
}
