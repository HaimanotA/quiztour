/* jshint esversion: 8 */

// Declare variables for DOM elements 
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const restartButton = document.getElementById("restart-btn")
const resultContainer = document.getElementById('results');
let currentQuestion;
let currentQuestionIndex = 0;
let correctAnswers = 0;
const btns = document.querySelectorAll('.btn');
let container = document.getElementById("container");
let body = document.getElementsByTagName("body");

// allow users to click start for the game
startButton.addEventListener('click', buildQuiz);

//function to generate the quiz
function buildQuiz() {
  startButton.classList.add('hide');
  answerElement.classList.remove('hide');
  currentQuestion = questions.sort();
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}



// function to 

function showQuestion(question) {
  currentQuestionIndex = currentQuestionIndex + 1;
  questionElement.innerHTML = question.question;
  const btns = document.querySelectorAll('.btn');
  btns.forEach(btn => {
    let choice = btn.dataset.choice;
    btn.innerHTML = `${question[choice]}`;
    btn.addEventListener('click', function () {
      if (choice === question.answer) {
        correctAnswers = correctAnswers + 1;
        btn.classList.add('correct');
        getNextQuestion();
      } else {
        btn.classList.add('incorrect');
        getNextQuestion();
      }
    });
  });
}

function getNextQuestion() {
  btns.forEach(btn => {
    btn.disabled = true;
    setTimeout(() => {
      btn.classList.remove('correct', 'incorrect');
      btn.disabled = false;
    }, 1000);
  });
  setNextQuestion()
}

// function to set the question
function setNextQuestion() {
  // let answerElement = document.getElementById("answer-buttons");
  if (currentQuestionIndex == (questions.length)) {
    // alert("You have completed the quiz!");
    questionElement.innerHTML = "Your result is : " +
      correctAnswers.toString() + "/" + questions.length;
    answerElement.classList.add('hide');
    restartButton.classList.remove('hide');
    // return;
  }
  // else {
  console.log(currentQuestionIndex);
  // answerElement.replaceWith(answerElement.cloneNode(true));
  showQuestion(currentQuestion[currentQuestionIndex]);
  console.log(currentQuestionIndex);
  // }
}

//function to show results
function showResults() {
  questionElement.innerHTML = question.question;
}

restartButton.addEventListener('click', function () {
  location.reload();
});

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