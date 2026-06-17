const COURSES_DATA = [
    {
        title: "Fondations HTML & CSS",
        level: "Débutant",
        duration: "18h",
        icon: "fa-brands fa-html5",
        description: "Structure sémantique, formulaires, accessibilité de base, Flexbox, Grid et responsive design.",
        project: "Créer une page vitrine responsive pour une école ou une association."
    },
    {
        title: "JavaScript interactif",
        level: "Intermédiaire",
        duration: "28h",
        icon: "fa-brands fa-square-js",
        description: "Variables, fonctions, tableaux, événements DOM, validation de formulaire et stockage local.",
        project: "Développer un tableau de tâches avec filtres, état persistant et interactions clavier."
    },
    {
        title: "Frontend moderne avec React",
        level: "Avancé",
        duration: "36h",
        icon: "fa-brands fa-react",
        description: "Composants, props, state, hooks, routing, formulaires contrôlés et appels API.",
        project: "Construire un mini tableau de bord étudiant avec recherche, détails et favoris."
    },
    {
        title: "Projet final & portfolio",
        level: "Projet",
        duration: "22h",
        icon: "fa-solid fa-laptop-code",
        description: "Méthode projet, découpage fonctionnel, qualité du code, déploiement et présentation professionnelle.",
        project: "Livrer une application complète publiée en ligne avec documentation."
    }
];

const TEACHERS_DATA = [
    { name: "Aminata Ndiaye", role: "Mentore Frontend", bio: "Accompagne les débutants sur HTML, CSS, JavaScript et les bonnes pratiques de projet." },
    { name: "Karim Fall", role: "Développeur React", bio: "Spécialisé dans les interfaces web modernes, la structuration des composants et les appels API." },
    { name: "Fatoumata Diop", role: "Designer UI/UX", bio: "Aide les apprenants à concevoir des interfaces lisibles, accessibles et adaptées au mobile." }
];

const PRICING_DATA = [
    {
        name: "Découverte",
        badge: "Pour commencer",
        price: "0",
        period: " FCFA",
        description: "Idéal pour tester la plateforme, découvrir les bases et évaluer son niveau.",
        features: ["Accès aux modules d'introduction", "Quiz de positionnement", "Forum communautaire", "Ressources de démarrage"],
        cta: "Commencer gratuitement"
    },
    {
        name: "Étudiant",
        badge: "Le plus choisi",
        price: "8000",
        period: " FCFA/mois",
        description: "Pour suivre un parcours complet, pratiquer régulièrement et obtenir un certificat.",
        features: ["Tous les cours fondamentaux", "Exercices corrigés", "Quiz par matière", "Certificat de parcours", "Suivi de progression"],
        cta: "Choisir Étudiant",
        highlighted: true
    },
    {
        name: "Mentorat",
        badge: "Accompagnement",
        price: "18000",
        period: " FCFA/mois",
        description: "Pour avancer plus vite avec des retours personnalisés sur vos projets.",
        features: ["Parcours avancés", "Corrections de projets", "Session mentor mensuelle", "Aide portfolio", "Préparation présentation"],
        cta: "Demander le mentorat"
    }
];

