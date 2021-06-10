const fs = require("fs")
//synchronous
const text = fs.readFileSync("./assets/colors.json", "utf-8")
//asynchronous
fs.readFile("./assets/colors.json", "utf-8", (err, text) => {// you can read text files and img files 
  
  if (err) {
    console.log(`an error has occured: ${err.message}`)
    process.exit()
}

  console.log("file contents read")
  console.log(text)//since it's asynchronous, the console.log has to be moved within the func because it will be read before it finishes reading the files
})

//when reading binary files (non-text like imgs) we don't need the encoding arg like UTF 8 needed for text files the binary file gets read as a buffer



