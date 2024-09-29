const fs = require('node:fs');

// to write data
// fs.writeFileSync("data.txt","Hello");
// fs.appendFileSync("data.txt"," World !")

const readData=fs.readFileSync("data.txt");
console.log(readData.toString());