var mymodule = require('./mymodule.js')
const folderPath = process.argv[2]
const extension = process.argv[3]

mymodule(folderPath, extension, function (err, fileList) {
    if (!err)
        fileList.forEach(f => {
            console.log(f)
        })
})