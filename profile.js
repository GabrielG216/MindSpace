document.addEventListener("DOMContentLoaded", function() {
    const profileImageInput = document.getElementById("profileImage");
    const previewImage = document.getElementById("previewImage");
    const userNameInput = document.getElementById("userName");
    const saveButton = document.getElementById("saveProfile");
    
    // Load existing user data
    const storedName = localStorage.getItem("userName");
    const storedImage = localStorage.getItem("userImage");
    
    // If the user is not logged in, redirect to login page
    if (!storedName) {
        alert("Você precisa fazer login para acessar essa página.");
        window.location.href = "login.html";
        return;
    }
    
    // Set the input value to the stored name
    userNameInput.value = storedName;
    
    // If there's a stored image, display it
    if (storedImage) {
        previewImage.src = storedImage;
    }
    
    // Handle profile image change
    profileImageInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        // Check file type
        if (!file.type.startsWith("image/")) {
            alert("Por favor, selecione uma imagem válida.");
            return;
        }
        
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert("A imagem deve ter no máximo 5MB.");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
    
    // Handle save button click
    saveButton.addEventListener("click", function() {
        const newName = userNameInput.value.trim();
        
        if (!newName) {
            alert("Por favor, insira um nome válido.");
            return;
        }
        
        // Save user data
        localStorage.setItem("userName", newName);
        
        // Save image if changed
        if (previewImage.src !== "img/UsuarioMind.png") {
            localStorage.setItem("userImage", previewImage.src);
        }
        
        alert("Perfil atualizado com sucesso!");
        window.location.href = "index.html";
    });
});
