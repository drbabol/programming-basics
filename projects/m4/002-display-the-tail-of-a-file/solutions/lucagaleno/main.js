//002-dispaly-the-tail-of-a-file

const fileName = 'testFile.txt'
const numberOfHeadLines = 10;

const fs = require('fs');


const myPromise = new Promise((resolve, reject) => {

    const data = fs.readFileSync(fileName, {encoding: 'utf-8'})
    const line = data.split('\n').reverse();
    const linesNumber = line.length; 
   
    if (linesNumber >= numberOfHeadLines) {
        
        console.log(`reading in progress...`)
        for(let i = numberOfHeadLines-1; i >= 0; i--){
            console.log(line[i]);
        }
        resolve()
    } else {
        reject()
    }
});

myPromise
    .then(() => console.log(`reading finished.`))
    .catch(() => console.error('something went wrong'))
    

