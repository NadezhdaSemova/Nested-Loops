function building (input){
let numberFloor = Number(input[0]);
let apartment = Number(input[1]);

for (let floor = numberFloor; floor >= 1; floor--) {
    let number = "";
    for (let apartm = 0; apartm < apartment; apartm++) {
        
        if(floor === numberFloor){
            number += `L${floor}${apartm} `;
        }
        else if(floor % 2 == 0){
            number += `O${floor}${apartm} `;
        }else{
            number += `A${floor}${apartm} `;
        }
       
    }   console.log(number);  
}
}
building(["9", "5"])