function equalSumsEvenOddPosition(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
let print = ``;
  for (let i = n1; i <= n2; i++) {
    let current = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let y = 0; y <= current.length; y++) {
      let currentNum = current.charAt(y);
      let num = Number(currentNum);
      if (y % 2 === 0) {
        oddSum += num;
      } else {
        evenSum += num;
      }
          }
    if (oddSum === evenSum) {
        print += `${i} `;
      
    }
  }console.log(print);
}
equalSumsEvenOddPosition(["123456",
"124000"])

