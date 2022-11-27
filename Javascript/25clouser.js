// >> local
// >> global
// >> Enclose something

// var a = 10; //global
// function add(){
//     var b = 20
//     return a+b
// }

// console.log(">>>>a",a)
// console.log(">>>>add",add())
// console.log(">>>>b",b)


// >>>>a 10
// >>>>add 30
// console.log(">>>>b",b)
// ReferenceError: b is not defined

var a = 10; //global
for(i=0;i<5;i++){
     let b = 20;
     console.log(a+b+i)
}
console.log(">>>>a",a)
console.log(">>>>b",b)