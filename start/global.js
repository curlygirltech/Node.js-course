//require- imports  modules (other js files containing code, npm modules or modules that come with the installation of node)  )
//node.js files are referred to as "modules", it contains it's own code and we use the require function from the global object
const path = require("path"); //path is a module from node that helps us work with path strings

//'basename' function is from the path module that plucks the filename  from global filename variable

//console.log(__dirname) //gives directory name
//console.log(__filename) //gives full name and path to current file
console.log(`The file name is ${path.basename(__filename)}`); //pass the filename to basename function and it pluscks the filename
