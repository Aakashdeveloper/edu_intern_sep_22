for
while
do while
for of > array
for each
for in > objects
//////////
// iterate over the array as well as print the series
for(variable;condition,increment);

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4


var a = ['Delhi', 'Mumbai', 'Indore', 'Hongkong', 'InnsBurg', 'Venice'];
for(i=0;i<a.length;i++){
    console.log(a[i])
}

Delhi
VM88:3 Mumbai
VM88:3 Indore
VM88:3 Hongkong
VM88:3 InnsBurg
VM88:3 Venice

var city = ['Delhi', 'Mumbai',['Red','Yellow','Green'], 'Hongkong', 'InnsBurg']
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

Delhi
VM104:8 Mumbai
VM104:5 Red
VM104:5 Yellow
VM104:5 Green
VM104:8 Hongkong
VM104:8 InnsBurg

/////////////////While/////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

0
1
2
3
4

//////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

0
1
2
3
4

////////////
var city = ['Delhi', 'Mumbai', 'Indore', 'Hongkong', 'InnsBurg', 'Venice'];
for(mycity of city){
    console.log(mycity)
}
Delhi
VM149:3 Mumbai
VM149:3 Indore
VM149:3 Hongkong
VM149:3 InnsBurg
VM149:3 Venice

//////////
let add = 0;
let numbers  = [10,34,56,23];

numbers.forEach(myFunction)

function myFunction(data){
    add +=data
}
