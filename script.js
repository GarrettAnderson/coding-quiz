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
        ],
        point: 2
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
        ],
        point: 2
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
        ],
        point: 2
    }
]
 
const beginQuizContainer = document.querySelector(".begin-quiz-container")
const startQuizBtn = document.querySelector(".startQuizBtn")
const questionsContainer = document.querySelector(".questions-container")
const questionContainer = document.querySelector(".single-question-container")
const answerResult = document.querySelector(".answer-result-text")
const questionHeading = document.querySelector(".question")
const finalScoreContainer = document.querySelector(".final-score-container")
let timeLeft = 15
let questionsIndex = 0


function startTimer() {
    console.log('start timer')
}

function getNextQuestion() {
    // console.log(questionsIndex)
    console.log(questions[questionsIndex])
    if(questionsIndex < questions.length) {
    questionContainer.innerHTML = `
            <h2 class="question">${questions[questionsIndex].question}</h2>
                <ol class="question-answer-options">
                    <li class="question-answer-choice">${questions[questionsIndex].options[0]}</li>
                    <li class="question-answer-choice">${questions[questionsIndex].options[1]}</li>
                    <li class="question-answer-choice">${questions[questionsIndex].options[2]}</li>
                    <li class="question-answer-choice">${questions[questionsIndex].options[3]}</li>
                </ol>
        `

        const questionChoices = document.querySelectorAll(".question-answer-choice")
        console.log(questionChoices)
        
        questionChoices.forEach((questionChoice, index) => {
           questionChoice.addEventListener('click', chooseAsAnswer)
       })
    } else {
        console.log('end of quiz')
        //hide quiz portion
        questionsContainer.classList.add('hide')
        // show initials input form
        finalScoreContainer.classList.remove('hide')
    }
    
     // when user clicks on an answer choice, 
     // the user moves on to the next question in the sequence     


}

function chooseAsAnswer(answerChoice) {
    console.log(answerChoice.target)
    //the choice is evaluated to be correct or incorrect
    const userAnswerChoice = answerChoice.target
    console.log(userAnswerChoice)
    // console.log(questions[questionsIndex].answer)
    if (userAnswerChoice.innerHTML === questions[questionsIndex].answer) {
        console.log(answerResult)
        answerResult.innerHTML = 'CORRECT'
    } else {
        console.log('answer is incorrect')
        answerResult.innerHTML = 'WRONG'
    }

    // if (questionsIndex < questions.length) {
        questionsIndex++
        getNextQuestion() 
    // } else {
        // questionsIndex = 0
    // }
    // console.log(questions[questionsIndex])
}

function startQuiz() {
// When user clicks on the 'start quiz' button
    // the begin quiz container is hidden.
    beginQuizContainer.classList.add("hide")
    // the question container section is shown to user
    questionsContainer.classList.remove("hide")

    // the timer is started
    startTimer()
    
    // one question is shown to the user at a time

    // questions.forEach((question, index) => {
    //     questionsIndex = index
    //     questionContainer.innerHTML = `
        // <h2 class="question">${question.question}</h2>
        //     <ol class="question-answer-options">
        //         <li class="question-answer-choice">${question.options[0]}</li>
        //         <li class="question-answer-choice">${question.options[1]}</li>
        //         <li class="question-answer-choice">${question.options[2]}</li>
        //         <li class="question-answer-choice">${question.options[3]}</li>
        //     </ol>
        // `
    // })

    getNextQuestion()
    
   

}



startQuizBtn.addEventListener("click", startQuiz)