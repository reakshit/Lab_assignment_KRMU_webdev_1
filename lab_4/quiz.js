const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: "Mars"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "Which language is used for web development on the client side?",
        answer: "JavaScript"
    },
    {
        question: "What is the primary function of the heart in the human body?",
        answer: "Pump Blood"
    },
    {
        question: "What is the process called when liquid turns into gas?",
        answer: "Evaporation"
    }
];

function runQuiz() {
    let score = 0;
    const totalQuestions = quizQuestions.length;

    console.log("--- Welcome to the Prompt Quizzer! ---");
    console.log(`You will be asked ${totalQuestions} questions. Good luck!`);

    for (let i = 0; i < totalQuestions; i++) {
        const currentQuizItem = quizQuestions[i];

        const rawUserAnswer = prompt(`Question ${i + 1}/${totalQuestions}: ${currentQuizItem.question}`);

        if (rawUserAnswer === null) {
            alert("Quiz cancelled. Goodbye!");
            return;
        }

        const userAnswer = rawUserAnswer.toLowerCase().trim();
        const correctAnswer = currentQuizItem.answer.toLowerCase().trim();

        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct! You got the right answer.");
        } else {
            alert(`Wrong! The correct answer was: "${currentQuizItem.answer}"`);
        }
    }

    alert(`Quiz Over! Your final score is ${score} out of ${totalQuestions}.`);
    console.log(`Final Result: ${score}/${totalQuestions} correct answers.`);
}

runQuiz();
