document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 📊 CENTRAL KNOWLEDGEBASE DATA MATRIX
    // Edit this list here to change options anytime without touching HTML!
    // ==========================================
    const profileKnowledgebase = [
        {
            id: 1,
            keywords: ["about", "bio", "yourself", "profile"],
            question: "👤 Query 01: Tell me about yourself (About Me)",
            answer: "I am a passionate software engineer focused on building clean, modular software solutions that solve real-world efficiency challenges. I thrive on translating complex technical backend logic into responsive, high-performance interfaces."
        },
        {
            id: 2,
            keywords: ["milestone", "achievement", "award", "win"],
            question: "🏆 Query 02: What are your key milestones? (Achievements)",
            answer: "<b>System Milestone Logs:</b><br>• Designed and deployed a custom automation pipeline reducing execution lag by 40%.<br>• Contributed to core open-source web assets utilized globally by backend automation engineers.<br>• Successfully built and managed scalable database layouts hosting production data routines smoothly."
        },
        {
            id: 3,
            keywords: ["stack", "tool", "language", "technology", "code"],
            question: "🛠️ Query 03: What tools do you use? (Technology Stack)",
            answer: "<b>System Environment Arrays:</b><br><br><span class='text-cyan-400 font-medium font-bold'>Frontend:</span> React, TypeScript, TailwindCSS<br><span class='text-violet-400 font-medium font-bold'>Backend:</span> Node.js, Express, Python, REST APIs<br><span class='text-emerald-400 font-medium font-bold'>Databases:</span> PostgreSQL, MongoDB, Redis<br><span class='text-amber-400 font-medium font-bold'>Cloud/DevOps:</span> Docker, AWS, Git, GitHub Actions"
        },
        {
            id: 4,
            keywords: ["contact", "connect", "email", "linkedin"],
            question: "📬 Query 04: How do we establish a connection? (Contact)",
            answer: "Let's open a direct communication routing pipeline! Reach out across my live endpoints:<br><br>📧 <b>Email:</b> <a href='mailto:your.email@example.com' class='text-cyan-400 underline font-medium'>your.email@example.com</a><br>💼 <b>LinkedIn:</b> <a href='https://linkedin.com/in/yourusername' target='_blank' class='text-violet-400 underline font-medium'>linkedin.com/in/yourusername</a>"
        }
    ];

    const fallbackResponses = {
        greetings: ["hi", "hello", "hey", "sup", "greetings"],
        greetingReply: "Hello there! 👋 I am an automated profile agent. Feel free to use the quick option buttons to learn about my background, or type keywords like <b>'stack'</b>, <b>'contact'</b>, or <b>'about'</b>.",
        defaultReply: "Query completed, but zero records found. Try selecting one of the macro buttons above or type clean keywords like <b>'about'</b>, <b>'stack'</b>, or <b>'milestones'</b>."
    };

    let currentActiveId = null;
    const inputBox = document.getElementById('user-input-box');
    const sendBtn = document.getElementById('send-action-btn');
    const menuBtn = document.getElementById('theme-menu-btn');
    const dropdownMenu = document.getElementById('theme-dropdown-menu');
    const suggestionsPanel = document.getElementById('suggestions-panel');
    const chatStream = document.getElementById('chat-stream');

    // ==========================================
    // ⚙️ AUTOMATED ENGINE GENERATOR LOOP
    // ==========================================
    function buildDynamicUI() {
        suggestionsPanel.innerHTML = ""; 
        profileKnowledgebase.forEach(item => {
            const button = document.createElement('button');
            button.className = "suggestion-pill w-full text-left text-[10px] sm:text-xs bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5 rounded-xl px-3.5 py-2 transition-all duration-200 opacity-80 hover:opacity-100";
            button.innerHTML = item.question;
            
            button.addEventListener('click', () => {
                currentActiveId = item.id;
                inputBox.value = item.question;
                evaluateButtonState();
                inputBox.focus();
            });
            suggestionsPanel.appendChild(button);
        });
    }
    buildDynamicUI();

    // --- DROPDOWN CONTROL INTERACTIVE PASS ---
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });

    window.addEventListener('click', (e) => {
        if (!dropdownMenu.classList.contains('hidden') && !e.target.closest('#theme-dropdown-menu')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- MULTI-THEME TOGGLE PROFILE HOOKS ---
    document.getElementById('mode-light-toggle').addEventListener('click', () => {
        document.body.classList.remove('mode-dark'); document.body.classList.add('mode-light');
    });
    document.getElementById('mode-dark-toggle').addEventListener('click', () => {
        document.body.classList.remove('mode-light'); document.body.classList.add('mode-dark');
    });

    document.getElementById('accent-orbit-btn').addEventListener('click', () => switchAccent('accent-orbit', '#8B5CF6'));
    document.getElementById('accent-cyber-btn').addEventListener('click', () => switchAccent('accent-cyber', '#10B981'));
    document.getElementById('accent-ruby-btn').addEventListener('click', () => switchAccent('accent-ruby', '#EF4444'));

    function switchAccent(accentClass, auraHex) {
        document.body.classList.remove('accent-orbit', 'accent-cyber', 'accent-ruby');
        document.body.classList.add(accentClass);
        document.getElementById('ambient-aura').style.backgroundColor = auraHex;
    }

    // --- INPUT CONSOLE MONITOR LINES ---
    inputBox.addEventListener('input', evaluateButtonState);

    function evaluateButtonState() {
        if (inputBox.value.trim().length > 0) {
            sendBtn.disabled = false;
            sendBtn.className = "gradient-bg text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:opacity-90 transform active:scale-95 transition-all duration-200 cursor-pointer";
        } else {
            sendBtn.disabled = true;
            sendBtn.className = "bg-gray-300 dark:bg-gray-800 text-gray-500 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-not-allowed";
        }
    }

    // ==========================================
    // 🧠 TRANSMISSION EXECUTION PIPELINES
    // ==========================================
    window.executeManualSend = function() {
        const text = inputBox.value.trim();
        if (!text) return;

        const userBubble = document.createElement('div');
        userBubble.className = 'flex justify-end opacity-0 transition-all duration-300 transform translate-y-2';
        userBubble.innerHTML = `<div class="user-msg-bubble px-4 py-2 rounded-2xl rounded-tr-none max-w-[85%] text-xs shadow-md">${text}</div>`;
        chatStream.appendChild(userBubble);
        userBubble.offsetHeight;
        userBubble.classList.remove('opacity-0', 'translate-y-2');

        inputBox.value = "";
        evaluateButtonState();
        forceScroll();

        const typingBubble = document.createElement('div');
        typingBubble.className = 'flex justify-start items-start gap-2.5';
        typingBubble.innerHTML = `
            <div class="w-5 h-5 rounded-md gradient-bg flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0 mt-0.5">N</div>
            <div class="bg-black/5 dark:bg-white/[0.01] border border-black/5 dark:border-white/5 opacity-60 px-3.5 py-2 rounded-2xl rounded-tl-none text-xs italic">Parsing database data layers...</div>
        `;
        setTimeout(() => { chatStream.appendChild(typingBubble); forceScroll(); }, 250);

        setTimeout(() => {
            typingBubble.remove();
            let finalAnswer = fallbackResponses.defaultReply;
            const cleanInputLower = text.toLowerCase();

            if (currentActiveId && profileKnowledgebase.find(item => item.id === currentActiveId).question === text) {
                finalAnswer = profileKnowledgebase.find(item => item.id === currentActiveId).answer;
            } else if (fallbackResponses.greetings.some(greet => cleanInputLower.includes(greet))) {
                finalAnswer = fallbackResponses.greetingReply;
            } else {
                for (const item of profileKnowledgebase) {
                    if (item.keywords.some(keyword => cleanInputLower.includes(keyword))) {
                        finalAnswer = item.answer;
                        break;
                    }
                }
            }

            const botBubble = document.createElement('div');
            botBubble.className = 'flex justify-start items-start gap-2.5 opacity-0 transition-all duration-300 transform translate-y-2';
            botBubble.innerHTML = `
                <div class="w-5 h-5 rounded-md gradient-bg flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0 mt-0.5 shadow-md">N</div>
                <div class="bot-msg-bubble px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] text-xs leading-relaxed shadow-lg">${finalAnswer}</div>
            `;
            chatStream.appendChild(botBubble);
            botBubble.offsetHeight;
            botBubble.classList.remove('opacity-0', 'translate-y-2');
            
            currentActiveId = null;
            forceScroll();
        }, 1300);
    }

    inputBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !sendBtn.disabled) {
            e.preventDefault();
            executeManualSend();
        }
    });

    function forceScroll() { chatStream.scrollTop = chatStream.scrollHeight; }
});