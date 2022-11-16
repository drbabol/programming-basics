//soultion of the exe without async - await
// 001-display-the-head-of-a-file
// 002-display-the-tail-of-a-file

const fileName = 'testFile.txt'
const numberOfLines = -10;

//function to check the file
const fs = require('fs');

const fileRead = (fileName) => {
    
    try {
        const data = fs.readFileSync(fileName, {encoding: 'utf-8'});
        const lines = data.split('\n');
        return extractHeadTail(lines, numberOfLines)
    } catch {
        return console.error('File does not exist')
    }
}

// function to extract the rows
const extractHeadTail = (lines, numberOfLines) => {

    return new Promise((resolve, reject) => {

        const linesNumber = lines.length; 
        const head = lines.slice(0, numberOfLines).toString().replaceAll(',','\n')
        const tail = lines.slice(numberOfLines).toString().replaceAll(',','\n')

        if (linesNumber >= Math.abs(numberOfLines)) {
            console.log(`Reading in progress...`)
            if (numberOfLines > 0){
                console.log((head));
            }else { 
                console.log((tail));
            }
            resolve()

        } else {
            reject(console.error('There are not enough lines'))
        }
    })
        .then(() => console.log(`Reading finished.`))
        .catch(() => console.error('Error!'))
}

fileRead(fileName) 

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