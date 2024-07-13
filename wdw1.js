document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const quizData = [
        {
            question: "What is the name of the main character in the game?",
            answers: ["A", "B", "C", "D"],
            correct: "A"
        },
        {
            question: "In which year was the game released?",
            answers: ["2000", "2005", "2010", "2015"],
            correct: "2005"
        }
    ];

    function buildQuiz() {
        const output = quizData.map((currentQuestion, questionIndex) => {
            const answers = currentQuestion.answers.map(answer =>
                `<label>
                    <input type="radio" name="question${questionIndex}" value="${answer}">
                    ${answer}
                </label>`
            ).join('');

            return `<div class="question">${currentQuestion.question}</div>
                    <div class="answers">${answers}</div>`;
        }).join('');

        quizContainer.innerHTML = output;
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizData.forEach((currentQuestion, questionIndex) => {
            const answerContainer = answerContainers[questionIndex];
            const selector = `input[name=question${questionIndex}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correct) {
                numCorrect++;
                answerContainers[questionIndex].style.color = 'green';
            } else {
                answerContainers[questionIndex].style.color = 'red';
            }
        });

        alert(`You got ${numCorrect} out of ${quizData.length} correct.`);
    }

    buildQuiz();

    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit Quiz";
    submitButton.addEventListener('click', showResults);
    quizContainer.appendChild(submitButton);
});
