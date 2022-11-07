// 001-display-the-head-of-a-file

const fileName = 'testFile.txt'
const numberOfHeadLines = 10;

const fs = require('fs/promises');

async function displayHeadFile() {

    try {
        const data = await fs.readFile(fileName, { encoding: 'utf8' });
        const line = data.split('\n');
        const linesNumber = line.length;

        if (linesNumber < 10) throw `Error description: the head of the file contains less then ${numberOfHeadLines} lines.`;

        console.log('reading in progress...');
        for(let i = 0; i < numberOfHeadLines; i++){
            console.log(line[i]);
        }
        console.log('reading finished.');

    } catch (err) {
        console.log(`An error has occurred. The desired file does not exist or check the description error. ${err}`);
    }
}

displayHeadFile();