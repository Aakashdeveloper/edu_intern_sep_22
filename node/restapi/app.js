let express = require('express');
let app = express();
let port = 9500;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db;

// middleware
app.use(cors())

app.get('/',(req,res) => {
    res.send('<h1>Hii From Express</h1>')
})

app.get('/location',(req,res) => {
   db.collection('location').find().toArray((err,result) => {
       if(err) throw err;
       res.send(result)
   })
})

app.get('/restaurants',(req,res) => {
    db.collection('restaurants').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })
 

 app.get('/mealType',(req,res) => {
    db.collection('mealType').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })

// connect with mongodb
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc) => {
    if(err) console.log('Error while connecting');
    db = dc.db('internfeb');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })
})