function sendMessage() {
    const input = document.getElementById("userInput");
    const messageText = input.value.trim();
    if (messageText === "") return;

    const chatMessages = document.getElementById("chatMessages");

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = messageText;
    chatMessages.appendChild(userMessage);

    // Fake bot reply (for now)
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.innerText = "Thinking...";
    chatMessages.appendChild(botMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
    input.value = "";

    // Simulate bot delay
    setTimeout(() => {
        botMessage.innerText = "This is where AI reply will come 😉";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
}

// Enter key support
document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
