const questions = [
    {
        question: "After a busy day, how do you recharge your beautiful energy?",
        options: [
            { text: "By spending quiet time alone with my thoughts.", trait: "I" },
            { text: "By connecting with friends and sharing stories.", trait: "E" },
            { text: "A gentle mix of both solitude and connection.", trait: "BOTH", traits: ["I", "E"] }
        ]
    },
    {
        question: "In a crowded room, you feel most like...",
        options: [
            { text: "A quiet observer, soaking in the atmosphere.", trait: "I" },
            { text: "A vibrant light, engaging with those around me.", trait: "E" },
            { text: "It depends on the energy of the room.", trait: "BOTH", traits: ["I", "E"] }
        ]
    },
    {
        question: "Starting a conversation with a stranger feels like...",
        options: [
            { text: "A bit draining, I prefer familiar voices.", trait: "I" },
            { text: "Energizing, I love meeting new souls.", trait: "E" },
            { text: "Comfortable if the vibe is right.", trait: "BOTH", traits: ["I", "E"] }
        ]
    },
    {
        question: "Your ideal weekend afternoon is...",
        options: [
            { text: "Curled up with a book or a solo project.", trait: "I" },
            { text: "Out at a gathering or exploring with a group.", trait: "E" },
            { text: "A mix of 'me time' and 'we time'.", trait: "BOTH", traits: ["I", "E"] }
        ]
    },
    {
        question: "When you dream of the future, what do you see first?",
        options: [
            { text: "Real, practical steps and concrete details.", trait: "S" },
            { text: "Vibrant possibilities and big-picture visions.", trait: "N" },
            { text: "I see the vision first, then the steps to reach it.", trait: "BOTH", traits: ["S", "N"] }
        ]
    },
    {
        question: "When presented with a new idea, you usually...",
        options: [
            { text: "Ask how it can be used in the real world.", trait: "S" },
            { text: "Wonder about the deeper meaning behind it.", trait: "N" },
            { text: "I look for both utility and hidden meaning.", trait: "BOTH", traits: ["S", "N"] }
        ]
    },
    {
        question: "You trust your...",
        options: [
            { text: "Past experiences and hard facts.", trait: "S" },
            { text: "Gut feelings and future hunches.", trait: "N" },
            { text: "Logic backed by a hint of intuition.", trait: "BOTH", traits: ["S", "N"] }
        ]
    },
    {
        question: "If you were to describe a flower, you would talk about...",
        options: [
            { text: "Its color, scent, and the texture of its petals.", trait: "S" },
            { text: "The way it symbolizes growth and resilience.", trait: "N" },
            { text: "Its physical beauty and its poetic essence.", trait: "BOTH", traits: ["S", "N"] }
        ]
    },
    {
        question: "How do you prefer to guide your heart when making choices?",
        options: [
            { text: "With clarity, logic, and objective truth.", trait: "T" },
            { text: "With compassion, values, and how it feels to others.", trait: "F" },
            { text: "I balance logic with deep empathy.", trait: "BOTH", traits: ["T", "F"] }
        ]
    },
    {
        question: "What speaks to you more during a disagreement?",
        options: [
            { text: "Fairness and consistency in the rules.", trait: "T" },
            { text: "Harmony and understanding between hearts.", trait: "F" },
            { text: "A fair resolution that preserves our connection.", trait: "BOTH", traits: ["T", "F"] }
        ]
    },
    {
        question: "When a friend is upset, your first instinct is to...",
        options: [
            { text: "Help them find a practical solution.", trait: "T" },
            { text: "Offer them a shoulder and emotional support.", trait: "F" },
            { text: "Listen first, then help them problem-solve.", trait: "BOTH", traits: ["T", "F"] }
        ]
    },
    {
        question: "You value most...",
        options: [
            { text: "Truth and logical consistency.", trait: "T" },
            { text: "Kindness and social harmony.", trait: "F" },
            { text: "Honest communication done with love.", trait: "BOTH", traits: ["T", "F"] }
        ]
    },
    {
        question: "How does your soul prefer to dance through life?",
        options: [
            { text: "With a gentle plan and a sense of structure.", trait: "J" },
            { text: "With spontaneous flow and open possibilities.", trait: "P" },
            { text: "I love a plan that allows for spontaneous magic.", trait: "BOTH", traits: ["J", "P"] }
        ]
    },
    {
        question: "Your favorite kind of day is one that is...",
        options: [
            { text: "Productive with a clear list of things to do.", trait: "J" },
            { text: "Unplanned, letting the day take you where it will.", trait: "P" },
            { text: "A few clear goals with plenty of room for flow.", trait: "BOTH", traits: ["J", "P"] }
        ]
    },
    {
        question: "When starting a project, you prefer to...",
        options: [
            { text: "Set deadlines and follow a step-by-step path.", trait: "J" },
            { text: "Dive in and see where the inspiration leads.", trait: "P" },
            { text: "Have a rough outline to guide your creativity.", trait: "BOTH", traits: ["J", "P"] }
        ]
    },
    {
        question: "Being on time is...",
        options: [
            { text: "Very important, it shows respect for structure.", trait: "J" },
            { text: "Ideally nice, but life is often unpredictable.", trait: "P" },
            { text: "Important for work, flexible for friends.", trait: "BOTH", traits: ["J", "P"] }
        ]
    }
];

