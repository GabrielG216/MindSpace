document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateName(name) && validateEmail(email) && validatePassword(password)) {
            
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

           
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });

    
    function validateName(name) {
        return name.length > 0;
    }

    // Função para validar email
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para validar senha
    function validatePassword(password) {
        return password.length >= 6;
    }
});
