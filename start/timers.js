const waitTime = 3000 //3 seconds

const waitInterval = 500 // sets an interval to report how long we have been waiting 
let currentTime = 0

const incTime = () => {
  currentTime += waitInterval // current time incrememnted by waitinterval
  console.log(`waiting ${currentTime/1000} seconds`)
}
console.log(`setting a ${waitTime / 1000} second delay`)//waitTime / 1000 gives the time in seconds

//create a function for when the timer is finished 
const timerFinihed = () => console.log("done")// when the timer is finished we are going to console.log "done"

setTimeout(timerFinihed, waitTime)//1st argument is what to do when the timer is finished, 2nd arguement is the amount of time 
//this will run asynchronously for 3 secs