const affirmations = {
    "Morning": [
        "Your light is needed in the world today. Bloom with intention.",
        "A fresh dawn, a fresh heart. You are capable of beautiful things.",
        "Embrace the quiet strength of the morning. You are ready."
    ],
    "Midday": [
        "Pause and breathe. You are enough in this exact moment.",
        "Your energy is a gift. Nurture it with kindness and grace.",
        "Even the sun takes a moment at its peak to just shine."
    ],
    "Evening": [
        "The stars are watching over your dreams. Rest in peace.",
        "Release the day's weight. You handled it with such courage.",
        "Softness is your power. Let the night carry your thoughts away."
    ],
    "Night": [
        "The stars are watching over your dreams. Rest in peace.",
        "Release the day's weight. You handled it with such courage.",
        "Softness is your power. Let the night carry your thoughts away."
    ]
};

const tailoredContent = {
    "INFJ": { 
        healing: "Navigate your Introverted Intuition (Ni) away from over-analyzing shadows. Your vision is a sanctuary, not a cage. Connect with the present sensory world.", 
        joy: "Synthesizing complex truths into a single, elegant vision. Seeing the hidden growth in others before they see it themselves.",
        ritual: "Grounding Exercise: Touch three natural textures (wood, stone, leaf). Re-anchor your visionary mind to the physical plane.",
        insecurities: "Over-idealizing others and neglecting your own needs. Feeling like an 'alien' leads to isolation; remember your uniqueness is your bridge, not a wall."
    },
    "ENFP": { 
        healing: "Your Extraverted Intuition (Ne) brings infinite ideas, but can lead to scattered energy. Ground yourself in your values (Fi) before flying again.", 
        joy: "The electric rush of a connection that feels like destiny. Discovering a new curiosity that expands the boundaries of your world.",
        ritual: "Breath of Air: Step outside and feel the wind. Let it take old thoughts and bring new, fresh energy into your center.",
        insecurities: "Fear of being boring or ordinary. Seeking constant external validation for your creativity can drain your authentic inner light."
    },
    "INTJ": { 
        healing: "Balance your Ni-Te drive for closure with moments of Te-less observation. Not every system needs optimization tonight. Allow for chaos.", 
        joy: "The profound satisfaction of a long-term plan clicking into place. A moment of intellectual mastery that needs no external validation.",
        ritual: "Entropy Moment: Spend 10 minutes doing something with no goal. Watch water flow or clouds shift without seeking a pattern.",
        insecurities: "Intellectual arrogance as a shield for emotional vulnerability. Difficulty trusting others' competence can lead to overwhelming self-reliance."
    },
    "INFP": { 
        healing: "Deep Introverted Feeling (Fi) can make the world feel harsh. Protect your inner values, but allow Ne to explore possibilities beyond the pain.", 
        joy: "Finding a piece of art or music that perfectly mirrors the complexity of your heart. A quiet moment of pure, authentic expression.",
        ritual: "Color Alchemy: Express a feeling without words. Use colors or textures to create a visual 'mood board' of your soul index.",
        insecurities: "Taking everything personally and getting lost in 'what if' sadness. Seeing the world through a lens of what's missing instead of what's beautiful."
    },
    "ENFJ": { 
        healing: "Your Fe (Extraverted Feeling) can lead to 'emotional labor' burnout. Retreat into your Ni (Intuition) to find what *you* need, independent of others.", 
        joy: "The resonance of a community moving in harmony. Seeing a spark of self-belief ignite in someone you've mentored.",
        ritual: "Inner Mirror: Sit with yourself and ask: 'What do I need that I haven't asked for?' Write it down in a golden ink.",
        insecurities: "Overly sensitive to criticism and needing constant social harmony. Losing your own identity while trying to be the perfect support for everyone else."
    },
    "ENTP": { 
        healing: "Ne-Ti loops can lead to analysis paralysis or cynical detachment. Re-engage with your Fe to remember the human value of your clever ideas.", 
        joy: "A mental chess match where every move reveals a new layer of possibility. Breaking a convention to build something superior.",
        ritual: "Perspective Pivot: Argue the opposite of a belief you hold. Find the logic in the 'other' side to expand your mental flexibility.",
        insecurities: "Using humor and debate to avoid deep emotional intimacy. Fear of committing to one path and 'missing out' on the infinite others."
    },
    "ENTJ": { 
        healing: "Te-Ni dominance makes vulnerability feel like a failure. It's actually a strategic reset. Access your Fi to ensure your ladder is on the right wall.", 
        joy: "The clear sight of an obstacle transformed into a bridge. Leading a high-stakes mission where every piece moves in perfect synchronization.",
        ritual: "Command Reset: Delegate one small 'must-do' today. Practice the strength of letting someone else hold the weight.",
        insecurities: "Impatience with 'inefficiency' in others' emotions. Deep fear of losing control or being seen as weak in high-pressure situations."
    },
    "INTP": { 
        healing: "Ti-Ne can isolate you in a world of abstractions. Use your Si (Introverted Sensing) to reconnect with the comfort and data of the physical world.", 
        joy: "Deciphering a hidden law of the universe that explains everything. The silent click of a complex puzzle finally forming a whole.",
        ritual: "Sensory Anchor: Focus on a repetitive task like washing dishes or folding paper. Let your mind rest while your hands engage.",
        insecurities: "Social awkwardness leading to extreme withdrawal. Feeling like you can't satisfy the world's emotional 'requirements'."
    },
    "ISFJ": { 
        healing: "Si-Fe can lead to over-responsible burnout. Use your Ti to logically evaluate which burdens are yours to carry and which are not.", 
        joy: "The quiet beauty of a tradition kept alive. The warmth of a space where every detail is cared for and every person feels at home.",
        ritual: "Sanctuary Boundary: Say 'no' to one request today to say 'yes' to your own rest. Mark this boundary with a sprig of lavender.",
        insecurities: "Underestimating your own impact and staying in the shadows. Fear of change disrupting the safety you've worked so hard to build."
    },
    "ESFJ": { 
        healing: "Fe-Si can make social harmony feel like a life-or-death mission. Use your Ne to realize there are many ways to be okay, even in conflict.", 
        joy: "The laughter of a group where everyone feels integrated. Being the heartbeat of a community that functions with kindness.",
        ritual: "Social Silence: Spend 20 minutes in a public space (like a cafe) *without* interacting. Observe the harmony without needing to facilitate it.",
        insecurities: "Obsessing over how others perceive you. Needing to be 'needed' to feel worthy of love and respect."
    },
    "ISTJ": { 
        healing: "Si-Te can create a rigid 'should' world. Use your Fi to reconnect with why you work so hard. Your values are the anchor, not the rules.", 
        joy: "The profound satisfaction of a system that works exactly as intended. Knowing that you are the reliable pillar others can lean on.",
        ritual: "Chaos Comfort: Intentionally leave one non-essential task unfinished. Sit with the discomfort and realize the world is still standing.",
        insecurities: "Being overly critical of yourself and others when plans fail. Struggle to express affection in ways that feel 'natural' to others."
    },
    "ESTJ": { 
        healing: "Te-Si dominance can over-structure the soul. Use your Ne to see that the best results often come from the most unexpected places.", 
        joy: "Directing energy into a tangible, high-impact result. The respect of a team that admires your clarity and decisive strength.",
        ritual: "Unstructured Hour: Set a timer for 60 minutes with *no* agenda. Follow your curiosity wherever it leads without checking the clock.",
        insecurities: "Steamrolling over others' feelings in the pursuit of results. Identifying so strongly with your 'work' that you lose your inner self."
    },
    "ISFP": { 
        healing: "Fi-Se can make you vulnerable to sensory and emotional overwhelm. Use your Ni to find the long-term meaning in the current storm.", 
        joy: "A moment of pure sensory flow where you and your environment are one. Creating art that needs no explanation or audience.",
        ritual: "Tactile Grounding: Work with clay, dough, or earth. Feel the direct influence of your soul on the physical world.",
        insecurities: "Fear of being trapped in a life that feels 'fake'. Withdrawing when you feel misunderstood, often cutting off help you need."
    },
    "ESFP": { 
        healing: "Se-Fi can lead to a 'performance' fatigue. Use your Te to organize your energy so you have something left for your private self.", 
        joy: "The raw adrenaline of a moment where the world is watching and you are performing at your peak. Making the world feel like a stage.",
        ritual: "Quiet Spotlight: Sit in the sun or under a bright light alone. Experience the 'stage' energy without needing to perform for anyone.",
        insecurities: "Seeking shallow thrills to avoid deep emotional processing. Sensitivity to being 'left out' of the social excitement."
    },
    "ISTP": { 
        healing: "Ti-Se can lead to a detached, tactical existence. Access your Ni to see where your skills fit into the larger, more meaningful picture.", 
        joy: "The razor-sharp focus of an engine repaired or a trick mastered. Moving through a complex physical environment with innate grace.",
        ritual: "Solitary Craft: Spend time fixing or creating something purely for the sake of the mechanism. No 'users' allowed.",
        insecurities: "Appearing 'cold' to loved ones when you are actually just solving a problem. Risking safety or health just to feel the 'edge' of a moment."
    },
    "ESTP": { 
        healing: "Se-Ti can lead to impulsive burnout. Use your Fe to connect with the long-term impact of your actions on the people you value.", 
        joy: "The thrill of a risk taken and won in the blink of an eye. Command over the physical moment that leaves others in awe.",
        ritual: "Pulse Control: During a moment of high energy, stop and count your pulse. Wait for it to slow by 5 beats before moving again.",
        insecurities: "Boredom that turns into destructive behavior. Using your charm to manipulate situations instead of being authentic."
    }
};

