const Questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: "Delhi", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
        ]
    },
    {
        question: 'What is the capital of Spain?',
        answers: [
            { text: "Madrid", correct: true },
            { text: "Barcelona", correct: false },
            { text: "Valencia", correct: false },
            { text: "Seville", correct: false },
        ]
    },
    {
        question: 'What is the name of the longest river in Europe?',
        answers: [
            { text: "Danube", correct: true },
            { text: "Nile", correct: false },
            { text: "Amazon", correct: false },
            { text: "Seine", correct: false },
        ]
    },
];

const QuestionElement = document.getElementById('Question');
const AnsBtn = document.getElementById('ans-btn');
const NextBtn = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    NextBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = Questions[currentQuestionIndex];
    QuestionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        AnsBtn.appendChild(button);
    });
}

function resetState() {
    while (AnsBtn.firstChild) {
        AnsBtn.removeChild(AnsBtn.firstChild);
    }
    NextBtn.style.display = "none";
}

function selectAnswer(correct) {
    if (correct) {
        score++;
    }
    NextBtn.style.display = "block";
}

NextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < Questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    QuestionElement.innerText = `Quiz Completed! Your Score: ${score} / ${Questions.length}`;
    NextBtn.innerText = "Restart";
    NextBtn.style.display = "block";
    NextBtn.addEventListener("click", StartQuiz);
}

StartQuiz();
