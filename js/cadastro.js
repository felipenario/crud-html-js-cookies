
cadastroUser.addEventListener("submit", cadastrarUsuario);


function cadastrarUsuario(event) {
    event.preventDefault();

    let cadastroUser = document.forms["cadastroUser"];
    let cpf = cadastroUser.cpf.value;
    let email = cadastroUser.email.value;
    let nome = cadastroUser.nome.value;
    let password = cadastroUser.password.value;
    let username = cadastroUser.username.value;


    let user = {
        "cpf": cpf,
        "email": email,
        "fullname": nome,
        "password": password,
        "username": username
    };

    fetch('http://138.197.78.0/sign-up', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(
            
            resultado => {
                if(resultado.status == 200){
                    alert("Usuario criado com sucesso!");
                    window.location.href = "index.html";
                }else if(resultado.status == 400){
                    alert("Username já existente!");
                }
            }

            //resultado => {
            //console.log("header", resultado.headers)
            //console.log("resultado", resultado)
            //return resultado.json()
        //}
        )
        .catch(error => {
            console.log(error);
        })
}