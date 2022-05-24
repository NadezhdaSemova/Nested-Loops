function numberPyramid(input) {
  let n = Number(input[0]);
  let current = 1;
  let end = false;
  let forPrint = "";
  for (let i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
      if (current > n) {
        end = true;
        break;
      }
      forPrint += `${current} `;
      current++;
    }
    console.log(forPrint);
    forPrint = "";
    if (end) {
      break;
    }
  }
}
numberPyramid(["15"])