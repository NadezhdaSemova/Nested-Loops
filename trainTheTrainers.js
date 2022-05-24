function trainTheTrainers(input){
let n = Number(input[0]);
let namePrezentacion = String(input[1]);
let index = 2;

let counterPrezentation = 0;
let sum = 0;
while(namePrezentacion !== "Finish"){
    counterPrezentation++;
    let evaluation = Number(input[index]);
    index++;
    let currentEvaluation = 0;
    let counter = 0;
    
    while(counter <= n){
        counter++;
        currentEvaluation += evaluation;
        sum += evaluation;
        if( counter === n){
            currentEvaluation /= n;
            console.log(`${namePrezentacion} - ${currentEvaluation.toFixed(2)}.`);
            break;
        }
        evaluation = Number(input[index]);
        index++;
    }
    namePrezentacion = String(input[index]);
    index++;
}
let average = (sum / n) / counterPrezentation;
console.log(`Student's final assessment is ${average.toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


