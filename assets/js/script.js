// Declare constants for DOM elements 

const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
let currentQuestion, currentQuestionIndex;
const btns = document.querySelectorAll('.btn');
startButton.addEventListener('click', buildQuiz)


function buildQuiz() {
  console.log('Started')
  startButton.classList.add('hide')
  currentQuestion = questions.sort()
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(currentQuestion[currentQuestionIndex])
}

function showQuestion(question) {
  for (const key in question) {
    questionElement.innerHTML = question.question;
    btns.forEach(btn => {
      let choice = btn.dataset.choice;
      btn.innerHTML = `${question[choice]}`
      btn.addEventListener('click', function() {
    
        if (choice==question.answer) {
          console.log('correct');
        }
        else {
          console.log('wrong');
        }
      });
    });

  }

 
   

}

function showResults() {
  questionElement.innerHTML = question.question
}

const questions = [{
  "question": "What is the approximate population of Ethiopia in 2022?",
  "a": "75 million",
  "b": "152 million",
  "c": "120 million",
  "d": "250 meters",
  "answer": "c"
}, {
  "question": "How many Ethiopian heritages are registered by UNESCO?",
  "a": "12",
  "b": "4",
  "c": "17",
  "d": "9",
  "answer": "d"
}, {
  "question": "Which scripts match the plural form of the word Welcome in Ge'ez?",
  "a": "እንጀራ በወጥ",
  "b": "አብይ አህመድ",
  "c": "እንኻን ደህና መጡ።",
  "d": "ኢትዮጵያ",
  "answer": "c"

}, {
  "question": "How many languages are spoken in Ethiopia?",
  "a": "75-86",
  "b": "10-14",
  "c": "6-10",
  "d": "30-35",
  "answer": "a"
}, {
  "question": "The highest and the lowest point in Ethiopia are called Ras Dejen and Afar Depression respectively.Ras Dejen is ________meters above from sea level and Afar Depression is ________ meters below sea level?",
  "a": "120",
  "b": "28",
  "c": "10",
  "d": "75",
  "answer": "b"

}]