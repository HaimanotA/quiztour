/**Declare constants for DOM elements 

const questionArea = document.getElementByClassName("container");
const buttons = document.getElementsByClassName("buttons");
const showAnswer =document.getElementByClassName("select-btn");
const score= document.getElementsByClassName("score-area")
const choices = ["Answer A", "Answer B", "Answer C", "Answer D"];

for (let button of buttons) {
     button.addEventListener("click", function () {
       let player=this.getAttribute("data-choice");  
       playGame(playerChocies);
     });
}

onclick=document.getElementById('select-btn').innerHTML = Correct Answer B. The height of iiii


function startQuiz(){

}



function checkAnswer(){
    
}

function calculateCorrectAnswer(){
    
}


function displayAnswer(){
    
}


function incrementScore() {
    
}

function incrementWrongAnswer(){
     Correct Answer: D  The Eiffel Tower was constructed on 1889 for the World Expo.

function calculateTotalScore(){
  function myFunction() {

  
} **/

const questions = [
    {
        "question": "What is the approximate population of Ethiopia in 2022"?",
        "a": "75 million",
        "b": "152 million",
        "c": "120 million",
        "d": "250 meters",
        "answer": "c"
    }, {
        "question": "When was the Eiffel Tower constructed?",
        "a": "1954",
        "b": "1985",
        "c": "1902",
        "d": "1889",
        "answer": "d"
    }, {
        "question": "In Notre Dame Cathedral Paris in 1793 _____statues of Biblical kings lost their heads?",
        "a": "120",
        "b": "28",
        "c": "10",
        "d": "75",
        "answer": "b"
    }, {
        "question": "What is the population of Paris in 2022?",
        "a": "2.14 million",
        "b": "1.75 million",
        "c": "2.50 million",
        "d": "1.30 million",
        "answer": "a"
     }, {
        "question": "Louvre museum being the most-visited art museum in the world has ________ visitors daily?",
        "a": "9,000",
        "b": "3,000",
        "c": "15,000",
        "d": "11,000",
        "answer": "c"
     }
]

*/
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('AnswerA');
var opt2 = document.getElementById('AnswerB');
var opt3 = document.getElementById('AnswerC');
var opt4 = document.getElementById('AnswerD');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');


function myFunction() {
  document.getElementById("select-btn1").innerHTML = "Correct Answer: C  The tower is 324 meteres tall, about the same height as an 81-storey building, and the tallsest structure in Paris.";
}


