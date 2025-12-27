async function sendMessage() {
    const input = document.getElementById("userInput");
    const messageText = input.value.trim();
    if (messageText === "") return;

    const chatMessages = document.getElementById("chatMessages");

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = messageText;
    chatMessages.appendChild(userMessage);

    input.value = "";

    // Bot placeholder
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.innerText = "Typing...";
    chatMessages.appendChild(botMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText })
    });

    const data = await response.json();
    botMessage.innerText = data.reply;
}

