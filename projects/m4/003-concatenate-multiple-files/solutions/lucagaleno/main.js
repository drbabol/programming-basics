//003-concatenate-multiple-files

const { rejects } = require('assert');

//package
const prompt = require('prompt-sync')();
const fs = require('fs').promises;

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

//function to read and concatenate multiple files content
const fileRead = fileName => {

    const promises = [];

    fileName.forEach(file => {
        data = fs.readFile(file, {encoding:'utf-8'}) //promise
        .then()
        .catch (() => console.error(`this file: "${file}" does not exist`) & reject()), //reject to stop Promise.all
        promises.push(data)
    });

    Promise.all(promises)
        .then(fileContents => {
            fileContents = (fileContents.filter((elem) => elem != undefined)).toString().replaceAll(',','\n')
            console.log(`this is the concatanation of existing files: \n${fileContents}`)
        })
        .catch(()=> console.log('somethig went wrong, one or more file do not exist.'))       
};

myFiles = createArrayFiles();
fileRead(myFiles)
