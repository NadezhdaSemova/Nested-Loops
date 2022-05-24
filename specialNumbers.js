function specialNumbers(input) {
  let specialNum = Number(input[0]);
let number = "";
  for (let i = 1; i <= 9; i++) {
    for (let y = 1; y <= 9; y++) {
      for (let z = 1; z <= 9; z++) {
        for (let x = 1; x <= 9; x++) {
          if (
            specialNum % i === 0 &&
            specialNum % y === 0 &&
            specialNum % z === 0 &&
            specialNum % x === 0
          ) {
           number += `${i}${y}${z}${x} `
          }
        }
      }
    }
  }console.log(number);
}
specialNumbers(["16"])