const moodPrescriptions = {
    "Radiant": { 
        words: "Since you are already glowing, use this light to shine into the small corners of your world. Your joy is contagious; let it overflow naturally.", 
        psychological: "Dopamine-rich state. Optimal for creative tasks requiring high divergent thinking. Neuroplasticity is high in positive states." 
    },
    "Tired": { 
        words: "Rest is a productive act. Your worth is not tied to your output. Sink into the softness of the current moment. Your soul is asking for a pause.", 
        psychological: "Glymphatic system activation needed. Prioritize sleep or deep rest to clear metabolic waste from neural tissues." 
    },
    "Anxious": { 
        words: "You are deeper than any waves on the surface. Return to the constant calm at the center of your heart. The future is unfolding in gentleness.", 
        psychological: "Box Breathing Technique: 4s Inhale, 4s Hold, 4s Exhale, 4s Hold. This resets the Autonomic Nervous System through Vagus nerve stimulation." 
    },
    "Overwhelmed": { 
        words: "Take one small breath. Then one small step. You don't have to carry the mountain; you only have to walk the path.", 
        psychological: "Prefrontal Cortex fatigue. Reduce cognitive load by naming (labeling) your emotions. 'What you name, you can tame'." 
    },
    "Proud": { 
        words: "Celebrate the quiet victories as much as the loud ones. You have navigated so much with such grace. Own your brilliant light.", 
        psychological: "Serotonin stabilization. Reflecting on achievements reinforces your sense of agency and stabilizes self-esteem circuitry." 
    },
    "Seeking": { 
        words: "The path is appearing with every step you take. Trust the timing of your soul's unfolding. Every question is a seed.", 
        psychological: "Curiosity-driven state. Engaging the 'Seeker' network in the brain increases learning capacity and resilience to stress." 
    },
    "Lonely": { 
        words: "You are never truly separate from the light that connects us all. Reach out to a memory, a book, or a friend. Your heart is seen.", 
        psychological: "Oxytocin deficit detected. Engage in 'Parasocial Connection' (reading, watching familiar art) or micro-interactions to reset social pain centers." 
    },
    "Inspired": { 
        words: "Let the vision flow through you without editing. This is your soul's unique song. Create for the sake of the joy it brings.", 
        psychological: "Flow State Resonance: Your Prefrontal Cortex is quieting, allowing for pure, uninhibited creative output. Seize this burst." 
    },
    "Healing": { 
        words: "Every day you are becoming a more whole version of yourself. Be gentle with the mending parts. Softness is its own kind of power.", 
        psychological: "Neuro-integration: You are rewriting old pavlovian responses. Patience is required as new neural pathways stabilize." 
    },
    "Dreaming": { 
        words: "Your visions are the blueprints for a beautiful world. Allow yourself to wander in the possible. The stars are listening.", 
        psychological: "Theta-wave dominance. Optimal for deep problem solving and connecting distant concepts. Allow your mind to wander without a map." 
    }
};

