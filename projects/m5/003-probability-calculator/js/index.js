//m5-003-probability-calculator
class Hat {
    constructor(contents) {
        this.contents = contents
        this.contentList = this.getColorsContentsList() //list of string with colors name
    }

    getObjContents(){
        const objContents = {}
        this.contents.forEach((element) => {
            objContents[element.match(/^\w+/g)] = +element.match(/\d+/g)[0];
        });
        return objContents
    }

    getColorsContentsList(){
        const listContents = []
        const objContents = this.getObjContents()
        Object.keys(objContents).forEach(color => {
            for (let i=0;i<objContents[color];i++){
                listContents.push(color)
            }
        })
        return listContents
    }    

    draw(numbersOfBalls){
        let drawList = []
        const list = this.getColorsContentsList()

        if (numbersOfBalls<=list.length){
            for(let r=0; r<numbersOfBalls; r++){
                const randomNumber = Math.floor(Math.random() * list.length)
                const randomColor = list.splice(randomNumber,1)
                drawList = drawList.concat(randomColor)
            }
            this.contentList = list
            return drawList
        } return list
    }
}
class HatObject extends Hat{
    constructor(object){
        let list = []
        for(const color in object){
            list.push(`${color}=${object[color]}`)
        }
        super (list)
    }
}

/**
 * function to calculate the probability
 * @param {object} hat A hat object containing balls that should be copied inside the function.
 * @param {object} expectedBalls An object indicating the exact group of balls to attempt to draw from the hat for the experiment. ex: set expected_balls to {"blue":2, "red":1}.
 * @param {number} numBallsDraws The number of balls to draw out of the hat in each experiment.
 * @param {number} numExperiments  The number of experiments to perform. (The more experiments performed, the more accurate the approximate probability will be.)
 * @param {probability number} return
 */
const experiment = (hat, expectedBalls, numBallsDraws, numExperiments) => {

    const expectedBallsList = (new HatObject(expectedBalls)).getColorsContentsList()
    let drawBalls = []
    let countProbability = 0
    let probability = 0
    
    /**
     * find if the array contains all the element of the other array
     * @param {list of String} arr 
     * @param {list of String} target 
     * @returns {boolean}
     */
    let checker = (arr,target) =>  target.every(color => arr.includes(color))

    for (n=0;n<numExperiments;n++){
        drawBalls = hat.draw(numBallsDraws)
        if (checker(drawBalls,expectedBallsList)){countProbability += 1}
    }
    probability = countProbability/numExperiments
    return probability
}


//personal test

const hat = new Hat(['black=6', 'red=4', 'green=3'])
console.log(experiment(hat, {"red":2,"green":1}, 5, 200))



const hat1 = new Hat(['yellow=3', 'blue=2', 'green=6'])

const hat2 = new Hat(['blue=3','red=2','green=6'])
console.log(experiment(hat2, {"blue":2,"green":1}, 4, 1000))

const hat3 = new Hat(['yellow=5','red=1','green=3','blue=9','test=1'])
console.log(experiment(hat3, {"yellow":2,"blue":3,"test":1}, 20, 100))


