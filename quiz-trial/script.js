const quizData =  [
    {
        question: "Apa yang sedang kamu butuhkan?",
        a: "Penolak nyamuk",
        b: "Mengurangi rasa gatal pada kulit",
        c: "Pengharum ruangan",
        d: "Penenang pikiran / memperbaiki kualitas tidur",
        e: "Alasan kesehatan lainnya",
        correct: "a",
    },
    {
        question: "What does CSS stands for?",
        a: "Penolak nyamuk",
        b: "Cascading Style Sheets",
        c: "Pengharum ruangan",
        d: "Penenang pikiran / memperbaiki kualitas tidur",
        e: "Alasan kesehatan lainnya",
        correct: "b",
    },
    {
        question: "What does HTML stands for?",
        a: "Penolak nyamuk",
        b: "Cascading Style Sheets",
        c: "Hypertext Markup Language",
        d: "Memperbaiki kualitas tidur",
        e: "Alasan kesehatan lainnya",
        correct: "c",
    },
    {
        question: "Apa yang dibutuhkan penderita insomnia?",
        a: "Penolak nyamuk",
        b: "Cascading Style Sheets",
        c: "Pengharum ruangan",
        d: "Memperbaiki kualitas tidur",
        e: "Alasan kesehatan lainnya",
        correct: "d",
    },
    {
        question: "Obat herbal dapat mengatasi?",
        a: "Penolak nyamuk",
        b: "Cascading Style Sheets",
        c: "Pengharum ruangan",
        d: "Memperbaiki kualitas tidur",
        e: "Alasan kesehatan lainnya",
        correct: "e",
    }
]

const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const e_text= document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) { 
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
    
    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly: ${(score / 
        quizData.length)*100}%</h2>
        `
        }
    }
})