const personalityDescriptions = {
    "INFJ": "The Advocate: A visionary protected by a gentle heart. Driven by Ni (Intuition) and Fe (Empathy).",
    "ENFP": "The Campaigner: A vibrant spirit that finds magic in the everyday. Driven by Ne (Imagination) and Fi (Authenticity).",
    "INTJ": "The Architect: A brilliant mind with a soul for deep strategy. Driven by Ni (Insight) and Te (Logic).",
    "ESFJ": "The Consul: A warm light that brings everyone together. Driven by Fe (Harmony) and Si (Tradition).",
    "INFP": "The Mediator: A poetic soul seeking harmony and deep meaning. Driven by Fi (Values) and Ne (Wonder).",
    "ENTP": "The Debater: A clever mind that loves to explore every angle. Driven by Ne (Possibility) and Ti (Analysis).",
    "ENTJ": "The Commander: A bold leader with the grace to move mountains. Driven by Te (Efficiency) and Ni (Vision).",
    "ENFJ": "The Protagonist: A shining beacon of inspiration and empathy. Driven by Fe (Unity) and Ni (Insight).",
    "ISFP": "The Adventurer: A graceful soul who sees beauty in every moment. Driven by Fi (Harmony) and Se (Sensory).",
    "ISFJ": "The Defender: A loyal protector with a heart of pure gold. Driven by Si (Memory) and Fe (Care).",
    "ISTP": "The Virtuoso: A calm observer who masters every tool with ease. Driven by Ti (Logic) and Se (Sensory).",
    "ISTJ": "The Logistician: A pillar of strength and grounded wisdom. Driven by Si (Order) and Te (Results).",
    "ESFP": "The Entertainer: A joyful spirit that turns life into a celebration. Driven by Se (Current) and Fi (Feeling).",
    "ESTP": "The Entrepreneur: A fearless soul who dances with the moment. Driven by Se (Action) and Ti (Reflex).",
    "ESTJ": "The Executive: A steady hand that brings order and clarity. Driven by Te (Control) and Si (Method).",
    "INTP": "The Logician: A deep thinker who uncovers the secrets of the world. Driven by Ti (Principles) and Ne (Ideas)."
};

