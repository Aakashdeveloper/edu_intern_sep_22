Array is a collection of homogeneous data as well as hetrogenious type

var a = ["hi","hello","Hey","test"] >> array of String
var b = [4,8,56,34,12,59] >> Array of number
var c = [true,false,false,true] >> Array of boolean

var a = ["hi",5,true,"test",11,13,false]

var city = ['Delhi','Mumbai','London','Amsterdam']

city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city.push('Venice')
5
city
(5) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']
city.push('Boston')
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']
city.pop()
'Boston'
city
(5) ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice']

city.pop(2)
'Venice'
city
(4) ['Delhi', 'Mumbai', 'London', 'Amsterdam']
city.pop(1000000)
'Amsterdam'
city
(3) ['Delhi', 'Mumbai', 'London']

var city = ['Delhi','Mumbai','London','Amsterdam']
city.shift()
'Delhi'
city.unshift('Pune')
4
city
(4) ['Pune', 'Mumbai', 'London', 'Amsterdam']

push > add value in the end of the array
pop > remove last value of the array
shift > remove first value of the Array
unshift > add value in the beginig of the array

var city = ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']
undefined
city.slice(1)
(5) ['Mumbai', 'London', 'Amsterdam', 'Venice', 'Boston']
city.slice(2)
(4) ['London', 'Amsterdam', 'Venice', 'Boston']
city.slice(1,4)
(3) ['Mumbai', 'London', 'Amsterdam']
city.slice(2,5)
(3) ['London', 'Amsterdam', 'Venice']
city.slice(2,-1)
(3) ['London', 'Amsterdam', 'Venice']
city.slice(0,-1)
(5) 


var a = ['Delhi', 'Mumbai', 'London', 'Amsterdam', 'Venice'];
city.splice(startIndex,deletecount,values)
// remove 1 value from index number 2
city.splice(2,1)['London']
a
(4) ['Delhi', 'Mumbai', 'Amsterdam', 'Venice']

//do not remove any value but add value on index number 3
a.splice(3,0,'Hongkong','InnsBurg')
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Hongkong', 'InnsBurg', 'Venice']


//remove 1 value on index 2 and add 1 value
a.splice(2,1,'Indore')
['Amsterdam']
a
(6) ['Delhi', 'Mumbai', 'Indore', 'Hongkong', 'InnsBurg', 'Venice']


var a = ['Delhi', 'Mumbai', 'Indore', 'Hongkong', 'InnsBurg', 'Venice']
a.indexOf('Indore')
2
a.indexOf('Delhi')
0
a.indexOf('Dubai')
-1
a.indexOf('Amsterdam')
-1

var c = ['a','b','c',1]
var d = [2,'e','f',5]

c+d
'a,b,c,12,e,f,5'
c.concat(d)
(8) ['a', 'b', 'c', 1, 2, 'e', 'f', 5]

var a = "Hii"
var b = [1,2,3]

var a = "Hii"
var b = [1,2,3]
undefined
Array.isArray(a)
false
Array.isArray(b)
true

var a = ['Delhi', 'Mumbai',['Red',['Audi','Bmw','Merc'],'Yellow','Green'], 'Hongkong', 'InnsBurg', 'Venice'];
a[0]
'Delhi'
a[1]
'Mumbai'
a[2]
(4) ['Red', Array(3), 'Yellow', 'Green']
a[2][0]
'Red'
a[2][2]
'Yellow'
a[2][1]
(3) ['Audi', 'Bmw', 'Merc']
a[2][1][0]
'Audi'
a[2][1][1]
'Bmw'
