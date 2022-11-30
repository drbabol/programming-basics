//003-concatenate-multiple-files

const { resolve } = require('path');

//package
const prompt = require('prompt-sync')();
const fs = require('fs').promises;

const myFiles = ['file2.txt', 'file1.txt']   //createArrayFiles();

//function to read and concatenate multiple files content
const fileRead = fileName => {

    const promises = [];

    fileName.forEach(file => {
        data = fs.readFile(file, {encoding:'utf-8'})
        .then()
        .catch (() => console.error(`this file: "${file}" does not exist`) & reject()),  
        promises.push(data)
    });

    Promise.all(promises)
        .then(fileContents => {
            fileContents = (fileContents.filter((elem) => elem != undefined)).toString().replaceAll(',','\n')
            console.log(`this is the concatanation of existing files: \n${fileContents}`)
        })
        .catch(()=> console.log('somethig went wrong, one or more file do not exist.'))       
};

fileRead(myFiles)