// código que auxilia na checagem de senha
// se clicar no botão show ele muda pra hide e mostra a senha
// e vice versa

let password = document.getElementsByName('password');

function showPass(elemento) {
    if (elemento.innerHTML == "show"){
        password[0].type = "text";
        password[1].type = "text";
        elemento.innerHTML = "hide";
    }else {
        password[0].type = "password";
        password[1].type = "password";
        elemento.innerHTML = "show";
    }
}

function mudarTela(principalButton) {
    let atributosRegistro = ["420px", "Sign up", "block", "block", "block", "Repeat the password", "Register", "50%", "none", "Already have an account?"];
    let atributosLogin = ["220px", "Do Login", "none", "none", "flex", "Password", "Login", "102.3%", "initial", "New to BB?"];

    if (principalButton.innerHTML == "sign up"){
        loginRegister(atributosRegistro);
        principalButton.innerHTML = "Do login";
    }else {
        loginRegister(atributosLogin);
        principalButton.innerHTML = "sign up";
    }
}

function loginRegister(strAttributes) {
    let boxContent = document.getElementsByClassName("box-content")[0];
    let h2 = document.getElementsByTagName("h2")[0];
    let name = document.getElementsByTagName("input");
    let senha = document.getElementsByName("password");
    let boxPassword = document.getElementsByClassName("passwordBox")[0];
    let login = document.getElementById("login");
    let forgot = document.getElementsByTagName("a")[1];
    let pergunta = document.getElementsByTagName("p")[0];

    boxContent.style.width = strAttributes[0];
    h2.innerHTML = strAttributes[1];
    name[0].style.display = strAttributes[2];
    name[0].value = null;
    name[1].value = null;
    senha[0].style.display = strAttributes[3];
    boxPassword.style.display = strAttributes[4];
    boxPassword.children[1].setAttribute("placeholder", strAttributes[5]);
    login.value = strAttributes[6];
    login.style.width = strAttributes[7];
    forgot.style.display = strAttributes[8];
    pergunta.innerHTML = strAttributes[9];
    senha[0].value = null;
    senha[1].value = null;

}