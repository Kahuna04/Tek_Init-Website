export function initChatbot() {
    // Course recommendation database
    const courseDatabase = {
        'cloud': {
            title: 'Cloud Computing Fundamentals',
            description: 'Comprehensive introduction to cloud platforms, services, and deployment models.',
            duration: '6 weeks',
            level: 'Intermediate'
        },
        'devops': {
            title: 'DevOps Engineering Program',
            description: 'Learn CI/CD pipelines, infrastructure as code, and modern DevOps practices.',
            duration: '12 weeks',
            level: 'Intermediate to Advanced'
        }
    };

    // Welcome messages and suggestions
    const welcomeMessages = [
        "👋 Hi there! I'm your course advisor. What tech skills are you interested in?",
        "I can recommend a course"
    ];

    // Create chatbot elements
    const chatbotTrigger = document.createElement('div');
    chatbotTrigger.className = 'chatbot-trigger';
    chatbotTrigger.innerHTML = '<span>🤖 Need course advice?</span>';
    document.body.appendChild(chatbotTrigger);

    const chatbotPanel = document.createElement('div');
    chatbotPanel.className = 'chatbot-panel hidden';
    chatbotPanel.innerHTML = `
        <div class="chatbot-header">
            <h3>Course Advisor</h3>
            <div class="chatbot-controls">
                <button class="minimize-chatbot">_</button>
                <button class="close-chatbot">×</button>
            </div>
        </div>
        <div class="chatbot-messages"></div>
        <div class="chatbot-suggestions"></div>
        <div class="chatbot-input">
            <input type="text" placeholder="What tech skills are you interested in?">
            <button class="send-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    `;
    document.body.appendChild(chatbotPanel);

    // Cache DOM elements
    const messages = chatbotPanel.querySelector('.chatbot-messages');
    const input = chatbotPanel.querySelector('input');
    const sendButton = chatbotPanel.querySelector('.send-button');
    const suggestionsContainer = chatbotPanel.querySelector('.chatbot-suggestions');

    // Add toggle functionality
    chatbotTrigger.addEventListener('click', () => {
        chatbotPanel.classList.remove('hidden');
        chatbotTrigger.classList.add('hidden');
        
        // Auto-focus the input field
        setTimeout(() => input.focus(), 300);
        
        // Show welcome message if this is first open
        if (messages.children.length === 0) {
            welcomeMessages.forEach(msg => {
                setTimeout(() => addMessage(msg, true), 500);
            });
            
            // Add initial suggestions after welcome message
            setTimeout(() => {
                displaySuggestions(['Cloud', 'DevOps']);
            }, 1000);
        }
    });

    chatbotPanel.querySelector('.close-chatbot').addEventListener('click', () => {
        chatbotPanel.classList.add('hidden');
        chatbotTrigger.classList.remove('hidden');
    });
    
    chatbotPanel.querySelector('.minimize-chatbot').addEventListener('click', () => {
        chatbotPanel.classList.add('hidden');
        chatbotTrigger.classList.remove('hidden');
    });

    // Typing indicator function
    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message bot typing-indicator';
        indicator.innerHTML = '<span></span><span></span><span></span>';
        messages.appendChild(indicator);
        messages.scrollTop = messages.scrollHeight;
        return indicator;
    }

    // Message display function
    function addMessage(text, isBot = false, isHTML = false) {
        const msg = document.createElement('div');
        msg.className = `message ${isBot ? 'bot' : 'user'}`;
        
        if (isHTML) {
            msg.innerHTML = text;
        } else {
            msg.textContent = text;
        }
        
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
        return msg;
    }

    // Suggestions display
    function displaySuggestions(suggestionArray) {
        suggestionsContainer.innerHTML = '';
        
        suggestionArray.forEach(suggestion => {
            const pill = document.createElement('button');
            pill.className = 'suggestion-pill';
            pill.textContent = suggestion;
            pill.addEventListener('click', () => {
                addMessage(suggestion);
                processMessage(suggestion);
                suggestionsContainer.innerHTML = '';
            });
            suggestionsContainer.appendChild(pill);
        });
    }

    // Process message and generate response
    function processMessage(text) {
        // Clear any existing suggestions
        suggestionsContainer.innerHTML = '';
        
        // Show typing indicator
        const indicator = showTypingIndicator();
        
        // Response delay (simulate thinking)
        setTimeout(() => {
            // Remove typing indicator
            indicator.remove();
            
            // Process the user query
            const lowerText = text.toLowerCase();
            let response = '';
            let matchFound = false;
            let courseDetails = null;

            // Check for course matches
            for (const [key, course] of Object.entries(courseDatabase)) {
                if (lowerText.includes(key)) {
                    courseDetails = course;
                    matchFound = true;
                    
                    // Create rich HTML response
                    response = `
                        <div class="course-recommendation">
                            <h4>${course.title}</h4>
                            <p>${course.description}</p>
                            <div class="course-meta">
                                <span class="course-duration">⏱️ ${course.duration}</span>
                                <span class="course-level">📊 ${course.level}</span>
                            </div>
                            <a href="#" class="course-link">Learn more about this course</a>
                        </div>
                    `;
                    
                    addMessage(response, true, true);
                    break;
                }
            }
            
            // If no specific match found
            if (!matchFound) {
                if (lowerText.includes('thank') || lowerText.includes('thanks')) {
                    addMessage("You're welcome! Feel free to ask if you need more course recommendations.", true);
                } else if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
                    addMessage("Hello there! What tech skills would you like to learn? I can recommend courses in Cloud Computing and DevOps", true);
                } else {
                    addMessage("Based on your interest in " + text + ", I recommend starting with our Tech Foundations module. Would you like to know about any specific technology?", true);
                    // Show suggestions
                    setTimeout(() => {
                        displaySuggestions(['Cloud Computing', 'DevOps']);
                    }, 500);
                }
            } else {
                // If we found a course match, suggest related topics
                setTimeout(() => {
                    let relatedTopics = ['Course Schedule', 'Prerequisites', 'Pricing', 'Student Reviews'];
                    displaySuggestions(relatedTopics);
                }, 800);
            }
        }, 1200);
    }

    // Send message on button click
    sendButton.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const text = input.value.trim();
        if (text) {
            addMessage(text);
            input.value = '';
            processMessage(text);
        }
    }
    
    // Handle link clicks within the chatbot
    messages.addEventListener('click', (e) => {
        if (e.target.classList.contains('course-link')) {
            e.preventDefault();
            addMessage("I'd like more information about this course", false);
            processMessage("Tell me more about course details");
        }
    });
}