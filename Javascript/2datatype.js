var a = true;
var b = true;
a+b
2

var a = true;
var b = false;
a+b
1

true is equal to 1
false is equal to 0

10+true
11

10/false
Infinity

"true"+"true"
'truetrue'

"true"-"true"
NaN

10-true
9
10/false
Infinity
10+true
11

var a = "10"
var b = "1"

a+b
'101'
parseInt(a)
10
parseInt(a)+parseInt(b)
11
parseInt(a+b)
101

var a = "10.44"
var b = "1.98"

var a = "10.44"
var b = "1.98"

parseInt(a)+parseInt(b)
11

parseFloat(a)+parseFloat(b)
12.42

var a = "hi"
parseFloat(a)
NaN

var a = "123Delhi"
var b = "Delhi123"

var a = "123Delhi456"
var b = "Delhi123"

parseInt(a)
123

parseInt(b)
NaN


///es6
var a = "10.44"
var b = "1.98"

Number(a)
10.44

var c = "20"
Number(c)
20


Number(a)
NaN
Number(b)
NaN