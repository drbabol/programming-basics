// 001-display-the-head-of-a-file

const fileName = 'testFile.txt'
const numberOfHeadLines = -10;
/*
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
*/
// ____________________________________________________________

//soultion of the exe without async - await
// 001-display-the-head-of-a-file
// 002-display-the-tail-of-a-file

//function to check the file
const fs = require('fs');

let fileRead = (fileName) => {

    try {
        const data = fs.readFileSync(fileName, {encoding: 'utf-8'})
        const line = data.split('\n');
        return line
    } catch {
        return console.error('file does not exist')
    }
}

// function to extract the rows
let extractHeadTail = (lines, numberOfHeadLines) => {

    return new Promise((resolve, reject) => {

        const linesNumber = lines.length; 
        const head = lines.slice(0, numberOfHeadLines).toString().replaceAll(',','\n')
        const tail = lines.slice(numberOfHeadLines).toString().replaceAll(',','\n')

        if (linesNumber >= Math.abs(numberOfHeadLines)) {
            console.log(`reading in progress...`)
            if (numberOfHeadLines > 0){
                console.log((head));
            }else { 
                console.log((tail));
            }
            resolve()

        } else {
            reject(console.error('there are not enough lines'))
        }
    })
        .then(() => console.log(`reading finished.`))
        .catch(() => console.error('Error!'))
}

extractHeadTail(fileRead(fileName, numberOfHeadLines),numberOfHeadLines)
