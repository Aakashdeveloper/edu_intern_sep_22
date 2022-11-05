var uname = "Avengers"
var type = "Action"
var ind = "Hollywood"
var rating = 4.5

//es5
var out = "An "+uname+" is an "+type+" movie with rating of "+rating+" and from ind "+ind+"."
//out
//'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'

//es6
var out = `An ${uname} is an ${type} movie with rating of ${rating} and from ind ${ind}.`
//'An Avengers is an Action movie with rating of 4.5 and from ind Hollywood.'