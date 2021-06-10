//READLINE MODULES
// ask questions of a terminal user
const readline = require("readline")

//to work with readline you must create an interface
const rl = readline.createInterface({
  //within the createInterface Function you have to create an object that gives us an input and output
  input: process.stdin,
  output: process.stdout//allows us to collect input from terminal and give output
})

//to ask a question we can use the question function on interface
rl.question("How do you like node?", answer => {
  console.log(`your answer is ${answer}`)
})