const QUIZ_SUBJECTS = [
    {
        id: "python",
        name: "Python",
        icon: "fa-brands fa-python",
        level: "Débutant",
        summary: "Syntaxe, variables, listes et fonctions.",
        questions: [
            {
                question: "Quelle instruction permet d'afficher du texte en Python ?",
                options: ["echo()", "print()", "console.log()"],
                answer: 1,
                explanation: "print() affiche une valeur dans la console Python."
            },
            {
                question: "Quel type Python représente une suite ordonnée et modifiable ?",
                options: ["list", "tuple", "str"],
                answer: 0,
                explanation: "Une liste Python est ordonnée et peut être modifiée après sa création."
            },
            {
                question: "Comment définit-on une fonction en Python ?",
                options: ["function maFonction()", "def ma_fonction():", "func ma_fonction()"],
                answer: 1,
                explanation: "Le mot-clé def sert à déclarer une fonction en Python."
            }
        ]
    },
    {
        id: "algorithm",
        name: "Algorithme",
        icon: "fa-solid fa-diagram-project",
        level: "Fondamental",
        summary: "Variables, conditions, boucles et raisonnement logique.",
        questions: [
            {
                question: "À quoi sert une condition dans un algorithme ?",
                options: ["Répéter un bloc sans fin", "Choisir une action selon un cas", "Stocker uniquement du texte"],
                answer: 1,
                explanation: "Une condition permet d'exécuter une action différente selon qu'une expression est vraie ou fausse."
            },
            {
                question: "Quelle structure est adaptée pour répéter une action plusieurs fois ?",
                options: ["Une boucle", "Une constante", "Un commentaire"],
                answer: 0,
                explanation: "Une boucle répète un bloc d'instructions tant qu'une condition ou un compteur le demande."
            },
            {
                question: "Quelle qualité est importante pour un bon algorithme ?",
                options: ["Être clair et fini", "Être le plus long possible", "Ne jamais utiliser de variables"],
                answer: 0,
                explanation: "Un algorithme doit être compréhensible, produire un résultat et se terminer."
            }
        ]
    },
    {
        id: "java",
        name: "Java",
        icon: "fa-brands fa-java",
        level: "Intermédiaire",
        summary: "Classes, objets, types et méthode main.",
        questions: [
            {
                question: "Quel mot-clé permet de créer une classe en Java ?",
                options: ["class", "struct", "module"],
                answer: 0,
                explanation: "Le mot-clé class déclare une classe en Java."
            },
            {
                question: "Quelle méthode est le point d'entrée classique d'un programme Java ?",
                options: ["start()", "public static void main(String[] args)", "init()"],
                answer: 1,
                explanation: "La JVM cherche généralement la méthode main pour démarrer l'exécution d'une application Java."
            },
            {
                question: "Quel type Java stocke un entier ?",
                options: ["boolean", "int", "String"],
                answer: 1,
                explanation: "int est un type primitif utilisé pour stocker des nombres entiers."
            }
        ]
    },
    {
        id: "cpp",
        name: "C++",
        icon: "fa-solid fa-code",
        level: "Intermédiaire",
        summary: "Compilation, types, fonctions et entrées/sorties.",
        questions: [
            {
                question: "Quel en-tête permet d'utiliser cout et cin en C++ ?",
                options: ["&lt;iostream&gt;", "&lt;stdio.h&gt;", "&lt;string.h&gt;"],
                answer: 0,
                explanation: "iostream fournit les flux d'entrée et de sortie comme cout et cin."
            },
            {
                question: "Quel opérateur est utilisé avec cout pour afficher une valeur ?",
                options: ["&gt;&gt;", "&lt;&lt;", "==="],
                answer: 1,
                explanation: "L'opérateur << envoie une valeur vers le flux de sortie cout."
            },
            {
                question: "Quelle fonction est généralement le point d'entrée d'un programme C++ ?",
                options: ["main()", "run()", "execute()"],
                answer: 0,
                explanation: "La fonction main() est le point de départ habituel d'un programme C++."
            }
        ]
    }
];

const tabButtons = Array.from(document.querySelectorAll(".nav-item"));
const tabPanels = Array.from(document.querySelectorAll(".tab-content"));
const quizContainer = document.getElementById("quiz-container");
const contactForm = document.getElementById("contact-form");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let selectedSubjectId = null;

function switchTab(tabId) {
    const targetSection = document.getElementById(tabId);

    if (!targetSection) return;

    tabButtons.forEach((item) => {
        const isActive = item.dataset.tab === tabId;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-selected", String(isActive));
        item.tabIndex = isActive ? 0 : -1;
    });

    tabPanels.forEach((section) => {
        const isActive = section.id === tabId;
        section.classList.toggle("active", isActive);
        section.hidden = !isActive;
    });
}

function initTabs() {
    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => switchTab(button.dataset.tab));
        button.addEventListener("keydown", (event) => {
            const keyActions = {
                ArrowRight: () => tabButtons[(index + 1) % tabButtons.length],
                ArrowLeft: () => tabButtons[(index - 1 + tabButtons.length) % tabButtons.length],
                Home: () => tabButtons[0],
                End: () => tabButtons[tabButtons.length - 1]
            };

            if (!keyActions[event.key]) return;

            event.preventDefault();
            const nextButton = keyActions[event.key]();
            nextButton.focus();
            switchTab(nextButton.dataset.tab);
        });
    });

    document.querySelectorAll("[data-tab-trigger]").forEach((button) => {
        button.addEventListener("click", () => switchTab(button.dataset.tabTrigger));
    });
}

