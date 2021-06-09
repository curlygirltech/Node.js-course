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
