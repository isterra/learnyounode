let http = require('http')
let fs = require('fs')
let port = Number(process.argv[2])
let path=process.argv[3]

var server = http.createServer(function (req, res) {
    fs.createReadStream(path).pipe(res)
})

server.listen(port)