function renderCourses() {
    document.getElementById("courses-grid").innerHTML = COURSES_DATA.map((course) => `
        <article class="card">
            <i class="${course.icon} card-icon" aria-hidden="true"></i>
            <h3>${course.title}</h3>
            <p class="muted-text">Niveau : ${course.level}</p>
            <p>${course.description}</p>
            <p><strong>Projet :</strong> ${course.project}</p>
            <span class="card-meta">Durée : ${course.duration}</span>
        </article>
    `).join("");
}

function renderTeachers() {
    document.getElementById("teachers-grid").innerHTML = TEACHERS_DATA.map((teacher) => `
        <article class="card teacher-card">
            <div class="teacher-avatar" aria-hidden="true">
                <i class="fa-solid fa-user"></i>
            </div>
            <h3>${teacher.name}</h3>
            <h4>${teacher.role}</h4>
            <p>${teacher.bio}</p>
        </article>
    `).join("");
}

function renderPricing() {
    document.getElementById("pricing-grid").innerHTML = PRICING_DATA.map((plan) => {
        const featuresHTML = plan.features.map((feature) => `
            <li><i class="fa-solid fa-check" aria-hidden="true"></i>${feature}</li>
        `).join("");

        return `
            <article class="card pricing-card${plan.highlighted ? " pricing-card-highlighted" : ""}">
                <span class="pricing-badge">${plan.badge}</span>
                <h3>${plan.name}</h3>
                <p class="pricing-description">${plan.description}</p>
                <div class="price">
                    <span>${plan.price}</span><small>${plan.period}</small>
                </div>
                <ul>${featuresHTML}</ul>
                <button class="btn ${plan.highlighted ? "btn-primary" : "btn-secondary"}" type="button">${plan.cta}</button>
            </article>
        `;
    }).join("");
}

function getSelectedSubject() {
    return QUIZ_SUBJECTS.find((subject) => subject.id === selectedSubjectId);
}

function renderSubjectSelection() {
    quizContainer.innerHTML = `
        <div class="quiz-subject-header">
            <span class="section-kicker">Choix de la matière</span>
            <h3>Quel quiz voulez-vous lancer ?</h3>
            <p>Sélectionnez une matière pour commencer un questionnaire court avec correction détaillée.</p>
        </div>
        <div class="quiz-subject-grid">
            ${QUIZ_SUBJECTS.map((subject) => `
                <button class="subject-card" type="button" data-subject-id="${subject.id}">
                    <i class="${subject.icon}" aria-hidden="true"></i>
                    <span class="subject-name">${subject.name}</span>
                    <span class="subject-level">${subject.level}</span>
                    <span class="subject-summary">${subject.summary}</span>
                </button>
            `).join("")}
        </div>
    `;
}

function renderQuiz() {
    const selectedSubject = getSelectedSubject();

    if (!selectedSubject) {
        renderSubjectSelection();
        return;
    }

    const questions = selectedSubject.questions;

    if (currentQuestionIndex < questions.length) {
        const currentQuiz = questions[currentQuestionIndex];
        const progress = Math.round((currentQuestionIndex / questions.length) * 100);

        quizContainer.innerHTML = `
            <button class="quiz-back" type="button" data-back-subjects>
                <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
                Changer de matière
            </button>
            <div class="quiz-subject-current">
                <i class="${selectedSubject.icon}" aria-hidden="true"></i>
                <span>${selectedSubject.name}</span>
            </div>
            <div class="quiz-progress" aria-label="Progression du quiz">
                <div class="quiz-progress-bar" style="width: ${progress}%;"></div>
            </div>
            <h3>Question ${currentQuestionIndex + 1}/${questions.length}</h3>
            <p class="quiz-question">${currentQuiz.question}</p>
            <div class="quiz-options">
                ${currentQuiz.options.map((option, index) => `
                    <button class="option-btn" type="button" data-answer-index="${index}">${option}</button>
                `).join("")}
            </div>
        `;
        return;
    }

    const feedbackHTML = questions.map((question, index) => {
        const selectedAnswer = selectedAnswers[index];
        const isCorrect = selectedAnswer === question.answer;
        const icon = isCorrect ? "fa-circle-check" : "fa-circle-xmark";
        const color = isCorrect ? "#16a34a" : "#dc2626";

        return `
            <li class="quiz-review-item">
                <i class="fa-solid ${icon}" style="color:${color};" aria-hidden="true"></i>
                <div>
                    <strong>${question.question}</strong>
                    <span class="quiz-answer">Votre réponse : ${question.options[selectedAnswer]}</span>
                    <span class="quiz-answer">Bonne réponse : ${question.options[question.answer]}</span>
                    <p>${question.explanation}</p>
                </div>
            </li>
        `;
    }).join("");

    quizContainer.innerHTML = `
        <div class="quiz-progress" aria-label="Progression du quiz">
            <div class="quiz-progress-bar" style="width: 100%;"></div>
        </div>
        <div class="quiz-result">
            <i class="fa-solid fa-trophy" aria-hidden="true"></i>
            <h3>Quiz ${selectedSubject.name} terminé</h3>
            <p>Votre score est de <strong>${score} / ${questions.length}</strong></p>
        </div>
        <ul class="quiz-review">${feedbackHTML}</ul>
        <div class="quiz-result-actions">
            <button class="btn btn-primary" type="button" data-restart-quiz>Recommencer ${selectedSubject.name}</button>
            <button class="btn btn-secondary" type="button" data-back-subjects>Choisir une autre matière</button>
        </div>
    `;
}

