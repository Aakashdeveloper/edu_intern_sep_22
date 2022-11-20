var a = {}  //object
var b = []  // array

var movieName = "Avengers"
var movieRating = 4.5
var movieType = "Action"


var movieName1 = "Jab we met"
var movieRating1 = 4.9
var movieType1 = "Romantic"


var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}
typeof(movie)
'object'

movie.name
'Avengers'
movie.rating
4.5
movie.type
'Action'


movie.rating = 4.3
4.3
movie
{name: 'Avengers', rating: 4.3, type: 'Action'}
movie.lang = "English"
'English'
movie
{name: 'Avengers', rating: 4.3, type: 'Action', lang: 'English'}
delete movie.rating
true
movie
{name: 'Avengers', type: 'Action', lang: 'English'}

movie['name']
'Avengers'
movie['type']
'Action'


for(key in movie){ 
    console.log(key)
}
name
rating
type


for(key in movie){ 
    console.log(movie[key])
}
Avengers
4.5
Action

///JSON
Javascript object notation