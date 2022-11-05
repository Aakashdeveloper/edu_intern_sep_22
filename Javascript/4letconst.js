var > we can redeclare and reassign
//es6
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

////////////////
var a = 10
var a >>>>> declaration
a = 10 >>> assignment

> var a = 10
undefined
> a
10
> var a = 20
undefined
> a
20
> a = 30
30
> a
30
> 

> let c = 20
> c
20
> let c = 21
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 30
30

> const d = 10
undefined
> d
10
> 
> const d = 11
Uncaught SyntaxError: Identifier 'd' has already been declared
> d = 11
Uncaught TypeError: Assignment to constant variable.