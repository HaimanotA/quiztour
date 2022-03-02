// Declare variables for DOM elements 

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
//new 
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('results');
let currentQuestion;
var currentQuestionIndex = 0;
var correctAnswers = 0;
const btns = document.querySelectorAll('.btn');
startButton.addEventListener('click', buildQuiz);
nextButton.addEventListener('click', setNextQuestion);
let container = document.getElementById("container")
let body = document.getElementsByTagName("body")

//function to generate the quiz
function buildQuiz() {
  console.log('Started')
  startButton.classList.add('hide')
  currentQuestion = questions.sort()
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}


// function to 

function showQuestion(question) {
  console.log("showquestion")
  console.log(question)
  console.log(question.answer)
  questionElement.innerHTML = question.question;
  const btns = document.querySelectorAll('.btn');
  btns.forEach(btn => {
    let choice = btn.dataset.choice;
    console.log(choice)
    btn.innerHTML = `${question[choice]}`
    btn.addEventListener('click', function () {
      console.log('event-listener')

      if (choice === question.answer) {
        console.log(correctAnswers);
        correctAnswers = correctAnswers + 1;

        //correctAnswers++;
      } else {
        
      }
    });
  });

}


// function to set the question
function setNextQuestion() {
  if (currentQuestionIndex == (questions.length)) {
    alert("You have completed the quiz!");
    questionElement.innerHTML = "Your result is :- " + 
   // document.getElementById("results").innerhtml ="Your result is:-"
      correctAnswers.toString() + "/" + questions.length;

    return;
  }
  const answerElement = document.getElementById("answer-buttons");
  answerElement.replaceWith(answerElement.cloneNode(true));
  showQuestion(currentQuestion[currentQuestionIndex])
  currentQuestionIndex = currentQuestionIndex + 1;
}

//function to show results
function showResults() {
  questionElement.innerHTML = question.question
}

const questions = [{
  "question": "What is the approximate population of Ethiopia in 2022?",
  "a": "75 million",
  "b": "152 million",
  "c": "120 million",
  "d": "250 million",
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
  "question": "The highest and the lowest point in Ethiopia are called Ras Dejen and Afar Depression respectively. \nRas Dejen is ________meters above from sea level and Afar Depression is ________ meters below sea level?",
  "a": "1,200  and 76",
  "b": "4,620 and 125",
  "c": "5,500 and 30",
  "d": "3750 and 100",
  "answer": "b"

}];