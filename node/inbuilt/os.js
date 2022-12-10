let os = require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os.freemem())
console.log(os.uptime())
console.log(`${os.cpus().length} Core`)


/*
darwin
x64
822611968bytes
1462997sec
4 Core
*/