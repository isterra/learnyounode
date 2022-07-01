var fs = require('fs')
var path = require('path')

module.exports = function (folderPath, extension, callback) {

    fs.readdir(folderPath, (err, data) => {
        let regex = new RegExp(`.+\.${extension}$`)
        if (err)
            return callback(err)
        let fileList = data.filter(f => {
            if (regex.test(f))
                return f;
        })
        callback(null, fileList)
    })
}