let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let shuffledQuestions = [];
let userType = "";

// DOM Elements
const introSection = document.getElementById('intro-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const directPathSection = document.getElementById('direct-path-section');
const startBtn = document.getElementById('start-btn');
const directPathBtn = document.getElementById('direct-path-btn');
const backToIntroBtn = document.getElementById('back-to-intro-btn');
const enterSanctuaryBtn = document.getElementById('enter-sanctuary-btn');
const restartBtn = document.getElementById('restart-btn');
const questionContent = document.getElementById('question-content');
const progressBar = document.getElementById('progress-bar');
const personalityTypeDisplay = document.getElementById('personality-type');
const personalityDescDisplay = document.getElementById('personality-description');
const affirmationDisplay = document.getElementById('daily-affirmation');
const healingMessageDisplay = document.getElementById('healing-message');
const joyMessageDisplay = document.getElementById('joy-message');
const insecurityMessageDisplay = document.getElementById('insecurity-message');
const moodResponse = document.getElementById('mood-response');
const moodWords = document.getElementById('mood-words');
const psychInsight = document.getElementById('psychological-insight');

let selectedGender = "Female";
let selectedTime = "Night";
let selectedDirectMood = "";

// Lifecycle
if (startBtn) startBtn.addEventListener('click', startQuiz);
if (directPathBtn) directPathBtn.addEventListener('click', showDirectPath);
if (backToIntroBtn) backToIntroBtn.addEventListener('click', showIntro);
if (enterSanctuaryBtn) enterSanctuaryBtn.addEventListener('click', enterSanctuaryDirect);
if (restartBtn) restartBtn.addEventListener('click', () => location.reload());

// Toggle button logic
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement;
        parent.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (btn.hasAttribute('data-gender')) selectedGender = btn.getAttribute('data-gender');
        if (btn.hasAttribute('data-time')) selectedTime = btn.getAttribute('data-time');
    });
});

