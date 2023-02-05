const startQuiz = document.querySelector(".start-btn")
const quizRules = document.querySelector(".quiz__rules--container")
const startQuizQuestion = document.querySelector(".quiz__rules--start")
const quizQuestion = document.querySelector(".quiz__question--container")
const quitQuiz = quizQuestion.querySelector(".quiz__rules--quit")
const scoreBoard = document.querySelector(".score__container")
const restartQuiz = document.querySelector(".restart__button")

const answerOne = document.querySelector(".answer--1")
const answerTwo = document.querySelector(".answer--2")
const answerThree = document.querySelector(".answer--3")
const answerFour = document.querySelector(".answer--4")
const theQuestion = document.querySelector(".quiz__question--question")

const nextQuestion = document.querySelector(".quiz__question--next")



/* Question Array */

const questionArray = [
{
   numb: 1,
   question: "Who is your favour uncle?",
   answer: "Uncle Ry Ry",
   options: [
      "Uncle Mcdonald",
      "Uncle Kermit the noodle head",
      "Smelly Uncle Ga Ga",
      "Uncle Ry Ry",
   ]
},

{
   numb: 2,
   question: "Who is the funniest?",
   answer: "Uncle Ry Ry",
   options: [
      "Uncle Ry Ry",
      "Smelly Uncle Ga Ga",
      "Naughty Nana",
      "Auntie Bethany",
   ]
},

{
   numb: 3,
   question: "Who is the Strongest?",
   answer: "Uncle Ry Ry",
   options: [
      "Uncle Ry Ry",
      "Daddy",
      "Mammy",
      "Nana",
   ]
},

{
   numb: 4,
   question: "who is a Noodlehead?",
   answer: "Nana",
   options: [
      "Nana",
      "Mammy",
      "Daddy",
      "Uncle Ga Ga",
   ]
},

{
   numb: 4,
   question: "this is question four",
   answer: "this is the answer to question four",
   options: [
      "option one111",
      "option two222",
      "option three333",
      "this is the answer to question four",
   ]
},


]

startQuiz.addEventListener("click", function() {
   startQuiz.classList.toggle("active")
   quizRules.classList.toggle("active")



})

startQuizQuestion.addEventListener("click", function() {
   quizRules.classList.toggle("active")
   quizQuestion.classList.toggle("active")



})

quitQuiz.addEventListener("click", function() {

   quizQuestion.classList.toggle("active")
   startQuiz.classList.toggle("active")
   quest = 1
   answerOne.textContent= questionArray[0].options[0]
   answerTwo.textContent= questionArray[0].options[1]
   answerThree.textContent= questionArray[0].options[2]
   answerFour.textContent= questionArray[0].options[3]
 theQuestion.textContent = questionArray[0].question
})


/* next question section */


let quest = 1

nextQuestion.addEventListener("click", function() {
getNextQuestion(quest)
quest++

})

function getNextQuestion(index) {
  console.log(quest)
  answerOne.textContent= questionArray[index].options[0]
  answerTwo.textContent= questionArray[index].options[1]
  answerThree.textContent= questionArray[index].options[2]
  answerFour.textContent= questionArray[index].options[3]
theQuestion.textContent = questionArray[index].question

if (index === 4) {
   quizQuestion.classList.toggle("active")
   scoreBoard.classList.toggle("active")
}

}

/* ScoreBoard */

restartQuiz.addEventListener("click", function() {
   scoreBoard.classList.toggle("active")
   startQuiz.classList.toggle("active")
   quest = 1
   answerOne.textContent= questionArray[0].options[0]
   answerTwo.textContent= questionArray[0].options[1]
   answerThree.textContent= questionArray[0].options[2]
   answerFour.textContent= questionArray[0].options[3]
 theQuestion.textContent = questionArray[0].question
   
   
})

