//003-roman-numerals


const prompt = require('prompt-sync')();
const value = prompt('Enter the Roman Number: ');

const dictionary = { 'M': 1000,
                     'D': 500,
                     'C': 100,
                     'L': 50,
                     'X': 10,
                     'V': 5, 
                     'I': 1,            
}

function romanNumberConversion(romanNumber){

    let intNumber1 = dictionary[romanNumber.charAt(0)];
    let intNumber2 = dictionary[romanNumber.charAt(1)];

    if ((intNumber1>=intNumber2) || (romanNumber.length ===1)) {
        if (romanNumber.length === 1){
            return intNumber1
        }else{
            return intNumber1 += romanNumberConversion(romanNumber.substring(1))
        }
    } else {
        if (romanNumber.length === 2){
            return intNumber2-intNumber1
        }else{
            let number = (intNumber2 - intNumber1)
            return number += romanNumberConversion(romanNumber.substring(2))
        }
    }
}

console.log(`ecco il numero ${value} convertito in numero intero ${romanNumberConversion(value)}`)