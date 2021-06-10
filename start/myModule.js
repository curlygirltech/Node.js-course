let count = 0

const inc = () => ++count
const dec = () => --count

//create a function that returns the value of the count because all of the variables are scoped to this specific module
//so the files that consume this module won't have access to the count

const getCount = () => count  


//export the 3 functions in an object
module.exports = {
  inc, dec, getCount
}//this allows us to export js type or values to be consumed by other files
