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

function startTimer() {
    console.log('start timer')
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
    // when user clicks on an answer choice, 
        //the choice is evaluated to be correct or incorrect
        // the user moves on to the next question in the sequence


}



startQuizBtn.addEventListener("click", startQuiz)