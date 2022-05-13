const loginForm = document.getElementById("connexionbloc");
const loginButton = document.getElementById("buttonconnexion");
//const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.login.value;
    const password = loginForm.password.value;

    if (username === "commercial" && password === "commercial") {

        document.location.href="../page/commercial/acceuilCommercial.html";

    } else if (username === "admin" && password === "admin") {

        document.location.href="../page/admin/acceuilAdmin.html";
    }else {
        alert ("Echec de la connexion");
    }
})