const fs = require('fs')
const filePath = process.argv[2]

const str = fs.readFileSync(filePath).toString()
var lineCount= str.split("\n").length
console.log(lineCount-1);