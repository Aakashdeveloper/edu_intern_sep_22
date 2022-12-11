let http = require('http');
let fs = require('fs');
let port = 4600;

let server = http.createServer((req,res) => {
    fs.readFile('data.json','utf-8',function(err,data){
        if(err) throw err;
        res.write(data);
        res.end()
    })
})

server.listen(port)