const {getCount,dec,inc} = require("./myModule")// if you're importing core nodejs modules or modules installed from npm you don't need a path in the require
//but for custom modules you need a path in your require
inc()
inc()
inc()
dec()

console.log(getCount())

//the require func invoked on line 1 exports value of module exports from the other file.(my module)

//RECAP 
//the node.js module system allows us to seperate our functionality into seperate files
//we consume the functionality with the require function and providing a path
//what gets returned is what we've exported in the module exports function

