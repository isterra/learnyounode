const fs = require('fs')
const filePath = process.argv[2]

fs.readFile(filePath, (err, data)=>{
    if(!err){
        var str = data.toString()
        var lineCount = str.split("\n").length
        console.log(lineCount - 1);
    }
})
