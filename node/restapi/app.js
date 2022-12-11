let express = require('express');
let app = express();
let port = 9500;

app.get('/',(req,res) => {
    res.send('<h1>Hii From Express</h1>')
})

app.get('/area',(req,res) => {
    res.send('<h1>Hii From location route app</h1>')
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})