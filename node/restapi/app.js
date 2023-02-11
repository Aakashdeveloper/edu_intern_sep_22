let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 9500;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
let mongoUrl = "mongodb://localhost:27017";
let db;

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

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
    let stateId = Number(req.query.stateId)
    let mealId = Number(req.query.mealId)
    let query = {}
    if(stateId && mealId){
        query={state_id:stateId,"mealTypes.mealtype_id":mealId}
    }else if(stateId){
        query={state_id:stateId}
    }else if(mealId){
        query={"mealTypes.mealtype_id":mealId}
    }
    db.collection('restaurants').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
 })

 app.get('/filters/:mealId',(req,res) => {
     let query = {};
     let mealId = Number(req.params.mealId);
     let cuisineId = Number(req.query.cuisineId);
     let lcost = Number(req.query.lcost);
     let hcost = Number(req.query.hcost);
     let sort = {cost:1};
     if(req.query.sort){
         sort={cost:req.query.sort}
     }

     if(cuisineId){
         query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
         }
     }else if(lcost && hcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
         }
     }
     db.collection('restaurants').find(query).sort(sort).toArray((err,result) => {
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


app.get('/details/:restId',(req,res) => {
    //let id = mongo.ObjectId(req.params.restId)
    let id = Number(req.params.restId)
    db.collection('restaurants').find({restaurant_id:id}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


app.get('/menu/:restId',(req,res) => {
    let id = Number(req.params.restId)
    db.collection('menu').find({restaurant_id:id}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

//menu user selected
app.post('/menuItem',(req,res) => {
    if(Array.isArray(req.body.id)){
        db.collection('menu').find({menu_id:{$in:req.body.id}}).toArray((err,result) => {
            if(err) throw err;
            res.send(result)
        })
    }else{
        res.send('Invalid Input')
    }
})

app.post('/placeOrder',(req,res) => {
    db.collection('orders').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

app.get('/viewOrder',(req,res) => {
    let email = req.query.email;
    let query = {};
    if(email){
        query={email:email}
    }else{
        query={}
    }
    db.collection('orders').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


///update order
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('orders').updateOne(
        {orderId:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) =>{
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})

//delete order
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('orders').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
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