document.addEventListener("DOMContentLoaded", function () {
    
    const startChatBtn = document.getElementById("startChat");
    const chatContainer = document.getElementById("chatContainer");
    const sendMessageBtn = document.getElementById("sendMessage");
    const userInput = document.getElementById("userInput");
    const messagesDiv = document.getElementById("messages");

    
    const chatTitle = document.createElement("h2");
    chatTitle.textContent = "Como posso te ajudar?";
    messagesDiv.appendChild(chatTitle);

    
    startChatBtn.addEventListener("click", function () {
        chatContainer.style.display = "block";
    });

    
    sendMessageBtn.addEventListener("click", function () {
        sendMessage();
    });

    
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    
    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        displayMessage("Você", userMessage);
        userInput.value = "";

        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            displayMessageWithTyping("Especialista Virtual", botResponse);
        }, 1000);
    }

   
    function displayMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    
    function displayMessageWithTyping(sender, message) {
        const messageElement = document.createElement("div");
        messagesDiv.appendChild(messageElement);
        
        let i = 0;
        function typeEffect() {
            if (i < message.length) {
                messageElement.innerHTML = `<strong>${sender}:</strong> ${message.substring(0, i + 1)}`;
                i++;
                setTimeout(typeEffect, 50);
            }
        }
        typeEffect();
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    
    function getBotResponse(userMessage) {
        const greetings = [
            "Olá! Como posso te ajudar hoje?",
            "Oi! Em que posso te auxiliar?",
            "Oi, espero que esteja bem! Me diga como posso te ajudar.",
            "Olá! Estou aqui para esclarecer suas dúvidas."
        ];

        if (/\b(oi|ola|olá|bom dia|boa tarde|boa noite|e aí|eae)\b/i.test(userMessage)) {
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        const farewells = [
            "Até mais! Se precisar de algo, estarei aqui.",
            "Tchau! Cuide-se bem!",
            "Foi um prazer ajudar, até a próxima!",
            "Se precisar de mais ajuda, estou à disposição. Até logo!"
        ];
        
        if (/\b(tchau|adeus|obrigado pela ajuda|até logo|até mais)\b/i.test(userMessage)) {
            return farewells[Math.floor(Math.random() * farewells.length)];
        }
        
        const responses = {
            "ansiedade": "A ansiedade é uma resposta natural ao estresse. Praticar exercícios físicos e técnicas de respiração pode ajudar. Se persistir, é recomendável procurar um profissional. <a href='planos.html'><strong>Ver planos</strong></a>",
            "depressão": "A depressão pode causar desânimo e isolamento. Terapia e apoio social são essenciais. Não hesite em procurar ajuda profissional. <a href='planos.html'><strong>Ver planos</strong></a>",
            "insônia": "A insônia pode ser causada por estresse ou maus hábitos de sono. Evite telas antes de dormir e tente manter um horário regular. Se o problema persistir, um especialista pode ajudar. <a href='planos.html'><strong>Ver planos</strong></a>",
            "bipolaridade": "O transtorno bipolar envolve oscilações extremas de humor. O tratamento geralmente envolve acompanhamento psiquiátrico e medicação adequada. <a href='planos.html'><strong>Ver planos</strong></a>",
            "transtorno do pânico": "Ataques de pânico podem ser intensos e assustadores. Técnicas de respiração e terapia cognitivo-comportamental são eficazes no tratamento. Um especialista pode auxiliar nesse processo. <a href='planos.html'><strong>Ver planos</strong></a>",
            "transtorno pós-traumático": "O TEPT pode surgir após eventos traumáticos. Terapia especializada e suporte emocional são fundamentais para a recuperação. <a href='planos.html'><strong>Ver planos</strong></a>",
            "TOC": "O transtorno obsessivo-compulsivo envolve pensamentos intrusivos e compulsões. O tratamento pode incluir terapia e, em alguns casos, medicação. <a href='planos.html'><strong>Ver planos</strong></a>",
            "esquizofrenia": "A esquizofrenia é um transtorno complexo que pode causar alucinações e delírios. O acompanhamento psiquiátrico contínuo é essencial. <a href='planos.html'><strong>Ver planos</strong></a>",
            "TDAH": "O transtorno de déficit de atenção e hiperatividade afeta concentração e impulsividade. Estratégias comportamentais e medicação podem ajudar. <a href='planos.html'><strong>Ver planos</strong></a>",
            "transtorno de personalidade borderline": "Esse transtorno envolve instabilidade emocional intensa. Terapia comportamental é altamente recomendada. <a href='planos.html'><strong>Ver planos</strong></a>",
            "fobia social": "A fobia social pode causar medo intenso de interações sociais. Terapia de exposição e técnicas de relaxamento podem ajudar. <a href='planos.html'><strong>Ver planos</strong></a>",
            "transtorno alimentar": "Distúrbios como anorexia e bulimia exigem suporte médico e psicológico. A recuperação é possível com tratamento adequado. <a href='planos.html'><strong>Ver planos</strong></a>",
            "burnout": "O esgotamento profissional pode levar à exaustão mental. Descanso e mudança de hábitos são fundamentais para recuperação. Se necessário, um especialista pode orientar. <a href='planos.html'><strong>Ver planos</strong></a>",
            "transtorno de estresse agudo": "Este transtorno ocorre após um evento traumático e pode evoluir para TEPT. Terapia é essencial para o tratamento. <a href='planos.html'><strong>Ver planos</strong></a>",
        };
        
        for (let key in responses) {
            if (new RegExp(`\\b${key}\\b`, "i").test(userMessage)) {
                return responses[key];
            }
        }
        
        return "Não tenho informações sobre isso. Se precisar de ajuda com transtornos como ansiedade, depressão ou pânico, estou aqui para ajudar!";
    }

});
document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName");

    
    if (userName) {
        
        document.getElementById("user-name").textContent = userName;
    }
    else {
        document.getElementById("user-name").textContent = "Visitante";
    }
});
