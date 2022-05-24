function sumOfTwoNumbers(input){
let n1 = Number(input[0]);
let n2 = Number(input[1]);
let magicN = Number(input[2]);
let counter = 0;
let end = false;
for (let i = n1; i <= n2; i++) {
    for (let y = n1; y <= n2; y++) {
        counter++;
        if (i + y === magicN){
            console.log(`Combination N:${counter} (${i} + ${y} = ${magicN})`);
            end = true;
        break;
        }
    } 
    if (end){
        break;
    }   
}
if (!(end)){
    console.log(`${counter} combinations - neither equals ${magicN}`);
}
}
sumOfTwoNumbers(["88", 
"888", 
"1000"])