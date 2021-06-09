const waitTime = 3000 //3 seconds

const waitInterval = 500 // sets an interval to report how long we have been waiting 
let currentTime = 0

const incTime = () => {
  currentTime += waitInterval // current time incrememnted by waitinterval
  const p = Math.floor((currentTime / waitTime) * 100)
  //Math.floor gives us a rounded # when we get a decimal. here, we want a percentage
  process.stdout.clearLine()//clears the last line
  process.stdout.cursorTo(0)//puts cursor at beginning of line
  process.stdout.write(`waiting ...${p}%`)

}
console.log(`setting a ${waitTime / 1000} second delay`)//waitTime / 1000 gives the time in seconds

//create a function for when the timer is finished 
const timerFinihed = () => {
  clearInterval(interval)//remember to clear interval or this will run indefinitely! set a variable for interval 
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  console.log("done")
}// when the timer is finished we are going to console.log "done"

const interval = setInterval(incTime, waitInterval) //1st argument is a func, next argument is time that interval should wait
//this will call the incTime function over and over (ever half sec) 
setTimeout(timerFinihed, waitTime)//1st argument is what to do when the timer is finished, 2nd arguement is the amount of time 
//this will run asynchronously for 3 secs


