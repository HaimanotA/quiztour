/* jshint esversion: 8 */

// declare variables for DOM elements
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const restartButton = document.getElementById("restart-btn");
const resultContainer = document.getElementById('results');
const btns = document.querySelectorAll('.btn');
let currentQuestion;
let currentQuestionIndex = 0;
let correctAnswers = 0;

// allow users to click start for the game
startButton.addEventListener('click', buildQuiz);

//function to generate the quiz
function buildQuiz() {
  startButton.classList.add('hide');
  questionElement.classList.remove('hide');
  answerElement.classList.remove('hide');
  // shuffle all questions randomly
  currentQuestion = shuffleQuestions(questions);
  setNextQuestion();
}

// https://stackoverflow.com/a/2450976 (Fisher-Yates / Knuth Shuffle)
function shuffleQuestions(questions) {
  let currentIndex = questions.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [questions[currentIndex], questions[randomIndex]] = [questions[randomIndex], questions[currentIndex]];
  }
  return questions;
}

// function to set the question
function setNextQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResults();
  } else {
    showQuestion(currentQuestion[currentQuestionIndex]);
    currentQuestionIndex++;
  }
}

// function to show the next question
function showQuestion(question) {
  questionElement.innerHTML = question.question;
  btns.forEach(btn => {
    let choice = btn.dataset.choice;
    btn.innerHTML = `${question[choice]}`;
  });
}

// add click event to each choice button
btns.forEach(btn => {
  btn.addEventListener('click', function() {
    checkAnswer(btn, currentQuestion[currentQuestionIndex - 1]);
  });
});

// check if the user's choice is correct
function checkAnswer(btn, question) {
  let choice = btn.dataset.choice;
  if (choice === question.answer) {
    correctAnswers++;
    btn.classList.add('correct');
  } else {
    btn.classList.add('incorrect');
  }
  getNextQuestion();
}

// temporarily disable the choices, and prepare the next question
function getNextQuestion() {
  btns.forEach(btn => {
    btn.disabled = true;
    setTimeout(() => {
      btn.classList.remove('correct', 'incorrect');
      btn.disabled = false;
    }, 1000);
  });
  // delay before moving to next question
  setTimeout(() => {
    if (currentQuestionIndex <= questions.length) {
      setNextQuestion();
    }
  }, 1000);
}

//function to show results
function showResults() {
  resultContainer.innerHTML = "Your result is: " + correctAnswers.toString() + " / " + questions.length;
  answerElement.classList.add('hide');
  restartButton.classList.remove('hide');
  questionElement.classList.add('hide');
}

// event listener for restarting the game
restartButton.addEventListener('click', function () {
  location.reload();
});

// all questions
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