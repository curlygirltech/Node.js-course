//READLINE FUNCTIONS//
const collectAnswers = require('./lib/collectAnswers')

const questions = [
  "What is your name?",
  "Where do you live?",
  "What's your favorite color?"
]




const answerEvents = collectAnswers(questions, answers => {
  console.log("thanks for your answers")
  console.log(answers)
  process.exit()
})//we send the collect answers function an array of questions and a callback to handle all of the answers 

answerEvents.on('answer', answer =>
console.log(`question answered ${answer}`)
)
