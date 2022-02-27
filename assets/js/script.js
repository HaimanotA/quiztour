/**Declare constants for DOM elements 

const startButton = document.getElementById("start-btn")
const questionContainerBox = document.getElementById('question-container')
const questionElement = document.getElementById('questionn')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)

function startGame() {
 console.log('Started')
 startButton.classList.add('hide')
 questionContainerBox.classList.remove('hide')
 currentQuestionIndex= 0
 setNextQuestion()
}

function setNextQuestion () {
showQuestion(currentQuestionIndex)
}

function showQuestion(question) { 
    questionElement.innerText = question.question
}. **/

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const showAnswer =document.getElementById("select-btn");

function constructQuiz(){
  const output = [];
}

function showResults(){
    
}

constructQuiz();

const questions = [
    {
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
    }, {"question":"Which scripts match the plural form of the word Welcome in Ge'ez?",
    "a": "እንጀራ በወጥ",
    "b": "አብይ አህመድ",
    "c": "እንኻን ደህና መጡ።",
    "d": "ኢትዮጵያ",
    "answer": "c"
      
    }, {
        "question":"How many languages are spoken in Ethiopia?",
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
     }
]



function myFunction() {
  document.getElementById("select-btn1").innerHTML = "Correct Answer: C  The tower is 324 meteres tall, about the same height as an 81-storey building, and the tallsest structure in Paris.";
}


/**2d : Axum, The Rock-Hewn Churches of Lalibela, Fasil Ghebbi, Simien Mountains National Park, Awash Lower Valley,
Omo Lower Valley, Tiya **/
