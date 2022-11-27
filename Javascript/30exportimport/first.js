let dbObj = {}
dbObj.user = [
    {
        "uname":"Alvin",
        "city":"Boston"
    },
    {
        "uname":"Priya",
        "city":"Paris"
    }
]

dbObj.calc= {
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}

//es5
module.exports = dbObj;
//es6
//export default dbObj;
