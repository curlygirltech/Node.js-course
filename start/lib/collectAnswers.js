//READLINE FUNCTIONS and EVENT EMITTERS//

const readline = require("readline");
const {EventEmitter} = require("events") //deconstruct event emitter, no need to use events.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


module.exports = (questions, done = f => f) => { //f => f is a dummy default func making this part of the function optional and won't break code
  // export this function as a module to be reused and users can call it whatever they want
  const answers = [];
  const [firstQuestion] = questions; //desructure questions array
  const emitter = new EventEmitter()
  const questionAnswered = (answer) => {
    //before adding answer to array push an answer event 
    emitter.emit("answer", answer)
    answers.push(answer); //add answer to array
    //check to see if user has answered all the questions
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered); //if there is one answer in the answer array, this will ask question 1 in the questions array (index 1 of questions, so the second question)
    } else {
      emitter.emit("complete", answer)
      done(answers);
    }
  };
  rl.question(firstQuestion, questionAnswered); //use readline to ask 1st question,then all other questions until done and then invokes function (questionAnswered)
  return emitter
};


