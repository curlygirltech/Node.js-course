//this allows us to communicate with the process while it's running
process.stdin //standard input


// process.stdout.write("hello ") //standard output, write method is write a string to terminal
// process.stdout.write("World \n\n\n")

const questions = [
  "what's your name?",
  "what would you rather be doing?",
  "what's your favorite programming language?"
]

//write a function that will ask a question from the array
const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`) //this is going to ask a ? based on the index input
  process.stdout.write(` > `)
}
ask(); // invoke ask function, this is currently running synchronously(stops running when theres nothing else to do), to get it asynchronous we have to use standard inputs

const answers = []

process.stdin.on('data', data => {//the "on" function listens for events, here data means that we've typed something and pressed enter
  //process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
  //process.exit()// invoke an exit event

  //OR create  an array called answers, see line 21
  answers.push(data.toString().trim())

  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }

}) //we used process.stdin to listen for data and created an asynchronous app, we are listening for an event so node will contunue to run in the background waiting for us to type

//now add a listener for the process exit that will fire handler after iterating through all of the questions in the question array
process.on("exit", () => {
  const [name, activity, language] = answers

  console.log(`
  
  Thank you for your answers
  
  go do ${activity}, ${name}, you can do ${language} code later!

  `)
})