var city = "amsTErDam";

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city.length
9
city[0]
'a'
city[1]
'm'
//es5
city.charAt(0)
'a'
city.charAt(1)
'm'
city.charAt(-1)
''
//es6
city.at(1)
'm'
city.at(-1)
'm'
city.at(-2)
'a'


var a = "John"
var b = "john"

a == b
false
a.toLowerCase() == b.toLowerCase()
true


var city = "amsTErDam";

city.slice(1)
'msTErDam'
city.slice(2)
'sTErDam'
city.slice(3)
'TErDam'
city.slice(2,5)
'sTE'
city.slice(2,6)
'sTEr'

var city = "amsTErDam";
city.slice(0,-1)
'amsTErDa'
city.slice(0,-2)
'amsTErD'
city.slice(2,-2)
'sTErD'
city.slice(-2,2)
''


var city = "amsTErDam";
var city = "Amsterdam";

var city = "amsTErDam";
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRIs";
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'