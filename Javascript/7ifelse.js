if(condition){

}else{

}

var a = 10;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

var a = 11;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 11 is odd


var uname = "Nikita"
if(uname == "Amit"){
    console.log(`${uname} is admin`)
}else if(uname == 'Mansi'){
    console.log(`${uname} is super admin`)
}else if(uname == 'Aakash'){
    console.log(`${uname} is user`)
}else{
    console.log(`${uname} is unknown`)
}
// Nikita is unknown

////////////////

var uname = "Nikita"
var role = "User"

if(role == "Admin"){
    if(uname == "Prashant"){
        console.log(`${uname} is admin`)
    }else{
        console.log(`${uname} is not a admin`)
    }
}else if(role == "User"){
    if(uname == "Nikita"){
        console.log(`${uname} is User`)
    }else{
        console.log(`${uname} is not a user`)
    }
}
  

///////////Ternary Operator//////
(Single line if else)

condition ? if condition is true : if condition is false

var a = 10;
a> 10 ? "hii":"Bie"
'Bie'

var a = 10;
a== 10 ? "hii":"Bie"
'hii'

var a = 10;
a> 10 ? a+1:a-1
9

var a = 10;
a== 10 ? a+1:a-1
11
