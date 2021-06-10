const events = require('events')// this is a core module so it doesn't need a path

const emitter = new events.EventEmitter()
//the events module comes with eventEmitter that will construct a new instance of the eventEmitter that we use to raise custom events

//handle event
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`)
})//when an event occurs handle it with this callback function

//create a custom event with the emitter's emit function, you can call it whatever you'd like
emitter.emit("customEvent", "Hello World", "Computer")//1st arg is the name of the event, 2nd arg data we want to pass through to handler of custom event 
emitter.emit("customEvent", "Thats pretty cool", "Jovi")
//the events are asynchronous and raised when they happen 