function showIntro() {
    introSection.style.display = 'block';
    directPathSection.style.display = 'none';
    quizSection.style.display = 'none';
}

function showDirectPath() {
    introSection.style.display = 'none';
    directPathSection.style.display = 'block';
    createParticles();
}

window.setDirectMood = (mood) => {
    selectedDirectMood = mood;
    document.querySelectorAll('.direct-mood .mood-btn').forEach(b => b.classList.remove('active'));
    if (event) event.target.classList.add('active');
};

function enterSanctuaryDirect() {
    const typeSelect = document.getElementById('direct-type-select');
    userType = typeSelect.value;
    
    if (!userType) {
        typeSelect.style.borderColor = 'var(--electric-blush)';
        return;
    }

    if (!selectedDirectMood) {
        alert("Please let us know how your soul feels.");
        return;
    }

    directPathSection.style.display = 'none';
    showResults(true); // Flag for direct path
}

// Midnight Santuary Interactivity
document.addEventListener('mousemove', (e) => {
    // Parallax
    const overlay = document.getElementById('mouse-parallax');
    if (overlay) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
        overlay.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
    // Aura Sphere Follow (Subtle)
    const sphere = document.querySelector('.aura-sphere');
    if (sphere) {
        const sx = (e.clientX - window.innerWidth / 2) * 0.03;
        const sy = (e.clientY - window.innerHeight / 2) * 0.03;
        sphere.style.transform = `translate(${sx}px, ${sy}px)`;
    }
});

function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1 + 'px';
        p.style.width = size;
        p.style.height = size;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.animationDuration = Math.random() * 5 + 3 + 's';
        p.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(p);
    }
}

window.onload = createParticles;

// Tab Switching Logic
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.sanctuary-view').forEach(v => v.classList.remove('active'));
        
        tab.classList.add('active');
        const viewId = tab.getAttribute('data-view');
        const view = document.getElementById(viewId);
        if (view) view.classList.add('active');
    });
});

function startQuiz() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    if (introSection) introSection.style.display = 'none';
    if (quizSection) quizSection.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    if (!shuffledQuestions[currentQuestionIndex]) return;
    const q = shuffledQuestions[currentQuestionIndex];
    const progress = (currentQuestionIndex / shuffledQuestions.length) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (questionContent) {
        questionContent.innerHTML = `
            <h2>${q.question}</h2>
            <div class="options">
                ${q.options.map(opt => `
                    <button class="option-btn" onclick="handleAnswer('${opt.trait}', ${opt.traits ? `'${opt.traits.join(',')}'` : 'null'})">
                        ${opt.text}
                    </button>
                `).join('')}
            </div>
        `;
    }
}

