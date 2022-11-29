//003-concatenate-multiple-files

//package
const prompt = require('prompt-sync')();
const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

//function to create an array of files name
const createArrayFiles = () => { 
    const myArray = []
    let fileName = prompt('Enter the files names you want to concatenate (empty to stop entering files) ');

    if (fileName === ''){
        return;
    } else {
        myArray.push(fileName, createArrayFiles())
        return ([].concat(...(myArray))).filter((elem) => elem != undefined);
    }
};

//function to read and concatenate multiple files contet
const fileRead = fileName => {

    const promises = []

    for(i=0; i < fileName.length ; i++) {
        try {
            const data = fs.readFileSync(fileName[i], { encoding: 'utf-8' });
            const line = data.split('\n'); //create an array of element for each file
            promises.push(line)
            
        } catch {
            return console.error(`file ${fileName[i]} does not exist`);
        }   
    }
    
    Promise.all(promises).then(fileContents => {
        console.log(fileContents)
        fileContents = [].concat(...(fileContents)) //flatting the array of element's file array
        fileContents = fileContents.slice(0).toString().replaceAll(',','\n') //make a string with all the files content
        return console.log(fileContents)
    })
};

myFiles = createArrayFiles();
fileRead(myFiles)
