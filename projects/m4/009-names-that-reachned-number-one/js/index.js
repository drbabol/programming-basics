
//009

//package
const { Console } = require('console');
const fs = require('fs');
const process = require('process');

const folderFiles = '\\name-files-2000-2001'

//function read files and elaborate them
const readMultipleFiles = () => {
    fs.promises.readdir(process.cwd()+folderFiles)
        // If promise resolved and
        // data are fetched
        .then(filenames => {

            let dataMtot = []
            let dataFtot = []

            let objM = {}
            let objF = {}

            //let valueM = 0

            // assign to array all the content of the files
            for (let filename of filenames) {
                if ((/M/gm).test(filename)){
                    let dataM = fs.readFileSync(process.cwd()+folderFiles+'\\'+filename, {encoding:'utf-8'})
                    dataM = dataM.replaceAll(/[\r]/g, '').split('\n')
                    dataMtot = dataMtot.concat(dataM)
                } else {
                    let dataF = fs.readFileSync(process.cwd()+folderFiles+'\\'+filename, {encoding:'utf-8'})
                    dataF = dataF.replaceAll(/[\r]/g, '').split('\n')
                    dataFtot = dataFtot.concat(dataF)
                }
            }

            //create Object
            objM = createObjectName(dataMtot)
            objF = createObjectName(dataFtot)

            console.log(`Men names between 2000 and 2002:`)
            console.log(objM)
            console.log(`Women names between 2000 and 2002:`)
            console.log(objF)
            
        })
        // If promise is rejected
        .catch(err => {
            console.log(err)
        })
}

//function to create Object with names and usage number
const createObjectName = dataTot => {
    let obj = {}
    dataTot.forEach(nameValue => {
        const name = nameValue.split(' ')[0]
        let value = parseInt(nameValue.split(' ')[1].match(/\d+/g))

        if (name in obj){
            obj[name] = obj[name] + value
        }else{
            obj[name] =  value
        }
        value = 0
    })
    obj = Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a)) //sort obj by value
    return (obj)
}

readMultipleFiles()