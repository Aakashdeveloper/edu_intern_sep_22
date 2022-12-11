let http = require('http');

//req >> what we will send to the server(params,queryParams,body)
// res >> what server will send us back


let server = http.createServer((req,res) => {
    res.write('<h1>Hii From Nodejs Server</h1>')
    res.end()
})

server.listen(5679);