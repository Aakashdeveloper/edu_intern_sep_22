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

var uname = "  Nikita  "
uname.length
10
uname.trim()
'Nikita'

var uname = "  Nikita .  "
uname.trim()
'Nikita .'

var a = "i am learning JavaScript"
a.replace('JavaScript','JS')
'i am learning JS'

var a = "JavaScript i am learning JavaScript"
a.replace('JavaScript','JS')
'JS i am learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS i am learning JS'
a.replaceAll('JavaScript','JS')
'JS i am learning JS'

var uname = "  Nikita .  "

uname.replace(/ /g,'')
'Nikita.'
uname.replaceAll(' ','')
'Nikita.'

var a = ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_intern_aug_22']
undefined
a.length
5
a[a.length-1]
'edu_intern_aug_22'
let b = "https://github.com/Aakashdeveloper/Feb_Node_Mrng_20"
undefined
b.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'Feb_Node_Mrng_20']
b[b.length-1]
'0'
let c = b.split('/')
undefined
c[caches.length-1]
undefined
c[c.length-1]
'Feb_Node_Mrng_20'


var a = "JavaScript i am learning JavaScript"
undefined
a.split(' ')
(5) ['JavaScript', 'i', 'am', 'learning', 'JavaScript']
let d= a.split(' ')
undefined
d.toString()
'JavaScript,i,am,learning,JavaScript'
d.toString().replaceAll(',','')
'JavaScriptiamlearningJavaScript'
d.toString().replaceAll(',',' ')
'JavaScript i am learning JavaScript'