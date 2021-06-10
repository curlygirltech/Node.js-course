//Core Modules

const path = require("path")

// const dirUploads = path.join(__dirname, "www", "files", "uploads")
// //using path.join allows us to reach modules in another folder and put them together. 

// console.log(dirUploads)//gives full path of modules from a different folder

const util = require("util")

util.log(path.basename(__filename)) //gives us current name of file
util.log(" ^ the name of the current file ")
//the difference between util.log and console.log is that you have to require (see line 10) the util module gives us the date and timestamp

const v8 = require("v8") //v8 module
util.log(v8.getHeapStatistics()) // returns an object of available memory

//DESCTRUCTURING MODULES//
//we can desstructure out of our require statements

const { log } = require("util")
const { getHeapStatistics } = require("v8") //v8 module

log(getHeapStatistics())
//one con of using this is that you have to look at all the require statements to know where the log and get heapstatistics come from 
// this result in the same thing as above (lines 10-17)


