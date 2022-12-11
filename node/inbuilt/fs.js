let fs = require('fs');

//write file
// fs.writeFile('myfile.txt','This is node fs code',()=>{
//     console.log('File Created')
// })

// fs.appendFile('myText.txt','This is node fs code \n',()=>{
//     console.log('File Created')
// })

// fs.readFile('myText.txt','utf-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.readFile('data.json','utf-8',(err,data) => {
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename('myText.txt','myCode.txt',(err,data) => {
//     if(err) throw err;
//     console.log('File renamed')
// })

fs.unlink('myCode.txt',(err,data) => {
    if(err) throw err;
    console.log('File Deleted')
})