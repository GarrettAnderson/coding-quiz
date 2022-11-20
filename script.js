const questions = [
    {
        number: 1,
        question: "Commonly used data types Do Not include:",
        answer: "alerts",
        options: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ]
    },
    {
        number: 2,
        question: "The condition in if/else statements is enclosed in:",
        answer: "parenthesis",
        options: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ]
    },
    {
        number: 3,
        question: "Arrays in JavaScript can be used to store:",
        answer: "all of the above",
        options: [
            "numbers",
            "strings",
            "booleans",
            "all of the above"
        ]
    }
]
 
const beginQuizContainer = document.querySelector(".begin-quiz-container")
const startQuizBtn = document.querySelector(".startQuizBtn")
const questionContainer = document.querySelector(".question-container")
let questionsIndex

function startTimer() {
    console.log('start timer')
}

function chooseAsAnswer(answerChoice, index) {
    console.log(answerChoice.target)
    //the choice is evaluated to be correct or incorrect

    const userAnswerChoice = answerChoice.target
    
    if (userAnswerChoice === questions[index].answer) {
        console.log('answer is correct')
    } else {
        console.log('answer is incorrect')
    }

}

function startQuiz() {
// When user clicks on the 'start quiz' button
    // the begin quiz container is hidden.
    beginQuizContainer.classList.add("hide")
    // the question container section is shown to user
    questionContainer.classList.remove("hide")

    // the timer is started
    startTimer()
    
    // one question is shown to the user at a time

    questions.forEach((question, index) => {
        questionsIndex = index
        questionContainer.innerHTML = `
        <h2 class="question">${question.question}</h2>
            <ol class="question-answer-options">
                <li class="question-answer-choice">${question.options[0]}</li>
                <li class="question-answer-choice">${question.options[1]}</li>
                <li class="question-answer-choice">${question.options[2]}</li>
                <li class="question-answer-choice">${question.options[3]}</li>
            </ol>
        `
    })
    
    // when user clicks on an answer choice, 
    const questionChoices = document.querySelectorAll(".question-answer-choice")
    console.log(questionChoices)
    
    questionChoices.forEach((questionChoice, index) => {
        questionChoice.addEventListener('click', () => {
            console.log(questions[questionsIndex].answer)


        })
    })
    
    // the user moves on to the next question in the sequence

}



startQuizBtn.addEventListener("click", startQuiz)