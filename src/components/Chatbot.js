export function initChatbot() {
    const chatbotTrigger = document.createElement('div');
    chatbotTrigger.className = 'chatbot-trigger';
    chatbotTrigger.innerHTML = '🤖 Need course advice?';
    document.body.appendChild(chatbotTrigger);

    const chatbotPanel = document.createElement('div');
    chatbotPanel.className = 'chatbot-panel hidden';
    chatbotPanel.innerHTML = `
        <div class="chatbot-header">
            <h3>Course Advisor</h3>
            <button class="close-chatbot">×</button>
        </div>
        <div class="chatbot-messages"></div>
        <div class="chatbot-input">
            <input type="text" placeholder="What tech skills are you interested in?">
            <button>Send</button>
        </div>
    `;
    document.body.appendChild(chatbotPanel);

    // Add toggle functionality
    chatbotTrigger.addEventListener('click', () => {
        chatbotPanel.classList.remove('hidden');
    });

    chatbotPanel.querySelector('.close-chatbot').addEventListener('click', () => {
        chatbotPanel.classList.add('hidden');
    });

    // Simple recommendation logic
    const input = chatbotPanel.querySelector('input');
    const messages = chatbotPanel.querySelector('.chatbot-messages');
    
    function addMessage(text, isBot = false) {
        const msg = document.createElement('div');
        msg.className = `message ${isBot ? 'bot' : 'user'}`;
        msg.textContent = text;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }

    chatbotPanel.querySelector('button').addEventListener('click', () => {
        const text = input.value.trim();
        if (text) {
            addMessage(text);
            input.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                let response = "Based on your interest in " + text + ", I recommend: ";
                if (text.toLowerCase().includes('cloud')) {
                    response += "our Cloud Computing Fundamentals course.";
                } else if (text.toLowerCase().includes('devops')) {
                    response += "the DevOps Engineering program.";
                } else {
                    response += "starting with our Tech Foundations module.";
                }
                addMessage(response, true);
            }, 800);
        }
    });
}