function submitAnswer(selectedIndex) {
    const selectedSubject = getSelectedSubject();

    if (!selectedSubject) return;

    selectedAnswers.push(selectedIndex);

    if (selectedIndex === selectedSubject.questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    renderQuiz();
}

function selectSubject(subjectId) {
    selectedSubjectId = subjectId;
    restartQuiz();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    renderQuiz();
}

function backToSubjects() {
    selectedSubjectId = null;
    restartQuiz();
}

function initQuiz() {
    quizContainer.addEventListener("click", (event) => {
        const subjectButton = event.target.closest("[data-subject-id]");
        const answerButton = event.target.closest("[data-answer-index]");
        const restartButton = event.target.closest("[data-restart-quiz]");
        const backButton = event.target.closest("[data-back-subjects]");

        if (subjectButton) {
            selectSubject(subjectButton.dataset.subjectId);
        }

        if (answerButton) {
            submitAnswer(Number(answerButton.dataset.answerIndex));
        }

        if (restartButton) {
            restartQuiz();
        }

        if (backButton) {
            backToSubjects();
        }
    });

    renderQuiz();
}

function setFieldError(field, message) {
    const errorElement = document.getElementById(`${field.id}-error`);

    field.classList.toggle("input-error", Boolean(message));
    field.setAttribute("aria-invalid", String(Boolean(message)));
    errorElement.textContent = message;
}

function validateContactForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    const validations = [
        {
            field: name,
            message: name.value.trim().length < 2 ? "Indiquez un nom d'au moins 2 caractères." : ""
        },
        {
            field: email,
            message: emailPattern.test(email.value.trim()) ? "" : "Indiquez une adresse email valide."
        },
        {
            field: message,
            message: message.value.trim().length < 10 ? "Votre message doit contenir au moins 10 caractères." : ""
        }
    ];

    validations.forEach(({ field, message: errorMessage }) => {
        setFieldError(field, errorMessage);

        if (errorMessage) {
            isValid = false;
        }
    });

    return isValid;
}

function initContactForm() {
    const successMessage = document.getElementById("form-success");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        successMessage.textContent = "";

        if (!validateContactForm()) return;

        const name = document.getElementById("name").value.trim();
        successMessage.textContent = `Merci pour votre message ${name}. Notre équipe pédagogique vous répondra sous 24h.`;
        contactForm.reset();
        contactForm.querySelectorAll(".input-error").forEach((field) => field.classList.remove("input-error"));
        contactForm.querySelectorAll("[aria-invalid]").forEach((field) => field.setAttribute("aria-invalid", "false"));
    });

    contactForm.querySelectorAll("input, textarea").forEach((field) => {
        field.addEventListener("input", () => {
            successMessage.textContent = "";
            setFieldError(field, "");
        });
    });
}

function initApp() {
    initTabs();
    renderCourses();
    renderTeachers();
    renderPricing();
    initQuiz();
    initContactForm();
    switchTab("home");
}

initApp();