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
            cost =1;
            let d1 = editDistance(s.slice(-1), t) + 1;
            let d2 = editDistance(s, t.slice(-1)) + 1;
            let d3 = editDistance(s.slice(-1), t.slice(-1)) + cost;

            return (Math.min(d1, d2, d3));
        };
    };
};

console.log(`the distanze between ${string1} and ${string2} is ${editDistance(string1, string2)}`)

