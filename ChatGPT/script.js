// async function sendMessage() {
//     const userInput = document.getElementById("user-input").value.trim();
//     if (!userInput) return;

//     // Display user message
//     displayMessage(userInput, 'user');

//     // Send user message to ChatGPT API
//     const response = await chatGpt(userInput);

//     // Display ChatGPT response
//     const chatGptResponse = response?.responses?.[0]?.content;
//     if (chatGptResponse) {
//         displayMessage(chatGptResponse, 'system');
//     } else {
//         displayMessage("Sorry, I couldn't understand that.", 'system');
//     }
// }

// async function chatGpt(userMessage) {
//     const url = 'https://chatgpt-api8.p.rapidapi.com/';
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-RapidAPI-Key': '04dcd9b5a3msh47f6ae5bc35910bp1d78d4jsnfeac8586a6b5',
//             'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
//         },
//         body: JSON.stringify([
//             { content: userMessage, role: 'user' }
//         ])
//     };

//     try {
//         const response = await fetch(url, options);
//         return await response.json();
//     } catch (error) {
//         console.error("Error fetching response:", error);
//     }
// }

// function displayMessage(message, role) {
//     const chatContainer = document.getElementById("chat-container");
//     const messageElement = document.createElement("div");
//     messageElement.className = role === 'user' ? 'user-message' : 'system-message';
//     messageElement.textContent = message;
//     chatContainer.appendChild(messageElement);
// }




// script4.js

// Function to send a message
async function sendMessage(message) {
    const url = 'https://chatgpt-api8.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '04dcd9b5a3msh47f6ae5bc35910bp1d78d4jsnfeac8586a6b5',
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        body: JSON.stringify([
            {
                content: "Hello! I'm an AI assistant bot based on ChatGPT 3. How may I help you?",
                role: 'system'
            },
            {
                content: message, // Use the provided message
                role: 'user'
            }
        ])
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayMessage(result); // Display the message after it's sent
    } catch (error) {
        console.error(error);
    }
}

// Function to display a message
function displayMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

// Add event listener to the send button
document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    sendMessage(userInput); // Send the user's input as a message
});
