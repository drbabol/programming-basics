//004-string-edit-distance

let string1 = 'kitten';
let string2 = 'sitting';

function editDistance(s, t){

    if (s.length < 1) {
        return t.length
    }else if (t.length < 1){
        return s.length
    } else {

        let cost = 0;

        if (s.slice(-1) != t.slice(-1)) {

            cost = 1;
           
            d1 = parseInt((editDistance((s.substring(0, s.length-1)), t))) + 1;
            d2 = parseInt((editDistance(s, (t.substring(0, t.length-1))))) + 1;
            d3 = parseInt((editDistance((s.substring(0, s.length-1)), (t.substring(0, t.length-1))))) + cost;

        };
        return (Math.min(d1, d2, d3));
    };
};

console.log(`the distanze between ${string1} and ${string2} is ${editDistance(string1, string2)}`)


