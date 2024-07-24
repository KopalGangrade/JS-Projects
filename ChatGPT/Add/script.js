async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput.trim()) return;

    const url = 'https://chatgpt-api8.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '04dcd9b5a3msh47f6ae5bc35910bp1d78d4jsnfeac8586a6b5',
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        body: JSON.stringify([
            { content: "Hello! I'm an AI assistant bot based on ChatGPT 3. How may I help you?", role: 'system' },
            { content: userInput, role: 'user' }
        ])
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayMessage(result);
    } catch (error) {
        console.error(error);
    }
}

function displayMessage(message) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(message.role + '-message');
    messageDiv.innerText = message.content || "";
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom
}


