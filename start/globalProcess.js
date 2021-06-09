// Process object accessed globally and lets us know info on current process and tools to interact with process
//using this we get environment info, read environment variables, communicate w/ terminal, or parent process through standard input and output
// console.log(process.pid)
// console.log(process.versions.node)

//collect info from terminal
//process.argv - argument variables that are sent to the process when we run it

console.log(process.argv) //this value gives an array containing everything typed to run process
//1st agrument is node, 2nd argument is path to current module, anything we type in termianl gets added to array

const [, , firstname, lastname] = process.argv// we can desctructure since process.argv is an array
console.log(`Your name is ${firstname} ${lastname}`)
//we can use process.argv to send arguments when we run it