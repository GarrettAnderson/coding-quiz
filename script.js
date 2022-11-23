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
        points: 2
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
        points: 2
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
        points: 2
    }
]
 
const beginQuizContainer = document.querySelector(".begin-quiz-container")
const startQuizBtn = document.querySelector(".start-quiz-btn")
const questionsContainer = document.querySelector(".questions-container")
const questionContainer = document.querySelector(".single-question-container")
const answerResult = document.querySelector(".answer-result-text")
const questionHeading = document.querySelector(".question")
const finalScoreContainer = document.querySelector(".final-score-container")
const finalScoreDisplay = document.querySelector(".final-score")
const submitScoresBtn = document.querySelector(".submit-scores-btn")
const timerEl = document.querySelector(".time-remaining")
const highScoresContainer = document.querySelector(".scores-container")
const initialsValueDisplay = document.querySelector(".initials-value-display")
const scoreValueDisplay = document.querySelector(".score-value-display")
const highScoresList = document.querySelector(".high-scores-list")
const goBackBtn = document.querySelector(".go-back-btn")
const clearScoresBtn = document.querySelector(".clear-scores-btn")
let timeInterval
let timeLeft = 20;
let questionsIndex = 0;
let score = 0;
let initials = ""
let userAnswerChoice

function startTimer() {
    console.log('start timer')
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft
    
        if(timeLeft === 0) {
          clearInterval(timeInterval)
          // stop the quiz
          // hide the quiz portion
          //hide quiz portion
          questionsContainer.classList.add('hide')
          // show the final score portion 
          // show initials input form
          finalScoreContainer.classList.remove('hide')
        
          // show final score to user
          finalScoreDisplay.innerHTML = score
        }
    
      }, 1000);
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

        // when user clicks on an answer choice, 
        // the user moves on to the next question in the sequence     
        const questionChoices = document.querySelectorAll(".question-answer-choice")
        console.log(questionChoices)
        
        questionChoices.forEach((questionChoice) => {
           questionChoice.addEventListener('click', chooseAsAnswer)
       })
    } else {
        console.log('end of quiz')
        // set timer countdown to zero
        clearInterval(timeInterval)
        timerEl.innerHTML = 0
        //hide quiz portion
        questionsContainer.classList.add('hide')
        // show initials input form
        finalScoreContainer.classList.remove('hide')
        
        // show final score to user
        finalScoreDisplay.innerHTML = score
        
        // when user inputs their initials and clicks submit button,
        submitScoresBtn.addEventListener("click", trackScore) 
    }
    
}

function trackScore(event) {
// their initials and score is added to high scores
    // initials and score is saved to local storage
    event.preventDefault()
    initials = document.querySelector(".record-final-score").value
    console.log(initials + ": " + score)

    // when user clicks submit button,
        // the final scores div is hidden 
        // and the high scores div is shown displaying high schores
    finalScoreContainer.classList.add('hide')
    highScoresContainer.classList.remove('hide')

    // save initials in local storage
    // save score in local storage

    // show initials and score in HTML
        // append an li with both initials and score 
    
    highScoresList.innerHTML += `
        <li>
            <p class="initials-value-display">${initials}</p>
            <p class="score-value-display">${score}</p>
        </li>
    `
    
    // handle click events for the 'go back' button and the clear high scores button
    goBackBtn.addEventListener("click", function() {
        highScoresContainer.classList.add("hide")
        beginQuizContainer.classList.remove("hide")
        userAnswerChoice = ""
        answerResult.innerHTML = ""
    })

}

function chooseAsAnswer(event) {
    console.log(event.target)
    //the choice is evaluated to be correct or incorrect
    userAnswerChoice = event.target
    console.log(userAnswerChoice)
    // console.log(questions[questionsIndex].answer)
    if (userAnswerChoice.innerHTML === questions[questionsIndex].answer) {
       // if answer is correct, display 'correct' 
        // and add points to score
        console.log(answerResult)
        answerResult.innerHTML = 'CORRECT'
        score += questions[questionsIndex].points
    } else {
        // if answer is incorrect, display 'wrong' 
            // and deduct time from timer
        console.log('answer is incorrect')
        answerResult.innerHTML = 'WRONG'

        // when answewr is wrong, time is subtracted from the timer
            // update the timer on the page
        timeLeft -= 5
        console.log(timeLeft)
        timerEl.innerHTML = timeLeft
    }

        questionsIndex++
        getNextQuestion() 

}

function startQuiz() {
    console.log('start quiz')

    // initialize questionIndex to zero so able to restart the quiz
    questionsIndex = 0

    // reset score to 0
    score = 0
    // reset timer countdown starting point
    timeLeft = 20
    timerEl.innerHTML = timeLeft
// When user clicks on the 'start quiz' button
    // the begin quiz container is hidden.
    beginQuizContainer.classList.add("hide")
    // hide final scores and high scores sections
    finalScoreContainer.classList.add("hide")
    highScoresContainer.classList.add("hide")
    // the question container section is shown to user
    questionsContainer.classList.remove("hide")
    // the timer is started
    startTimer()
    // one question is shown to the user at a time
    getNextQuestion()
}



startQuizBtn.addEventListener("click", startQuiz)