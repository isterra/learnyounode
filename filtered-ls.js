const fs = require('fs')
const folderPath = process.argv[2]
const extension = process.argv[3]

fs.readdir(folderPath,(err,data)=>{
    let regex = new RegExp(`.+\.${extension}$`)
    if(!err){
        data.forEach(f=>{
            if(regex.test(f))
                console.log(f);
        })
    }
})