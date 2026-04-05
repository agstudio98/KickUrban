const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

const botResponses = {
    "hola": "¡Hola! ¿Cómo puede KickUrban ayudarte hoy?",
    "buenos": "¡Buen día! ¿Buscas algún calzado en especial?",
    "adidas": "Tenemos una excelente selección de modelos originales y de rendimiento de Adidas en nuestro catálogo.",
    "puma": "La última colección de Puma ya está disponible. Consulta el catálogo para los modelos 'RS-X' y 'Suede'.",
    "crocs": "Los zuecos Classic y Echo de Crocs están en stock. Perfectos para una comodidad casual.",
    "envio": "Ofrecemos envío gratuito en todos los pedidos superiores a $100.",
    "pedido": "Por favor, proporciona tu número de pedido y consultaré el estado por ti.",
    "default": "No estoy seguro de entenderte. Puedes preguntar sobre nuestras marcas (Adidas, Puma, Crocs) o información de envíos."
};

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
    const cleanInput = input.toLowerCase().trim();
    for (const key in botResponses) {
        if (cleanInput.includes(key)) {
            return botResponses[key];
        }
    }
    return botResponses["default"];
}

if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = userInput.value.trim();
        if (!message) return;

        addMessage(message, 'user');
        userInput.value = '';

        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    });
}
