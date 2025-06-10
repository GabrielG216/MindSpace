document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (validateEmail(email) && validatePassword(password)) {
            
            if (email === storedEmail && password === storedPassword) {
                
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
            } else {
                
                alert("E-mail ou senha inválidos. Tente novamente.");
            }
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });

    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    
    function validatePassword(password) {
        return password.length >= 6;
    }
});
