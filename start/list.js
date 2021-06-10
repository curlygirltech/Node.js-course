//FILE SYSTEMS

const fs = require("fs")

// read the contents of a directory
const files = fs.readdirSync("./assets")// this function executes synchronously, its blocking
//javascript will not read any more lines of code until it completes this function

fs.readdir("./assets", (err, files) => { // this is asynchronous, when the files are read, the callback function will be invoked
  
  if (err) {
  throw err
}
  console.log("complete")
  console.log(files)
  
} ) //first variable of callback function is errors 2nd variable is files 
