var a = 10
var b = 20
a+b
30

keyword nameoffunction(take parameters){
    return values
}


function add(a,b){
    return a+b
}

add(1,2)
3
add(4,8)
12
add(14,8)
22
add(1,8,6)
9

function add(a,b,c){
    return a+b+c
}

add(1,2)

NaN
1+2+undefined
NaN
add(1,2,3)
6

function isEven(userInput){
    let out;
    if(userInput%2 == 0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
'Number 5 is odd'
isEven(79)
'Number 79 is odd'
isEven(78)
'Number 78 is even'

/////////////// 


function add(a,b){
    return a+b
}

//es6
let addLogic = (a,b) => { return a+b }

addLogic(6,6)
12

function add(a,b){
    return a,b
}

add(1,2)
2

function add(a,b){
    return b,a
}
add(1,2)
1

function add(a,b){
    let out = [a,b]
    return out
}
add(1,2)
[1, 2]