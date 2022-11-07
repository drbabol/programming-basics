// 001-display-the-head-of-a-file

const fileName = 'testFile.txt'
const numberOfHeadLines = 10;

// solution of the exe with async / await
const fs1 = require('fs/promises');

async function displayHeadFile() {

    try {
        const data = await fs1.readFile(fileName, { encoding: 'utf8' });
        const line = data.split('\n');
        const linesNumber = line.length;

        if (linesNumber < numberOfHeadLines) throw `Error description: the head of the file contains less then ${numberOfHeadLines} lines.`;

        console.log('reading in progress...');
        for(let i = 0; i < numberOfHeadLines; i++){
            console.log(line[i]);
        }
        console.log('reading finished.\n');

    } catch (err) {
        console.log(`An error has occurred. The desired file does not exist or check the description error. ${err}`);
    }
}
displayHeadFile();

// ____________________________________________________________

//soultion of the exe without async - await

const fs = require('fs');

const myPromise = new Promise((resolve, reject) => {

    const data = fs.readFileSync(fileName, {encoding: 'utf-8'})
    const line = data.split('\n');
    const linesNumber = line.length; 
   
    if (linesNumber >= numberOfHeadLines) {
        
        console.log(`reading in progress...`)
        for(let i = 0; i < numberOfHeadLines; i++){
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
    

    
