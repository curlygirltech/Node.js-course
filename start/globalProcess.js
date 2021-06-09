// Process object accessed globally and lets us know info on current process and tools to interact with process
//using this we get environment info, read environment variables, communicate w/ terminal, or parent process through standard input and output
// we use this pass arguments to out node.js module when we run process

// console.log(process.pid)
// console.log(process.versions.node)

//collect info from terminal
//process.argv - argument variables that are sent to the process when we run it

console.log(process.argv) //this value gives an array containing everything typed to run process
//1st agrument is node, 2nd argument is path to current module, anything we type in termianl gets added to array
const [, , firstname, lastname] = process.argv// we can desctructure since process.argv is an array
console.log(`Your name is ${firstname} ${lastname}`)
//we can use process.argv to send arguments (through flags) when we run it to know what variables we're passing

//use a function to grab the values passed in so they can be put in any order
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) +1 //grab the index of the flag in process argv array and give me the next value
  return process.argv[indexAfterFlag] //return that value
}

const greeting = grab("--greeting")// use the grab function and (--greeting) flag you want to obtain the value for
const user = grab("--user")
//in the global process array we want to find the index and return the next value 

console.log(`${greeting} ${user}`)