var net = require('net')
let port = process.argv[2]

function addZero(i) {
    return (i < 10 ? '0' : '') + i
}

function date() {
    var d = new Date()
    return `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(d.getDate())} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`
}

var server = net.createServer(socket=> {
    socket.end(date() + '\n')
  })
  
server.listen(Number(port))