window.handleAnswer = (trait, optTraitsStr = null) => {
    if (trait === "BOTH" && optTraitsStr) {
        const traits = optTraitsStr.split(',');
        traits.forEach(t => scores[t]++);
    } else if (scores[trait] !== undefined) {
        scores[trait]++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
};

const growthInsights = {
    "I": "Growth comes in the quiet expansion of your boundaries. Challenge yourself to share one whisper of your depth today.",
    "E": "Growth comes in the stillness between connections. Find a moment to listen to your own heartbeat today.",
    "N": "Growth comes in grounding your visions. Take one small, practical step toward a dream today.",
    "S": "Growth comes in the wonder of the unseen. Allow yourself a moment of pure, practical-free imagination today.",
    "T": "Growth comes in the warmth of the unspoken. Lead with your heart in one interaction today.",
    "F": "Growth comes in the strength of your own truth. Stand firm in one logical boundary today.",
    "J": "Growth comes in the magic of the unplanned. Leave one hour of your day entirely to chance today.",
    "P": "Growth comes in the clarity of completion. Finish one small task that has been lingering today."
};

function showResults(isDirect = false) {
    if (!isDirect) {
        userType = calculatePersonality();
        const percentages = calculatePercentages();
        updateCelestialChart(percentages);
    } else {
        // For direct path, we set default percentages or hide the chart
        document.getElementById('analysis-view').style.display = 'none';
        document.querySelector('[data-view="analysis-view"]').style.display = 'none';
        
        // Trigger mood prescription if direct mood was selected
        if (selectedDirectMood) selectMood(selectedDirectMood);
    }
    
    if (quizSection) quizSection.style.display = 'none';
    if (resultsSection) resultsSection.style.display = 'block';

    // Personality Info
    if (personalityTypeDisplay) personalityTypeDisplay.innerText = userType;
    
    // Personalized Whisper Header
    let time = isDirect ? selectedTime : getTimeOfDay();
    const genderTerm = selectedGender === "Male" ? "Son of the Midnight Stars" : "Daughter of the Lunar Light";
    const timeWhisper = time === "Morning" ? "rising with the dawn" : "thriving in the velvet night";
    
    if (personalityDescDisplay) {
        personalityDescDisplay.innerHTML = `
            <div class="whisper-header">A Whisper for Your Soul: ${genderTerm}, ${timeWhisper}.</div>
            <div class="personality-summary">${personalityDescriptions[userType] || "A unique and beautiful soul."}</div>
        `;
    }
    
    // Personalized Greeting
    const greetingPrefix = selectedGender === "Male" ? "Dear Traveler," : "Dear Soul,";
    const timeGreeting = time === "Morning" ? "May your day be filled with clarity." : "May your night be filled with peace.";
    
    if (affirmationDisplay) {
        const randomAff = affirmations[time][Math.floor(Math.random() * affirmations[time].length)];
        affirmationDisplay.innerHTML = `<span style="display:block; font-size: 0.9rem; margin-bottom: 0.5rem; opacity: 0.7;">${greetingPrefix} ${timeGreeting}</span>${randomAff}`;
    }

    // Sanctuary Guidance
    const guidance = document.createElement('p');
    guidance.style.marginTop = '1rem';
    guidance.style.fontSize = '0.9rem';
    guidance.style.color = 'var(--cyber-gold)';
    guidance.innerHTML = '✧ <i>Step into the sanctuary tabs above to explore your celestial analysis.</i> ✧';
    if (personalityDescDisplay) personalityDescDisplay.appendChild(guidance);

    // Healing & Joy View (Tailored)
    const tailored = tailoredContent[userType] || { healing: "Release the noise.", joy: "Find your center.", ritual: "Breathe deep.", insecurities: "Observe without judgment." };
    
    // Specialized Advice based on Gender and Time
    const genderSuffix = selectedGender === "Male" ? " Embrace your protective strength." : " Nurture your intuitive grace.";
    const timeAdvice = time === "Morning" ? " Carry this light through the day." : " Let this peace guide your dreams.";

    if (healingMessageDisplay) healingMessageDisplay.innerHTML = `<strong>Midnight Healing:</strong> ${tailored.healing}${timeAdvice}<br><br><strong>Midnight Ritual:</strong> ${tailored.ritual}`;

    // Joy & Growth View (Enhanced & Specialized)
    if (joyMessageDisplay) joyMessageDisplay.innerText = tailored.joy + genderSuffix;
    if (insecurityMessageDisplay) insecurityMessageDisplay.innerText = tailored.insecurities + " Focus on finding your true center today.";
    
    const primaryTrait = userType[0];
    const insightEl = document.getElementById('growth-insight');
    if (insightEl) {
        let baseInsight = growthInsights[primaryTrait] || "Growth comes from within.";
        insightEl.innerText = baseInsight + (selectedGender === "Male" ? " A man's growth is found in his quiet resolve." : " A woman's growth is found in her radiant wisdom.");
    }

    // Soul Signature Rendering
    renderSoulSignature(userType);

    // Soft Fade
    if (resultsSection) {
        resultsSection.style.opacity = 0;
        setTimeout(() => {
            resultsSection.style.transition = 'opacity 1s ease';
            resultsSection.style.opacity = 1;
        }, 100);
    }
}

function renderSoulSignature(type) {
    const parent = document.getElementById('personality-type');
    if (!parent) return;
    
    // Create a unique SVG glyph based on the type
    const colors = {
        I: '#6a4c93', E: '#ffca3a',
        N: '#1982c4', S: '#8ac926',
        T: '#ff595e', F: '#ff924c',
        J: '#242423', P: '#f8f9fa'
    };
    
    let svg = `<svg width="60" height="60" viewBox="0 0 60 60" style="margin: 10px; filter: drop-shadow(0 0 10px ${colors[type[0]]})">`;
    // Background glow
    svg += `<circle cx="30" cy="30" r="25" fill="none" stroke="${colors[type[0]]}" stroke-width="1" opacity="0.3"/>`;
    // Inner geometry
    svg += `<path d="M30 5 L55 50 L5 50 Z" fill="none" stroke="${colors[type[1]]}" stroke-width="2" transform="rotate(${type.charCodeAt(0)} 30 30)"/>`;
    svg += `<circle cx="30" cy="30" r="10" fill="${colors[type[2]]}" opacity="0.5"/>`;
    svg += `<line x1="10" y1="10" x2="50" y2="50" stroke="${colors[type[3]]}" stroke-width="1" transform="rotate(${type.charCodeAt(1)} 30 30)"/>`;
    svg += `</svg>`;
    
    const signatureContainer = document.createElement('div');
    signatureContainer.innerHTML = svg;
    signatureContainer.style.display = 'inline-block';
    parent.prepend(signatureContainer);
}

window.selectMood = (mood) => {
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    if (event) event.target.classList.add('active');
    
    document.body.className = `mood-${mood}`;
    
    const presc = moodPrescriptions[mood];
    if (moodResponse) moodResponse.style.display = 'block';
    if (moodWords) moodWords.innerText = presc.words;
    if (psychInsight) psychInsight.innerText = `✧ Neural Resonance: ${presc.psychological} ✧`;
    
    if (moodResponse) moodResponse.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

function calculatePersonality() {
    let result = "";
    const tieBreak = (t1, t2) => {
        if (scores[t1] === scores[t2]) return Math.random() > 0.5 ? t1 : t2;
        return scores[t1] > scores[t2] ? t1 : t2;
    };
    result += tieBreak("E", "I");
    result += tieBreak("S", "N");
    result += tieBreak("T", "F");
    result += tieBreak("J", "P");
    return result;
}

function calculatePercentages() {
    const calc = (v1, v2) => {
        const total = v1 + v2 || 1;
        return Math.round((v1 / total) * 100);
    };
    return {
        E: calc(scores.E, scores.I),
        N: calc(scores.N, scores.S),
        F: calc(scores.F, scores.T),
        P: calc(scores.P, scores.J)
    };
}

function updateCelestialChart(p) {
    // We update the bars but also label them with the new celestial theme
    const d = document;
    if (d.getElementById('bar-EI')) d.getElementById('bar-EI').style.width = `${p.E}%`;
    if (d.getElementById('bar-NS')) d.getElementById('bar-NS').style.width = `${p.N}%`;
    if (d.getElementById('bar-FT')) d.getElementById('bar-FT').style.width = `${p.F}%`;
    if (d.getElementById('bar-PJ')) d.getElementById('bar-PJ').style.width = `${p.P}%`;
    
    const getInsight = (val, lowLabel, highLabel) => val > 50 ? highLabel : lowLabel;
    
    if (d.getElementById('analysis-text-EI')) d.getElementById('analysis-text-EI').innerText = getInsight(p.E, "Introverted Resonance: Your energy moves inward, processing deep internal structures.", "Extraverted Resonance: Your energy radiates outward, engaging with dynamic social patterns.");
    if (d.getElementById('analysis-text-NS')) d.getElementById('analysis-text-NS').innerText = getInsight(p.N, "Sensing Grounding: You perceive through concrete, verified sensory data.", "Intuitive Vision: You perceive through abstract patterns and future possibilities.");
    if (d.getElementById('analysis-text-FT')) d.getElementById('analysis-text-FT').innerText = getInsight(p.F, "Logical Framework: You decide through objective, principled analysis.", "Values Alignment: You decide through subjective, interpersonal harmony.");
    if (d.getElementById('analysis-text-PJ')) d.getElementById('analysis-text-PJ').innerText = getInsight(p.P, "Judging Structure: You navigate through organized, decisive planning.", "Perceiving Flow: You navigate through spontaneous, open-ended exploration.");
}

function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return "Morning";
    if (hour < 18) return "Midday";
    return "Evening";
}
